package com.sketchwar.ageofwar

import android.app.Activity
import android.app.ActivityManager
import android.app.DownloadManager
import android.content.Context
import android.net.Uri
import android.util.Base64
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
import com.google.ai.edge.litertlm.LogSeverity
import com.google.ai.edge.litertlm.Message
import com.google.ai.edge.litertlm.MessageCallback
import java.io.File
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicReference
import org.json.JSONObject

class LocalGemmaBridge(
    private val activity: Activity,
    private val webView: WebView
) : AutoCloseable {
    private companion object {
        const val LOG_TAG = "AgeOfWarGemma"
        const val LOG_CHUNK_SIZE = 3_000
        const val MAX_PROMPT_CHARS = 6_000
        const val MODEL_RESPONSE_TIMEOUT_SECONDS = 90L
        const val MAX_CHAT_MESSAGES_BEFORE_SUMMARY = 18
        const val MAX_CONTEXT_IMAGE_BYTES = 700_000
        const val ENABLE_IMAGE_INPUT = true

        private val ENGINE_LOCK = Any()
        @Volatile private var sharedEngine: Engine? = null
        @Volatile private var sharedModelPath: String? = null
        @Volatile private var sharedModelKey: String? = null
        @Volatile private var sharedLoading: Boolean = false
        @Volatile private var sharedLoadingPath: String? = null
        @Volatile private var sharedBusy: Boolean = false
        @Volatile private var sharedLastError: String? = null
        @Volatile private var sharedConversation: Conversation? = null
        @Volatile private var sharedConversationModelPath: String? = null
        @Volatile private var sharedConversationMessages: Int = 0
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
    private val cacheDirPath = activity.applicationContext.cacheDir.absolutePath
    private val prefs = activity.applicationContext.getSharedPreferences("local_gemma_v1", Context.MODE_PRIVATE)
    private val downloadManager = activity.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
    private val modelDir: File by lazy {
        File(activity.getExternalFilesDir(null) ?: activity.filesDir, "models").apply { mkdirs() }
    }

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

        synchronized(ENGINE_LOCK) {
            if (sharedEngine != null && sharedModelPath == path) {
                logLine("load.reuse model=${current.key} path=$path")
                return buildStatus("ready", current).toString()
            }
            if (sharedLoading) return buildStatus("loading", current).toString()
            if (sharedEngine != null && sharedModelPath != path && sharedBusy) {
                sharedLastError = "Gemma is busy"
                return buildStatus(null, current).toString()
            }
            sharedLoading = true
            sharedLoadingPath = path
            sharedLastError = null
        }

        logLine("load.start model=${current.key} path=$path")
        postStatus("loading")
        executor.execute {
            var loaded: Engine? = null
            var previous: Engine? = null
            var previousConversation: Conversation? = null
            try {
                Engine.setNativeMinLogSeverity(LogSeverity.ERROR)
                loaded = createEngine(path)
                synchronized(ENGINE_LOCK) {
                    previous = if (sharedEngine != null && sharedModelPath != path) sharedEngine else null
                    previousConversation = if (sharedConversation != null && sharedConversationModelPath != path) sharedConversation else null
                    if (previousConversation != null) {
                        sharedConversation = null
                        sharedConversationModelPath = null
                        sharedConversationMessages = 0
                    }
                    sharedEngine = loaded
                    sharedModelPath = path
                    sharedModelKey = current.key
                    sharedLoading = false
                    sharedLoadingPath = null
                    sharedLastError = null
                }
                closeEngineQuietly(previous)
                closeConversationQuietly(previousConversation)
                loaded = null
                logLine("load.ready model=${current.key} reused=false")
                postStatus("ready")
            } catch (t: Throwable) {
                closeEngineQuietly(loaded)
                synchronized(ENGINE_LOCK) {
                    if (sharedLoadingPath == path) {
                        sharedLoading = false
                        sharedLoadingPath = null
                    }
                    sharedLastError = t.message ?: t.javaClass.simpleName
                }
                logError("load.error model=${current.key}", t)
                postStatus("error")
            }
        }
        return buildStatus("loading", current).toString()
    }

    @JavascriptInterface
    fun generateDirectorTurn(requestId: String, promptText: String) {
        generateDirectorTurnWithImage(requestId, promptText, null)
    }

    @JavascriptInterface
    fun generateDirectorTurnWithImage(requestId: String, promptText: String, contextImageDataUrl: String?) {
        val path = prefs.getString("modelPath", null)
        var busyNow = false
        var loaded: Engine? = null
        synchronized(ENGINE_LOCK) {
            if (sharedBusy) {
                busyNow = true
            } else {
                val candidate = sharedEngine
                if (candidate != null && sharedModelPath == path) {
                    sharedBusy = true
                    loaded = candidate
                }
            }
        }

        if (busyNow) {
            logLine("request.rejected busy requestId=$requestId")
            postError(requestId, "Gemma is still thinking")
            return
        }
        val activeEngine = loaded
        if (activeEngine == null) {
            logLine("request.rejected loading requestId=$requestId promptChars=${promptText.length}")
            loadModel()
            postError(requestId, "Gemma is loading")
            return
        }

        val prompt = cleanPrompt(promptText)
        val activeModelPath = path ?: synchronized(ENGINE_LOCK) { sharedModelPath } ?: ""
        val startedAt = System.currentTimeMillis()
        logLine("request.start requestId=$requestId promptChars=${prompt.length}")
        logLong("request.prompt.message requestId=$requestId", prompt)
        val contextImageBytes = decodeContextImageDataUrl(requestId, contextImageDataUrl)
        postStatus("ready")
        executor.execute {
            var contextImageFile: File? = null
            var conversation: Conversation? = null
            var closeConversation = false
            var finalStatus = "ready"
            try {
                conversation = chatConversation(activeEngine, activeModelPath)
                val contents = if (contextImageBytes != null) {
                    contextImageFile = writeContextImageFile(requestId, contextImageBytes, "context_image_file")
                    Contents.of(
                        com.google.ai.edge.litertlm.Content.ImageFile(contextImageFile!!.absolutePath),
                        com.google.ai.edge.litertlm.Content.Text(prompt)
                    )
                } else {
                    Contents.of(prompt)
                }
                val response = sendModelPhase(requestId, conversation, "message", contents)
                noteConversationMessages(2)
                val elapsedMs = System.currentTimeMillis() - startedAt
                logLine("response.ready requestId=$requestId responseChars=${response.length} elapsedMs=$elapsedMs")
                logLong("response.raw requestId=$requestId", response)
                postResponse(requestId, response)
                if (shouldSummarizeConversation()) {
                    val summary = summarizeConversation(requestId, conversation)
                    if (summary.isNotBlank()) postSummary(requestId, summary)
                    closeConversation = true
                    releaseSharedConversation(conversation)
                }
            } catch (t: Throwable) {
                synchronized(ENGINE_LOCK) {
                    sharedLastError = t.message ?: t.javaClass.simpleName
                }
                logError("request.error requestId=$requestId", t)
                postError(requestId, t.message ?: t.javaClass.simpleName)
                finalStatus = "error"
                closeConversation = true
            } finally {
                if (closeConversation) {
                    releaseSharedConversation(conversation)
                    closeConversationQuietly(conversation)
                }
                try { contextImageFile?.delete() } catch (_: Throwable) {}
                synchronized(ENGINE_LOCK) {
                    sharedBusy = false
                }
                postStatus(finalStatus)
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
        return try {
            Engine(
                EngineConfig(
                    modelPath = path,
                    backend = Backend.GPU(),
                    visionBackend = Backend.CPU(),
                    cacheDir = cacheDirPath
                )
            ).also { it.initialize() }
        } catch (gpuFailure: Throwable) {
            Engine(
                EngineConfig(
                    modelPath = path,
                    backend = Backend.CPU(),
                    visionBackend = Backend.CPU(),
                    cacheDir = cacheDirPath
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
        val modelPath = prefs.getString("modelPath", null)
        val downloadId = prefs.getLong("downloadId", -1L)
        var state = forcedState ?: "available"
        var progress = 0
        var ready = false
        var loading = false
        var busy = false
        var message = ""

        synchronized(ENGINE_LOCK) {
            ready = sharedEngine != null && sharedModelPath == modelPath
            loading = sharedLoading && sharedLoadingPath == modelPath
            busy = sharedBusy
            message = sharedLastError ?: ""
        }

        if (ready && forcedState == null) state = "ready"
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
            .put("message", message)
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

    private fun postSummary(requestId: String, summary: String) {
        runJs("window.onLocalGemmaSummary && window.onLocalGemmaSummary(${JSONObject.quote(requestId)}, ${JSONObject.quote(summary)});")
    }

    private fun postStream(requestId: String, phase: String, text: String, done: Boolean) {
        runJs(
            "window.onLocalGemmaStream(${JSONObject.quote(requestId)}, " +
                "${JSONObject.quote(phase)}, ${JSONObject.quote(text)}, $done);"
        )
    }

    private fun runJs(script: String) {
        activity.runOnUiThread {
            if (!activity.isFinishing && !activity.isDestroyed) webView.evaluateJavascript(script, null)
        }
    }

    private fun conversationConfig(): ConversationConfig = ConversationConfig()

    private fun chatConversation(engine: Engine, modelPath: String): Conversation {
        synchronized(ENGINE_LOCK) {
            val existing = sharedConversation
            if (existing != null && existing.isAlive && sharedConversationModelPath == modelPath) {
                logLine("conversation.reuse messages=$sharedConversationMessages")
                return existing
            }
            sharedConversation = null
            sharedConversationModelPath = null
            sharedConversationMessages = 0
        }

        val created = engine.createConversation(conversationConfig())
        synchronized(ENGINE_LOCK) {
            sharedConversation = created
            sharedConversationModelPath = modelPath
            sharedConversationMessages = 0
        }
        logLine("conversation.created modelPath=${modelPath.takeLast(48)}")
        return created
    }

    private fun noteConversationMessages(count: Int) {
        synchronized(ENGINE_LOCK) {
            sharedConversationMessages += count
        }
    }

    private fun shouldSummarizeConversation(): Boolean {
        return synchronized(ENGINE_LOCK) {
            sharedConversationMessages >= MAX_CHAT_MESSAGES_BEFORE_SUMMARY
        }
    }

    private fun summarizeConversation(requestId: String, conversation: Conversation): String {
        return try {
            val prompt = """
Gemma, before we turn to a fresh page, help me keep the useful continuity from our match.

Please write one compact paragraph under 90 words. Save only things that help our next few turns feel like the same rivalry: what the human player has said or prefers, active table rules, important game events, age/timing facts, and any running promises or grudges.

Do not list emotion words. Do not rate your mood. Do not use JSON, labels, markdown, or bullets.
            """.trimIndent()
            logLong("request.prompt.summary requestId=$requestId", prompt)
            val summary = sendModelPhase(requestId, conversation, "summary", Contents.of(prompt))
            noteConversationMessages(2)
            logLong("response.summary requestId=$requestId", summary)
            summary.take(900)
        } catch (t: Throwable) {
            logError("summary.error requestId=$requestId", t)
            ""
        }
    }

    private fun releaseSharedConversation(conversation: Conversation?) {
        if (conversation == null) return
        synchronized(ENGINE_LOCK) {
            if (sharedConversation === conversation) {
                sharedConversation = null
                sharedConversationModelPath = null
                sharedConversationMessages = 0
            }
        }
    }

    private fun cleanPrompt(raw: String): String {
        val value = raw.replace('\u0000', ' ').trim()
        val fallback = "You are Gemma, the red enemy general. Reply in exactly two lines: a short message to the player, then one emotion word."
        val prompt = if (value.isBlank()) fallback else value
        if (prompt.length > MAX_PROMPT_CHARS) {
            logLine("request.prompt_truncated promptChars=${prompt.length} capped=$MAX_PROMPT_CHARS")
        }
        return prompt.take(MAX_PROMPT_CHARS)
    }

    private fun sendModelPhase(
        requestId: String,
        conversation: Conversation,
        phase: String,
        contents: Contents
    ): String {
        val latch = CountDownLatch(1)
        val latestText = AtomicReference("")
        val error = AtomicReference<Throwable?>(null)
        postStream(requestId, phase, "", false)
        conversation.sendMessageAsync(contents, object : MessageCallback {
            override fun onMessage(message: Message) {
                val text = messageText(message)
                val previous = latestText.get()
                val next = when {
                    text.isBlank() -> previous
                    text.startsWith(previous) -> text
                    previous.endsWith(text) -> previous
                    else -> previous + text
                }
                latestText.set(next)
                postStream(requestId, phase, next, false)
            }

            override fun onDone() {
                latch.countDown()
            }

            override fun onError(throwable: Throwable) {
                error.set(throwable)
                latch.countDown()
            }
        }, emptyMap<String, Any>())

        if (!latch.await(MODEL_RESPONSE_TIMEOUT_SECONDS, TimeUnit.SECONDS)) {
            try { conversation.cancelProcess() } catch (_: Throwable) {}
            throw RuntimeException("Gemma timed out during $phase")
        }
        error.get()?.let { throw it }
        val text = latestText.get().trim()
        postStream(requestId, phase, text, true)
        logLong("response.phase.$phase requestId=$requestId", text)
        return text
    }

    private fun messageText(message: Message): String {
        return message.contents.contents
            .filterIsInstance<com.google.ai.edge.litertlm.Content.Text>()
            .joinToString("") { it.text }
    }

    private fun decodeContextImageDataUrl(requestId: String, dataUrl: String?, label: String = "context_image"): ByteArray? {
        if (dataUrl.isNullOrBlank()) {
            logLine("request.$label requestId=$requestId absent")
            return null
        }
        if (!ENABLE_IMAGE_INPUT) {
            logLine("request.$label requestId=$requestId disabled chars=${dataUrl.length}")
            return null
        }
        val comma = dataUrl.indexOf(',')
        if (comma <= 0 || !dataUrl.startsWith("data:image/")) {
            logLine("request.$label requestId=$requestId invalid_data_url chars=${dataUrl.length}")
            return null
        }
        return try {
            val bytes = Base64.decode(dataUrl.substring(comma + 1), Base64.DEFAULT)
            if (bytes.size > MAX_CONTEXT_IMAGE_BYTES) {
                logLine("request.$label requestId=$requestId too_large bytes=${bytes.size} max=$MAX_CONTEXT_IMAGE_BYTES")
                null
            } else {
                logLine("request.$label requestId=$requestId bytes=${bytes.size} mime=${dataUrl.substring(5, comma).take(40)}")
                bytes
            }
        } catch (t: Throwable) {
            logError("request.${label}_decode_error requestId=$requestId", t)
            null
        }
    }

    private fun writeContextImageFile(requestId: String, bytes: ByteArray, label: String): File {
        val file = File.createTempFile("gemma_image_", ".jpg", File(cacheDirPath))
        file.writeBytes(bytes)
        logLine("request.$label requestId=$requestId path=${file.absolutePath} bytes=${bytes.size}")
        return file
    }

    private fun closeEngineQuietly(engine: Engine?) {
        try { engine?.close() } catch (_: Throwable) {}
    }

    private fun closeConversationQuietly(conversation: Conversation?) {
        try { conversation?.close() } catch (_: Throwable) {}
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
        executor.shutdown()
    }
}
