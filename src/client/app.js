import { Session } from '../sdk/session.js';
import { AGES } from '../content/ages.js';
import { FIXED_DT, DIFFICULTY_SETTINGS, RULES_VERSION, INCOME } from '../core/constants.js';
import { multiplier } from '../core/state.js';
import { COLORS } from './palette.js';
import { createStorage } from './storage.js';
import { createUI } from './ui.js';
import { createWatercolor } from './watercolor.js';
import { createGemma } from './gemma.js';
import { createDirectorPanel } from './director-panel.js';
import { createCommander } from './commander.js';
import { createAudio } from './audio.js';
import { createRenderer } from './renderer.js';
import { createHUD } from './hud.js';
import { createEffects } from './effects.js';

const canvas = document.getElementById('game-canvas');
const runtime = { canvas, ctx: canvas.getContext('2d'), COLORS: { ...COLORS }, gameState: {}, globalTime: 0,
  currentDifficulty: 'normal', currentConfig: DIFFICULTY_SETTINGS.normal, currentTab: 'units', RELEASE_VERSION: RULES_VERSION,
  UPGRADE_INFO: {
    dmg: { title: 'Sharpened', stat: '+15% damage per level', compact: '+15% DMG/lvl', color: COLORS.accent },
    hp: { title: 'Thick Paper', stat: '+25% base and new unit health', compact: '+25% HP/lvl', color: COLORS.green },
    econ: { title: 'Fast Ink', stat: '+20% gold income per level', compact: '+20% gold/lvl', color: COLORS.gold }
  } };
for (const factory of [createStorage, createUI, createWatercolor, createGemma, createDirectorPanel, createCommander, createAudio, createRenderer, createHUD, createEffects]) Object.assign(runtime, factory(runtime));
let accumulator = 0, ended = false, manual = false, frameId = 0, gameSpeed = 1;
const GAME_SPEEDS = [1, 2, 3];
const STALL_PAUSE_SECONDS = 5;

function updateSpeedControls() {
  const next = GAME_SPEEDS[(GAME_SPEEDS.indexOf(gameSpeed) + 1) % GAME_SPEEDS.length];
  for (const button of document.querySelectorAll('[data-game-speed]')) {
    button.textContent = `${button.dataset.gameSpeed}${gameSpeed}×`;
    button.title = `Game speed: ${gameSpeed}×. Change to ${next}×.`;
    button.setAttribute('aria-label', button.title);
  }
}
function cycleGameSpeed() {
  // Settle elapsed time at the old rate before applying the new one.
  updateClock(performance.now());
  gameSpeed = GAME_SPEEDS[(GAME_SPEEDS.indexOf(gameSpeed) + 1) % GAME_SPEEDS.length];
  updateSpeedControls();
}

function syncView() {
  const s = runtime.session.observe();
  runtime.globalTime = s.tick / 60;
  runtime.gameState = { ...s, units: { pool: s.units }, projectiles: { pool: s.projectiles },
    particles: runtime.particles, floatingTexts: runtime.floatingTexts, visualFx: runtime.visualFx,
    worldProgress: Math.min(1, runtime.globalTime * .75), screenShake: runtime.screenShake || 0, ageTransition: runtime.ageTransition || 0,
    specialActive: s.specials.find(sp => sp.team === 1) || null };
  for (const sp of s.specials) {
    if (sp.age >= 4) runtime.gameState.projectiles.pool.push({ active: true, isSpecial: true, team: sp.team,
      type: AGES[sp.age].special.type, x: sp.x, y: 600, life: sp.remaining / 60 });
  }
}

function command(c) {
  if (!runtime.session) return { ok: false, error: 'not-started' };
  const result = runtime.session.command(1, c);
  syncView(); runtime.updateUI(); return result;
}
Object.assign(runtime, {
  buyUnit: index => command({ type: 'unit', index }), buyTurret: index => command({ type: 'turret', index }),
  sellTurret: () => command({ type: 'sell' }), buySlot: () => command({ type: 'slot' }),
  buyUpgrade: stat => command({ type: 'upgrade', stat }), evolve: () => command({ type: 'evolve' }), useSpecial: () => command({ type: 'special' }),
  getStatMult: (owner, type) => multiplier(runtime.session.observe(), owner === runtime.gameState.enemy ? -1 : 1, type),
  getIncome: () => INCOME[runtime.gameState.player.age] * runtime.getStatMult(runtime.gameState.player, 'econ'),
  isLegal: c => runtime.session?.legal(1, c) ?? false,
  applyTheme(ageIndex) {
    const theme = AGES[ageIndex].theme;
    for (const [name, value] of Object.entries({ background: theme.bg, foreground: theme.fg, pencil: theme.fg, accent: theme.accent })) document.documentElement.style.setProperty(`--${name}`, value);
    Object.assign(runtime.COLORS, { pencil: `hsl(${theme.fg})`, pencilLight: `hsl(${theme.fg} / 0.5)`, accent: `hsl(${theme.accent})` });
  },
  switchTab(tab) {
    runtime.currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    runtime.UIManager.toggleClass('menuUnits', tab !== 'units', 'hidden');
    runtime.UIManager.toggleClass('menuTurrets', tab !== 'turrets', 'hidden');
    runtime.UIManager.toggleClass('menuUpgrades', tab !== 'upgrades', 'hidden'); runtime.updateUI();
  }
});

