import { Engine, loadLiteRtLm } from '@litert-lm/core';
import { RUNTIME_CACHE, RUNTIME_VERSION } from './gemma-web-config.js';
import { downloadVerifiedModel } from './gemma-model-store.js';

let engine, busy = false;
const send = (type, data = {}) => self.postMessage({ type, ...data });

async function loadRuntime() {
  const cache = await caches.open(RUNTIME_CACHE);
  // The compatibility build works without SharedArrayBuffer/COOP/COEP on Pages.
  const base = new URL(`./vendor/litert-lm-${RUNTIME_VERSION}/`, self.location.href);
  const get = async name => {
    const url = new URL(name, base).href;
    let response = await cache.match(url);
    if (!response) {
      response = await fetch(url);
      if (!response.ok) throw new Error('Could not load the Gemma runtime. Please retry online.');
      await cache.put(url, response.clone());
    }
    return URL.createObjectURL(new Blob([await response.blob()], { type: name.endsWith('.wasm') ? 'application/wasm' : 'text/javascript' }));
  };
  const js = await get('litertlm_wasm_compat_internal.js');
  const wasm = await get('litertlm_wasm_compat_internal.wasm');
  self.Module = { locateFile: () => wasm };
  try { await loadLiteRtLm(`${js}#runtime.js`); }
  finally { URL.revokeObjectURL(js); URL.revokeObjectURL(wasm); }
}

self.onmessage = async ({ data }) => {
  if (busy) return;
  busy = true;
  try {
    if (data.type === 'load') {
      const adapter = await navigator.gpu?.requestAdapter();
      if (!adapter || adapter.info?.isFallbackAdapter || !adapter.features.has('shader-f16'))
        throw new Error('Gemma needs a WebGPU GPU with shader-f16. Try an updated Chrome or Edge with hardware acceleration.');
      send('status', { state: 'downloading', progress: 0 });
      const model = await downloadVerifiedModel({ onProgress: progress => send('status', { state: 'downloading', progress }) });
      send('status', { state: 'loading', cached: true });
      await loadRuntime();
      engine = await Engine.create({ model: model.stream(), mainExecutorSettings: { maxNumTokens: 2048 } });
      send('status', { state: 'ready', cached: true });
    } else if (data.type === 'generate' && engine) {
      const start = performance.now();
      // Fresh bounded context per turn; the host includes the last two chat lines.
      const conversation = await engine.createConversation({
        preface: { extra_context: { enable_thinking: false } }, sessionConfig: { maxOutputTokens: 96 }
      });
      let text;
      try {
        const reply = await conversation.sendMessage(data.prompt);
        text = (reply.content || []).filter(item => item.type === 'text').map(item => item.text).join('');
      } finally { await conversation.delete(); }
      send('reply', { id: data.id, text, durationMs: performance.now() - start });
    }
  } catch (error) { send('error', { id: data.id, message: String(error.message || error).slice(0, 300) }); }
  finally { busy = false; }
};
