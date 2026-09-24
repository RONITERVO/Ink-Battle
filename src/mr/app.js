import * as THREE from 'three';
import { Session } from '../sdk/session.js';
import { TabletopHost } from './host.js';
import { TabletopScene } from './scene.js';
import { TabletopInput } from './input.js';
import { createAudio } from '../client/audio.js';

const SAVE_KEY = 'ink-battle-tabletop-v1',
  canvas = document.querySelector('#tabletop'),
  status = document.querySelector('#status');
const enter = document.querySelector('#enter-mr'),
  panel = document.querySelector('#welcome');
let view,
  input,
  xrSession,
  hitSource,
  anchor,
  anchorOffset,
  placing = false,
  initialized = false,
  pendingPlace = false,
  lastTime = null,
  savedAt = 0,
  trackingLost = false,
  placementGeneration = 0;
const timings = [];
let announced = '';
let xrSamples = [],
  xrSummary = { frames: 0, peakUnits: 0, peakDrawCalls: 0, peakTriangles: 0 };
function xrMeasurements() {
  const sorted = [...xrSamples].sort((a, b) => a - b);
  return {
    ...xrSummary,
    recentSamples: sorted.length,
    frameIntervalMedianMs:
      sorted[Math.floor((sorted.length - 1) * 0.5)] ?? null,
    frameIntervalP95Ms: sorted[Math.floor((sorted.length - 1) * 0.95)] ?? null
  };
}
const musicRuntime = { gameState: null, globalTime: 0 };
const music = createAudio(musicRuntime).MusicDirector;
let lastPaused = null;
function syncMusic(state) {
  musicRuntime.globalTime = (state?.tick || 0) / 60;
  musicRuntime.gameState = state
    ? {
        ...state,
        units: { pool: state.units },
        specialActive: state.specials.length > 0
      }
    : null;
}
const host = new TabletopHost({
  onEvent: (event) => {
    if (event.type === 'message') message(event.text);
    if (event.type === 'start') {
      syncMusic(host.observe());
      music.start();
      panel.classList.add('compact');
      message(
        'Lift troops into the green rally area. Cannons belong at your base on the left.'
      );
    }
    if (event.type === 'drop' && event.result.ok) {
      view.labelClock = 0;
      save();
    }
    if (event.type === 'drop')
      input?.feedback(event.token.owner, event.result.ok);
    if (event.type === 'quality')
      message(`Appearance: ${event.quality}. Lift the feather to change it.`);
    if (event.type === 'music') {
      music.toggleMute();
      message(music.muted ? 'Music off.' : 'Music on.');
    }
    if (event.type === 'menu') {
      input?.cancelAll();
      music.suspendForPage();
      panel.classList.remove('compact');
      message('Choose a difficulty seal for a new battle.');
      save();
    }
    if (event.type === 'finish') {
      if (event.winner === 0) music.suspendForPage();
      else music.setOutcome(event.winner === 1);
      message(
        event.winner === 0
          ? 'A draw. Drop another seal for a new battle.'
          : event.winner === 1
            ? 'Victory! Drop another seal to begin again.'
            : 'Defeat. Drop another seal for a new battle.'
      );
      if (event.winner === 1) {
        try {
          const progress = JSON.parse(
            localStorage.getItem('aow_sketch_progress') || '{"beaten":[]}'
          );
          progress.beaten = [
            ...new Set([...(progress.beaten || []), host.observe().difficulty])
          ];
          localStorage.setItem('aow_sketch_progress', JSON.stringify(progress));
        } catch {
          /* Optional local progress. */
        }
      }
      save();
    }
    if (event.type === 'exit') {
      if (xrSession) xrSession.end().catch(() => {});
      else panel.classList.remove('compact');
    }
  }
});

