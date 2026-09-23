(() => {
  // node_modules/@litert-lm/core/dist/global_litertlm.js
  var LiteRtLmNotLoadedError = class extends Error {
    constructor() {
      super("LiteRT-LM is not initialized yet. Please call loadLiteRtLm() and wait for its promise to resolve to load the LiteRT-LM WASM module.");
    }
  };
  var globalLiteRtLm = void 0;
  var globalLiteRtLmPromise = void 0;
  function getGlobalLiteRtLm() {
    if (!globalLiteRtLm) {
      throw new LiteRtLmNotLoadedError();
    }
    return globalLiteRtLm;
  }
  function setGlobalLiteRtLm(LiteRtLm2) {
    globalLiteRtLm = LiteRtLm2;
  }
  function getGlobalLiteRtLmPromise() {
    return globalLiteRtLmPromise;
  }
  function hasGlobalLiteRtLmPromise() {
    return Boolean(globalLiteRtLmPromise);
  }
  function setGlobalLiteRtLmPromise(promise) {
    globalLiteRtLmPromise = promise;
  }

  // node_modules/@litert-lm/core/dist/litertlm_web.js
  var LiteRtLm = class {
    liteRtLmWasm;
    static DEFAULT_WASM_PATH = "https://cdn.jsdelivr.net/npm/@litert-lm/core@0.12.1/wasm";
    constructor(wasmModule) {
      this.liteRtLmWasm = wasmModule;
      this.liteRtLmWasm.setupLogging();
    }
    async setupDefaultWebGpuDevice() {
      if (this.liteRtLmWasm.preinitializedWebGPUDevice) {
        return;
      }
      this.liteRtLmWasm.preinitializedWebGPUDevice = await createDefaultWebGpuDevice();
    }
    delete() {
    }
  };
  var DESIRED_WEBGPU_FEATURES = [
    "shader-f16",
    "subgroups"
  ];
  async function createDefaultWebGpuDevice() {
    const adapterDescriptor = {
      powerPreference: "high-performance"
    };
    const adapter = await navigator.gpu.requestAdapter(adapterDescriptor);
    if (!adapter) {
      throw new Error("No GPU adapter found.");
    }
    const requiredLimits = {
      maxBufferSize: adapter.limits.maxBufferSize,
      maxStorageBufferBindingSize: adapter.limits.maxStorageBufferBindingSize,
      maxStorageBuffersPerShaderStage: adapter.limits.maxStorageBuffersPerShaderStage,
      maxTextureDimension2D: adapter.limits.maxTextureDimension2D
    };
    const requiredFeatures = [];
    for (const feature of DESIRED_WEBGPU_FEATURES) {
      if (adapter.features.has(feature)) {
        requiredFeatures.push(feature);
      }
    }
    return await adapter.requestDevice({
      requiredFeatures,
      requiredLimits
    });
  }

  // node_modules/@litertjs/wasm-utils/dist/index.js
  async function runScript(scriptUrl) {
    if (typeof importScripts === "function") {
      importScripts(scriptUrl.toString());
    } else {
      const script = document.createElement("script");
      script.src = scriptUrl.toString();
      script.crossOrigin = "anonymous";
      return new Promise((resolve, revoke) => {
        script.addEventListener("load", () => {
          resolve();
        }, false);
        script.addEventListener("error", (e) => {
          revoke(e);
        }, false);
        document.body.appendChild(script);
      });
    }
  }
  var createWasmLib = async (constructorFcn, wasmLoaderScript, assetLoaderScript, glCanvas, fileLocator) => {
    if (wasmLoaderScript) {
      await runScript(wasmLoaderScript);
    }
    if (!self.ModuleFactory) {
      throw new Error("ModuleFactory not set.");
    }
    if (assetLoaderScript) {
      await runScript(assetLoaderScript);
      if (!self.ModuleFactory) {
        throw new Error("ModuleFactory not set.");
      }
    }
    if (self.Module && fileLocator) {
      const moduleFileLocator = self.Module;
      moduleFileLocator.locateFile = fileLocator.locateFile;
      if (fileLocator.mainScriptUrlOrBlob) {
        moduleFileLocator.mainScriptUrlOrBlob = fileLocator.mainScriptUrlOrBlob;
      }
    }
    const module = await self.ModuleFactory(self.Module || fileLocator);
    self.ModuleFactory = self.Module = void 0;
    return new constructorFcn(module, glCanvas);
  };

  // node_modules/@litert-lm/core/dist/url_path_utils.js
  function pathToString(path) {
    return path;
  }
  function appendPathSegment(path, segment) {
    if (!path)
      return segment;
    if (!segment)
      return path;
    const pathWithSlash = path.endsWith("/") ? path : path + "/";
    const segmentWithoutSlash = segment.startsWith("/") ? segment.substring(1) : segment;
    return pathWithSlash + segmentWithoutSlash;
  }

  // node_modules/@litert-lm/core/dist/wasm_feature_detect.js
  var WASM_RELAXED_SIMD_CHECK = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    5,
    1,
    96,
    0,
    1,
    123,
    3,
    2,
    1,
    0,
    10,
    15,
    1,
    13,
    0,
    65,
    1,
    253,
    15,
    65,
    2,
    253,
    15,
    253,
    128,
    2,
    11
  ]);
  var WASM_THREADS_CHECK = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    2,
    1,
    0,
    5,
    4,
    1,
    3,
    1,
    1,
    10,
    11,
    1,
    9,
    0,
    65,
    0,
    254,
    16,
    2,
    0,
    26,
    11
  ]);
  var WASM_FEATURE_VALUES = {
    "relaxedSimd": void 0,
    "threads": void 0
  };
  async function tryWasm(wasm) {
    try {
      await WebAssembly.instantiate(wasm);
      return { supported: true };
    } catch (e) {
      return { supported: false, error: e };
    }
  }
  var WASM_FEATURE_CHECKS = {
    "relaxedSimd": () => {
      if (WASM_FEATURE_VALUES.relaxedSimd === void 0) {
        WASM_FEATURE_VALUES.relaxedSimd = tryWasm(WASM_RELAXED_SIMD_CHECK);
      }
      return WASM_FEATURE_VALUES.relaxedSimd;
    },
    "threads": () => {
      if (WASM_FEATURE_VALUES.threads === void 0) {
        try {
          if (typeof MessageChannel !== "undefined") {
            new MessageChannel().port1.postMessage(new SharedArrayBuffer(1));
          }
          WASM_FEATURE_VALUES.threads = tryWasm(WASM_THREADS_CHECK);
        } catch (e) {
          WASM_FEATURE_VALUES.threads = Promise.resolve({ supported: false, error: e });
        }
      }
      return WASM_FEATURE_VALUES.threads;
    }
  };
  async function supportsFeature(feature) {
    const check = WASM_FEATURE_CHECKS[feature]?.();
    if (!check) {
      throw new Error(`Unknown feature: ${feature}`);
    }
    return (await check).supported;
  }

  // node_modules/@litert-lm/core/dist/load.js
  var WASM_JS_FILE_NAME = "litertlm_wasm_internal.js";
  var WASM_JS_COMPAT_FILE_NAME = "litertlm_wasm_compat_internal.js";
  async function load(path, options) {
    const pathString = pathToString(path);
    const relaxedSimd = await supportsFeature("relaxedSimd");
    let fileName = WASM_JS_COMPAT_FILE_NAME;
    if (relaxedSimd) {
      fileName = WASM_JS_FILE_NAME;
    }
    let jsFilePath = path;
    if (pathString.endsWith(".wasm")) {
      throw new Error("Please load the `.js` file corresponding to the `.wasm` file, or load the directory containing it.");
    } else if (!pathString.endsWith(".js")) {
      jsFilePath = appendPathSegment(path, fileName);
    }
    return createWasmLib(LiteRtLm, jsFilePath);
  }

  // node_modules/@litert-lm/core/dist/load_litertlm.js
  function loadLiteRtLm(path, options) {
    if (hasGlobalLiteRtLmPromise()) {
      throw new Error("LiteRT-LM is already loading / loaded.");
    }
    setGlobalLiteRtLmPromise(load(path, options).then(async (liteRtLm) => {
      setGlobalLiteRtLm(liteRtLm);
      return liteRtLm;
    }).catch((error) => {
      setGlobalLiteRtLmPromise(void 0);
      throw error;
    }));
    return getGlobalLiteRtLmPromise();
  }
  function getOrLoadGlobalLiteRtLm() {
    return getGlobalLiteRtLmPromise() ?? loadLiteRtLm(LiteRtLm.DEFAULT_WASM_PATH);
  }

  // node_modules/@litert-lm/core/dist/wasm_binding_types.js
  var Backend = {
    // Ideally, we'd pull these from the Wasm module, but we want them to be
    // available in JS before the Wasm module is loaded.
    UNSPECIFIED: 0,
    CPU_ARTISAN: 1,
    GPU_ARTISAN: 2,
    CPU: 3,
    GPU: 4,
    GOOGLE_TENSOR_ARTISAN: 5,
    NPU: 6
  };

  // node_modules/@litert-lm/core/dist/wasm_utils.js
  function consumeEmscriptenVectorToArray(vector) {
    const array = new Array(vector.size());
    for (let i = 0; i < vector.size(); ++i) {
      array[i] = vector.get(i);
    }
    vector.delete();
    return array;
  }
  function fillEmscriptenVector(data, vector) {
    for (const item of data) {
      vector.push_back(item);
    }
  }

  // node_modules/@litert-lm/core/dist/engine_settings.js
  function fillWasmEngineSettingsFromEngineSettings(wasmEngineSettings, engineSettings, backend, wasm = getGlobalLiteRtLm().liteRtLmWasm) {
    const wasmExecutorSettings = wasmEngineSettings.getMutableMainExecutorSettings();
    wasmExecutorSettings.setCacheDir(":nocache");
    if (engineSettings.mainExecutorSettings) {
      const mainExecutorSettings = engineSettings.mainExecutorSettings;
      if (mainExecutorSettings.maxNumTokens !== void 0) {
        wasmExecutorSettings.setMaxNumTokens(mainExecutorSettings.maxNumTokens);
      }
      if (mainExecutorSettings.samplerBackend !== void 0) {
        wasmExecutorSettings.setSamplerBackend({ value: mainExecutorSettings.samplerBackend });
      }
      if (mainExecutorSettings.backendConfig !== void 0) {
        const backendConfig = mainExecutorSettings.backendConfig;
        if (backend === Backend.CPU) {
          wasmExecutorSettings.setBackendConfigCpu(backendConfig);
        } else if (backend === Backend.GPU) {
          wasmExecutorSettings.setBackendConfigGpu(backendConfig);
        } else if (backend === Backend.GPU_ARTISAN) {
          const gpuArtisanConfig = backendConfig;
          const loraRanksVec = new wasm.VectorUint32();
          fillEmscriptenVector(gpuArtisanConfig.supported_lora_ranks, loraRanksVec);
          const wasmGpuArtisanConfig = {
            ...gpuArtisanConfig,
            supported_lora_ranks: loraRanksVec
          };
          wasmExecutorSettings.setBackendConfigGpuArtisan(wasmGpuArtisanConfig);
          loraRanksVec.delete();
        }
      }
      if (mainExecutorSettings.advancedSettings !== void 0) {
        const defaultAdv = wasmExecutorSettings.getAdvancedSettings();
        const newAdv = { ...defaultAdv, ...mainExecutorSettings.advancedSettings };
        wasmExecutorSettings.setAdvancedSettings(newAdv);
      }
    }
  }
  function wasmEngineSettingsToEngineSettings(wasmEngineSettings) {
    const wasmExecutorSettings = wasmEngineSettings.getMutableMainExecutorSettings();
    let backendConfig;
    let backend;
    try {
      backendConfig = wasmExecutorSettings.getBackendConfigCpu();
      backend = Backend.CPU;
    } catch (e) {
      try {
        backendConfig = wasmExecutorSettings.getBackendConfigGpu();
        backend = Backend.GPU;
      } catch (e2) {
        try {
          const wasmGpuArtisanConfig = wasmExecutorSettings.getBackendConfigGpuArtisan();
          backendConfig = {
            ...wasmGpuArtisanConfig,
            supported_lora_ranks: consumeEmscriptenVectorToArray(wasmGpuArtisanConfig.supported_lora_ranks)
          };
          backend = Backend.GPU_ARTISAN;
        } catch (e3) {
          throw new Error("Unsupported backend config");
        }
      }
    }
    return {
      backend,
      mainExecutorSettings: {
        maxNumTokens: wasmExecutorSettings.getMaxNumTokens(),
        samplerBackend: wasmExecutorSettings.getSamplerBackend().value,
        backendConfig,
        advancedSettings: wasmExecutorSettings.getAdvancedSettings()
      }
    };
  }

  // node_modules/@litert-lm/core/dist/cleanup.js
  var Cleanup = class {
    callbacks = /* @__PURE__ */ new Set();
    add(callback) {
      this.callbacks.add(callback);
      return () => {
        this.callbacks.delete(callback);
        callback();
      };
    }
    run() {
      for (const callback of this.callbacks) {
        callback();
      }
      this.callbacks.clear();
    }
  };

  // node_modules/@litert-lm/core/dist/conversation.js
  var BUSY_MESSAGE = "Conversation is busy. A generation is already in progress.";
  var Conversation = class {
    conversation;
    engine;
    mutexes;
    isBusy = false;
    constructor(conversation, engine2, mutexes) {
      this.conversation = conversation;
      this.engine = engine2;
      this.mutexes = mutexes;
    }
    async sendMessage(message) {
      if (this.isBusy) {
        throw new Error(BUSY_MESSAGE);
      }
      this.isBusy = true;
      try {
        return await this.mutexes.executor.acquireAndRun(async () => {
          const jsonStr = messageToJsonString(message);
          const resultStr = await this.conversation.sendMessage(jsonStr);
          return JSON.parse(resultStr);
        });
      } finally {
        this.isBusy = false;
      }
    }
    /**
     * Sends a message to the LLM and returns a ReadableStream that yields
     * message chunks as they are generated.
     */
    sendMessageStreaming(message) {
      if (this.isBusy) {
        throw new Error(BUSY_MESSAGE);
      }
      this.isBusy = true;
      let isCancelled = false;
      const jsonStr = messageToJsonString(message);
      return new ReadableStream({
        start: (controller) => {
          try {
            this.conversation.sendMessageAsync(jsonStr, (chunk, isDone, error) => {
              if (isCancelled)
                return;
              if (error) {
                this.isBusy = false;
                controller.error(new Error(error));
                return;
              }
              if (chunk) {
                try {
                  controller.enqueue(JSON.parse(chunk));
                } catch (e) {
                  this.isBusy = false;
                  controller.error(e);
                }
              }
              if (isDone) {
                this.isBusy = false;
                controller.close();
              }
            }).catch((e) => {
              if (isCancelled)
                return;
              this.isBusy = false;
              controller.error(e);
            });
            const runWait = async () => {
              await this.mutexes.executor.acquireAndRun(async () => {
                await this.engine.waitUntilDone();
              });
            };
            runWait().catch((e) => {
              if (isCancelled)
                return;
              this.isBusy = false;
              controller.error(e);
            });
          } catch (e) {
            if (isCancelled)
              return;
            this.isBusy = false;
            controller.error(e);
          }
        },
        cancel: () => {
          isCancelled = true;
          this.isBusy = false;
          this.cancel();
        }
      });
    }
    /**
     * Sends a signal to cancel any current generation.
     */
    cancel() {
      this.conversation.cancelProcess();
    }
    getHistory() {
      if (this.isBusy) {
        throw new Error(BUSY_MESSAGE);
      }
      const historyStr = this.conversation.getHistory();
      return JSON.parse(historyStr);
    }
    async delete() {
      await this.mutexes.executor.acquireAndRun(() => {
        this.conversation.delete();
      });
    }
  };
  function messageToJsonString(messageLike) {
    let message;
    if (Array.isArray(messageLike)) {
      message = messageLike.map(toMessage);
    } else {
      message = toMessage(messageLike);
    }
    return JSON.stringify(message);
  }
  function toMessage(messageLike) {
    if (typeof messageLike === "string") {
      return { role: "user", content: messageLike };
    }
    return messageLike;
  }

  // node_modules/@litert-lm/core/dist/mutex.js
  var Mutex = class {
    mutexPromise = Promise.resolve();
    queueCount = 0;
    /**
     * Whether the mutex is currently locked.
     */
    get isLocked() {
      return this.queueCount > 0;
    }
    /**
     * Executes the provided function once the mutex is acquired, and releases
     * the mutex when the function completes.
     */
    async acquireAndRun(fn) {
      this.queueCount++;
      const previousPromise = this.mutexPromise;
      let resolveMutex;
      this.mutexPromise = new Promise((resolve) => {
        resolveMutex = resolve;
      });
      try {
        await previousPromise;
        return await fn();
      } finally {
        this.queueCount--;
        resolveMutex();
      }
    }
  };

  // node_modules/@litert-lm/core/dist/readable_stream_data_stream_wrapper.js
  var Slice = class {
    size;
    data;
    fullyDiscarded = false;
    discardedRegions = [];
    constructor(size) {
      this.size = size;
    }
    discard(start, end) {
      if (this.fullyDiscarded)
        return;
      if (this.discardedRegions.length === 0) {
        this.discardedRegions.push([start, end]);
        this.checkFullyDiscarded();
        return;
      }
      this.discardedRegions.push([start, end]);
      this.discardedRegions.sort((a, b) => a[0] - b[0]);
      const mergedRegions = [];
      for (const region of this.discardedRegions) {
        const lastRegion = mergedRegions[mergedRegions.length - 1];
        if (!lastRegion || lastRegion[1] < region[0]) {
          mergedRegions.push(region);
        } else {
          lastRegion[1] = Math.max(lastRegion[1], region[1]);
        }
      }
      this.discardedRegions = mergedRegions;
      this.checkFullyDiscarded();
    }
    getDiscardedRegions(start = 0, end = this.size) {
      const result = [];
      for (const [rStart, rEnd] of this.discardedRegions) {
        if (rStart >= end) {
          break;
        }
        if (rEnd <= start) {
          continue;
        }
        result.push([rStart, rEnd]);
      }
      return result;
    }
    checkFullyDiscarded() {
      if (this.discardedRegions.length === 1 && this.discardedRegions[0][0] === 0 && this.discardedRegions[0][1] === this.size) {
        this.fullyDiscarded = true;
        this.data = void 0;
      }
    }
  };
  var ReadableStreamDataStreamWrapper = class {
    stream;
    getWasmHeap;
    bytesPerSlice;
    slices = [];
    streamDone = false;
    globalPosition = 0;
    reader;
    leftoverData;
    isReading = false;
    constructor(stream, getWasmHeap, bytesPerSlice = 1e7) {
      this.stream = stream;
      this.getWasmHeap = getWasmHeap;
      this.bytesPerSlice = bytesPerSlice;
      try {
        this.reader = { byobReader: this.stream.getReader({ mode: "byob" }) };
      } catch (e) {
        this.reader = { defaultReader: this.stream.getReader() };
      }
    }
    *getViews(start, end) {
      if (start >= end) {
        return;
      }
      let scratchBuffer;
      let previousSlice;
      let position = start;
      while (position < end) {
        const sliceIndex = Math.floor(position / this.bytesPerSlice);
        const slicePosition = position % this.bytesPerSlice;
        const sliceStartGlobalPosition = sliceIndex * this.bytesPerSlice;
        let slice = this.slices[sliceIndex];
        if (!slice) {
          if (!previousSlice || !previousSlice.fullyDiscarded) {
            scratchBuffer = new Uint8Array(this.bytesPerSlice);
          }
          slice = new Slice(this.bytesPerSlice);
          slice.data = scratchBuffer;
          this.slices[sliceIndex] = slice;
        }
        const viewEnd = Math.min(this.bytesPerSlice, end - sliceStartGlobalPosition);
        const discardView = () => {
          slice.discard(slicePosition, viewEnd);
        };
        const viewLength = viewEnd - slicePosition;
        const setView = (view) => {
          slice.data = new Uint8Array(view.buffer, 0, view.buffer.byteLength);
          scratchBuffer = slice.data;
        };
        const checkReadable = () => {
          const discardedRegions = slice.getDiscardedRegions(slicePosition, viewEnd);
          if (discardedRegions.length > 0) {
            const globalDiscardedRegions = discardedRegions.map(([start2, end2]) => `[${start2 + sliceStartGlobalPosition}, ${end2 + sliceStartGlobalPosition}]`);
            throw new Error(`Slice ${sliceIndex} for data at ${position} overlaps discarded regions: [${globalDiscardedRegions.join(", ")}]`);
          }
          if (!slice.data) {
            throw new Error(`No ArrayBuffer for slice ${sliceIndex} at position ${position}`);
          }
        };
        const getView = () => {
          checkReadable();
          return new Uint8Array(slice.data.buffer, slice.data.byteOffset + slicePosition, slice.data.byteOffset + viewLength);
        };
        yield {
          getView,
          discardView,
          setView,
          checkReadable
        };
        previousSlice = slice;
        position += viewLength;
      }
    }
    async readInternal(destAddress, offset, count, discard) {
      if (this.isReading) {
        throw new Error("Concurrent reads are not supported");
      }
      this.isReading = true;
      try {
        for (const { getView, setView, checkReadable } of this.getViews(this.globalPosition, offset)) {
          checkReadable();
          const newView = await this.fillBufferFromStream(getView());
          setView(newView);
          if (newView.length === 0) {
            break;
          }
        }
        const endOfCachedRead = Math.min(this.globalPosition, offset + count);
        for (const { getView, discardView } of this.getViews(offset, endOfCachedRead)) {
          const view = getView();
          this.getWasmHeap().set(view, destAddress);
          if (discard)
            discardView();
          destAddress += view.length;
        }
        const startOfUncachedRead = Math.max(endOfCachedRead, offset);
        for (const { getView, setView, discardView } of this.getViews(startOfUncachedRead, offset + count)) {
          if (this.streamDone && this.globalPosition <= startOfUncachedRead)
            break;
          const newView = await this.fillBufferFromStream(getView());
          setView(newView);
          this.getWasmHeap().set(newView, destAddress);
          if (discard)
            discardView();
          destAddress += newView.length;
        }
      } finally {
        this.isReading = false;
      }
    }
    async fillBufferFromStream(buffer) {
      const byteLength = buffer.byteLength;
      if (byteLength === 0) {
        return buffer;
      }
      const byteOffset = buffer.byteOffset;
      let bytesRead = 0;
      let arrayBuffer = buffer.buffer;
      while (bytesRead < byteLength) {
        if (this.streamDone && (!this.leftoverData || this.leftoverData.length === 0)) {
          throw new Error(`Read from stream returned early EOF at position ${this.globalPosition}. Expected ${byteLength - bytesRead} more bytes.`);
        }
        if (this.reader.byobReader) {
          const view = new Uint8Array(arrayBuffer, byteOffset + bytesRead, byteLength - bytesRead);
          const result2 = await this.reader.byobReader.read(view);
          if (result2.done) {
            this.streamDone = true;
          }
          if (!result2.value) {
            throw new Error("Read from stream returned null value");
          }
          this.globalPosition += result2.value.byteLength;
          bytesRead += result2.value.byteLength;
          arrayBuffer = result2.value.buffer;
        } else {
          let chunk;
          if (this.leftoverData && this.leftoverData.length > 0) {
            chunk = this.leftoverData;
            this.leftoverData = void 0;
          } else {
            const result2 = await this.reader.defaultReader.read();
            if (result2.done) {
              this.streamDone = true;
              if (!result2.value) {
                continue;
              }
            }
            if (!result2.value) {
              throw new Error("Read from stream returned null value");
            }
            chunk = result2.value;
          }
          const bytesNeeded = byteLength - bytesRead;
          const bytesToCopy = Math.min(chunk.length, bytesNeeded);
          const destView = new Uint8Array(arrayBuffer, byteOffset + bytesRead, bytesToCopy);
          destView.set(chunk.subarray(0, bytesToCopy));
          if (chunk.length > bytesToCopy) {
            this.leftoverData = chunk.subarray(bytesToCopy);
          }
          this.globalPosition += bytesToCopy;
          bytesRead += bytesToCopy;
        }
      }
      const result = new Uint8Array(arrayBuffer, byteOffset, bytesRead);
      if (result.length !== byteLength) {
        throw new Error(`Read from stream returned ${result.length} bytes, expected ${byteLength}`);
      }
      return result;
    }
    doDiscard(offset, count) {
      for (const { discardView } of this.getViews(offset, offset + count)) {
        discardView();
      }
    }
    async readAndDiscard(destAddress, offset, count) {
      try {
        await this.readInternal(destAddress >>> 0, toNumber(offset), toNumber(count), true);
        return {};
      } catch (e) {
        return { error: e };
      }
    }
    async readAndPreserve(destAddress, offset, count) {
      try {
        await this.readInternal(destAddress >>> 0, toNumber(offset), toNumber(count), false);
        return {};
      } catch (e) {
        return { error: e };
      }
    }
    async discard(offset, count) {
      try {
        this.doDiscard(toNumber(offset), toNumber(count));
        return {};
      } catch (e) {
        return { error: e };
      }
    }
  };
  function toNumber(val) {
    if (typeof val === "number") {
      return val;
    }
    if (val > Number.MAX_SAFE_INTEGER) {
      throw new Error(`BigInt value ${val} too large to be represented as a number`);
    }
    return Number(val);
  }

  // node_modules/@litert-lm/core/dist/session_config.js
  function sessionConfigToWasmSessionConfig(sessionConfig, wasm = getGlobalLiteRtLm().liteRtLmWasm) {
    const wasmSessionConfig = wasm.SessionConfig.createDefault();
    if (sessionConfig.audioModalityEnabled !== void 0) {
      wasmSessionConfig.setAudioModalityEnabled(sessionConfig.audioModalityEnabled);
    }
    if (sessionConfig.visionModalityEnabled !== void 0) {
      wasmSessionConfig.setVisionModalityEnabled(sessionConfig.visionModalityEnabled);
    }
    if (sessionConfig.samplerParams !== void 0) {
      const samplerParams = wasmSessionConfig.getMutableSamplerParams();
      if (sessionConfig.samplerParams.type !== void 0) {
        samplerParams.setType({ value: sessionConfig.samplerParams.type });
      }
      if (sessionConfig.samplerParams.k !== void 0) {
        samplerParams.setK(sessionConfig.samplerParams.k);
      }
      if (sessionConfig.samplerParams.p !== void 0) {
        samplerParams.setP(sessionConfig.samplerParams.p);
      }
      if (sessionConfig.samplerParams.temperature !== void 0) {
        samplerParams.setTemperature(sessionConfig.samplerParams.temperature);
      }
      if (sessionConfig.samplerParams.seed !== void 0) {
        samplerParams.setSeed(sessionConfig.samplerParams.seed);
      }
    }
    if (sessionConfig.startTokenId !== void 0) {
      wasmSessionConfig.setStartTokenId(sessionConfig.startTokenId);
    }
    if (sessionConfig.numOutputCandidates !== void 0) {
      wasmSessionConfig.setNumOutputCandidates(sessionConfig.numOutputCandidates);
    }
    if (sessionConfig.samplerBackend !== void 0) {
      wasmSessionConfig.setSamplerBackend({ value: sessionConfig.samplerBackend });
    }
    if (sessionConfig.applyPromptTemplateInSession !== void 0) {
      wasmSessionConfig.setApplyPromptTemplateInSession(sessionConfig.applyPromptTemplateInSession);
    }
    if (sessionConfig.useExternalSampler !== void 0) {
      wasmSessionConfig.setUseExternalSampler(sessionConfig.useExternalSampler);
    }
    if (sessionConfig.maxOutputTokens !== void 0) {
      wasmSessionConfig.setMaxOutputTokens(sessionConfig.maxOutputTokens);
    }
    if (sessionConfig.stopTokenIds !== void 0) {
      const outerVec = new wasm.VectorVectorInt();
      for (const innerArr of sessionConfig.stopTokenIds) {
        const innerVec = new wasm.VectorInt();
        fillEmscriptenVector(innerArr, innerVec);
        outerVec.push_back(innerVec);
        innerVec.delete();
      }
      wasmSessionConfig.setStopTokenIds(outerVec);
      outerVec.delete();
    }
    return wasmSessionConfig;
  }
  function wasmSessionConfigToSessionConfig(wasmSessionConfig) {
    const samplerParams = wasmSessionConfig.getMutableSamplerParams();
    return {
      audioModalityEnabled: wasmSessionConfig.getAudioModalityEnabled(),
      visionModalityEnabled: wasmSessionConfig.getVisionModalityEnabled(),
      samplerParams: {
        type: samplerParams.type().value,
        k: samplerParams.k(),
        p: samplerParams.p(),
        temperature: samplerParams.temperature(),
        seed: samplerParams.seed()
      },
      stopTokenIds: consumeEmscriptenVectorToArray(wasmSessionConfig.getStopTokenIds()).map(consumeEmscriptenVectorToArray),
      startTokenId: wasmSessionConfig.getStartTokenId(),
      numOutputCandidates: wasmSessionConfig.getNumOutputCandidates(),
      samplerBackend: wasmSessionConfig.getSamplerBackend().value,
      applyPromptTemplateInSession: wasmSessionConfig.getApplyPromptTemplateInSession(),
      useExternalSampler: wasmSessionConfig.getUseExternalSampler(),
      maxOutputTokens: wasmSessionConfig.getMaxOutputTokens()
    };
  }

  // node_modules/@litert-lm/core/dist/session.js
  var BUSY_MESSAGE2 = "Session is busy. An operation is already in progress.";
  var Session = class {
    session;
    mutexes;
    config;
    isBusy = false;
    constructor(session, mutexes) {
      this.session = session;
      this.mutexes = mutexes;
      const wasmSessionConfig = session.getSessionConfig();
      this.config = wasmSessionConfigToSessionConfig(wasmSessionConfig);
      wasmSessionConfig.delete();
    }
    async runPrefill(inputs) {
      if (this.isBusy) {
        throw new Error(BUSY_MESSAGE2);
      }
      this.isBusy = true;
      try {
        await this.mutexes.executor.acquireAndRun(async () => {
          await this.session.runPrefill(inputs);
        });
      } finally {
        this.isBusy = false;
      }
    }
    async runDecode() {
      if (this.isBusy) {
        throw new Error(BUSY_MESSAGE2);
      }
      this.isBusy = true;
      try {
        return await this.mutexes.executor.acquireAndRun(async () => {
          const wasmResponses = await this.session.runDecode();
          return new Responses(wasmResponses);
        });
      } finally {
        this.isBusy = false;
      }
    }
    /**
     * Sends a signal to cancel any current generation.
     */
    cancel() {
      this.session.cancelProcess();
    }
    async delete() {
      await this.mutexes.executor.acquireAndRun(() => {
        this.session.delete();
      });
    }
  };
  var Responses = class {
    responses;
    constructor(responses) {
      this.responses = responses;
    }
    getTexts() {
      const texts = this.responses.getTexts();
      return consumeEmscriptenVectorToArray(texts);
    }
    delete() {
      this.responses.delete();
    }
  };

  // node_modules/@litert-lm/core/dist/engine.js
  var modelPathIndex = 0;
  var Engine = class _Engine {
    wasm;
    engine;
    deleteCallback;
    settings;
    mutexes = {
      executor: new Mutex()
    };
    constructor(wasm, engine2, modelSource, deleteCallback) {
      this.wasm = wasm;
      this.engine = engine2;
      this.deleteCallback = deleteCallback;
      const wasmEngineSettings = engine2.getEngineSettings();
      const settingsWithoutModel = wasmEngineSettingsToEngineSettings(wasmEngineSettings);
      this.settings = {
        ...settingsWithoutModel,
        model: modelSource
      };
      wasmEngineSettings.delete();
    }
    static async create(engineSettings, inputPromptAsHint = "") {
      const litertlm = await getOrLoadGlobalLiteRtLm();
      const wasm = litertlm.liteRtLmWasm;
      const dstPath = `/model_${modelPathIndex++}.litertlm`;
      const backend = engineSettings.backend ?? Backend.GPU_ARTISAN;
      engineSettings = { ...engineSettings, backend };
      const samplerBackend = engineSettings.mainExecutorSettings?.samplerBackend;
      if (backend === Backend.GPU || backend === Backend.GPU_ARTISAN || samplerBackend === Backend.GPU || samplerBackend === Backend.GPU_ARTISAN) {
        await litertlm.setupDefaultWebGpuDevice();
      }
      const cleanup = new Cleanup();
      const modelStream = await modelToStream(engineSettings.model);
      let engine2;
      try {
        let modelAssets;
        const isStreaming = backend === Backend.GPU_ARTISAN;
        if (isStreaming) {
          const streamWrapper = new ReadableStreamDataStreamWrapper(modelStream, () => wasm.HEAPU8);
          const dataStream = wasm.ReadableStreamDataStream.create(streamWrapper);
          cleanup.add(() => {
            dataStream.delete();
          });
          modelAssets = wasm.ModelAssets.createStreaming(dataStream);
        } else {
          await loadModelToVfs(wasm, modelStream, dstPath);
          cleanup.add(() => {
            try {
              wasm.FS.unlink(dstPath);
            } catch (e) {
              console.error(`Error removing file from VFS:`, e);
            }
          });
          modelAssets = wasm.ModelAssets.create(dstPath);
        }
        const cleanupModelAssets = cleanup.add(() => {
          modelAssets.delete();
        });
        const wasmEngineSettings = wasm.EngineSettings.createDefault(modelAssets, { value: backend });
        cleanupModelAssets();
        const cleanupWasmEngineSettings = cleanup.add(() => {
          wasmEngineSettings.delete();
        });
        fillWasmEngineSettingsFromEngineSettings(wasmEngineSettings, engineSettings, backend, wasm);
        wasmEngineSettings.setParallelFileSectionLoading(false);
        wasmEngineSettings.setSingleThreadedExecution(true);
        if (isStreaming) {
          engine2 = await wasm.Engine.createStreaming(wasmEngineSettings, inputPromptAsHint);
        } else {
          engine2 = await wasm.Engine.createEngine(wasmEngineSettings, inputPromptAsHint);
        }
        cleanupWasmEngineSettings();
        cleanup.add(() => {
          engine2.delete();
        });
        return new _Engine(wasm, engine2, engineSettings.model, () => cleanup.run());
      } catch (e) {
        cleanup.run();
        throw e;
      }
    }
    async createSession(sessionConfig = {}) {
      return this.mutexes.executor.acquireAndRun(() => {
        const wasmSessionConfig = sessionConfigToWasmSessionConfig(sessionConfig, this.wasm);
        const wasmSession = this.engine.createSession(wasmSessionConfig);
        wasmSessionConfig.delete();
        return new Session(wasmSession, this.mutexes);
      });
    }
    async createConversation(config) {
      return this.mutexes.executor.acquireAndRun(() => {
        let wasmConfig;
        let wasmSessionConfig;
        if (config) {
          wasmSessionConfig = sessionConfigToWasmSessionConfig(config.sessionConfig || {}, this.wasm);
          const prefaceJson = config.preface ? JSON.stringify(config.preface) : "";
          wasmConfig = this.wasm.ConversationConfig.createCustom(this.engine, wasmSessionConfig, !!config.enableConstrainedDecoding, !!config.prefillPrefaceOnInit, !!config.filterChannelContentFromKvCache, prefaceJson);
        } else {
          wasmConfig = this.wasm.ConversationConfig.createDefault(this.engine);
        }
        const wasmConversation = this.wasm.Conversation.create(this.engine, wasmConfig);
        wasmConfig.delete();
        if (wasmSessionConfig) {
          wasmSessionConfig.delete();
        }
        return new Conversation(wasmConversation, this.engine, this.mutexes);
      });
    }
    async delete() {
      await this.mutexes.executor.acquireAndRun(() => {
        this.deleteCallback();
      });
    }
  };
  async function modelToStream(model) {
    if (model instanceof ReadableStream) {
      return model;
    }
    const modelUrl = model;
    const response = await fetch(modelUrl, {
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch model file from ${modelUrl}`);
    }
    return response.body;
  }
  async function loadModelToVfs(module, modelStream, dstPath) {
    let fileContent;
    const reader = modelStream.getReader();
    const chunks = [];
    let totalLength = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        break;
      if (value) {
        chunks.push(value);
        totalLength += value.length;
      }
    }
    fileContent = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      fileContent.set(chunk, offset);
      offset += chunk.length;
    }
    try {
      module.FS.writeFile(dstPath, fileContent);
    } catch (e) {
      console.error(`Error writing file to VFS:`, e);
      throw e;
    }
  }

  // src/core/constants.js
  var TICK_RATE = 60;
  var FIXED_DT = 1 / TICK_RATE;
  var DIFFICULTY_SETTINGS = Object.freeze({
    normal: { name: "Normal", color: "hsl(var(--diff-normal))", hpMult: 1, dmgMult: 1, econMult: 1, xpMult: 1, baseGold: 175, baseHpMult: 1, thinkRate: 1.8, aiAggression: 0.35 },
    hard: { name: "Hard", color: "hsl(var(--diff-hard))", hpMult: 1.2, dmgMult: 1.1, econMult: 1.4, xpMult: 1.2, baseGold: 250, baseHpMult: 1.2, thinkRate: 1.15, aiAggression: 0.58 },
    harder: { name: "Harder", color: "hsl(var(--diff-harder))", hpMult: 1.5, dmgMult: 1.3, econMult: 2, xpMult: 1.5, baseGold: 500, baseHpMult: 1.5, thinkRate: 0.65, aiAggression: 0.82 },
    impossible: { name: "Impossible", color: "hsl(var(--diff-impossible))", hpMult: 2, dmgMult: 1.5, econMult: 4, xpMult: 2.5, baseGold: 1500, baseHpMult: 2, thinkRate: 0.28, aiAggression: 1 }
  });

  // src/client/gemma-web-config.js
  var WEB_MODEL = Object.freeze({
    name: "Gemma 4 E2B",
    revision: "b3ca0d2f076785a8f4b2219ddbd2bdb99954eae1",
    bytes: 2008432640,
    sha256: "3a08e8d94e23b814ae5414469c370c503813949acb8ceaa17e4ebf8a35af35b5",
    url: "https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm/resolve/b3ca0d2f076785a8f4b2219ddbd2bdb99954eae1/gemma-4-E2B-it-web.litertlm"
  });
  var RUNTIME_VERSION = "0.12.1";
  var MODEL_DIRECTORY = "ink-gemma-model";
  var RUNTIME_CACHE = `ink-gemma-runtime-${RUNTIME_VERSION}`;
  var WEB_EMOTIONS = Object.freeze(["Centered", "Confident", "Brave", "Curious", "Worried", "Tense", "Weary", "Excited"]);

  // node_modules/@noble/hashes/_u64.js
  var fromNumH = (n) => n / 2 ** 32 | 0;
  var fromNumL = (n) => n >>> 0;
  function setU64FromNum(view, byteOffset, n, isLE) {
    const h = fromNumH(n);
    const l = fromNumL(n);
    view.setUint32(byteOffset, isLE ? l : h, isLE);
    view.setUint32(byteOffset + 4, isLE ? h : l, isLE);
  }

  // node_modules/@noble/hashes/utils.js
  function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a && a.BYTES_PER_ELEMENT === 1;
  }
  var atitle = (title) => title ? `"${title}" ` : "";
  function anumber(n, title = "") {
    if (typeof n !== "number")
      throw new TypeError(atitle(title) + "expected number, got " + typeof n);
    if (!Number.isSafeInteger(n) || n < 0)
      throw new RangeError(atitle(title) + "expected integer >= 0, got " + n);
    return n;
  }
  function abytes(value, length, title = "") {
    if (isBytes(value) && (length === void 0 || value.length === length))
      return value;
    if (length !== void 0)
      anumber(length, "length");
    const bytes = isBytes(value);
    const ofLen = length !== void 0 ? ` of length ${length}` : "";
    const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
    const message = atitle(title) + "expected Uint8Array" + ofLen + ", got " + got;
    if (!bytes)
      throw new TypeError(message);
    throw new RangeError(message);
  }
  var aobject = (value, label) => {
    if (value === null || typeof value !== "object" || Array.isArray(value))
      throw new TypeError((label === "object" ? "" : `"${label}" `) + "expected object, got type=" + typeof value);
  };
  var aopts = (value, label) => {
    aobject(value, label);
    const proto = Object.getPrototypeOf(value);
    if (proto !== Object.prototype && proto !== null)
      throw new TypeError(`"${label}" expected plain object`);
    if (Object.hasOwn(value, "__proto__"))
      throw new TypeError(`"${label}.__proto__" is not allowed`);
  };
  function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("hash was destroyed");
    if (checkFinished && instance.finished)
      throw new Error("digest() was already called");
  }
  function aoutput(out, instance) {
    abytes(out, void 0, "output");
    const min = instance.outputLen;
    if (!(out.length >= min)) {
      throw new RangeError('"output" expected length >= ' + min);
    }
  }
  function clean(...arrays) {
    for (let i = 0; i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  function checkOpts(defaults, opts, title = "opts") {
    aopts(defaults, "defaults");
    if (opts !== void 0)
      aopts(opts, title);
    const merged = Object.assign(/* @__PURE__ */ Object.create(null), defaults, opts);
    return merged;
  }
  function createHasher(hashCons, info = {}) {
    if (typeof hashCons !== "function")
      throw new TypeError('"hashCons" expected function, got type=' + typeof hashCons);
    info = checkOpts({}, info, "info");
    const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
    const tmp = hashCons(void 0);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.canXOF = tmp.canXOF;
    hashC.create = (opts) => hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
  }
  var oidNist = (suffix) => ({
    // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
    // Larger suffix values would need base-128 OID encoding and a different length byte.
    oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix])
  });

  // node_modules/@noble/hashes/_md.js
  function Chi(a, b, c) {
    return a & b ^ ~a & c;
  }
  function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
  }
  var HashMD = class {
    blockLen;
    outputLen;
    canXOF = false;
    padOffset;
    isLE;
    // For partial updates less than block size
    buffer;
    view;
    finished = false;
    length = 0;
    pos = 0;
    destroyed = false;
    constructor(blockLen, outputLen, padOffset, isLE) {
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      aexists(this);
      abytes(data);
      const { view, buffer, blockLen } = this;
      const len = data.length;
      let processed = false;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          processed = true;
          continue;
        }
        buffer.set(pos === 0 && take === len ? data : data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
          processed = true;
        }
      }
      this.length += data.length;
      if (processed)
        this.roundClean();
      return this;
    }
    digestInto(out) {
      aexists(this);
      aoutput(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      buffer.fill(0, pos);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        buffer.fill(0);
      }
      setU64FromNum(view, blockLen - 8, this.length * 8, isLE);
      this.process(view, 0);
      this.roundClean();
      const oview = out === buffer ? view : createView(out);
      const len = this.outputLen;
      const outLen = len / 4;
      const state = this.get();
      if (len % 4 || outLen > state.length)
        throw new Error("invalid outputLen");
      for (let i = 0; i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneIntoMeta(to) {
      const { buffer, length, finished, destroyed, pos } = this;
      to.destroyed = destroyed;
      to.finished = finished;
      to.length = length;
      to.pos = pos;
      if (pos)
        to.buffer.set(buffer);
      return to;
    }
    clone() {
      return this._cloneInto();
    }
  };
  var SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);

  // node_modules/@noble/hashes/sha2.js
  var SHA256_K = /* @__PURE__ */ Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  var SHA2_32B = class extends HashMD {
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    // Numeric initializers matter: starting the fields as `undefined` changes
    // V8's field representation and makes sha256 3x slower (measured).
    A = 0;
    B = 0;
    C = 0;
    D = 0;
    E = 0;
    F = 0;
    G = 0;
    H = 0;
    constructor(outputLen, IV) {
      super(64, outputLen, 8, false);
      this.A = IV[0] | 0;
      this.B = IV[1] | 0;
      this.C = IV[2] | 0;
      this.D = IV[3] | 0;
      this.E = IV[4] | 0;
      this.F = IV[5] | 0;
      this.G = IV[6] | 0;
      this.H = IV[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    _cloneInto(to) {
      (to ||= new this.constructor()).set(...this.get());
      return this._cloneIntoMeta(to);
    }
    process(view, offset) {
      for (let i = 0; i < 16; i++, offset += 4)
        SHA256_W[i] = view.getUint32(offset, false);
      for (let i = 16; i < 64; i++) {
        const W15 = SHA256_W[i - 15];
        const W2 = SHA256_W[i - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0; i < 64; i++) {
        const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
        const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        const T2 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T1 | 0;
        D = C;
        C = B;
        B = A;
        A = T1 + T2 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      clean(SHA256_W);
    }
    destroy() {
      this.destroyed = true;
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      clean(this.buffer);
    }
  };
  var _SHA256 = class extends SHA2_32B {
    constructor() {
      super(32, SHA256_IV);
    }
  };
  var sha256 = /* @__PURE__ */ createHasher(
    () => new _SHA256(),
    /* @__PURE__ */ oidNist(1)
  );

  // src/client/gemma-model-store.js
  async function modelDirectory() {
    return (await navigator.storage.getDirectory()).getDirectoryHandle(MODEL_DIRECTORY, { create: true });
  }
  async function cachedModel(model = WEB_MODEL) {
    try {
      const directory = await modelDirectory();
      const metadata = JSON.parse(await (await (await directory.getFileHandle("verified.json")).getFile()).text());
      if (metadata.sha256 !== model.sha256) return null;
      const file = await (await directory.getFileHandle("model.litertlm")).getFile();
      return file.size === model.bytes ? file : null;
    } catch {
      return null;
    }
  }
  async function downloadVerifiedModel({ model = WEB_MODEL, onProgress = () => {
  }, fetchModel = fetch } = {}) {
    const existing = await cachedModel(model);
    if (existing) return existing;
    const directory = await modelDirectory();
    let partialBytes = 0;
    try {
      partialBytes = (await (await directory.getFileHandle("model.litertlm")).getFile()).size;
    } catch {
    }
    const estimate = await navigator.storage.estimate();
    if (estimate.quota - estimate.usage + partialBytes < model.bytes + 128 * 1024 * 1024)
      throw new Error("Gemma needs about 2.2 GB of free browser storage. Free space or use the standard opponent.");
    try {
      await directory.removeEntry("verified.json");
    } catch (e) {
      if (e.name !== "NotFoundError") throw e;
    }
    const handle = await directory.getFileHandle("model.litertlm", { create: true });
    const writer = await handle.createSyncAccessHandle();
    let reader;
    try {
      writer.truncate(0);
      const response = await fetchModel(model.url, { credentials: "omit", referrerPolicy: "no-referrer" });
      if (!response.ok || !response.body) throw new Error(`Model download failed (${response.status}). Please retry online.`);
      reader = response.body.getReader();
      const hash = sha256.create();
      let bytes = 0, lastProgress = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (bytes + value.length > model.bytes) throw new Error("The model download has an unexpected size.");
        hash.update(value);
        const written = writer.write(value, { at: bytes });
        if (written !== value.length) throw new Error("Browser storage is full.");
        bytes += written;
        if (performance.now() - lastProgress > 500) {
          onProgress(bytes / model.bytes * 100);
          lastProgress = performance.now();
        }
      }
      const digest = Array.from(hash.digest(), (n) => n.toString(16).padStart(2, "0")).join("");
      if (bytes !== model.bytes || digest !== model.sha256) throw new Error("The model download failed its integrity check. Please retry.");
      writer.flush();
    } finally {
      await reader?.cancel().catch(() => {
      });
      writer.close();
    }
    const metadata = await (await directory.getFileHandle("verified.json", { create: true })).createWritable();
    await metadata.write(JSON.stringify({ sha256: model.sha256 }));
    await metadata.close();
    return handle.getFile();
  }

  // src/client/gemma-worker.js
  var engine;
  var busy = false;
  var send = (type, data = {}) => self.postMessage({ type, ...data });
  async function loadRuntime() {
    const cache = await caches.open(RUNTIME_CACHE);
    const base = new URL(`./vendor/litert-lm-${RUNTIME_VERSION}/`, self.location.href);
    const get = async (name) => {
      const url = new URL(name, base).href;
      let response = await cache.match(url);
      if (!response) {
        response = await fetch(url);
        if (!response.ok) throw new Error("Could not load the Gemma runtime. Please retry online.");
        await cache.put(url, response.clone());
      }
      return URL.createObjectURL(new Blob([await response.blob()], { type: name.endsWith(".wasm") ? "application/wasm" : "text/javascript" }));
    };
    const js = await get("litertlm_wasm_compat_internal.js");
    const wasm = await get("litertlm_wasm_compat_internal.wasm");
    self.Module = { locateFile: () => wasm };
    try {
      await loadLiteRtLm(`${js}#runtime.js`);
    } finally {
      URL.revokeObjectURL(js);
      URL.revokeObjectURL(wasm);
    }
  }
  self.onmessage = async ({ data }) => {
    if (busy) return;
    busy = true;
    try {
      if (data.type === "load") {
        const adapter = await navigator.gpu?.requestAdapter();
        if (!adapter || adapter.info?.isFallbackAdapter || !adapter.features.has("shader-f16"))
          throw new Error("Gemma needs a WebGPU GPU with shader-f16. Try an updated Chrome or Edge with hardware acceleration.");
        send("status", { state: "downloading", progress: 0 });
        const model = await downloadVerifiedModel({ onProgress: (progress) => send("status", { state: "downloading", progress }) });
        send("status", { state: "loading", cached: true });
        await loadRuntime();
        engine = await Engine.create({ model: model.stream(), mainExecutorSettings: { maxNumTokens: 2048 } });
        send("status", { state: "ready", cached: true });
      } else if (data.type === "generate" && engine) {
        const start = performance.now();
        const conversation = await engine.createConversation({
          preface: { extra_context: { enable_thinking: false } },
          sessionConfig: { maxOutputTokens: 96 }
        });
        let text;
        try {
          const reply = await conversation.sendMessage(data.prompt);
          text = (reply.content || []).filter((item) => item.type === "text").map((item) => item.text).join("");
        } finally {
          await conversation.delete();
        }
        send("reply", { id: data.id, text, durationMs: performance.now() - start });
      }
    } catch (error) {
      send("error", { id: data.id, message: String(error.message || error).slice(0, 300) });
    } finally {
      busy = false;
    }
  };
})();
