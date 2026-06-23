// Copyright 2025 Roni Tervo
//
// SPDX-License-Identifier: Apache-2.0

package com.ronitervo.inkbattle

import android.app.Activity
import android.app.ActivityManager
import android.app.DownloadManager
import android.content.Context
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
import java.io.BufferedInputStream
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL
import java.util.Locale
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
        const val LOG_TAG = "InkBattleGemma"
        const val LOG_CHUNK_SIZE = 3_000
        const val MAX_PROMPT_CHARS = 6_000
        const val MODEL_RESPONSE_TIMEOUT_SECONDS = 90L
        const val MAX_CHAT_MESSAGES_BEFORE_RESET = 4
        const val MAX_CARRYOVER_TEXT_CHARS = 2_000
        const val MAX_TRANSCRIPT_USER_CHARS = 1_000
        const val MAX_TRANSCRIPT_MODEL_CHARS = 280
        const val MAX_CONTEXT_IMAGE_BYTES = 700_000
        const val ENABLE_IMAGE_INPUT = true
        const val DOWNLOAD_BUFFER_BYTES = 256 * 1024
        const val DOWNLOAD_CONNECT_TIMEOUT_MS = 30_000
        const val DOWNLOAD_READ_TIMEOUT_MS = 30_000
        const val DOWNLOAD_LOG_STEP_BYTES = 25L * 1024L * 1024L
        const val BYTES_PER_GB = 1_000_000_000.0
        const val GEMMA_SYSTEM_PROMPT =
            "Your name is Gemma. Your only purpose is to reply as the blue opponent in this Ink Battle match: exactly two lines, first a short in-character message to the player, second one allowed emotion word."

        private val ENGINE_LOCK = Any()
        private val downloadExecutor = Executors.newSingleThreadExecutor()
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
        @Volatile private var sharedDownloadModelPath: String? = null
        @Volatile private var sharedDownloadState: String = ""
        @Volatile private var sharedDownloadProgress: Int = 0
        @Volatile private var sharedDownloadDownloadedBytes: Long = 0L
        @Volatile private var sharedDownloadTotalBytes: Long = -1L
        @Volatile private var sharedDownloadMessage: String = ""
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
        val minRamGb: Int,
        val minInstalledBytes: Long
    )

    private val models = listOf(
        ModelSpec(
            key = "gemma4-e2b",
            name = "Gemma 4 E2B",
            fileName = "gemma-4-E2B-it.litertlm",
            url = "https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm/resolve/main/gemma-4-E2B-it.litertlm?download=true",
            sizeGb = 2.58,
            minRamGb = 6,
            minInstalledBytes = 2_300_000_000L
        ),
        ModelSpec(
            key = "gemma4-e4b",
            name = "Gemma 4 E4B",
            fileName = "gemma-4-E4B-it.litertlm",
            url = "https://huggingface.co/litert-community/gemma-4-E4B-it-litert-lm/resolve/main/gemma-4-E4B-it.litertlm?download=true",
            sizeGb = 3.65,
            minRamGb = 12,
            minInstalledBytes = 3_200_000_000L
        )
    )

    private val executor = Executors.newSingleThreadExecutor()
    private val cacheDirPath = activity.applicationContext.cacheDir.absolutePath
    private val prefs = activity.applicationContext.getSharedPreferences("local_gemma_v1", Context.MODE_PRIVATE)
    private val modelDir: File by lazy {
        File(activity.getExternalFilesDir(null) ?: activity.filesDir, "models").apply { mkdirs() }
    }

    @JavascriptInterface
    fun getStatus(): String = buildStatus().toString()

    @JavascriptInterface
    fun requestInstall(modelKey: String?): String {
        val spec = chooseModel(modelKey)
        val destination = modelFile(spec)
        val partial = partialModelFile(spec)
        logLine("install.request model=${spec.key} path=${destination.absolutePath}")
        cancelLegacyDownloadManagerJob()
        if (isCompleteModelFile(spec, destination)) {
            prefs.edit()
                .putString("modelKey", spec.key)
                .putString("modelPath", destination.absolutePath)
                .remove("downloadId")
                .apply()
            updateDownloadState(spec, destination, "installed", 100, destination.length(), destination.length(), "")
            return buildStatus("installed", spec).toString()
        }

        if (destination.exists()) {
            val destinationBytes = destination.length()
            if (!partial.exists() || destinationBytes > partial.length()) {
                partial.parentFile?.mkdirs()
                if (partial.exists()) partial.delete()
                if (destination.renameTo(partial)) {
                    logLine("install.resume_existing_partial model=${spec.key} bytes=$destinationBytes")
                } else {
                    logLine("install.delete_unusable_partial model=${spec.key} bytes=$destinationBytes")
                    destination.delete()
                }
            } else {
                logLine("install.delete_smaller_partial model=${spec.key} bytes=$destinationBytes")
                destination.delete()
            }
        }

        synchronized(ENGINE_LOCK) {
            if (sharedDownloadState == "downloading") {
                if (sharedDownloadModelPath == destination.absolutePath) {
                    return buildStatus(null, spec).toString()
                }
                sharedLastError = "Another Gemma download is already running"
                return buildStatus("error", spec).toString()
            }
        }

        prefs.edit()
            .putString("modelKey", spec.key)
            .putString("modelPath", destination.absolutePath)
            .remove("downloadId")
            .apply()
        updateDownloadState(spec, destination, "downloading", partialProgress(spec, partial), partial.length(), -1L, "Starting download")
        logLine("install.in_app_start model=${spec.key} partialBytes=${partial.length()}")
        downloadExecutor.execute {
            downloadModelFile(spec, destination, partial)
        }
        postStatus()
        return buildStatus(null, spec).toString()
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

    private fun partialModelFile(spec: ModelSpec): File = File(modelDir, "${spec.fileName}.part")

    private fun cancelLegacyDownloadManagerJob() {
        val legacyDownloadId = prefs.getLong("downloadId", -1L)
        if (legacyDownloadId <= 0L) return
        try {
            val manager = activity.applicationContext.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
            manager.remove(legacyDownloadId)
            logLine("install.cancel_legacy_downloadmanager downloadId=$legacyDownloadId")
        } catch (t: Throwable) {
            logError("install.cancel_legacy_downloadmanager_error downloadId=$legacyDownloadId", t)
        } finally {
            prefs.edit().remove("downloadId").apply()
        }
    }

    private fun estimatedModelBytes(spec: ModelSpec): Long = Math.round(spec.sizeGb * BYTES_PER_GB)

    private fun isCompleteModelFile(spec: ModelSpec, file: File): Boolean {
        return file.exists() && file.length() >= spec.minInstalledBytes
    }

    private fun partialProgress(spec: ModelSpec, file: File): Int {
        val estimate = estimatedModelBytes(spec).coerceAtLeast(1L)
        return ((file.length() * 100L) / estimate).coerceIn(0L, 99L).toInt()
    }

    private fun updateDownloadState(
        spec: ModelSpec,
        destination: File,
        state: String,
        progress: Int,
        downloadedBytes: Long,
        totalBytes: Long,
        message: String
    ) {
        synchronized(ENGINE_LOCK) {
            sharedDownloadModelPath = destination.absolutePath
            sharedDownloadState = state
            sharedDownloadProgress = progress.coerceIn(0, 100)
            sharedDownloadDownloadedBytes = downloadedBytes.coerceAtLeast(0L)
            sharedDownloadTotalBytes = totalBytes
            sharedDownloadMessage = message
            if (state == "error" && message.isNotBlank()) {
                sharedLastError = message
            }
        }
    }

    private fun downloadModelFile(spec: ModelSpec, destination: File, partial: File) {
        var connection: HttpURLConnection? = null
        try {
            modelDir.mkdirs()
            if (isCompleteModelFile(spec, destination)) {
                updateDownloadState(spec, destination, "installed", 100, destination.length(), destination.length(), "")
                logLine("download.already_installed model=${spec.key} bytes=${destination.length()}")
                return
            }

            var resumeAt = if (partial.exists()) partial.length() else 0L
            while (true) {
                connection = openModelConnection(spec.url, resumeAt)
                val status = connection.responseCode
                if (status == 416 && partial.length() >= spec.minInstalledBytes) {
                    connection.disconnect()
                    connection = null
                    break
                }
                if (resumeAt > 0L && status == HttpURLConnection.HTTP_OK) {
                    logLine("download.restart_no_range model=${spec.key} previousBytes=$resumeAt")
                    connection.disconnect()
                    connection = null
                    partial.delete()
                    resumeAt = 0L
                    continue
                }
                if (status != HttpURLConnection.HTTP_OK && status != HttpURLConnection.HTTP_PARTIAL) {
                    throw IOException("HTTP $status ${connection.responseMessage ?: ""}".trim())
                }

                val contentLength = connection.contentLengthLong
                val totalBytes = when {
                    status == HttpURLConnection.HTTP_PARTIAL && contentLength > 0L -> resumeAt + contentLength
                    status == HttpURLConnection.HTTP_OK && contentLength > 0L -> contentLength
                    else -> estimatedModelBytes(spec)
                }
                val append = status == HttpURLConnection.HTTP_PARTIAL && resumeAt > 0L
                if (!append && partial.exists()) partial.delete()

                var downloaded = if (append) resumeAt else 0L
                var lastUiUpdateAt = 0L
                var lastLoggedBytes = downloaded
                updateDownloadState(
                    spec,
                    destination,
                    "downloading",
                    downloadProgress(downloaded, totalBytes),
                    downloaded,
                    totalBytes,
                    downloadProgressMessage(downloaded, totalBytes)
                )
                logDownloadProgress(spec, downloaded, totalBytes, "start")

                BufferedInputStream(connection.inputStream, DOWNLOAD_BUFFER_BYTES).use { input ->
                    FileOutputStream(partial, append).use { output ->
                        val buffer = ByteArray(DOWNLOAD_BUFFER_BYTES)
                        while (true) {
                            val read = input.read(buffer)
                            if (read < 0) break
                            output.write(buffer, 0, read)
                            downloaded += read.toLong()

                            val now = System.currentTimeMillis()
                            if (now - lastUiUpdateAt >= 1_000L) {
                                lastUiUpdateAt = now
                                updateDownloadState(
                                    spec,
                                    destination,
                                    "downloading",
                                    downloadProgress(downloaded, totalBytes),
                                    downloaded,
                                    totalBytes,
                                    downloadProgressMessage(downloaded, totalBytes)
                                )
                            }
                            if (downloaded - lastLoggedBytes >= DOWNLOAD_LOG_STEP_BYTES) {
                                lastLoggedBytes = downloaded
                                logDownloadProgress(spec, downloaded, totalBytes, "progress")
                            }
                        }
                    }
                }
                connection.disconnect()
                connection = null
                break
            }

            val finalBytes = partial.length()
            if (finalBytes < spec.minInstalledBytes) {
                throw IOException("Downloaded file is too small: ${formatBytes(finalBytes)}")
            }
            if (destination.exists()) destination.delete()
            if (!partial.renameTo(destination)) {
                throw IOException("Could not finalize model file")
            }
            prefs.edit()
                .putString("modelKey", spec.key)
                .putString("modelPath", destination.absolutePath)
                .remove("downloadId")
                .apply()
            updateDownloadState(spec, destination, "installed", 100, destination.length(), destination.length(), "")
            logLine("download.complete model=${spec.key} bytes=${destination.length()} path=${destination.absolutePath}")
        } catch (t: Throwable) {
            connection?.disconnect()
            val message = (t.message ?: t.javaClass.simpleName).take(160)
            updateDownloadState(spec, destination, "error", partialProgress(spec, partial), partial.length(), estimatedModelBytes(spec), message)
            logError("download.error model=${spec.key} partialBytes=${partial.length()}", t)
        }
    }

    private fun openModelConnection(rawUrl: String, resumeAt: Long): HttpURLConnection {
        var url = URL(rawUrl)
        var redirects = 0
        while (true) {
            val connection = (url.openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                instanceFollowRedirects = false
                connectTimeout = DOWNLOAD_CONNECT_TIMEOUT_MS
                readTimeout = DOWNLOAD_READ_TIMEOUT_MS
                setRequestProperty("Accept", "application/octet-stream,*/*")
                setRequestProperty("Accept-Encoding", "identity")
                setRequestProperty("User-Agent", "InkBattle/1.0.8 Android")
                if (resumeAt > 0L) {
                    setRequestProperty("Range", "bytes=$resumeAt-")
                }
            }
            val status = connection.responseCode
            if (status == HttpURLConnection.HTTP_MOVED_PERM ||
                status == HttpURLConnection.HTTP_MOVED_TEMP ||
                status == HttpURLConnection.HTTP_SEE_OTHER ||
                status == 307 ||
                status == 308
            ) {
                val location = connection.getHeaderField("Location")
                    ?: throw IOException("Redirect without Location")
                connection.disconnect()
                redirects += 1
                if (redirects > 8) throw IOException("Too many redirects")
                url = URL(url, location)
                continue
            }
            return connection
        }
    }

    private fun downloadProgress(downloadedBytes: Long, totalBytes: Long): Int {
        if (totalBytes <= 0L) return 0
        return ((downloadedBytes * 100L) / totalBytes).coerceIn(0L, 99L).toInt()
    }

    private fun downloadProgressMessage(downloadedBytes: Long, totalBytes: Long): String {
        if (downloadedBytes <= 0L) return "Starting download"
        return if (totalBytes > 0L) {
            "${formatBytes(downloadedBytes)} / ${formatBytes(totalBytes)}"
        } else {
            "Downloaded ${formatBytes(downloadedBytes)}"
        }
    }

    private fun logDownloadProgress(spec: ModelSpec, downloadedBytes: Long, totalBytes: Long, label: String) {
        val line = "download.$label model=${spec.key} downloaded=$downloadedBytes total=$totalBytes progress=${downloadProgress(downloadedBytes, totalBytes)}"
        if (line != lastDownloadStatusLog) {
            lastDownloadStatusLog = line
            logLine(line)
        }
    }

    private fun formatBytes(bytes: Long): String {
        val safeBytes = bytes.coerceAtLeast(0L)
        return if (safeBytes >= 1_000_000_000L) {
            String.format(Locale.US, "%.2f GB", safeBytes / 1_000_000_000.0)
        } else {
            "${safeBytes / 1_000_000L} MB"
        }
    }

    private fun totalRamGb(): Int {
        val manager = activity.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        val info = ActivityManager.MemoryInfo()
        manager.getMemoryInfo(info)
        return Math.max(1, Math.round(info.totalMem / 1_073_741_824.0).toInt())
    }

    private fun buildStatus(forcedState: String? = null, forcedSpec: ModelSpec? = null): JSONObject {
        val spec = forcedSpec ?: currentModel() ?: chooseModel("auto")
        val modelPath = prefs.getString("modelPath", null)
        var state = forcedState ?: "available"
        var progress = 0
        var downloadedBytes = 0L
        var totalBytes = -1L
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
        else if (forcedState == null && sharedDownloadModelPath == modelPath && sharedDownloadState.isNotBlank()) {
            synchronized(ENGINE_LOCK) {
                state = sharedDownloadState
                progress = sharedDownloadProgress
                downloadedBytes = sharedDownloadDownloadedBytes
                totalBytes = sharedDownloadTotalBytes
                if (sharedDownloadMessage.isNotBlank()) message = sharedDownloadMessage
            }
        } else if (isCompleteModelFile(spec, modelFile(spec))) {
            state = "installed"
            progress = 100
            downloadedBytes = modelFile(spec).length()
            totalBytes = downloadedBytes
        } else if (partialModelFile(spec).exists()) {
            downloadedBytes = partialModelFile(spec).length()
            totalBytes = estimatedModelBytes(spec)
            progress = partialProgress(spec, partialModelFile(spec))
            message = "Tap get to resume ${formatBytes(downloadedBytes)}"
        }

        return JSONObject()
            .put("state", state)
            .put("modelKey", spec.key)
            .put("modelName", spec.name)
            .put("recommendedSizeGb", spec.sizeGb)
            .put("minRamGb", spec.minRamGb)
            .put("totalRamGb", totalRamGb())
            .put("progress", progress)
            .put("downloadedBytes", downloadedBytes)
            .put("totalBytes", totalBytes)
            .put("busy", busy)
            .put("message", message)
            .put("conversationMessages", synchronized(ENGINE_LOCK) { sharedConversationMessages })
            .put("conversationSerial", synchronized(ENGINE_LOCK) { sharedConversationSerial })
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

    private fun conversationConfig(): ConversationConfig = ConversationConfig(Contents.of(GEMMA_SYSTEM_PROMPT))

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
        val fallback = "You are Gemma, the blue enemy general. Reply in exactly two lines: a short message to the player, then one emotion word."
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