function message(text) {
  view?.message(text);
  if (text !== announced) {
    status.textContent = text;
    announced = text;
  }
}
function save() {
  try {
    if (!host.session) {
      localStorage.removeItem(SAVE_KEY);
      return;
    }
    const value = JSON.stringify({
      checkpoint: host.session.checkpoint(),
      speed: host.speed,
      quality: host.quality
    });
    if (value.length < 2_000_000) localStorage.setItem(SAVE_KEY, value);
  } catch {
    /* Private browsing or full storage must not stop play. */
  }
}
function pause() {
  input?.cancelAll();
  host.pauseForInterruption();
  music.suspendForPage();
  lastTime = null;
  save();
  if (host.session?.running)
    message('Paused. Lift the hourglass and drop it onto the page to resume.');
}
function releaseAnchor() {
  placementGeneration++;
  anchor?.delete();
  anchor = null;
  anchorOffset = null;
}
function resetView() {
  if (xrSession) return;
  view.table.position = { x: 0, y: 0, z: 0 };
  view.table.yaw = 0;
  view.table.scale = 1;
  view.syncTable();
  view.camera.position.set(0.45, 2.45, 3.3);
  view.controls.target.set(0, 0.1, 0.3);
  view.controls.update();
}
async function enterMR() {
  if (xrSession) return;
  enter.disabled = true;
  music.resumeMixer();
  try {
    // Session creation stays directly in the browser's user activation.
    const session = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['local-floor'],
      optionalFeatures: ['hand-tracking', 'hit-test', 'anchors']
    });
    xrSession = session;
    initialized = false;
    placing = true;
    pendingPlace = false;
    pause();
    xrSamples = [];
    xrSummary = { frames: 0, peakUnits: 0, peakDrawCalls: 0, peakTriangles: 0 };
    session.addEventListener(
      'end',
      () => {
        pause();
        input.unbind();
        hitSource?.cancel();
        hitSource = null;
        releaseAnchor();
        xrSession = null;
        view.reticle.visible = false;
        view.immersive(false);
        resetView();
        enter.disabled = false;
        panel.hidden = false;
        message('Back in preview. Your battle is saved and paused.');
      },
      { once: true }
    );
    session.addEventListener('visibilitychange', () => {
      if (session.visibilityState !== 'visible') pause();
    });
    await view.renderer.xr.setSession(session);
    view.immersive(true);
    input.bind(session);
    panel.hidden = true;
    const reference = view.renderer.xr.getReferenceSpace();
    reference.addEventListener('reset', () => {
      pause();
      releaseAnchor();
      initialized = false;
      placing = true;
    });
    try {
      const viewer = await session.requestReferenceSpace('viewer');
      if (session.requestHitTestSource) {
        const source = await session.requestHitTestSource({ space: viewer });
        if (xrSession === session) hitSource = source;
        else source.cancel();
      }
    } catch {
      /* Free placement works without scene permissions or hit tests. */
    }
    if (session.supportedFrameRates?.includes(72))
      session.updateTargetFrameRate(72).catch(() => {});
    message(
      'Look at a table, then pinch or press the trigger to place. Rings let you carry and resize.'
    );
  } catch (error) {
    if (xrSession) await xrSession.end().catch(() => {});
    xrSession = null;
    enter.disabled = false;
    message(
      `Mixed reality could not start (${error.name || 'browser error'}). Preview is still available.`
    );
  }
}

