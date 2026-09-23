import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createAudio(runtime) {
const MUSIC_STORAGE_KEY = 'inkBattle.musicMuted.v1';
const MUSIC_LIBRARY_VERSION = 'global-v2';
const MUSIC_DEFAULT_TRACK = 'evolvingCanvas';
const MUSIC_SOURCE_EXTENSIONS = ['mp3', 'ogg', 'wav'];
const MUSIC_CROSSFADE_CURVE_STEPS = 96;
const MUSIC_IDLE_RELEASE_MS = 45000;
const MUSIC_SILENCE_EPSILON = 0.001;
// Optional per-track variations are supported via:
// - variants: ['pencil_dawn', 'pencil_dawn_v2', { file: 'pencil_dawn_alt' }]
// - variants: [{ sources: ['assets/audio/custom_intro.ogg'] }, ...]
// - files: ['pencil_dawn', 'pencil_dawn_v2']
const MUSIC_TRACKS = [
    {
        id: 'evolvingCanvas',
        title: 'The Evolving Canvas',
        file: 'evolving_canvas',
        variants: ['evolving_canvas', 'evolving_canvas_v2', 'evolving_canvas_v3', 'evolving_canvas_v4', 'evolving_canvas_v5', 'evolving_canvas_v6'],
        scene: 'battle',
        roles: ['ink-battle', 'active-fight', 'progression', 'age', 'all-purpose', 'fallback'],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0.18,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 16,
        priority: 84,
        fallback: true,
        classicBattle: true
    },
    {
        id: 'pencilDawn',
        title: 'Pencil Dawn',
        file: 'pencil_dawn',
        variants: ['pencil_dawn', 'pencil_dawn_v2'],
        scene: 'opening',
        roles: ['stone-age', 'opening', 'low-tension'],
        ageMin: 0,
        ageMax: 1,
        tensionMin: 0,
        tensionMax: 0.38,
        loop: true,
        volume: 0.58,
        minPlaySec: 28,
        priority: 80
    },
    {
        id: 'graphiteSkirmish',
        title: 'Graphite Skirmish',
        file: 'graphite_skirmish',
        variants: ['graphite_skirmish', 'graphite_skirmish_v2', 'graphite_skirmish_v3', 'graphite_skirmish_v4', 'graphite_skirmish_v5', 'graphite_skirmish_v6', 'graphite_skirmish_v7', 'graphite_skirmish_v8'],
        scene: 'battle',
        roles: ['early-game', 'mid-game', 'pressure'],
        ageMin: 0,
        ageMax: 2,
        tensionMin: 0.22,
        tensionMax: 0.72,
        loop: true,
        volume: 0.62,
        minPlaySec: 32,
        priority: 82
    },
    {
        id: 'inklineAdvance',
        title: 'Inkline Advance',
        file: 'inkline_advance',
        variants: ['inkline_advance', 'inkline_advance_v2', 'inkline_advance_v3', 'inkline_advance_v4', 'inkline_advance_v5', 'inkline_advance_v6'],
        scene: 'pressure',
        roles: ['early-game', 'lane-pressure', 'fast-units'],
        ageMin: 0,
        ageMax: 2,
        tensionMin: 0.52,
        tensionMax: 1,
        loop: true,
        volume: 0.64,
        minPlaySec: 30,
        priority: 86
    },
    {
        id: 'castleMarch',
        title: 'Castle March',
        file: 'castle_march',
        variants: ['castle_march', 'castle_march_v2'],
        scene: 'battle',
        roles: ['castle-age', 'iron-age', 'steady-battle'],
        ageMin: 1,
        ageMax: 2,
        tensionMin: 0.16,
        tensionMax: 0.68,
        loop: true,
        volume: 0.62,
        minPlaySec: 34,
        priority: 78
    },
    {
        id: 'renaissanceRush',
        title: 'Renaissance Rush',
        file: 'renaissance_rush',
        variants: ['renaissance_rush', 'renaissance_rush_v2'],
        scene: 'battle',
        roles: ['renaissance', 'momentum', 'snare-march'],
        ageMin: 2,
        ageMax: 3,
        tensionMin: 0.28,
        tensionMax: 0.82,
        loop: true,
        volume: 0.65,
        minPlaySec: 34,
        priority: 84
    },
    {
        id: 'cannonSmoke',
        title: 'Cannon Smoke',
        file: 'cannon_smoke',
        variants: ['cannon_smoke', 'cannon_smoke_v2'],
        scene: 'siege',
        roles: ['turrets', 'specials', 'base-pressure'],
        ageMin: 2,
        ageMax: 4,
        tensionMin: 0.58,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 34,
        priority: 90
    },
    {
        id: 'modernWarfare',
        title: 'Modern Warfare',
        file: 'modern_warfare',
        variants: ['modern_warfare', 'modern_warfare_v2'],
        scene: 'battle',
        roles: ['modern-age', 'electric-guitar', 'orchestral-drop'],
        ageMin: 3,
        ageMax: 3,
        tensionMin: 0.26,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 36,
        priority: 86
    },
    {
        id: 'futureArpeggio',
        title: 'Future Arpeggio',
        file: 'future_arpeggio',
        variants: ['future_arpeggio', 'future_arpeggio_v2'],
        scene: 'future',
        roles: ['future-age', 'synth', 'tech-window'],
        ageMin: 4,
        ageMax: 4,
        tensionMin: 0.12,
        tensionMax: 0.72,
        loop: true,
        volume: 0.62,
        minPlaySec: 34,
        priority: 82
    },
    {
        id: 'neonFront',
        title: 'Neon Front',
        file: 'neon_front',
        variants: ['neon_front', 'neon_front_v2'],
        scene: 'pressure',
        roles: ['future-age', 'high-pressure', 'cyber-drums'],
        ageMin: 4,
        ageMax: 5,
        tensionMin: 0.52,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 34,
        priority: 89
    },
    {
        id: 'cosmicClash',
        title: 'Cosmic Clash',
        file: 'cosmic_clash',
        variants: ['cosmic_clash', 'cosmic_clash_v2'],
        scene: 'cosmic',
        roles: ['cosmic-age', 'choir', 'final-battle'],
        ageMin: 5,
        ageMax: 5,
        tensionMin: 0.18,
        tensionMax: 1,
        loop: true,
        volume: 0.7,
        minPlaySec: 42,
        priority: 92
    },
    {
        id: 'lastPageSiege',
        title: 'Last Page Siege',
        file: 'last_page_siege',
        variants: ['last_page_siege', 'last_page_siege_v2'],
        scene: 'siege',
        roles: ['critical-base-hp', 'deathball', 'endgame-pressure'],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0.76,
        tensionMax: 1,
        loop: true,
        volume: 0.72,
        minPlaySec: 32,
        priority: 105,
        urgent: true
    },
    {
        id: 'codexGemma',
        title: 'Codex Gemma',
        file: 'codex_gemma',
        variants: ['codex_gemma', 'codex_gemma_v2'],
        scene: 'menu',
        roles: ['director', 'pause', 'memory'],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0,
        tensionMax: 0.45,
        loop: true,
        volume: 0.48,
        minPlaySec: 20,
        priority: 75
    },
    {
        id: 'victoryCanvas',
        title: 'Victory Canvas',
        file: 'victory_canvas',
        variants: ['victory_canvas', 'victory_canvas_v2'],
        scene: 'victory',
        roles: ['victory', 'results'],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0,
        tensionMax: 1,
        loop: true,
        volume: 0.58,
        minPlaySec: 20,
        priority: 120,
        outcome: 'victory'
    },
    {
        id: 'erasedPages',
        title: 'Erased Pages',
        file: 'erased_pages',
        variants: ['erased_pages', 'erased_pages_v2'],
        scene: 'defeat',
        roles: ['defeat', 'results'],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0,
        tensionMax: 1,
        loop: true,
        volume: 0.54,
        minPlaySec: 20,
        priority: 120,
        outcome: 'defeat'
    }
];
const MusicDirector = {
    tracks: {},
    activeId: null,
    pendingId: null,
    started: false,
    muted: false,
    suspended: false,
    ducked: false,
    outcome: null,
    masterVolume: 0.72,
    fadeMs: 1600,
    idleReleaseMs: MUSIC_IDLE_RELEASE_MS,
    decisionTimer: 0,
    lastSwitchAt: -999,
    transitionToken: 0,
    audioContext: null,
    masterGainNode: null,
    mixerUnavailable: false,
    elementMixer: false,
    recentIds: [],
    signals: { tension: 0, playerAge: 0, enemyAge: 0, troopPressure: 0 },
    init() {
        this.elementMixer = this.shouldUseElementMixer();
        this.mixerUnavailable = this.elementMixer;
        try {
            this.muted = localStorage.getItem(MUSIC_STORAGE_KEY) === '1';
        } catch (e) {
            this.muted = false;
        }

        for (let i = 0; i < MUSIC_TRACKS.length; i++) {
            let config = MUSIC_TRACKS[i];
            let audio = new Audio();
            audio.preload = config.preload || 'none';
            audio.loop = config.loop !== false;
            let entry = {
                config,
                audio,
                variantSources: this.buildVariantSources(config),
                variantBag: [],
                failedVariants: new Set(),
                activeVariantIndex: -1,
                lastVariantIndex: -1,
                sources: [],
                sourceIndex: 0,
                failed: false,
                blocked: false,
                fadeToken: 0,
                playToken: 0,
                releaseTimer: 0,
                fadeTimer: 0,
                fadeFrame: 0,
                fadeStartedAt: 0,
                fadeDurationMs: 0,
                fadeStartVolume: 0,
                fadeTargetVolume: 0,
                currentVolume: 0,
                mediaNode: null,
                gainNode: null,
                webAudioFailed: false
            };
            audio.addEventListener('error', () => {
                if (this.pendingId === config.id) return;
                this.markVariantFailed(entry, entry.activeVariantIndex);
                if (!entry.failed && this.activeId === config.id) {
                    this.play(config.id, { fadeMs: 500, force: true, reason: 'variant_error', newVariant: true });
                } else if (entry.failed && this.activeId === config.id) {
                    this.playFallback({ fadeMs: 800, reason: 'active_error' }, config.id);
                }
                this.updateButton();
            });
            this.tracks[config.id] = entry;
        }
        this.updateButton();
    },
    buildSourceCandidates(base) {
        return MUSIC_SOURCE_EXTENSIONS.map(ext => `assets/audio/${base}.${ext}`);
    },
    buildVariantSources(config) {
        let groups = [];
        let addGroup = sources => {
            if (!Array.isArray(sources) || !sources.length) return;
            groups.push(sources.slice());
        };

        if (Array.isArray(config.variants) && config.variants.length) {
            for (let i = 0; i < config.variants.length; i++) {
                let variant = config.variants[i];
                if (typeof variant === 'string' && variant) {
                    addGroup(this.buildSourceCandidates(variant));
                    continue;
                }
                if (Array.isArray(variant) && variant.length) {
                    addGroup(variant);
                    continue;
                }
                if (variant && typeof variant === 'object') {
                    if (Array.isArray(variant.sources) && variant.sources.length) {
                        addGroup(variant.sources);
                        continue;
                    }
                    if (typeof variant.file === 'string' && variant.file) {
                        addGroup(this.buildSourceCandidates(variant.file));
                    }
                }
            }
        } else if (Array.isArray(config.files) && config.files.length) {
            for (let i = 0; i < config.files.length; i++) {
                if (typeof config.files[i] === 'string' && config.files[i]) {
                    addGroup(this.buildSourceCandidates(config.files[i]));
                }
            }
        } else if (Array.isArray(config.sources) && config.sources.length) {
            addGroup(config.sources);
        }

        if (!groups.length) {
            let base = config.file || config.id;
            addGroup(this.buildSourceCandidates(base));
        }
        return groups;
    },
    refillVariantBag(entry) {
        if (!entry) return;
        let bag = [];
        for (let i = 0; i < entry.variantSources.length; i++) {
            if (!entry.failedVariants.has(i)) bag.push(i);
        }

        for (let i = bag.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = bag[i];
            bag[i] = bag[j];
            bag[j] = temp;
        }

        if (bag.length > 1 && entry.lastVariantIndex >= 0 && bag[0] === entry.lastVariantIndex) {
            let swapIndex = 1 + Math.floor(Math.random() * (bag.length - 1));
            let temp = bag[0];
            bag[0] = bag[swapIndex];
            bag[swapIndex] = temp;
        }
        entry.variantBag = bag;
    },
    markVariantFailed(entry, variantIndex) {
        if (!entry || variantIndex === undefined || variantIndex === null || variantIndex < 0) return;
        entry.failedVariants.add(variantIndex);
        if (entry.variantBag && entry.variantBag.length) {
            entry.variantBag = entry.variantBag.filter(index => index !== variantIndex);
        }
        entry.failed = entry.failedVariants.size >= entry.variantSources.length;
    },
    chooseVariant(entry, options = {}) {
        if (!entry || !entry.variantSources.length) return false;

        if (options.keepCurrent && entry.activeVariantIndex >= 0 && !entry.failedVariants.has(entry.activeVariantIndex)) {
            entry.sources = entry.variantSources[entry.activeVariantIndex];
            entry.sourceIndex = Math.max(0, Math.min(entry.sourceIndex || 0, entry.sources.length - 1));
            entry.failed = false;
            return entry.sources.length > 0;
        }

        if (!entry.variantBag || !entry.variantBag.length) this.refillVariantBag(entry);
        if (!entry.variantBag || !entry.variantBag.length) {
            entry.failed = true;
            return false;
        }

        entry.activeVariantIndex = entry.variantBag.shift();
        entry.lastVariantIndex = entry.activeVariantIndex;
        entry.sources = entry.variantSources[entry.activeVariantIndex];
        entry.sourceIndex = 0;
        entry.failed = false;
        this.cancelRelease(entry);
        this.cancelFade(entry);
        this.setOutputVolume(entry, 0);
        entry.audio.pause();
        entry.audio.removeAttribute('src');
        entry.audio.load();
        return entry.sources.length > 0;
    },
    start(reason = 'game_start') {
        this.started = true;
        this.suspended = false;
        this.ducked = false;
        this.outcome = null;
        this.pendingId = null;
        this.decisionTimer = 0;
        this.recentIds = [];
        this.setSignals(this.readSignals());
        this.resumeMixer();
        this.fadeOutAll(0, true);
        this.play(MUSIC_DEFAULT_TRACK, { fadeMs: 900, force: true, reason });
    },
    update(dt) {
        if (!this.started || this.outcome || this.muted || this.suspended || !runtime.gameState || !runtime.gameState.running || runtime.gameState.paused) return;
        this.decisionTimer -= dt;
        if (this.decisionTimer > 0) return;
        this.decisionTimer = 2.25;
        let signals = this.readSignals();
        this.setSignals(signals);
        let target = this.chooseTrack(signals, { reason: 'flow' });
        if (target && target !== this.activeId) {
            this.play(target, { reason: 'flow' });
        } else {
            this.refreshActiveVolume();
        }
    },
    setSignals(partial) {
        this.signals = Object.assign({}, this.signals, partial || {});
    },
    setScene(scene, reason = 'scene') {
        let target = this.chooseScene(scene);
        return target ? this.play(target, { fadeMs: 850, force: true, reason }) : false;
    },
    setOutcome(won) {
        this.outcome = won ? 'victory' : 'defeat';
        this.ducked = false;
        this.play(won ? 'victoryCanvas' : 'erasedPages', { fadeMs: 1400, force: true, reason: this.outcome });
    },
    play(id, options = {}) {
        let entry = this.tracks[id];
        if (!entry || entry.failed) return this.playFallback(options, id);
        if (this.pendingId === id) return true;

        let fadeMs = options.fadeMs === undefined ? this.fadeMs : options.fadeMs;
        if (!options.newVariant && this.activeId === id && !entry.audio.paused) {
            this.refreshActiveVolume();
            this.updateButton();
            return true;
        }
        if (!options.force && !this.canSwitchTo(entry)) return false;

        if (this.muted || this.suspended) {
            this.activeId = id;
            this.pendingId = null;
            this.transitionToken++;
            this.fadeOutAll(0, true);
            this.updateButton();
            return false;
        }

        let token = ++this.transitionToken;
        let previousPending = this.pendingId && this.pendingId !== id ? this.tracks[this.pendingId] : null;
        this.pendingId = null;
        if (previousPending && previousPending !== entry && previousPending.config.id !== this.activeId) {
            this.cancelEntryStart(previousPending);
            this.fadeOut(previousPending, Math.min(300, fadeMs || 300), true);
        }

        this.resumeMixer();
        let previous = this.activeId && this.activeId !== id ? this.tracks[this.activeId] : null;
        if (previous && !previous.audio.paused) this.fadeTo(previous, this.targetVolume(previous), Math.min(500, fadeMs || 500));
        let rotateVariant = options.newVariant === undefined ? this.activeId !== id : !!options.newVariant;
        this.pendingId = id;
        this.startEntry(entry, { newVariant: rotateVariant }).then(ok => {
            if (this.transitionToken !== token || this.pendingId !== id) {
                if (entry.config.id !== this.activeId) this.fadeOut(entry, Math.min(250, fadeMs || 250), true);
                return;
            }
            if (!ok) {
                if (this.pendingId === id) this.pendingId = null;
                this.playFallback(options, id);
                return;
            }

            this.pendingId = null;
            this.activeId = id;
            this.lastSwitchAt = runtime.globalTime;
            this.rememberTrack(id);
            this.cancelRelease(entry);
            this.fadeTo(entry, this.targetVolume(entry), fadeMs);
            if (previous) this.fadeOut(previous, fadeMs, true);
            this.updateButton();
        });
        this.updateButton();
        return true;
    },
    toggleMute() {
        this.muted = !this.muted;
        try {
            localStorage.setItem(MUSIC_STORAGE_KEY, this.muted ? '1' : '0');
        } catch (e) { }

        if (this.muted) {
            this.transitionToken++;
            this.pendingId = null;
            this.fadeOutAll(350, true);
        } else if (this.started && this.activeId) {
            this.resumeMixer();
            this.play(this.activeId, { fadeMs: 650, force: true, reason: 'unmute' });
        } else if (this.started) {
            this.resumeMixer();
            this.play(this.chooseTrack(this.readSignals(), { force: true, reason: 'unmute' }) || MUSIC_DEFAULT_TRACK, { fadeMs: 650, force: true, reason: 'unmute' });
        }
        this.updateButton();
    },
    setDucked(ducked) {
        this.ducked = !!ducked;
        if (this.ducked && this.started && !this.suspended && !this.muted) {
            if (this.setScene('menu', 'pause')) return;
        } else if (!this.ducked && this.started && !this.outcome) {
            this.decisionTimer = 0;
            this.update(0);
        }
        this.refreshActiveVolume();
    },
    suspendForPage() {
        if (!this.started || this.suspended) return;
        this.suspended = true;
        this.transitionToken++;
        this.pendingId = null;
        this.fadeOutAll(0, true);
    },
    resumeForPage() {
        if (!this.suspended) return;
        this.suspended = false;
        if (this.started && this.activeId && !this.muted) {
            this.resumeMixer();
            this.play(this.activeId, { fadeMs: 700, force: true, reason: 'page_visible' });
        }
    },
    startEntry(entry, options = {}) {
        return new Promise(resolve => {
            if (!entry || entry.failed || this.muted || this.suspended) {
                resolve(false);
                return;
            }
            let playToken = ++entry.playToken;
            this.cancelRelease(entry);
            this.resumeMixer();
            if (!this.chooseVariant(entry, { keepCurrent: !options.newVariant })) {
                entry.failed = true;
                resolve(false);
                return;
            }
            if (!this.ensureSource(entry)) {
                this.markVariantFailed(entry, entry.activeVariantIndex);
                if (!this.chooseVariant(entry, { keepCurrent: false }) || !this.ensureSource(entry)) {
                    entry.failed = true;
                    resolve(false);
                    return;
                }
            }

            let audio = entry.audio;
            let settled = false;
            let retrying = false;
            let settle = ok => {
                if (settled) return;
                settled = true;
                audio.removeEventListener('error', onError);
                if (entry.playToken !== playToken) {
                    resolve(false);
                    return;
                }
                resolve(ok);
            };
            let retry = () => {
                if (settled || retrying) return;
                retrying = true;
                audio.removeEventListener('error', onError);
                if (entry.playToken !== playToken) {
                    settle(false);
                    return;
                }
                if (this.advanceSource(entry)) {
                    settled = true;
                    this.startEntry(entry, { newVariant: false }).then(resolve);
                } else {
                    entry.failed = true;
                    settle(false);
                }
            };
            let onError = () => retry();

            audio.addEventListener('error', onError);
            audio.loop = entry.config.loop !== false;
            this.prepareOutput(entry);
            this.setOutputVolume(entry, 0);

            let playPromise = null;
            try {
                playPromise = audio.play();
            } catch (e) {
                retry();
                return;
            }

            if (playPromise && typeof playPromise.then === 'function') {
                playPromise.then(() => {
                    entry.failed = false;
                    entry.blocked = false;
                    settle(true);
                }).catch(error => {
                    if (error && error.name === 'NotAllowedError') {
                        entry.blocked = true;
                        settle(false);
                    } else {
                        retry();
                    }
                });
            } else {
                setTimeout(() => settle(!audio.paused || audio.readyState >= 2), 120);
            }

            setTimeout(() => {
                if (!settled && audio.readyState >= 2 && !audio.error) settle(true);
            }, 2400);
        });
    },
    ensureSource(entry) {
        if (!entry || !entry.sources.length) return false;
        this.cancelRelease(entry);
        if (entry.audio.getAttribute('src')) return true;
        entry.sourceIndex = Math.max(0, Math.min(entry.sourceIndex || 0, entry.sources.length - 1));
        entry.audio.src = entry.sources[entry.sourceIndex];
        entry.audio.load();
        return true;
    },
    advanceSource(entry) {
        if (!entry) return false;
        entry.sourceIndex = (entry.sourceIndex || 0) + 1;
        this.cancelRelease(entry);
        this.cancelFade(entry);
        this.setOutputVolume(entry, 0);
        entry.audio.pause();
        entry.audio.removeAttribute('src');
        entry.audio.load();

        if (entry.sourceIndex < entry.sources.length) {
            entry.audio.src = entry.sources[entry.sourceIndex];
            entry.audio.load();
            return true;
        }

        this.markVariantFailed(entry, entry.activeVariantIndex);
        if (!this.chooseVariant(entry, { keepCurrent: false })) return false;
        if (!this.ensureSource(entry)) {
            this.markVariantFailed(entry, entry.activeVariantIndex);
            return this.advanceSource(entry);
        }
        return true;
    },
    playFallback(options = {}, blockedId = '') {
        let active = this.activeId ? this.tracks[this.activeId] : null;
        if (!options.force && active && active.config.id !== blockedId && !active.failed && !active.audio.paused) {
            this.refreshActiveVolume();
            return false;
        }

        let fallback = this.tracks[MUSIC_DEFAULT_TRACK] && !this.tracks[MUSIC_DEFAULT_TRACK].failed ? MUSIC_DEFAULT_TRACK : '';
        if (!fallback) {
            for (let i = 0; i < MUSIC_TRACKS.length; i++) {
                let id = MUSIC_TRACKS[i].id;
                if (id !== blockedId && this.tracks[id] && !this.tracks[id].failed) {
                    fallback = id;
                    break;
                }
            }
        }
        if (!fallback || fallback === blockedId) return false;
        return this.play(fallback, Object.assign({}, options, { force: true, reason: 'fallback' }));
    },
    canSwitchTo(entry) {
        if (!entry || !this.activeId || this.activeId === entry.config.id) return true;
        if (entry.config.urgent || entry.config.outcome) return true;
        let active = this.tracks[this.activeId];
        let minPlay = active && active.config ? active.config.minPlaySec || 24 : 24;
        return runtime.globalTime - this.lastSwitchAt >= minPlay;
    },
    chooseTrack(signals, options = {}) {
        if (this.outcome) return this.outcome === 'victory' ? 'victoryCanvas' : 'erasedPages';
        let bestId = '';
        let bestScore = -Infinity;
        for (let i = 0; i < MUSIC_TRACKS.length; i++) {
            let config = MUSIC_TRACKS[i];
            let entry = this.tracks[config.id];
            if (!entry || entry.failed || entry.blocked || config.outcome || config.scene === 'menu') continue;

            let score = this.scoreTrack(config, signals);
            if (config.scene === 'opening' && signals.elapsed < 38) score += 26;
            if (config.scene === 'opening' && signals.elapsed >= 55) score -= 40;
            if (config.scene === 'opening' && signals.activeFight) score -= 34;
            if (config.urgent && signals.tension > 0.74) score += 35;
            if (this.recentIds.includes(config.id)) score -= 34 - Math.min(18, this.recentIds.indexOf(config.id) * 6);
            if (this.activeId === config.id) score += 10;
            if (options.force && config.id === MUSIC_DEFAULT_TRACK) score += 4;

            if (score > bestScore) {
                bestScore = score;
                bestId = config.id;
            }
        }
        return bestId || MUSIC_DEFAULT_TRACK;
    },
    chooseScene(scene) {
        let bestId = '';
        let bestScore = -Infinity;
        for (let i = 0; i < MUSIC_TRACKS.length; i++) {
            let config = MUSIC_TRACKS[i];
            let entry = this.tracks[config.id];
            if (!entry || entry.failed || entry.blocked || config.scene !== scene) continue;
            let score = (config.priority || 0) - (this.recentIds.includes(config.id) ? 20 : 0);
            if (score > bestScore) {
                bestScore = score;
                bestId = config.id;
            }
        }
        return bestId || MUSIC_DEFAULT_TRACK;
    },
    scoreTrack(config, signals) {
        let age = signals.maxAge || 0;
        let tension = signals.tension || 0;
        let ageMin = config.ageMin === undefined ? 0 : config.ageMin;
        let ageMax = config.ageMax === undefined ? AGES.length - 1 : config.ageMax;
        let tensionMin = config.tensionMin === undefined ? 0 : config.tensionMin;
        let tensionMax = config.tensionMax === undefined ? 1 : config.tensionMax;
        if (age < ageMin - 0.01 || age > ageMax + 0.01) return -Infinity;

        let ageCenter = (ageMin + ageMax) / 2;
        let tensionCenter = (tensionMin + tensionMax) / 2;
        let score = config.priority || 0;
        score -= Math.abs(age - ageCenter) * 8;
        score -= Math.max(0, tensionMin - tension, tension - tensionMax) * 95;
        score -= Math.abs(tension - tensionCenter) * 18;
        if (signals.specialActive && (config.roles || []).some(role => role === 'specials' || role === 'base-pressure')) score += 10;
        if (signals.baseDanger > 0.58 && (config.scene === 'siege' || config.urgent)) score += 18;
        if (signals.troopPressure > 0.58 && (config.scene === 'battle' || config.scene === 'pressure')) score += 9;
        if (config.classicBattle) {
            if (signals.activeFight) {
                let classicFightBonus = age >= 3 ? 4 : 30;
                score += classicFightBonus + this.clamp((signals.clash || 0) * 10 + (signals.baseDanger || 0) * 8, 0, 14);
            } else {
                score -= 24;
            }
        }
        if (signals.activeFight && (config.id === 'graphiteSkirmish' || config.id === 'inklineAdvance')) score -= 16;
        return score;
    },
    readSignals() {
        if (!runtime.gameState || !runtime.gameState.player || !runtime.gameState.enemy) return this.signals || {};
        let player = runtime.gameState.player;
        let enemy = runtime.gameState.enemy;
        let playerHpRatio = player.maxHp ? Math.max(0, player.hp / player.maxHp) : 1;
        let enemyHpRatio = enemy.maxHp ? Math.max(0, enemy.hp / enemy.maxHp) : 1;
        let activeUnits = 0;
        let playerUnits = 0;
        let enemyUnits = 0;
        let playerFront = BASE_WIDTH;
        let enemyFront = CANVAS_WIDTH - BASE_WIDTH;
        let playerBaseThreat = 0;
        let enemyBaseThreat = 0;

        if (runtime.gameState.units && runtime.gameState.units.pool) {
            for (let i = 0; i < runtime.gameState.units.pool.length; i++) {
                let unit = runtime.gameState.units.pool[i];
                if (!unit.active) continue;
                activeUnits++;
                if (unit.team === 1) {
                    playerUnits++;
                    playerFront = Math.max(playerFront, unit.x || BASE_WIDTH);
                    enemyBaseThreat += this.clamp(((CANVAS_WIDTH - BASE_WIDTH) - (unit.x || 0)) / 280, 0, 1) < 1 ? 1 - this.clamp(((CANVAS_WIDTH - BASE_WIDTH) - (unit.x || 0)) / 280, 0, 1) : 0;
                } else {
                    enemyUnits++;
                    enemyFront = Math.min(enemyFront, unit.x || (CANVAS_WIDTH - BASE_WIDTH));
                    playerBaseThreat += this.clamp(((unit.x || CANVAS_WIDTH) - BASE_WIDTH) / 280, 0, 1) < 1 ? 1 - this.clamp(((unit.x || CANVAS_WIDTH) - BASE_WIDTH) / 280, 0, 1) : 0;
                }
            }
        }

        let frontGap = Math.max(0, enemyFront - playerFront);
        let clash = this.clamp(1 - frontGap / 560, 0, 1);
        let baseDanger = this.clamp(Math.max(playerBaseThreat, enemyBaseThreat) / 3, 0, 1);
        let lowBaseHp = 1 - Math.min(playerHpRatio, enemyHpRatio);
        let troopPressure = this.clamp(activeUnits / 16 + Math.abs(playerUnits - enemyUnits) / 18, 0, 1);
        let tension = this.clamp(
            activeUnits * 0.035 +
            clash * 0.24 +
            baseDanger * 0.36 +
            lowBaseHp * 0.32 +
            (runtime.gameState.specialActive ? 0.18 : 0) +
            (runtime.gameState.screenShake || 0) * 0.18,
            0,
            1
        );

        return {
            elapsed: runtime.globalTime,
            playerAge: player.age || 0,
            enemyAge: enemy.age || 0,
            maxAge: Math.max(player.age || 0, enemy.age || 0),
            activeUnits,
            playerUnits,
            enemyUnits,
            troopPressure,
            playerHpRatio,
            enemyHpRatio,
            baseDanger,
            clash,
            activeFight: activeUnits >= 2 && (clash > 0.08 || baseDanger > 0.03 || troopPressure > 0.12),
            tension,
            specialActive: !!runtime.gameState.specialActive,
            library: MUSIC_LIBRARY_VERSION
        };
    },
    rememberTrack(id) {
        if (!id) return;
        this.recentIds = [id].concat(this.recentIds.filter(existing => existing !== id)).slice(0, 5);
    },
    refreshActiveVolume() {
        let entry = this.activeId ? this.tracks[this.activeId] : null;
        if (entry && !this.muted && !this.suspended && !entry.audio.paused) {
            this.fadeTo(entry, this.targetVolume(entry), 500);
        }
    },
    fadeOut(entry, fadeMs, pauseWhenDone) {
        if (!entry) return;
        this.fadeTo(entry, 0, fadeMs, () => {
            if (pauseWhenDone) {
                entry.audio.pause();
                this.scheduleRelease(entry);
            }
        });
    },
    fadeOutAll(fadeMs, pauseWhenDone, exceptId = '') {
        for (let id in this.tracks) {
            if (id === exceptId) continue;
            let entry = this.tracks[id];
            if (!entry) continue;
            if (entry.config.id !== this.activeId || this.muted || this.suspended) this.cancelEntryStart(entry);
            if (!entry.audio.paused || this.currentOutputVolume(entry) > MUSIC_SILENCE_EPSILON) {
                this.fadeOut(entry, fadeMs, pauseWhenDone);
            }
        }
    },
    fadeTo(entry, targetVolume, fadeMs, onDone) {
        if (!entry) return;
        let startVolume = this.currentOutputVolume(entry);
        let target = Math.max(0, Math.min(1, targetVolume));
        let duration = Math.max(0, fadeMs || 0);
        this.cancelFade(entry);
        let token = ++entry.fadeToken;

        entry.fadeStartVolume = startVolume;
        entry.fadeTargetVolume = target;
        entry.fadeStartedAt = performance.now();
        entry.fadeDurationMs = duration;

        if (!duration || Math.abs(startVolume - target) <= MUSIC_SILENCE_EPSILON) {
            this.setOutputVolume(entry, target);
            if (onDone) onDone();
            return;
        }

        if (this.prepareOutput(entry)) {
            let ctx = this.audioContext;
            let gain = entry.gainNode.gain;
            let now = ctx.currentTime;
            try {
                gain.cancelScheduledValues(now);
                gain.setValueAtTime(startVolume, now);
                gain.setValueCurveAtTime(this.buildEqualPowerCurve(startVolume, target), now, Math.max(0.016, duration / 1000));
                entry.audio.volume = 1;
                entry.fadeTimer = setTimeout(() => {
                    if (entry.fadeToken !== token) return;
                    this.setOutputVolume(entry, target);
                    if (onDone) onDone();
                }, duration + 60);
                return;
            } catch (e) { }
        }

        this.writeOutputVolume(entry, startVolume, true);
        let step = (now) => {
            if (entry.fadeToken !== token) return;
            let progress = Math.min(1, (now - entry.fadeStartedAt) / duration);
            this.writeOutputVolume(entry, this.curveVolume(startVolume, target, progress), false);
            if (progress < 1) {
                entry.fadeFrame = requestAnimationFrame(step);
            } else {
                this.setOutputVolume(entry, target);
                if (onDone) onDone();
            }
        };
        entry.fadeFrame = requestAnimationFrame(step);
    },
    cancelEntryStart(entry) {
        if (!entry) return;
        entry.playToken++;
    },
    cancelFade(entry) {
        if (!entry) return;
        entry.fadeToken++;
        if (entry.fadeTimer) clearTimeout(entry.fadeTimer);
        if (entry.fadeFrame) cancelAnimationFrame(entry.fadeFrame);
        entry.fadeTimer = 0;
        entry.fadeFrame = 0;
        entry.fadeDurationMs = 0;
    },
    scheduleRelease(entry) {
        if (!entry) return;
        this.cancelRelease(entry);
        if (!this.muted && !this.suspended && (this.activeId === entry.config.id || this.pendingId === entry.config.id)) return;
        entry.releaseTimer = setTimeout(() => this.releaseEntry(entry), this.idleReleaseMs);
    },
    cancelRelease(entry) {
        if (!entry || !entry.releaseTimer) return;
        clearTimeout(entry.releaseTimer);
        entry.releaseTimer = 0;
    },
    releaseEntry(entry) {
        if (!entry) return;
        entry.releaseTimer = 0;
        if (!this.muted && !this.suspended && (this.activeId === entry.config.id || this.pendingId === entry.config.id)) return;
        if (!entry.audio.paused) return;
        this.cancelFade(entry);
        this.setOutputVolume(entry, 0);
        entry.audio.removeAttribute('src');
        entry.audio.load();
    },
    shouldUseElementMixer() {
        // Android WebView can mute file-backed media after createMediaElementSource.
        let userAgent = navigator.userAgent || '';
        return !!window.LocalGemmaAndroid || /; wv\)/i.test(userAgent);
    },
    getAudioContext() {
        if (this.audioContext || this.mixerUnavailable) return this.audioContext;
        let AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextCtor) {
            this.mixerUnavailable = true;
            return null;
        }
        try {
            this.audioContext = new AudioContextCtor();
            this.masterGainNode = this.audioContext.createGain();
            this.masterGainNode.gain.value = 1;
            this.masterGainNode.connect(this.audioContext.destination);
        } catch (e) {
            this.mixerUnavailable = true;
            this.audioContext = null;
            this.masterGainNode = null;
        }
        return this.audioContext;
    },
    resumeMixer() {
        let ctx = this.getAudioContext();
        if (!ctx || ctx.state !== 'suspended') return;
        try {
            let resumed = ctx.resume();
            if (resumed && typeof resumed.catch === 'function') resumed.catch(() => { });
        } catch (e) { }
    },
    prepareOutput(entry) {
        if (!entry) return false;
        if (entry.gainNode) {
            entry.audio.volume = 1;
            return true;
        }
        if (entry.webAudioFailed) return false;
        let ctx = this.getAudioContext();
        if (!ctx || !this.masterGainNode) return false;
        try {
            entry.mediaNode = ctx.createMediaElementSource(entry.audio);
            entry.gainNode = ctx.createGain();
            entry.gainNode.gain.value = entry.currentVolume || 0;
            entry.mediaNode.connect(entry.gainNode);
            entry.gainNode.connect(this.masterGainNode);
            entry.audio.volume = 1;
            return true;
        } catch (e) {
            entry.webAudioFailed = true;
            entry.mediaNode = null;
            entry.gainNode = null;
            entry.audio.volume = entry.currentVolume || 0;
            return false;
        }
    },
    setOutputVolume(entry, volume) {
        if (!entry) return;
        this.cancelFade(entry);
        entry.fadeStartVolume = volume;
        entry.fadeTargetVolume = volume;
        this.writeOutputVolume(entry, volume, true);
    },
    writeOutputVolume(entry, volume, cancelSchedule) {
        if (!entry) return;
        let target = this.clamp(volume, 0, 1);
        entry.currentVolume = target;
        if (entry.gainNode && this.audioContext) {
            try {
                let gain = entry.gainNode.gain;
                let now = this.audioContext.currentTime;
                if (cancelSchedule) gain.cancelScheduledValues(now);
                gain.setValueAtTime(target, now);
                entry.audio.volume = 1;
                return;
            } catch (e) { }
        }
        entry.audio.volume = target;
    },
    currentOutputVolume(entry) {
        if (!entry) return 0;
        if (entry.fadeDurationMs > 0) {
            let progress = this.clamp((performance.now() - entry.fadeStartedAt) / entry.fadeDurationMs, 0, 1);
            return this.curveVolume(entry.fadeStartVolume, entry.fadeTargetVolume, progress);
        }
        if (typeof entry.currentVolume === 'number') return entry.currentVolume;
        return entry.audio.volume || 0;
    },
    curveVolume(start, target, progress) {
        let t = this.clamp(progress, 0, 1);
        if (target >= start) {
            return start + (target - start) * Math.sin(t * Math.PI / 2);
        }
        return target + (start - target) * Math.cos(t * Math.PI / 2);
    },
    buildEqualPowerCurve(start, target) {
        let curve = new Float32Array(MUSIC_CROSSFADE_CURVE_STEPS);
        for (let i = 0; i < curve.length; i++) {
            curve[i] = this.curveVolume(start, target, i / (curve.length - 1));
        }
        return curve;
    },
    targetVolume(entry) {
        let level = this.masterVolume * (entry.config.volume || 1);
        if (this.ducked) level *= 0.45;
        return Math.max(0, Math.min(1, level));
    },
    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    },
    updateButton() {
        let btn = document.getElementById('btn-music');
        if (!btn) return;
        let title = this.activeId && this.tracks[this.activeId] ? this.tracks[this.activeId].config.title : 'Music';
        btn.classList.toggle('music-muted', this.muted);
        btn.innerHTML = this.muted ? '&#128263;' : '&#128266;';
        btn.title = this.muted ? 'Music off' : `Music on: ${title}`;
        btn.setAttribute('aria-label', this.muted ? 'Turn music on' : 'Turn music off');
    }
};

return { MusicDirector };
}
