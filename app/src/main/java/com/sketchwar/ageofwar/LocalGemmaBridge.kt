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
import java.util.concurrent.ConcurrentHashMap
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
        const val MAX_PROMPT_PAYLOAD_CHARS = 12_000
        const val MAX_ROLEPLAY_PROMPT_CHARS = 3_800
        const val MAX_CONVERSATION_MESSAGES = 12
        const val ROLEPLAY_TURN_MESSAGE_BUDGET = 10
        const val ROLEPLAY_PHASE_TIMEOUT_SECONDS = 90L
        const val SELECTION_IMAGE_TIMEOUT_MS = 2_500L
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
        @Volatile private var sharedConversationSession: String? = null
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

    private data class SelectionImageRequest(
        val latch: CountDownLatch,
        val dataUrl: AtomicReference<String?>
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
    private val pendingSelectionImages = ConcurrentHashMap<String, SelectionImageRequest>()
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
                        sharedConversationSession = null
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
    fun generateDirectorTurn(requestId: String, payloadJson: String) {
        generateDirectorTurnWithImage(requestId, payloadJson, null)
    }

    @JavascriptInterface
    fun generateDirectorTurnWithImage(requestId: String, payloadJson: String, contextImageDataUrl: String?) {
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
            logLine("request.rejected loading requestId=$requestId payloadChars=${payloadJson.length}")
            loadModel()
            postError(requestId, "Gemma is loading")
            return
        }

        val startedAt = System.currentTimeMillis()
        logLine("request.start requestId=$requestId payloadChars=${payloadJson.length}")
        logLong("request.payload requestId=$requestId", payloadJson)
        val contextImageBytes = decodeContextImageDataUrl(requestId, contextImageDataUrl)
        val activeModelPath = path ?: synchronized(ENGINE_LOCK) { sharedModelPath } ?: ""
        postStatus("ready")
        executor.execute {
            var contextImageFile: File? = null
            var selectionImageFile: File? = null
            var turnConversation: Conversation? = null
            var finalStatus = "ready"
            try {
                val roleplay = roleplayPayload(payloadJson)
                val sessionId = roleplay.optString("sessionId", "default").ifBlank { "default" }.take(120)
                turnConversation = roleplayConversation(
                    activeEngine,
                    activeModelPath,
                    sessionId,
                    roleplay.optBoolean("resetChat", false)
                )
                val conversation = turnConversation!!

                val battlefieldPrompt = promptField(roleplay, "battlefieldPrompt", fallbackBattlefieldPrompt(payloadJson))
                val opinionPrompt = promptField(roleplay, "opinionPrompt", fallbackOpinionPrompt())
                val doctrinePrompt = promptField(roleplay, "doctrinePrompt", fallbackDoctrinePrompt())
                val actionPrompt = promptField(roleplay, "actionPrompt", fallbackActionPrompt())
                val summaryPrompt = promptField(roleplay, "summaryPrompt", fallbackSummaryPrompt())

                val battlefieldContents = if (contextImageBytes != null) {
                    contextImageFile = writeContextImageFile(requestId, contextImageBytes, "context_image_file")
                    Contents.of(
                        com.google.ai.edge.litertlm.Content.ImageFile(contextImageFile!!.absolutePath),
                        com.google.ai.edge.litertlm.Content.Text(battlefieldPrompt)
                    )
                } else {
                    Contents.of(battlefieldPrompt)
                }
                logLong("request.prompt.battlefield requestId=$requestId", battlefieldPrompt)
                val battlefield = sendRoleplayPhase(requestId, conversation, "battlefield", battlefieldContents)
                noteConversationMessages(2)

                logLong("request.prompt.opinion requestId=$requestId", opinionPrompt)
                val opinion = sendRoleplayPhase(requestId, conversation, "opinion", Contents.of(opinionPrompt))
                noteConversationMessages(2)

                logLong("request.prompt.doctrine requestId=$requestId", doctrinePrompt)
                val doctrine = sendRoleplayPhase(requestId, conversation, "doctrine", Contents.of(doctrinePrompt))
                noteConversationMessages(2)

                val selectionImageBytes = requestSelectionImageBytes(requestId)
                val actionContents = if (selectionImageBytes != null) {
                    selectionImageFile = writeContextImageFile(requestId, selectionImageBytes, "selection_image_file")
                    Contents.of(
                        com.google.ai.edge.litertlm.Content.ImageFile(selectionImageFile!!.absolutePath),
                        com.google.ai.edge.litertlm.Content.Text(actionPrompt)
                    )
                } else {
                    Contents.of(actionPrompt)
                }
                logLong("request.prompt.action requestId=$requestId", actionPrompt)
                val action = sendRoleplayPhase(requestId, conversation, "action", actionContents)
                noteConversationMessages(2)

                logLong("request.prompt.summary requestId=$requestId", summaryPrompt)
                val summary = sendRoleplayPhase(requestId, conversation, "summary", Contents.of(summaryPrompt))
                noteConversationMessages(2)

                val elapsedMs = System.currentTimeMillis() - startedAt
                val response = JSONObject()
                    .put("mode", "roleplay")
                    .put("battlefield", battlefield)
                    .put("reply", opinion)
                    .put("doctrineWord", doctrine)
                    .put("actionWord", action)
                    .put("summary", summary)
                    .put("elapsedMs", elapsedMs)
                    .put("conversationMessages", synchronized(ENGINE_LOCK) { sharedConversationMessages })
                    .toString()
                logLine("response.ready requestId=$requestId responseChars=${response.length} elapsedMs=$elapsedMs")
                logLong("response.raw requestId=$requestId", response)
                postResponse(requestId, response)
                releaseRoleplayConversation(turnConversation)
                turnConversation = null
            } catch (t: Throwable) {
                synchronized(ENGINE_LOCK) {
                    sharedLastError = t.message ?: t.javaClass.simpleName
                }
                logError("request.error requestId=$requestId", t)
                postError(requestId, t.message ?: t.javaClass.simpleName)
                finalStatus = "error"
            } finally {
                pendingSelectionImages.remove(requestId)
                if (finalStatus != "ready") releaseRoleplayConversation(turnConversation)
                try { contextImageFile?.delete() } catch (_: Throwable) {}
                try { selectionImageFile?.delete() } catch (_: Throwable) {}
                synchronized(ENGINE_LOCK) {
                    sharedBusy = false
                }
                postStatus(finalStatus)
            }
        }
    }

    @JavascriptInterface
    fun provideSelectionImage(requestId: String, contextImageDataUrl: String?) {
        val pending = pendingSelectionImages.remove(requestId)
        if (pending == null) {
            logLine("request.selection_image_late requestId=$requestId chars=${contextImageDataUrl?.length ?: 0}")
            return
        }
        pending.dataUrl.set(contextImageDataUrl)
        pending.latch.countDown()
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

    private fun roleplayPayload(payloadJson: String): JSONObject {
        return try {
            val root = JSONObject(payloadJson)
            root.optJSONObject("roleplay") ?: JSONObject()
        } catch (t: Throwable) {
            logError("request.payload_parse_error", t)
            JSONObject()
        }
    }

    private fun promptField(roleplay: JSONObject, key: String, fallback: String): String {
        val value = roleplay.optString(key, "").ifBlank { fallback }
        val trimmed = value.take(MAX_ROLEPLAY_PROMPT_CHARS)
        if (value.length > MAX_ROLEPLAY_PROMPT_CHARS) {
            logLine("request.prompt_truncated key=$key promptChars=${value.length} capped=$MAX_ROLEPLAY_PROMPT_CHARS")
        }
        return trimmed
    }

    private fun fallbackBattlefieldPrompt(payloadJson: String): String {
        val trimmed = payloadJson.take(MAX_PROMPT_PAYLOAD_CHARS)
        if (payloadJson.length > MAX_PROMPT_PAYLOAD_CHARS) {
            logLine("request.payload_truncated payloadChars=${payloadJson.length} promptPayloadChars=$MAX_PROMPT_PAYLOAD_CHARS")
        }
        return "Gemma, you are the red enemy general in this Age of War match. Use this user-provided game state as context, no JSON needed. Describe the battle from your perspective before choosing a move.\n$trimmed"
    }

    private fun fallbackOpinionPrompt(): String =
        "Tell me your opinion of this battle as my opponent. Keep it in character, concise, and do not use JSON."

    private fun fallbackDoctrinePrompt(): String =
        "Choose your persistent battle doctrine. Reply with only one word: balanced."

    private fun fallbackActionPrompt(): String =
        "Your turn please. Reply with only one word: none."

    private fun fallbackSummaryPrompt(): String =
        "Create a compact summary for next turn by blending the previous summary with the current battle, chat, player identity/preferences, visible reply, doctrine, and chosen action. No JSON."

    private fun roleplayConversation(engine: Engine, modelPath: String, sessionId: String, resetChat: Boolean): Conversation {
        var previous: Conversation? = null
        synchronized(ENGINE_LOCK) {
            val needsReset = resetChat ||
                sharedConversation == null ||
                sharedConversationModelPath != modelPath ||
                sharedConversationSession != sessionId ||
                sharedConversationMessages + ROLEPLAY_TURN_MESSAGE_BUDGET > MAX_CONVERSATION_MESSAGES
            if (needsReset) {
                previous = sharedConversation
                sharedConversation = null
                sharedConversationModelPath = null
                sharedConversationSession = null
                sharedConversationMessages = 0
            }
        }
        closeConversationQuietly(previous)

        synchronized(ENGINE_LOCK) {
            val existing = sharedConversation
            if (existing != null && existing.isAlive) return existing
        }

        val created = engine.createConversation(conversationConfig())
        synchronized(ENGINE_LOCK) {
            sharedConversation = created
            sharedConversationModelPath = modelPath
            sharedConversationSession = sessionId
            sharedConversationMessages = 0
        }
        logLine("conversation.created session=$sessionId modelPath=${modelPath.takeLast(48)}")
        return created
    }

    private fun noteConversationMessages(count: Int) {
        synchronized(ENGINE_LOCK) {
            sharedConversationMessages += count
        }
    }

    private fun releaseRoleplayConversation(conversation: Conversation?) {
        if (conversation == null) return
        var shouldClose = false
        synchronized(ENGINE_LOCK) {
            if (sharedConversation === conversation) {
                sharedConversation = null
                sharedConversationModelPath = null
                sharedConversationSession = null
                sharedConversationMessages = 0
                shouldClose = true
            }
        }
        if (shouldClose) closeConversationQuietly(conversation)
    }

    private fun sendRoleplayPhase(
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

        if (!latch.await(ROLEPLAY_PHASE_TIMEOUT_SECONDS, TimeUnit.SECONDS)) {
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

    private fun requestSelectionImageBytes(requestId: String): ByteArray? {
        if (!ENABLE_IMAGE_INPUT) return null
        val pending = SelectionImageRequest(CountDownLatch(1), AtomicReference<String?>(null))
        pendingSelectionImages[requestId] = pending
        activity.runOnUiThread {
            webView.evaluateJavascript(
                "window.onLocalGemmaSelectionImageRequest && window.onLocalGemmaSelectionImageRequest(${JSONObject.quote(requestId)})",
                null
            )
        }
        val received = pending.latch.await(SELECTION_IMAGE_TIMEOUT_MS, TimeUnit.MILLISECONDS)
        pendingSelectionImages.remove(requestId)
        if (!received) {
            logLine("request.selection_image requestId=$requestId timeoutMs=$SELECTION_IMAGE_TIMEOUT_MS")
            return null
        }
        return decodeContextImageDataUrl(requestId, pending.dataUrl.get(), "selection_image")
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
