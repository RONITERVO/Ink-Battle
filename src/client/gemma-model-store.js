import { sha256 } from '@noble/hashes/sha2.js';
import { MODEL_DIRECTORY, WEB_MODEL } from './gemma-web-config.js';

export async function modelDirectory() {
  return (await navigator.storage.getDirectory()).getDirectoryHandle(MODEL_DIRECTORY, { create: true });
}
export async function cachedModel(model = WEB_MODEL) {
  try {
    const directory = await modelDirectory();
    const metadata = JSON.parse(await (await (await directory.getFileHandle('verified.json')).getFile()).text());
    if (metadata.sha256 !== model.sha256) return null;
    const file = await (await directory.getFileHandle('model.litertlm')).getFile();
    return file.size === model.bytes ? file : null;
  } catch { return null; }
}
export async function removeModel() {
  const directory = await modelDirectory();
  for (const name of ['verified.json', 'model.litertlm']) {
    try { await directory.removeEntry(name); } catch (e) { if (e.name !== 'NotFoundError') throw e; }
  }
}

export async function downloadVerifiedModel({ model = WEB_MODEL, onProgress = () => {}, fetchModel = fetch } = {}) {
  const existing = await cachedModel(model);
  if (existing) return existing;
  const directory = await modelDirectory();
  let partialBytes = 0;
  try { partialBytes = (await (await directory.getFileHandle('model.litertlm')).getFile()).size; } catch { /* first download */ }
  const estimate = await navigator.storage.estimate();
  if (estimate.quota - estimate.usage + partialBytes < model.bytes + 128 * 1024 * 1024)
    throw new Error('Gemma needs about 2.2 GB of free browser storage. Free space or use the standard opponent.');
  try { await directory.removeEntry('verified.json'); } catch (e) { if (e.name !== 'NotFoundError') throw e; }
  const handle = await directory.getFileHandle('model.litertlm', { create: true });
  const writer = await handle.createSyncAccessHandle();
  let reader;
  try {
    writer.truncate(0);
    // Terminating this worker cancels the fetch and closes the exclusive file handle.
    const response = await fetchModel(model.url, { credentials: 'omit', referrerPolicy: 'no-referrer' });
    if (!response.ok || !response.body) throw new Error(`Model download failed (${response.status}). Please retry online.`);
    reader = response.body.getReader();
    const hash = sha256.create();
    let bytes = 0, lastProgress = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      if (bytes + value.length > model.bytes) throw new Error('The model download has an unexpected size.');
      hash.update(value);
      const written = writer.write(value, { at: bytes });
      if (written !== value.length) throw new Error('Browser storage is full.');
      bytes += written;
      if (performance.now() - lastProgress > 500) {
        onProgress(bytes / model.bytes * 100);
        lastProgress = performance.now();
      }
    }
    const digest = Array.from(hash.digest(), n => n.toString(16).padStart(2, '0')).join('');
    if (bytes !== model.bytes || digest !== model.sha256) throw new Error('The model download failed its integrity check. Please retry.');
    writer.flush();
  } finally { await reader?.cancel().catch(() => {}); writer.close(); }
  const metadata = await (await directory.getFileHandle('verified.json', { create: true })).createWritable();
  await metadata.write(JSON.stringify({ sha256: model.sha256 }));
  await metadata.close();
  return handle.getFile();
}