function placeFrame(frame, reference) {
  const viewer = frame.getViewerPose(reference);
  if (!viewer) {
    if (!trackingLost) {
      pause();
      trackingLost = true;
    }
    return false;
  }
  trackingLost = false;
  if (!initialized) {
    const position = viewer.transform.position,
      forward = new THREE.Vector3(0, 0, -1).applyQuaternion(
        viewer.transform.orientation
      );
    forward.y = 0;
    forward.normalize();
    view.table.scale = 0.55;
    view.table.position = {
      x: position.x + forward.x * 0.9,
      y: Math.max(0.35, position.y - 0.7),
      z: position.z + forward.z * 0.9
    };
    view.table.yaw = Math.atan2(-forward.x, -forward.z);
    initialized = true;
    view.syncTable();
  }
  let hit;
  if (placing && hitSource) {
    hit = frame.getHitTestResults(hitSource).find((result) => {
      const pose = result.getPose(reference);
      return pose && pose.transform.matrix[5] > 0.85;
    });
    const pose = hit?.getPose(reference);
    view.reticle.visible = !!pose;
    if (pose) view.reticle.matrix.fromArray(pose.transform.matrix);
  }
  if (pendingPlace) {
    pendingPlace = false;
    placing = false;
    view.reticle.visible = false;
    if (hit) {
      const pose = hit.getPose(reference);
      view.table.position = xyz(pose.transform.position);
      view.table.position.y += 0.028;
      view.syncTable();
      if (hit.createAnchor) {
        const currentSession = xrSession,
          generation = placementGeneration;
        hit
          .createAnchor()
          .then((created) => {
            if (
              xrSession !== currentSession ||
              !currentSession ||
              placementGeneration !== generation ||
              input.interaction.gesture.grips.size
            ) {
              created.delete();
              return;
            }
            releaseAnchor();
            anchor = created;
            anchorOffset = new THREE.Matrix4()
              .fromArray(pose.transform.matrix)
              .invert()
              .multiply(view.root.matrixWorld);
          })
          .catch(() => {});
      }
    }
    message(
      host.session
        ? 'Placed. Drop the hourglass onto the page to resume.'
        : 'Placed. Lift a difficulty seal and drop it onto the page to begin.'
    );
  }
  if (anchor && anchorOffset) {
    const pose = frame.getPose(anchor.anchorSpace, reference);
    if (pose) {
      const matrix = new THREE.Matrix4()
          .fromArray(pose.transform.matrix)
          .multiply(anchorOffset),
        p = new THREE.Vector3(),
        q = new THREE.Quaternion(),
        s = new THREE.Vector3();
      matrix.decompose(p, q, s);
      view.table.position = xyz(p);
      view.table.yaw = new THREE.Euler().setFromQuaternion(q, 'YXZ').y;
    }
  }
  return true;
}
const xyz = (p) => ({ x: p.x, y: p.y, z: p.z });

