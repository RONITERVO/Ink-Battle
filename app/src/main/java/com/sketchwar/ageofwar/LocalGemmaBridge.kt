package com.sketchwar.ageofwar

import android.app.Activity
import android.app.ActivityManager
import android.app.DownloadManager
import android.content.Context
import android.net.Uri
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import com.google.ai.edge.litertlm.Backend
import com.google.ai.edge.litertlm.Contents
import com.google.ai.edge.litertlm.Conversation
import com.google.ai.edge.litertlm.ConversationConfig
import com.google.ai.edge.litertlm.Engine
import com.google.ai.edge.litertlm.EngineConfig
import com.google.ai.edge.litertlm.ExperimentalApi
import com.google.ai.edge.litertlm.ExperimentalFlags
import com.google.ai.edge.litertlm.LogSeverity
import com.google.ai.edge.litertlm.SamplerConfig
import java.io.File
import java.util.Locale
import java.util.concurrent.Executors
import org.json.JSONObject

class LocalGemmaBridge(
    private val activity: Activity,
    private val webView: WebView
) : AutoCloseable {
    private companion object {
        const val LOG_TAG = "AgeOfWarGemma"
        const val LOG_CHUNK_SIZE = 3_000
        const val MAX_PROMPT_PAYLOAD_CHARS = 12_000
    }

    private data class ModelSpec(
        val key: String,
        val name: String,
        val fileName: String,
        val url: String,
        val sizeGb: Double,
        val minRamGb: Int
    )

    private val models = listOf(
        ModelSpec(
            key = "gemma4-e2b",
            name = "Gemma 4 E2B",
            fileName = "gemma-4-E2B-it.litertlm",
            url = "https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm/resolve/main/gemma-4-E2B-it.litertlm?download=true",
            sizeGb = 2.58,
            minRamGb = 6
        ),
        ModelSpec(
            key = "gemma4-e4b",
            name = "Gemma 4 E4B",
            fileName = "gemma-4-E4B-it.litertlm",
            url = "https://huggingface.co/litert-community/gemma-4-E4B-it-litert-lm/resolve/main/gemma-4-E4B-it.litertlm?download=true",
            sizeGb = 3.65,
            minRamGb = 12
        )
    )

    private val executor = Executors.newSingleThreadExecutor()
    private val prefs = activity.getSharedPreferences("local_gemma_v1", Context.MODE_PRIVATE)
    private val downloadManager = activity.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
    private val modelDir: File by lazy {
        File(activity.getExternalFilesDir(null) ?: activity.filesDir, "models").apply { mkdirs() }
    }

    @Volatile private var engine: Engine? = null
    @Volatile private var busy: Boolean = false
    @Volatile private var loading: Boolean = false
    @Volatile private var lastError: String? = null

    @JavascriptInterface
    fun getStatus(): String = buildStatus().toString()

    @JavascriptInterface
    fun requestInstall(modelKey: String?): String {
        val spec = chooseModel(modelKey)
        val destination = modelFile(spec)
        logLine("install.request model=${spec.key} path=${destination.absolutePath}")
        if (destination.exists() && destination.length() > 100_000_000L) {
            prefs.edit()
                .putString("modelKey", spec.key)
                .putString("modelPath", destination.absolutePath)
                .remove("downloadId")
                .apply()
            return buildStatus("installed", spec).toString()
        }

        if (destination.exists()) {
            logLine("install.delete_partial model=${spec.key} bytes=${destination.length()}")
            destination.delete()
        }
        val request = DownloadManager.Request(Uri.parse(spec.url))
            .setTitle("Downloading ${spec.name}")
            .setDescription("Age of War local director model")
            .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED)
            .setAllowedOverMetered(true)
            .setAllowedOverRoaming(false)
            .setDestinationUri(Uri.fromFile(destination))

        val id = downloadManager.enqueue(request)
        prefs.edit()
            .putString("modelKey", spec.key)
            .putString("modelPath", destination.absolutePath)
            .putLong("downloadId", id)
            .apply()
        postStatus()
        return buildStatus("downloading", spec).toString()
    }

    @JavascriptInterface
    fun loadModel(): String {
        val current = currentModel()
        val path = prefs.getString("modelPath", null)
        if (current == null || path == null || !File(path).exists()) {
            logLine("load.missing model=${current?.key ?: "auto"} path=${path ?: ""}")
            return buildStatus("missing", chooseModel("auto")).toString()
        }
        if (engine != null) return buildStatus("ready", current).toString()
        if (loading) return buildStatus("loading", current).toString()

        loading = true
        lastError = null
        logLine("load.start model=${current.key} path=$path")
        postStatus("loading")
        executor.execute {
            try {
                Engine.setNativeMinLogSeverity(LogSeverity.ERROR)
                val loaded = createEngine(path)
                engine = loaded
                loading = false
                logLine("load.ready model=${current.key}")
                postStatus("ready")
            } catch (t: Throwable) {
                closeEngine()
                loading = false
                lastError = t.message ?: t.javaClass.simpleName
                logError("load.error model=${current.key}", t)
                postStatus("error")
            }
        }
        return buildStatus("loading", current).toString()
    }

    @JavascriptInterface
    fun generateDirectorTurn(requestId: String, payloadJson: String) {
        if (busy) {
            logLine("request.rejected busy requestId=$requestId")
            postError(requestId, "Gemma is still thinking")
            return
        }
        val loaded = engine
        if (loaded == null) {
            logLine("request.rejected loading requestId=$requestId payloadChars=${payloadJson.length}")
            loadModel()
            postError(requestId, "Gemma is loading")
            return
        }

        busy = true
        val startedAt = System.currentTimeMillis()
        logLine("request.start requestId=$requestId payloadChars=${payloadJson.length}")
        logLong("request.payload requestId=$requestId", payloadJson)
        postStatus("ready")
        executor.execute {
            var turnConversation: Conversation? = null
            try {
                val prompt = buildPrompt(payloadJson)
                logLong("request.prompt requestId=$requestId", prompt)
                turnConversation = loaded.createConversation(conversationConfig())
                val responseMsg = turnConversation.sendMessage(prompt)
                val response = responseMsg.contents.contents.filterIsInstance<com.google.ai.edge.litertlm.Content.Text>().joinToString("") { it.text }
                busy = false
                val elapsedMs = System.currentTimeMillis() - startedAt
                logLine("response.ready requestId=$requestId responseChars=${response.length} elapsedMs=$elapsedMs")
                logLong("response.raw requestId=$requestId", response)
                postResponse(requestId, response)
                postStatus("ready")
            } catch (t: Throwable) {
                busy = false
                lastError = t.message ?: t.javaClass.simpleName
                logError("request.error requestId=$requestId", t)
                postError(requestId, lastError ?: "Generation failed")
                postStatus("error")
            } finally {
                try { turnConversation?.close() } catch (closeFailure: Throwable) {
                    logError("conversation.close_error requestId=$requestId", closeFailure)
                }
            }
        }
    }

    @JavascriptInterface
    fun logDirectorEvent(event: String, detailsJson: String?) {
        val safeEvent = event.replace(Regex("[^A-Za-z0-9_.-]"), "_").take(80)
        val details = detailsJson ?: ""
        logLine("js.$safeEvent chars=${details.length}")
        if (details.isNotBlank()) logLong("js.$safeEvent", details)
    }

    @OptIn(ExperimentalApi::class)
    private fun createEngine(path: String): Engine {
        ExperimentalFlags.enableSpeculativeDecoding = true
        return try {
            Engine(
                EngineConfig(
                    modelPath = path,
                    backend = Backend.GPU(),
                    cacheDir = activity.cacheDir.absolutePath
                )
            ).also { it.initialize() }
        } catch (gpuFailure: Throwable) {
            Engine(
                EngineConfig(
                    modelPath = path,
                    backend = Backend.CPU(),
                    cacheDir = activity.cacheDir.absolutePath
                )
            ).also { it.initialize() }
        }
    }

    private fun chooseModel(modelKey: String?): ModelSpec {
        if (modelKey != null && modelKey != "auto") {
            models.firstOrNull { it.key == modelKey }?.let { return it }
        }
        val ram = totalRamGb()
        return if (ram >= 12) models[1] else models[0]
    }

    private fun currentModel(): ModelSpec? {
        val key = prefs.getString("modelKey", null) ?: return null
        return models.firstOrNull { it.key == key }
    }

    private fun modelFile(spec: ModelSpec): File = File(modelDir, spec.fileName)

    private fun totalRamGb(): Int {
        val manager = activity.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        val info = ActivityManager.MemoryInfo()
        manager.getMemoryInfo(info)
        return Math.max(1, Math.round(info.totalMem / 1_073_741_824.0).toInt())
    }

    private fun buildStatus(forcedState: String? = null, forcedSpec: ModelSpec? = null): JSONObject {
        val spec = forcedSpec ?: currentModel() ?: chooseModel("auto")
        val downloadId = prefs.getLong("downloadId", -1L)
        var state = forcedState ?: "available"
        var progress = 0

        if (engine != null && forcedState == null) state = "ready"
        else if (loading && forcedState == null) state = "loading"
        else if (downloadId > 0 && forcedState == null) {
            val query = DownloadManager.Query().setFilterById(downloadId)
            downloadManager.query(query)?.use { cursor ->
                if (cursor.moveToFirst()) {
                    val status = cursor.getInt(cursor.getColumnIndexOrThrow(DownloadManager.COLUMN_STATUS))
                    val downloaded = cursor.getLong(cursor.getColumnIndexOrThrow(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR))
                    val total = cursor.getLong(cursor.getColumnIndexOrThrow(DownloadManager.COLUMN_TOTAL_SIZE_BYTES))
                    progress = if (total > 0) ((downloaded * 100) / total).toInt() else 0
                    state = when (status) {
                        DownloadManager.STATUS_SUCCESSFUL -> "installed"
                        DownloadManager.STATUS_FAILED -> "error"
                        DownloadManager.STATUS_RUNNING,
                        DownloadManager.STATUS_PAUSED,
                        DownloadManager.STATUS_PENDING -> "downloading"
                        else -> "downloading"
                    }
                    if (state == "installed") prefs.edit().remove("downloadId").apply()
                }
            }
        } else if (modelFile(spec).exists()) {
            state = "installed"
        }

        return JSONObject()
            .put("state", state)
            .put("modelKey", spec.key)
            .put("modelName", spec.name)
            .put("recommendedSizeGb", spec.sizeGb)
            .put("minRamGb", spec.minRamGb)
            .put("totalRamGb", totalRamGb())
            .put("progress", progress)
            .put("busy", busy)
            .put("message", lastError ?: "")
    }

    private fun postStatus(forcedState: String? = null) {
        val json = buildStatus(forcedState).toString()
        runJs("window.onLocalGemmaStatus(${JSONObject.quote(json)});")
    }

    private fun postResponse(requestId: String, text: String) {
        runJs("window.onLocalGemmaResponse(${JSONObject.quote(requestId)}, ${JSONObject.quote(text)});")
    }

    private fun postError(requestId: String, message: String) {
        runJs("window.onLocalGemmaError(${JSONObject.quote(requestId)}, ${JSONObject.quote(message)});")
    }

    private fun runJs(script: String) {
        activity.runOnUiThread {
            if (!activity.isFinishing) webView.evaluateJavascript(script, null)
        }
    }

    private fun systemPrompt(): String = """
        You are the local Gemma 4 director for Age of War: Sketchbook Edition.
        You play the enemy side, but you are also an entertaining opponent who can honor pacts.
        Each request is stateless: use only the current payload, snapshot, and memory. Never assume prior chat history.
        Never ask for network access.
        Output one compact JSON object only. No markdown, no code fences, no explanations outside JSON.
        {"say":"short taunt or agreement","pressure":"rush|balanced|mercy|null","action":{"tool":"spawn_unit|buy_upgrade|build_turret|use_special|none","typeIndex":0,"upgrade":"econ","reason":"short reason"}}
        Valid unit/turret typeIndex values are 0, 1, and 2. Valid upgrades are dmg, hp, econ.
        If a useful action is unclear, return action.tool "none".
        Prefer fair, varied, readable decisions over perfect play.
    """.trimIndent()

    private fun conversationConfig(): ConversationConfig = ConversationConfig(
        systemInstruction = Contents.of(systemPrompt()),
        samplerConfig = SamplerConfig(topK = 16, topP = 0.82, temperature = 0.35)
    )

    private fun buildPrompt(payloadJson: String): String {
        val trimmed = payloadJson.take(MAX_PROMPT_PAYLOAD_CHARS)
        if (payloadJson.length > MAX_PROMPT_PAYLOAD_CHARS) {
            logLine("request.prompt_truncated payloadChars=${payloadJson.length} promptPayloadChars=$MAX_PROMPT_PAYLOAD_CHARS")
        }
        return String.format(
            Locale.US,
            "Choose one high-level enemy director turn for this live match. Return JSON only.\n%s",
            trimmed
        )
    }

    private fun closeEngine() {
        try { engine?.close() } catch (_: Throwable) {}
        engine = null
    }

    private fun logLine(message: String) {
        Log.i(LOG_TAG, message)
    }

    private fun logLong(label: String, value: String) {
        if (value.isEmpty()) {
            Log.i(LOG_TAG, "$label BEGIN chars=0")
            Log.i(LOG_TAG, "$label END")
            return
        }
        val chunks = (value.length + LOG_CHUNK_SIZE - 1) / LOG_CHUNK_SIZE
        Log.i(LOG_TAG, "$label BEGIN chars=${value.length} chunks=$chunks")
        var start = 0
        var index = 1
        while (start < value.length) {
            val end = minOf(value.length, start + LOG_CHUNK_SIZE)
            Log.i(LOG_TAG, "$label chunk=$index/$chunks ${value.substring(start, end)}")
            start = end
            index++
        }
        Log.i(LOG_TAG, "$label END")
    }

    private fun logError(message: String, throwable: Throwable) {
        Log.e(LOG_TAG, "$message: ${throwable.message ?: throwable.javaClass.simpleName}", throwable)
    }

    override fun close() {
        executor.execute { closeEngine() }
        executor.shutdown()
    }
}
