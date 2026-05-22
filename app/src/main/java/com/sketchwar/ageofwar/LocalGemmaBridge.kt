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
import com.google.ai.edge.litertlm.Content
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
        const val MAX_CHAT_MESSAGES_BEFORE_RESET = 4
        const val MAX_CARRYOVER_TEXT_CHARS = 2_000
        const val MAX_TRANSCRIPT_USER_CHARS = 1_000
        const val MAX_TRANSCRIPT_MODEL_CHARS = 280
        const val MAX_CONTEXT_IMAGE_BYTES = 700_000
        const val ENABLE_IMAGE_INPUT = true

        private val ENGINE_LOCK = Any()
        private val sharedConversationImageFiles = mutableListOf<File>()
        private val sharedConversationTextLog = mutableListOf<String>()
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
        @Volatile private var sharedConversationSerial: Long = 0L
        @Volatile private var sharedConversationTailImageBytes: ByteArray? = null
        @Volatile private var lastDownloadStatusLog: String = ""
        @Volatile private var carryoverText: String = ""
        @Volatile private var carryoverImageBytes: ByteArray? = null
    }

    private data class Carryover(
        val text: String,
        val imageBytes: ByteArray?
    )

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

        val id = try {
            downloadManager.enqueue(request)
        } catch (t: Throwable) {
            synchronized(ENGINE_LOCK) {
                sharedLastError = t.message ?: t.javaClass.simpleName
            }
            logError("install.enqueue_error model=${spec.key}", t)
            return buildStatus("error", spec).toString()
        }
        lastDownloadStatusLog = ""
        logLine("install.enqueued model=${spec.key} downloadId=$id")
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
            var previousConversationImages: List<File> = emptyList()
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
                        previousConversationImages = drainConversationImagesLocked()
                        clearConversationTextLocked()
                        clearCarryoverLocked()
                    }
                    sharedEngine = loaded
                    sharedModelPath = path
                    sharedModelKey = current.key
                    sharedLoading = false
                    sharedLoadingPath = null
                    sharedLastError = null
                }
                closeConversationQuietly(previousConversation)
                deleteFilesQuietly(previousConversationImages)
                closeEngineQuietly(previous)
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
        val contextImageBytes = decodeContextImageDataUrl(requestId, contextImageDataUrl)
        postStatus("ready")
        executor.execute {
            var contextImageFile: File? = null
            var carryoverImageFile: File? = null
            var conversation: Conversation? = null
            var closeConversation = false
            var finalStatus = "ready"
            try {
                conversation = chatConversation(activeEngine, activeModelPath)
                val carryover = takeCarryoverForOpeningConversation(conversation)
                val modelPrompt = promptWithCarryover(prompt, carryover)
                logLong("request.prompt.message requestId=$requestId", modelPrompt)
                if (carryover != null) {
                    logLine(
                        "conversation.carryover_applied requestId=$requestId " +
                            "textChars=${carryover.text.length} imageBytes=${carryover.imageBytes?.size ?: 0}"
                    )
                }

                if (carryover?.imageBytes != null) {
                    carryoverImageFile = writeContextImageFile(requestId, carryover.imageBytes, "carryover_image_file")
                    retainConversationImageFile(conversation, carryoverImageFile!!)
                }
                if (contextImageBytes != null) {
                    contextImageFile = writeContextImageFile(requestId, contextImageBytes, "context_image_file")
                    retainConversationImageFile(conversation, contextImageFile!!)
                }
                noteConversationTailImage(contextImageBytes)
                val contents = contentsForPrompt(modelPrompt, carryoverImageFile, contextImageFile)
                val response = sendModelPhase(requestId, conversation, "message", contents)
                noteConversationMessages(2)
                noteConversationText(prompt, response)
                val elapsedMs = System.currentTimeMillis() - startedAt
                logLine("response.ready requestId=$requestId responseChars=${response.length} elapsedMs=$elapsedMs")
                logLong("response.raw requestId=$requestId", response)
                postResponse(requestId, response)
                if (response.isBlank()) {
                    closeConversation = true
                    logLine("conversation.reset_after_empty_response requestId=$requestId messages=${conversationMessageCount()} images=${conversationImageCount()}")
                } else if (shouldResetConversation()) {
                    closeConversation = true
                    logLine("conversation.reset_after_two_turns requestId=$requestId messages=${conversationMessageCount()} images=${conversationImageCount()}")
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
                    val imagesToDelete = releaseSharedConversation(conversation)
                    closeConversationQuietly(conversation)
                    deleteFilesQuietly(imagesToDelete)
                } else if (contextImageFile != null && !isConversationImageRetained(contextImageFile)) {
                    try { contextImageFile?.delete() } catch (_: Throwable) {}
                } else if (carryoverImageFile != null && !isConversationImageRetained(carryoverImageFile)) {
                    try { carryoverImageFile?.delete() } catch (_: Throwable) {}
                }
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
                    val reason = cursor.getInt(cursor.getColumnIndexOrThrow(DownloadManager.COLUMN_REASON))
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
                    message = downloadReasonMessage(status, reason, downloaded, total)
                    logDownloadStatus(downloadId, status, reason, downloaded, total, progress, message)
                    if (state == "installed") prefs.edit().remove("downloadId").apply()
                } else {
                    state = "error"
                    message = "Android lost the download record. Tap retry."
                    logLine("download.missing downloadId=$downloadId")
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
            .put("conversationMessages", synchronized(ENGINE_LOCK) { sharedConversationMessages })
            .put("conversationSerial", synchronized(ENGINE_LOCK) { sharedConversationSerial })
    }

    private fun logDownloadStatus(
        downloadId: Long,
        status: Int,
        reason: Int,
        downloaded: Long,
        total: Long,
        progress: Int,
        message: String
    ) {
        val line = "id=$downloadId status=${downloadStatusName(status)} reason=$reason downloaded=$downloaded total=$total progress=$progress message=$message"
        if (line != lastDownloadStatusLog) {
            lastDownloadStatusLog = line
            logLine("download.status $line")
        }
    }

    private fun downloadStatusName(status: Int): String = when (status) {
        DownloadManager.STATUS_FAILED -> "FAILED"
        DownloadManager.STATUS_PAUSED -> "PAUSED"
        DownloadManager.STATUS_PENDING -> "PENDING"
        DownloadManager.STATUS_RUNNING -> "RUNNING"
        DownloadManager.STATUS_SUCCESSFUL -> "SUCCESSFUL"
        else -> "UNKNOWN_$status"
    }

    private fun downloadReasonMessage(status: Int, reason: Int, downloaded: Long, total: Long): String = when (status) {
        DownloadManager.STATUS_FAILED -> when (reason) {
            DownloadManager.ERROR_CANNOT_RESUME -> "Cannot resume download"
            DownloadManager.ERROR_DEVICE_NOT_FOUND -> "Storage not available"
            DownloadManager.ERROR_FILE_ALREADY_EXISTS -> "File already exists"
            DownloadManager.ERROR_FILE_ERROR -> "File write error"
            DownloadManager.ERROR_HTTP_DATA_ERROR -> "Network data error"
            DownloadManager.ERROR_INSUFFICIENT_SPACE -> "Not enough storage"
            DownloadManager.ERROR_TOO_MANY_REDIRECTS -> "Too many redirects"
            DownloadManager.ERROR_UNHANDLED_HTTP_CODE -> "Server rejected download"
            DownloadManager.ERROR_UNKNOWN -> "Unknown download error"
            in 400..599 -> "HTTP $reason"
            else -> "Download failed ($reason)"
        }
        DownloadManager.STATUS_PAUSED -> when (reason) {
            DownloadManager.PAUSED_QUEUED_FOR_WIFI -> "Waiting for Wi-Fi"
            DownloadManager.PAUSED_UNKNOWN -> "Paused by Android"
            DownloadManager.PAUSED_WAITING_FOR_NETWORK -> "Waiting for network"
            DownloadManager.PAUSED_WAITING_TO_RETRY -> "Waiting to retry"
            else -> "Paused ($reason)"
        }
        DownloadManager.STATUS_PENDING -> "Queued by Android"
        DownloadManager.STATUS_RUNNING -> if (total <= 0 && downloaded <= 0) "Waiting for file size" else ""
        else -> ""
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

    private fun chatConversation(engine: Engine, modelPath: String): Conversation {
        var stale: Conversation? = null
        var staleImages: List<File> = emptyList()
        synchronized(ENGINE_LOCK) {
            val existing = sharedConversation
            if (existing != null && existing.isAlive && sharedConversationModelPath == modelPath) {
                logLine("conversation.reuse messages=$sharedConversationMessages images=${sharedConversationImageFiles.size}")
                return existing
            }
            stale = existing
            if (stale != null) staleImages = drainConversationImagesLocked()
            sharedConversation = null
            sharedConversationModelPath = null
            sharedConversationMessages = 0
        }
        closeConversationQuietly(stale)
        deleteFilesQuietly(staleImages)

        val created = engine.createConversation(conversationConfig())
        synchronized(ENGINE_LOCK) {
            sharedConversation = created
            sharedConversationModelPath = modelPath
            sharedConversationMessages = 0
            sharedConversationSerial += 1L
        }
        logLine("conversation.created serial=$sharedConversationSerial modelPath=${modelPath.takeLast(48)}")
        return created
    }

    private fun retainConversationImageFile(conversation: Conversation?, file: File) {
        synchronized(ENGINE_LOCK) {
            if (conversation != null && sharedConversation === conversation) {
                sharedConversationImageFiles.add(file)
                logLine("conversation.image_retained count=${sharedConversationImageFiles.size} file=${file.name}")
            }
        }
    }

    private fun isConversationImageRetained(file: File): Boolean {
        return synchronized(ENGINE_LOCK) {
            sharedConversationImageFiles.any { it.absolutePath == file.absolutePath }
        }
    }

    private fun noteConversationMessages(count: Int) {
        synchronized(ENGINE_LOCK) {
            sharedConversationMessages += count
        }
    }

    private fun noteConversationTailImage(bytes: ByteArray?) {
        if (bytes == null) return
        synchronized(ENGINE_LOCK) {
            sharedConversationTailImageBytes = bytes
        }
    }

    private fun noteConversationText(prompt: String, response: String) {
        val userText = transcriptUserText(prompt)
        val modelText = response.replace('\u0000', ' ').replace(Regex("\\s+"), " ").trim()
            .take(MAX_TRANSCRIPT_MODEL_CHARS)
        synchronized(ENGINE_LOCK) {
            if (userText.isNotBlank()) sharedConversationTextLog.add("Player turn text:\n$userText")
            sharedConversationTextLog.add(
                if (modelText.isBlank()) "Gemma reply text:\n(empty)"
                else "Gemma reply text:\n$modelText"
            )
            pruneConversationTextLocked()
        }
    }

    private fun shouldResetConversation(): Boolean {
        return synchronized(ENGINE_LOCK) {
            sharedConversationMessages >= MAX_CHAT_MESSAGES_BEFORE_RESET
        }
    }

    private fun conversationMessageCount(): Int {
        return synchronized(ENGINE_LOCK) { sharedConversationMessages }
    }

    private fun conversationImageCount(): Int {
        return synchronized(ENGINE_LOCK) { sharedConversationImageFiles.size }
    }

    private fun releaseSharedConversation(conversation: Conversation?): List<File> {
        if (conversation == null) return emptyList()
        synchronized(ENGINE_LOCK) {
            if (sharedConversation === conversation) {
                prepareCarryoverLocked()
                sharedConversation = null
                sharedConversationModelPath = null
                sharedConversationMessages = 0
                sharedConversationTailImageBytes = null
                clearConversationTextLocked()
                return drainConversationImagesLocked()
            }
        }
        return emptyList()
    }

    private fun drainConversationImagesLocked(): List<File> {
        val images = sharedConversationImageFiles.toList()
        sharedConversationImageFiles.clear()
        return images
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

    private fun takeCarryoverForOpeningConversation(conversation: Conversation?): Carryover? {
        synchronized(ENGINE_LOCK) {
            if (conversation == null || sharedConversation !== conversation || sharedConversationMessages != 0) {
                return null
            }
            val text = carryoverText
            val image = carryoverImageBytes
            if (text.isBlank() && image == null) return null
            carryoverText = ""
            carryoverImageBytes = null
            return Carryover(text, image)
        }
    }

    private fun promptWithCarryover(prompt: String, carryover: Carryover?): String {
        if (carryover == null || carryover.text.isBlank()) return prompt
        val combined = """
We just turned to a new page. Here is the exact text from the last page of our chat.

${carryover.text}

The last map image from that page is attached too. Keep playing from here.

$prompt
        """.trimIndent()
        return if (combined.length <= MAX_PROMPT_CHARS) {
            combined
        } else {
            val budget = (MAX_PROMPT_CHARS - prompt.length - 160).coerceAtLeast(0)
            val clippedCarryover = carryover.text.takeLast(budget)
            """
We just turned to a new page. Here is the exact text from the last page of our chat.

$clippedCarryover

The last map image from that page is attached too. Keep playing from here.

$prompt
            """.trimIndent().take(MAX_PROMPT_CHARS)
        }
    }

    private fun contentsForPrompt(prompt: String, carryoverImageFile: File?, contextImageFile: File?): Contents {
        return when {
            carryoverImageFile != null && contextImageFile != null -> Contents.of(
                Content.ImageFile(carryoverImageFile.absolutePath),
                Content.ImageFile(contextImageFile.absolutePath),
                Content.Text(prompt)
            )
            carryoverImageFile != null -> Contents.of(
                Content.ImageFile(carryoverImageFile.absolutePath),
                Content.Text(prompt)
            )
            contextImageFile != null -> Contents.of(
                Content.ImageFile(contextImageFile.absolutePath),
                Content.Text(prompt)
            )
            else -> Contents.of(prompt)
        }
    }

    private fun transcriptUserText(prompt: String): String {
        return prompt
            .substringBefore("Second line: one exact emotion word from this shuffled list")
            .replace('\u0000', ' ')
            .replace(Regex("\\s+"), " ")
            .trim()
            .take(MAX_TRANSCRIPT_USER_CHARS)
    }

    private fun prepareCarryoverLocked() {
        carryoverText = sharedConversationTextLog.joinToString("\n\n")
            .trim()
            .takeLast(MAX_CARRYOVER_TEXT_CHARS)
        carryoverImageBytes = sharedConversationTailImageBytes
        logLine("conversation.carryover_saved textChars=${carryoverText.length} imageBytes=${carryoverImageBytes?.size ?: 0}")
    }

    private fun pruneConversationTextLocked() {
        while (sharedConversationTextLog.joinToString("\n\n").length > MAX_CARRYOVER_TEXT_CHARS && sharedConversationTextLog.size > 1) {
            sharedConversationTextLog.removeAt(0)
        }
    }

    private fun clearConversationTextLocked() {
        sharedConversationTextLog.clear()
    }

    private fun clearCarryoverLocked() {
        carryoverText = ""
        carryoverImageBytes = null
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

    private fun deleteFilesQuietly(files: List<File>) {
        for (file in files) {
            try { file.delete() } catch (_: Throwable) {}
        }
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
        val conversation: Conversation?
        val images: List<File>
        synchronized(ENGINE_LOCK) {
            conversation = sharedConversation
            sharedConversation = null
            sharedConversationModelPath = null
            sharedConversationMessages = 0
            images = drainConversationImagesLocked()
        }
        closeConversationQuietly(conversation)
        deleteFilesQuietly(images)
        executor.shutdown()
    }
}