async function init() {
  if (matchMedia('(max-width: 650px), (max-height: 450px)').matches)
    panel.classList.add('compact');
  try {
    view = new TabletopScene(canvas, host);
  } catch (error) {
    console.error('Tabletop initialization failed:', error);
    message(
      '3D graphics are unavailable in this browser. You can still play the classic game.'
    );
    enter.disabled = true;
    return;
  }
  input = new TabletopInput(view, host, {
    onCarry: () => {
      placing = false;
      view.reticle.visible = false;
      releaseAnchor();
    },
    onPlace: () => {
      if (!placing) return false;
      pendingPlace = true;
      return true;
    }
  });
  music.init();
  canvas.addEventListener('pointerdown', () => music.resumeMixer());
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (saved?.checkpoint) {
      host.session = Session.restore(saved.checkpoint);
      if (host.session.running) host.session.pause(true);
      host.speed = [1, 2, 3].includes(saved.speed) ? saved.speed : 1;
      host.quality = ['mist', 'clear', 'comfort'].includes(saved.quality)
        ? saved.quality
        : 'mist';
      message(
        host.session.running
          ? 'Saved battle restored. Drop the hourglass onto the page to resume.'
          : 'Your last battle ended. Drop a difficulty seal for a new page.'
      );
    }
  } catch {
    message(
      'The saved battle could not be restored. Start with a difficulty seal.'
    );
  }
  await document.fonts.ready;
  enter.addEventListener('click', enterMR);
  document.querySelector('#reset-view').addEventListener('click', resetView);
  document
    .querySelector('#toggle-help')
    .addEventListener('click', () => panel.classList.toggle('compact'));
  document.querySelector('#save-report').addEventListener('click', () => {
    const state = host.observe(),
      report = {
        version: '2.2.0',
        date: new Date().toISOString(),
        browser: navigator.userAgent,
        quality: host.quality,
        age: state?.player.age,
        difficulty: state?.difficulty,
        render: view.stats(),
        xr: xrMeasurements()
      };
    const url = URL.createObjectURL(
        new Blob([JSON.stringify(report, null, 2)], {
          type: 'application/json'
        })
      ),
      link = document.createElement('a');
    link.href = url;
    link.download = 'ink-battle-quest-report.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  window.addEventListener('resize', () => view.resize());
  window.visualViewport?.addEventListener('resize', () => view.resize());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pause();
  });
  window.addEventListener('pagehide', pause);
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    pause();
    message('Graphics were interrupted. Reload to restore the paused battle.');
  });
  (async () => {
    try {
      if (await navigator.xr?.isSessionSupported('immersive-ar')) {
        enter.disabled = false;
        enter.textContent = 'Enter mixed reality';
      } else {
        enter.textContent = 'Open in Quest Browser for MR';
        enter.disabled = true;
      }
    } catch {
      enter.textContent = 'MR unavailable · preview ready';
      enter.disabled = true;
    }
  })();
  view.renderer.setAnimationLoop((time, frame) => {
    const dt = lastTime === null ? 0 : Math.max(0, (time - lastTime) / 1000);
    lastTime = time;
    if (dt > 0 && dt < 0.5) {
      timings.push(dt * 1000);
      if (timings.length > 360) timings.shift();
    }
    if (frame && xrSession) {
      const reference = view.renderer.xr.getReferenceSpace();
      if (
        xrSession.visibilityState === 'visible' &&
        placeFrame(frame, reference)
      )
        input.xr(frame, reference);
    }
    host.update(dt);
    input.interaction.update(Math.min(dt, 0.1));
    const state = host.observe();
    syncMusic(state);
    if (state && state.paused !== lastPaused) {
      lastPaused = state.paused;
      if (!state.paused) {
        if (!music.started) music.start();
        music.resumeForPage();
      }
      music.setDucked(state.paused);
    }
    music.update(Math.min(dt, 0.1));
    view.update(state, input.interaction.visuals(), Math.min(dt, 0.1));
    view.render();
    if (frame && xrSession?.visibilityState === 'visible' && !trackingLost) {
      const stats = view.stats();
      xrSummary.frames++;
      xrSummary.peakUnits = Math.max(
        xrSummary.peakUnits,
        state?.units.length || 0
      );
      xrSummary.peakDrawCalls = Math.max(xrSummary.peakDrawCalls, stats.calls);
      xrSummary.peakTriangles = Math.max(
        xrSummary.peakTriangles,
        stats.triangles
      );
      if (dt > 0 && dt < 0.5) {
        xrSamples.push(dt * 1000);
        if (xrSamples.length > 720) xrSamples.shift();
      }
    }
    if (time - savedAt > 10000) {
      savedAt = time;
      save();
    }
  });
  // A small SDK for repeatable renderer/input regression tests and local tools.
  window.InkTabletop = Object.freeze({
    observe: () => host.observe(),
    replay: () => host.session?.replay(),
    diagnostics: () => ({
      ...view.stats(),
      xr: !!xrSession,
      xrMeasurements: xrMeasurements(),
      placing,
      quality: host.quality,
      holds: host.holds.size,
      flights: input.interaction.flights.size,
      table: structuredClone(view.table),
      frameP95: timings.length
        ? [...timings].sort((a, b) => a - b)[
            Math.floor((timings.length - 1) * 0.95)
          ]
        : null
    }),
    project: (point) => {
      view.syncTable();
      const p = new THREE.Vector3(point.x, point.y || 0, point.z);
      view.root.localToWorld(p);
      p.project(view.camera);
      const rect = canvas.getBoundingClientRect();
      return {
        x: rect.left + ((p.x + 1) / 2) * rect.width,
        y: rect.top + ((1 - p.y) / 2) * rect.height
      };
    },
    restore: (checkpoint) => {
      pause();
      host.session = Session.restore(checkpoint);
      host.session.pause(true);
      view.labelClock = 0;
    },
    checkpoint: () => host.session?.checkpoint()
  });
  document.body.dataset.ready = 'true';
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}
init().catch((error) => {
  pause();
  message(
    `The tabletop could not load (${error.name}). Reload or open the classic game.`
  );
});
