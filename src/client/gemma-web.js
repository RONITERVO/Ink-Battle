import { cachedModel, removeModel } from './gemma-model-store.js';
import { RUNTIME_CACHE } from './gemma-web-config.js';

// The worker owns the GPU. Termination is also cancellation for stuck GPU calls.
export class WebGemma {
  constructor({ onStatus, onReply, onError, workerFactory = () => new Worker('./web/gemma-worker.js') }) {
    Object.assign(this, { onStatus, onReply, onError, workerFactory });
    this.status = { state: 'off', cached: false, busy: false, modelName: 'Gemma 4 E2B (web)' };
    this.worker = null;
    this.timer = null;
    this.pending = null;
    this.generation = 0;
  }
  update(next) { Object.assign(this.status, next); this.onStatus({ ...this.status }); }
  async inspect() {
    if (!globalThis.isSecureContext || !navigator.gpu || !navigator.storage?.getDirectory || typeof Worker === 'undefined') {
      this.update({ state: 'unavailable', message: 'Gemma needs a compatible GPU and an updated Chrome or Edge over HTTPS. The standard opponent is ready to play.' });
      return;
    }
    const generation = this.generation;
    const cached = !!await cachedModel();
    if (generation === this.generation) this.update({ cached });
  }
  load() {
    if (['loading', 'downloading', 'removing', 'ready', 'unavailable'].includes(this.status.state)) return;
    const generation = ++this.generation;
    this.update({ state: this.status.cached ? 'loading' : 'downloading', progress: 0, message: '', busy: false });
    try {
      this.worker = this.workerFactory();
      this.worker.onmessage = ({ data }) => {
        if (generation !== this.generation) return;
        if (data.type === 'status') {
          if (data.state === 'ready') clearTimeout(this.timer);
          this.update(data);
        } else if (data.type === 'reply' && data.id === this.pending) {
          clearTimeout(this.timer); this.pending = null; this.update({ busy: false }); this.onReply(data);
        } else if (data.type === 'error') this.fail(data.message);
      };
      this.worker.onerror = () => { if (generation === this.generation) this.fail('The Gemma worker stopped. Turn it on again to retry.'); };
      this.worker.postMessage({ type: 'load' });
      this.timer = setTimeout(() => this.fail('Gemma loading timed out. Check your connection and retry.'), 20 * 60 * 1000);
    } catch (e) { this.fail(e.message); }
  }
  generate(id, prompt) {
    if (this.status.state !== 'ready' || this.pending) return false;
    this.pending = id; this.update({ busy: true });
    this.timer = setTimeout(() => this.fail('Gemma took too long. The standard opponent continues; turn Gemma on to retry.'), 30000);
    this.worker.postMessage({ type: 'generate', id, prompt });
    return true;
  }
  stop() {
    ++this.generation; clearTimeout(this.timer); this.worker?.terminate(); this.worker = null; this.pending = null;
    this.update({ state: 'off', busy: false, progress: 0, message: '' });
  }
  fail(message) {
    const id = this.pending;
    this.stop(); this.update({ state: 'error', message });
    this.onError(id, message);
  }
  async remove() {
    if (this.status.state === 'removing') return;
    this.stop();
    this.update({ state: 'removing' });
    try { await removeModel(); await caches.delete(RUNTIME_CACHE); this.update({ state: 'off', cached: false }); }
    catch { this.update({ state: 'error', message: 'Could not remove the model. Close other Ink Battle tabs and retry.' }); }
  }
}
