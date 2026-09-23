export function bindWebGemmaUI(runtime, director) {
  const open = () => { runtime.togglePause(true); document.getElementById('web-gemma-dialog').showModal(); };
  document.querySelectorAll('[data-web-gemma-open]').forEach(button => {
    button.classList.remove('hidden'); button.addEventListener('click', open);
  });
  document.getElementById('web-gemma-enable').onclick = () => {
    runtime.togglePause(true); navigator.storage.persist?.().catch(() => {}); director.web.load();
  };
  document.getElementById('web-gemma-stop').onclick = () => { director.cancelPending(); director.web.stop(); };
  document.getElementById('web-gemma-remove').onclick = () => { director.cancelPending(); director.web.remove(); };
}

export function renderWebGemmaStatus(s) {
  const working = ['loading', 'downloading'].includes(s.state);
  const label = s.state === 'ready' ? 'Gemma is on. Replies stay on this device.' :
    s.state === 'removing' ? 'Removing the saved Gemma download…' :
    s.state === 'downloading' ? `Downloading Gemma: ${Math.floor(s.progress || 0)}% of 2.01 GB. You can cancel below.` :
    s.state === 'loading' ? 'Preparing Gemma on your GPU. The battle stays paused.' :
    s.state === 'error' || s.state === 'unavailable' ? s.message : s.cached ? 'Gemma is off. Its download is saved on this device.' : 'Gemma is off. The standard opponent is ready.';
  document.getElementById('web-gemma-status').textContent = label;
  const enable = document.getElementById('web-gemma-enable');
  enable.textContent = s.cached ? 'Turn Gemma on' : 'Download & turn on (2.01 GB)';
  enable.disabled = working || s.state === 'removing' || s.state === 'ready' || s.state === 'unavailable';
  document.getElementById('web-gemma-stop').disabled = !working && s.state !== 'ready';
  document.getElementById('web-gemma-stop').textContent = working ? 'Cancel' : 'Turn off';
  document.getElementById('web-gemma-remove').disabled = working || s.state === 'removing';
  document.querySelectorAll('.difficulty-grid button, #pause-overlay button[onclick="togglePause(false)"]').forEach(b => { b.disabled = working; });
  document.getElementById('gemma-card').classList.remove('hidden');
  document.getElementById('gemma-status').textContent = s.state === 'ready' ? 'Gemma on' : s.state === 'off' ? 'Gemma off' : `Gemma ${s.state}`;
  const button = document.getElementById('btn-gemma-install');
  button.textContent = 'Settings'; button.disabled = false; button.classList.remove('hidden');
}