function finish() {
  if (ended || runtime.session.running) return;
  ended = true;
  const won = runtime.session.winner === 1, draw = runtime.session.winner === 0;
  document.getElementById('game-over-screen').classList.remove('hidden'); runtime.TooltipManager.hide(); runtime.MusicDirector.setOutcome(won);
  document.getElementById('end-title').innerText = draw ? 'A Draw!' : won ? 'Victory!' : 'Defeat...';
  document.getElementById('end-desc').innerText = draw ? 'Both civilizations reached the end of the page together.' : won ? 'You have conquered history and filled the sketchbook.' : 'Your civilization was erased from the pages of history.';
  if (won) runtime.StorageManager.saveWin(runtime.currentDifficulty);
  runtime.DirectorPanel.add('ai', draw ? 'We shared the last page.' : won ? 'That page is yours. I saved the difficulty medal.' : 'I took this page. The pacts and memory remain for the rematch.');
  runtime.GemmaMemory.recordSystem(`Match ended: ${draw ? 'draw' : won ? 'player won' : 'opponent won'} ${runtime.currentDifficulty} at ${Math.round(runtime.globalTime)}s.`);
}
function advance(ticks) {
  const result = runtime.session.advance(ticks);
  runtime.effectsTick(ticks * FIXED_DT, result.events); syncView(); runtime.updateUI(); finish(); return result;
}
function updateClock(timestamp) {
  if (!runtime.session) return;
  const elapsed = Math.max(0, (timestamp - runtime.lastTime) / 1000);
  runtime.lastTime = Math.max(timestamp, runtime.lastTime);
  // Brief rendering/GC stalls catch up in whole ticks. Reserve the explicit pause
  // for long interruptions so a busy device does not block the opening controls.
  if (!manual && elapsed >= STALL_PAUSE_SECONDS && runtime.session.running && !runtime.session.paused) runtime.togglePause(true);
  if (!manual && runtime.session.running && !runtime.session.paused) {
    accumulator += elapsed * gameSpeed;
    const ticks = Math.floor(accumulator / FIXED_DT);
    if (ticks) { advance(ticks); accumulator -= ticks * FIXED_DT; runtime.AIDirector.tick(ticks * FIXED_DT); runtime.MusicDirector.update(ticks * FIXED_DT); }
  }
}
function frame(timestamp) {
  if (!runtime.session) return;
  updateClock(timestamp);
  runtime.draw();
  frameId = requestAnimationFrame(frame);
}
function initGame(diffKey = 'normal', options = {}) {
  if (runtime.session?.running) return;
  const { manual: manualClock = false, ...sessionOptions } = options;
  runtime.session = new Session({ difficulty: diffKey, ...sessionOptions });
  runtime.session.agreements(runtime.DirectorMemory.data.agreements);
  runtime.currentDifficulty = diffKey; runtime.currentConfig = DIFFICULTY_SETTINGS[diffKey];
  manual = manualClock; accumulator = 0; ended = false; gameSpeed = 1; updateSpeedControls(); syncView();
  document.getElementById('start-screen').classList.add('fade-out');
  document.getElementById('game-over-screen').classList.add('hidden'); document.getElementById('pause-overlay').classList.add('hidden'); document.getElementById('ui-layer').classList.remove('hidden');
  const badge = document.getElementById('diff-badge'); badge.innerText = runtime.currentConfig.name; badge.style.backgroundColor = runtime.currentConfig.color;
  runtime.applyTheme(runtime.gameState.player.age); runtime.switchTab('units'); runtime.AIDirector.start(diffKey); runtime.MusicDirector.start('game_start');
  runtime.lastTime = performance.now(); cancelAnimationFrame(frameId); frameId = requestAnimationFrame(frame);
}

for (const name of ['buyUnit', 'buyTurret', 'sellTurret', 'buySlot', 'buyUpgrade', 'evolve', 'useSpecial', 'switchTab', 'togglePause', 'toggleDirectorPanel', 'toggleMusicMute', 'submitDirectorChat', 'installLocalGemma']) window[name] = runtime[name];
window.initGame = initGame;
window.cycleGameSpeed = cycleGameSpeed;
// A host API for tools and browser conformance; no alternate gameplay implementation.
window.InkBattle = Object.freeze({ Session, start: initGame, command, advance, observe: () => runtime.session?.observe(),
  replay: () => runtime.session?.replay(), digest: () => runtime.session?.digest(), render: () => runtime.draw() });

async function boot() {
  runtime.UIManager.init(); runtime.TooltipManager.init(); runtime.StorageManager.init(); runtime.DirectorMemory.init();
  runtime.GemmaMemory.init(); runtime.DirectorPanel.init(); runtime.NativeGemma.init(); runtime.MusicDirector.init();
  await runtime.WatercolorEngine.generateAll();
  document.getElementById('preloader').classList.add('hidden'); document.getElementById('game-container').classList.remove('hidden');
}
boot().catch(error => { document.querySelector('.loader-brush').textContent = `Could not prepare the canvas: ${error.message}`; console.error(error); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) runtime.MusicDirector.suspendForPage(); else runtime.MusicDirector.resumeForPage();
  if (document.hidden && runtime.session?.running && !runtime.session.paused) runtime.togglePause(true);
});
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./service-worker.js').catch(() => {});
