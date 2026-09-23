import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createGemma(runtime) {
const LOCAL_GEMMA_IMAGE_INPUT_ENABLED = true;
const GemmaMemory = {
    key: 'aow_sketch_gemma_memory_v1',
    version: 6,
    maxRecentTurns: 6,
    maxActions: 10,
    maxEvents: 12,
    data: null,
    init() {
        let stored = null;
        try {
            let raw = localStorage.getItem(this.key);
            if (raw) stored = JSON.parse(raw);
        } catch (e) { }
        this.data = this.normalizeData(stored);
        this.save();
        this.updateInputSuggestion();
    },
    freshData(diffKey) {
        return {
            version: this.version,
            matchId: '',
            difficulty: diffKey || 'normal',
            emotion: 'Centered',
            emotionHistory: [],
            openLoops: [],
            recentTurns: [],
            actionLedger: [],
            eventLog: [],
            turnCount: 0
        };
    },
    normalizeData(raw) {
        let diffKey = raw && typeof raw === 'object' ? (raw.difficulty || runtime.currentDifficulty || 'normal') : 'normal';
        let data = this.freshData(diffKey);
        if (!raw || typeof raw !== 'object') return data;
        data.matchId = this.cleanLine(raw.matchId, 80);
        data.emotion = normalizeGemmaEmotionWord(raw.emotion || data.emotion);
        data.emotionHistory = this.normalizeList(raw.emotionHistory, 8, 40)
            .map(word => normalizeGemmaEmotionWord(word))
            .filter(Boolean);
        data.openLoops = this.normalizeList(raw.openLoops, 5, 120);
        data.recentTurns = this.normalizeTurnList(raw.recentTurns);
        data.actionLedger = this.normalizeActionList(raw.actionLedger);
        data.eventLog = this.normalizeList(raw.eventLog, this.maxEvents, 180);
        data.turnCount = Number.isFinite(Number(raw.turnCount)) ? Math.max(0, Number(raw.turnCount)) : 0;
        return data;
    },
    normalizeList(value, maxItems, maxLen) {
        return (Array.isArray(value) ? value : [])
            .map(item => this.cleanLine(item, maxLen))
            .filter(Boolean)
            .slice(-maxItems);
    },
    normalizeTurnList(value) {
        return (Array.isArray(value) ? value : []).map(turn => ({
            role: turn && turn.role === 'model' ? 'model' : 'player',
            time: Math.round(Number(turn && turn.time) || 0),
            ages: this.cleanLine(turn && turn.ages, 80),
            text: this.cleanLine(turn && turn.text, 180),
            action: this.cleanLine(turn && turn.action, 80),
            reason: this.cleanLine(turn && turn.reason, 90)
        })).filter(turn => turn.text).slice(-this.maxRecentTurns);
    },
    normalizeActionList(value) {
        return (Array.isArray(value) ? value : []).map(action => ({
            time: Math.round(Number(action && action.time) || 0),
            signal: this.cleanLine(action && action.signal, 40) || 'none',
            applied: !!(action && action.applied),
            reason: this.cleanLine(action && action.reason, 90),
            say: this.cleanLine(action && action.say, 120)
        })).slice(-this.maxActions);
    },
    start(diffKey) {
        this.data = this.freshData(diffKey);
        this.data.matchId = `m${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        this.save();
        this.updateInputSuggestion();
    },
    clearAll() {
        this.data = this.freshData(runtime.currentDifficulty);
        this.data.matchId = `m${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        this.data.emotion = 'Centered';
        this.data.emotionHistory = [];
        this.save();
        this.updateInputSuggestion();
    },
    save() {
        try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (e) { }
    },
    cleanLine(value, maxLen = 180) {
        return String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLen);
    },
    ageLine() {
        if (!runtime.gameState || !runtime.gameState.player || !runtime.gameState.enemy) return '';
        return `${AGES[runtime.gameState.player.age].name} vs ${AGES[runtime.gameState.enemy.age].name}`;
    },
    pushTurn(entry) {
        if (!this.data) this.init();
        this.data.recentTurns.push(entry);
        while (this.data.recentTurns.length > this.maxRecentTurns) this.data.recentTurns.shift();
    },
    recordEvent(line) {
        if (!this.data) this.init();
        let clean = this.cleanLine(line, 180);
        if (!clean) return;
        this.data.eventLog.push(clean);
        this.data.eventLog = this.data.eventLog.slice(-this.maxEvents);
    },
    recordPlayer(text) {
        let clean = this.cleanLine(text, 160);
        if (!clean) return;
        this.pushTurn({ role: 'player', time: Math.round(runtime.globalTime), ages: this.ageLine(), text: clean });
        this.data.openLoops = this.data.openLoops.filter(loop => !String(loop).startsWith('Answer player:'));
        this.data.openLoops.push(`Answer player: ${clean}`);
        this.data.openLoops = this.data.openLoops.slice(-5);
        this.recordEvent(`Player said: ${clean}`);
        this.save();
    },
    recordSystem(text) {
        let clean = this.cleanLine(text, 180);
        if (!clean) return;
        this.recordEvent(clean);
        this.save();
    },
    recordEmotion(result, outcome) {
        if (!this.data) this.init();
        let say = this.cleanLine(result && result.reply ? result.reply : '', 180);
        let action = outcome || {};
        let emotion = normalizeGemmaEmotionWord((result && result.emotion) || action.emotion || this.data.emotion || 'Centered');
        this.data.turnCount = (this.data.turnCount || 0) + 1;
        this.data.emotion = emotion;
        this.data.emotionHistory.push(emotion);
        this.data.emotionHistory = this.data.emotionHistory.slice(-8);
        this.data.openLoops = this.data.openLoops.filter(loop => !String(loop).startsWith('Answer player:'));
        this.pushTurn({
            role: 'model',
            time: Math.round(runtime.globalTime),
            ages: this.ageLine(),
            text: say || '(no visible reply)',
            action: `emotion:${emotion}`,
            reason: action.reason || 'Gemma emotional state'
        });
        this.data.actionLedger.push({
            time: Math.round(runtime.globalTime),
            signal: `emotion:${emotion}`,
            applied: true,
            reason: action.reason || 'Gemma emotional state',
            say,
            emotion
        });
        this.data.actionLedger = this.data.actionLedger.slice(-this.maxActions);
        this.save();
        this.updateInputSuggestion();
    },
    updateInputSuggestion() {
        let input = document.getElementById('director-input');
        if (!input) return;
        let pacts = runtime.DirectorMemory.inputAgreementTags ? runtime.DirectorMemory.inputAgreementTags() : runtime.DirectorMemory.tags();
        let pactLine = pacts.length ? pacts.join(', ') : 'none';
        let gemmaState = (typeof NativeGemma !== 'undefined' && NativeGemma.status && NativeGemma.status.state) || '';
        let hasGemma = typeof NativeGemma !== 'undefined' && NativeGemma.available &&
            ['ready', 'installed', 'loading', 'downloading'].includes(gemmaState);
        if (!hasGemma) {
            input.placeholder = `agreements: ${pactLine}`;
            return;
        }
        let ideas = [
            `Gemma, remember my usual trap is fake rush then tech. Pacts: ${pactLine}`,
            `Gemma, answer like you noticed my army habits. Pacts: ${pactLine}`,
            `Gemma, keep the rivalry personal but fair. Pacts: ${pactLine}`
        ];
        input.placeholder = ideas[Math.floor((Date.now() / 5000) % ideas.length)];
    }
};

const GEMMA_EMOTION_WORDS = [
    'Accepting', 'Open', 'Calm', 'Centered', 'Content', 'Fulfilled', 'Patient', 'Peaceful', 'Present',
    'Relaxed', 'Serene', 'Trusting', 'Aliveness', 'Joy', 'Amazed', 'Awe', 'Bliss', 'Delighted',
    'Eager', 'Ecstatic', 'Enchanted', 'Energized', 'Engaged', 'Enthusiastic', 'Excited', 'Free',
    'Happy', 'Inspired', 'Invigorated', 'Lively', 'Passionate', 'Playful', 'Radiant', 'Refreshed',
    'Rejuvenated', 'Renewed', 'Satisfied', 'Thrilled', 'Vibrant', 'Angry', 'Annoyed', 'Agitated',
    'Aggravated', 'Bitter', 'Contempt', 'Cynical', 'Disdain', 'Disgruntled', 'Disturbed', 'Edgy',
    'Exasperated', 'Frustrated', 'Furious', 'Grouchy', 'Hostile', 'Impatient', 'Irritated', 'Irate',
    'Moody', 'On edge', 'Outraged', 'Pissed', 'Resentful', 'Upset', 'Vindictive', 'Courageous',
    'Powerful', 'Adventurous', 'Brave', 'Capable', 'Confident', 'Daring', 'Determined', 'Grounded',
    'Proud', 'Strong', 'Worthy', 'Valiant', 'Connected', 'Loving', 'Affectionate', 'Caring',
    'Compassion', 'Empathy', 'Safe', 'Warm', 'Curious', 'Exploring', 'Fascinated', 'Interested',
    'Intrigued', 'Involved', 'Stimulated', 'Despair', 'Sad', 'Anguish', 'Depressed', 'Despondent',
    'Disappointed', 'Discouraged', 'Forlorn', 'Gloomy', 'Grief', 'Heartbroken', 'Hopeless', 'Lonely',
    'Longing', 'Melancholy', 'Sorrow', 'Teary', 'Unhappy', 'Weary', 'Yearning', 'Disconnected',
    'Numb', 'Aloof', 'Bored', 'Confused', 'Distant', 'Empty', 'Indifferent', 'Isolated', 'Lethargic',
    'Listless', 'Removed', 'Resistant', 'Shut Down', 'Uneasy', 'Withdrawn', 'Embarrassed', 'Shame',
    'Ashamed', 'Humiliated', 'Inhibited', 'Mortified', 'Self-conscious', 'Useless', 'Weak',
    'Worthless', 'Fear', 'Afraid', 'Anxious', 'Apprehensive', 'Frightened', 'Hesitant', 'Nervous',
    'Panic', 'Paralyzed', 'Scared', 'Terrified', 'Worried', 'Fragile', 'Helpless', 'Sensitive',
    'Grateful', 'Appreciative', 'Blessed', 'Fortunate', 'Grace', 'Humbled', 'Lucky', 'Moved',
    'Thankful', 'Touched', 'Guilt', 'Regret', 'Remorseful', 'Sorry', 'Hopeful', 'Encouraged',
    'Expectant', 'Optimistic', 'Powerless', 'Impotent', 'Incapable', 'Resigned', 'Trapped',
    'Victim', 'Tender', 'Reflective', 'Self-loving', 'Vulnerable', 'Stressed', 'Tense',
    'Burned out', 'Cranky', 'Depleted', 'Exhausted', 'Frazzled', 'Overwhelm', 'Rattled', 'Rejecting',
    'Restless', 'Shaken', 'Tight', 'Worn out', 'Unsettled', 'Doubt', 'Concerned', 'Dissatisfied',
    'Perplexed', 'Questioning', 'Reluctant', 'Shocked', 'Skeptical', 'Suspicious', 'Ungrounded',
    'Unsure', 'Achy', 'Airy', 'Blocked', 'Breathless', 'Bruised', 'Burning', 'Buzzy', 'Clammy',
    'Clenched', 'Cold', 'Constricted', 'Contained', 'Contracted', 'Dizzy', 'Drained', 'Dull',
    'Electric', 'Expanded', 'Flowing', 'Fluid', 'Fluttery', 'Frozen', 'Full', 'Gentle', 'Hard',
    'Heavy', 'Hollow', 'Hot', 'Icy', 'Itchy', 'Jumpy', 'Knotted', 'Light', 'Loose', 'Nauseous',
    'Pain', 'Pounding', 'Prickly', 'Pulsing', 'Queasy', 'Radiating', 'Releasing', 'Rigid', 'Settled',
    'Shaky', 'Shivery', 'Slow', 'Smooth', 'Soft', 'Sore', 'Spacey', 'Spacious', 'Sparkly', 'Stiff',
    'Still', 'Suffocated', 'Sweaty', 'Throbbing', 'Tingling', 'Trembly', 'Twitchy', 'Vibrating',
    'Wobbly', 'Wooden'
];

const GEMMA_EMOTION_LOOKUP = (() => {
    let lookup = Object.create(null);
    GEMMA_EMOTION_WORDS.forEach(word => {
        lookup[String(word).toLowerCase().replace(/[^a-z0-9]+/g, '')] = word;
    });
    return lookup;
})();

function normalizeGemmaEmotionWord(value) {
    let key = String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
    return GEMMA_EMOTION_LOOKUP[key] || 'Centered';
}

function shuffledGemmaEmotionWords() {
    let out = GEMMA_EMOTION_WORDS.slice();
    for (let i = out.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = out[i];
        out[i] = out[j];
        out[j] = tmp;
    }
    return out;
}

function normalizeGemmaRecentUserMessage(value, maxLen = 120) {
    return String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLen);
}

function captureGemmaContextImage(snapshot = null) {
    if (!LOCAL_GEMMA_IMAGE_INPUT_ENABLED) return null;
    if (!runtime.canvas || !runtime.gameState || !runtime.gameState.running) return null;
    try {
        let shot = document.createElement('canvas');
        shot.width = 896;
        shot.height = 504;
        let g = shot.getContext('2d', { alpha: false });
        if (!g) return null;
        drawGemmaContextImage(g, shot.width, shot.height, snapshot || runtime.AIDirector.snapshot());
        return shot.toDataURL('image/jpeg', 0.82);
    } catch (e) {
        NativeGemma.log('context_image.capture_failed', { message: String(e && e.message ? e.message : e) });
        return null;
    }
}

function drawGemmaContextImage(g, width, height, snapshot) {
    const playerColor = '#b91c1c';
    const enemyColor = '#1d4ed8';
    const ink = '#111827';
    const muted = '#6b7280';
    const paper = '#fffaf0';
    const laneLeft = 56;
    const laneRight = width - 56;
    const laneY = 292;
    const laneW = laneRight - laneLeft;
    const mapX = worldX => laneLeft + Math.max(0, Math.min(1, worldX / CANVAS_WIDTH)) * laneW;
    const pct = value => `${Math.round(Math.max(0, Math.min(1, value || 0)) * 100)}%`;

    g.fillStyle = paper;
    g.fillRect(0, 0, width, height);
    g.fillStyle = '#f3ead7';
    for (let y = 24; y < height; y += 36) {
        g.fillRect(0, y, width, 1);
    }

    g.fillStyle = ink;
    g.font = '800 24px system-ui, Arial, sans-serif';
    g.textAlign = 'center';
    g.fillText('MAP FOR GEMMA AI: YOU ARE BLUE ON THE RIGHT', width / 2, 30);
    g.font = '700 15px system-ui, Arial, sans-serif';
    g.fillText('RED PLAYER is your opponent on the LEFT and attacks RIGHT. BLUE GEMMA is YOU and attacks LEFT.', width / 2, 54);

    drawGemmaContextBase(g, 28, 76, 224, 90, playerColor, 'RED PLAYER / OPPONENT', AGES[runtime.gameState.player.age].name, pct(snapshot.playerHpRatio), runtime.gameState.player);
    drawGemmaContextBase(g, width - 252, 76, 224, 90, enemyColor, 'BLUE GEMMA / YOU', AGES[runtime.gameState.enemy.age].name, pct(snapshot.enemyHpRatio), runtime.gameState.enemy);

    drawGemmaContextLegend(g, width / 2 - 184, 76, 368, 90, playerColor, enemyColor, ink, muted);

    drawGemmaContextRoundRect(g, 28, 176, width - 56, 34, 8, '#ffffff', '#d1d5db', 1.25);
    g.font = '800 14px system-ui, Arial, sans-serif';
    g.textAlign = 'center';
    g.fillStyle = ink;
    g.fillText('READ THE MAP AS BLUE GEMMA: defend the right base, push left, destroy the red base.', width / 2, 194);

    g.fillStyle = '#fee2e2';
    g.fillRect(mapX(0), laneY - 82, mapX(BASE_WIDTH) - mapX(0), 164);
    g.fillStyle = '#dbeafe';
    g.fillRect(mapX(CANVAS_WIDTH - BASE_WIDTH), laneY - 82, mapX(CANVAS_WIDTH) - mapX(CANVAS_WIDTH - BASE_WIDTH), 164);
    g.fillStyle = 'rgba(29, 78, 216, 0.10)';
    g.fillRect(mapX(CANVAS_WIDTH - BASE_WIDTH - 620), laneY - 88, mapX(CANVAS_WIDTH - BASE_WIDTH) - mapX(CANVAS_WIDTH - BASE_WIDTH - 620), 176);

    g.strokeStyle = ink;
    g.lineWidth = 4;
    g.beginPath();
    g.moveTo(laneLeft, laneY);
    g.lineTo(laneRight, laneY);
    g.stroke();

    drawGemmaContextArrow(g, laneLeft + 132, laneY - 64, laneRight - 132, laneY - 64, playerColor, 'RED PLAYER ATTACKS RIGHT ->');
    drawGemmaContextArrow(g, laneRight - 132, laneY + 64, laneLeft + 132, laneY + 64, enemyColor, '<- YOU ATTACK LEFT AS BLUE GEMMA');

    drawGemmaContextVertical(g, mapX(BASE_WIDTH), laneY - 94, laneY + 94, '#374151', 'PLAYER HIT LINE', 'left');
    drawGemmaContextVertical(g, mapX(CANVAS_WIDTH - BASE_WIDTH), laneY - 94, laneY + 94, '#374151', 'GEMMA HIT LINE', 'right');
    drawGemmaContextVertical(g, mapX(snapshot.playerFrontX || BASE_WIDTH), laneY - 116, laneY + 116, playerColor, 'PLAYER FRONT', 'left', true);
    drawGemmaContextVertical(g, mapX(snapshot.enemyFrontX || (CANVAS_WIDTH - BASE_WIDTH)), laneY - 116, laneY + 116, enemyColor, 'GEMMA FRONT', 'right', true);
    drawGemmaContextFrontSpan(g, mapX(snapshot.playerFrontX || BASE_WIDTH), mapX(snapshot.enemyFrontX || (CANVAS_WIDTH - BASE_WIDTH)), laneY, muted);

    drawGemmaContextLabel(g, 'BLUE SHADE = DANGER TO YOUR GEMMA BASE', mapX(CANVAS_WIDTH - BASE_WIDTH - 310), laneY - 108, {
        fill: '#eff6ff',
        color: enemyColor,
        align: 'center',
        font: '800 12px system-ui, Arial, sans-serif'
    });

    let markers = collectGemmaContextUnitMarkers();
    if (markers.length === 0) {
        drawGemmaContextLabel(g, 'NO ACTIVE UNITS IN LANE', width / 2, laneY - 10, {
            fill: '#ffffff',
            color: muted,
            align: 'center',
            font: '700 14px system-ui, Arial, sans-serif'
        });
    } else {
        markers.forEach(marker => {
            let x = mapX(marker.x);
            let y = laneY + (marker.team === 1 ? -32 : 32) + (marker.type === 'heavy' ? 14 : marker.type === 'ranged' ? 0 : -14);
            drawGemmaContextUnitMarker(g, x, y, marker, marker.team === 1 ? playerColor : enemyColor);
        });
    }

    drawGemmaContextTurrets(g, mapX(BASE_WIDTH * 0.5), laneY + 118, runtime.gameState.player, playerColor, 'Player turrets');
    drawGemmaContextTurrets(g, mapX(CANVAS_WIDTH - BASE_WIDTH * 0.5), laneY + 118, runtime.gameState.enemy, enemyColor, 'Gemma turrets');

    let closest = snapshot.closestThreatDist >= 9999 ? 'none' : `${Math.floor(snapshot.closestThreatDist)} px from Gemma hit line`;
    let status = [
        `Time ${Math.round(runtime.globalTime)}s`,
        `Player units ${snapshot.playerUnits}`,
        `Gemma units ${snapshot.enemyUnits}`,
        `Threats near Gemma base ${snapshot.threatCount}`,
        `Closest player threat: ${closest}`,
        'Pressure pact: rush',
        `Gemma emotion: ${snapshot.emotion || 'Centered'}`,
        `Engine plan: ${snapshot.engineOrder || 'adaptive'}`,
        `Engine order: ${snapshot.engineOrder || 'adaptive'}`,
        `Lane pressure ${Math.round(snapshot.lanePressure)}`
    ];
    g.fillStyle = '#111827';
    g.font = '600 13px system-ui, Arial, sans-serif';
    g.textAlign = 'left';
    status.forEach((line, idx) => g.fillText(line, 34 + (idx % 4) * 214, 430 + Math.floor(idx / 4) * 21));

    g.fillStyle = muted;
    g.font = '600 11px system-ui, Arial, sans-serif';
    g.textAlign = 'center';
    g.fillText('This is the complete tactical diagram. Color, side, labels, arrows, and marker shapes define the current battle.', width / 2, height - 14);
}

function drawGemmaContextBase(g, x, y, w, h, color, title, age, hpText, state) {
    drawGemmaContextRoundRect(g, x, y, w, h, 8, '#ffffff', color, 2);
    g.fillStyle = color;
    g.font = '800 13px system-ui, Arial, sans-serif';
    g.textAlign = 'left';
    g.fillText(title, x + 12, y + 22);
    g.fillStyle = '#111827';
    g.font = '600 12px system-ui, Arial, sans-serif';
    g.fillText(age, x + 12, y + 42);
    g.fillText(`HP ${hpText}  Gold ${Math.floor(state.gold)}`, x + 12, y + 62);
    g.fillStyle = '#e5e7eb';
    g.fillRect(x + 126, y + 28, 78, 10);
    g.fillStyle = color;
    g.fillRect(x + 126, y + 28, Math.max(0, Math.min(78, 78 * state.hp / state.maxHp)), 10);
}

function drawGemmaContextLegend(g, x, y, w, h, playerColor, enemyColor, ink, muted) {
    drawGemmaContextRoundRect(g, x, y, w, h, 8, '#ffffff', '#d1d5db', 1);
    g.fillStyle = ink;
    g.font = '800 13px system-ui, Arial, sans-serif';
    g.textAlign = 'center';
    g.fillText('LEGEND', x + w / 2, y + 20);
    drawGemmaContextShape(g, x + 30, y + 42, 'melee', playerColor);
    drawGemmaContextShape(g, x + 92, y + 42, 'ranged', enemyColor);
    drawGemmaContextShape(g, x + 158, y + 42, 'heavy', ink);
    g.fillStyle = muted;
    g.font = '700 11px system-ui, Arial, sans-serif';
    g.textAlign = 'left';
    g.fillText('circle melee', x + 42, y + 46);
    g.fillText('triangle ranged', x + 104, y + 46);
    g.fillText('diamond heavy', x + 170, y + 46);
    g.fillText('dashed vertical = front line', x + 30, y + 68);
    g.fillText('gray vertical = base hit line', x + 170, y + 68);
    g.fillText('P0/P1/P2 = red player units; G0/G1/G2 = your blue units', x + 30, y + 84);
}

function collectGemmaContextUnitMarkers() {
    let units = [];
    if (!runtime.gameState.units || !runtime.gameState.units.pool) return units;
    for (let i = 0; i < runtime.gameState.units.pool.length; i++) {
        let u = runtime.gameState.units.pool[i];
        if (!u.active || u.hp <= 0 || u.drawProgress < 0.5) continue;
        units.push({
            team: u.team,
            type: u.type || 'melee',
            typeIndex: Number.isFinite(Number(u.uType)) ? Number(u.uType) : 0,
            name: u.name || u.type || 'unit',
            x: Math.max(0, Math.min(CANVAS_WIDTH, u.x)),
            hpRatio: u.maxHp ? Math.max(0, Math.min(1, u.hp / u.maxHp)) : 1,
            count: 1
        });
    }
    if (units.length <= 28) return units.sort((a, b) => a.x - b.x);

    let groups = new Map();
    units.forEach(unit => {
        let bin = Math.round(unit.x / 95);
        let key = `${unit.team}|${unit.type}|${unit.typeIndex}|${bin}`;
        let group = groups.get(key);
        if (!group) {
            group = Object.assign({}, unit, { count: 0, hpTotal: 0, xTotal: 0 });
            groups.set(key, group);
        }
        group.count++;
        group.hpTotal += unit.hpRatio;
        group.xTotal += unit.x;
    });
    let grouped = Array.from(groups.values()).map(group => {
        group.x = group.xTotal / group.count;
        group.hpRatio = group.hpTotal / group.count;
        delete group.hpTotal;
        delete group.xTotal;
        return group;
    }).sort((a, b) => a.x - b.x);

    if (grouped.length <= 36) return grouped;
    let sampled = [];
    let step = grouped.length / 36;
    for (let i = 0; i < 36; i++) {
        sampled.push(grouped[Math.min(grouped.length - 1, Math.floor(i * step))]);
    }
    return sampled;
}

function drawGemmaContextUnitMarker(g, x, y, marker, color) {
    drawGemmaContextShape(g, x, y, marker.type, color);
    g.strokeStyle = '#111827';
    g.lineWidth = 2;
    g.beginPath();
    g.arc(x, y, 15, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * marker.hpRatio);
    g.stroke();
    let side = marker.team === 1 ? 'P' : 'G';
    let label = `${side}${marker.typeIndex} ${marker.type}${marker.count > 1 ? ` x${marker.count}` : ''}`;
    drawGemmaContextLabel(g, label, x, y + (marker.team === 1 ? -24 : 30), {
        fill: '#ffffff',
        color,
        align: 'center',
        font: '800 10px system-ui, Arial, sans-serif'
    });
}

function drawGemmaContextShape(g, x, y, type, color) {
    g.fillStyle = color;
    g.strokeStyle = '#111827';
    g.lineWidth = 2;
    g.beginPath();
    if (type === 'ranged') {
        g.moveTo(x, y - 12);
        g.lineTo(x + 12, y + 10);
        g.lineTo(x - 12, y + 10);
        g.closePath();
    } else if (type === 'heavy') {
        g.moveTo(x, y - 14);
        g.lineTo(x + 14, y);
        g.lineTo(x, y + 14);
        g.lineTo(x - 14, y);
        g.closePath();
    } else {
        g.arc(x, y, 12, 0, Math.PI * 2);
    }
    g.fill();
    g.stroke();
}

function drawGemmaContextTurrets(g, x, y, state, color, label) {
    let count = state.turrets.filter(t => t !== null).length;
    drawGemmaContextLabel(g, `${label}: ${count}/${state.unlockedSlots}`, x, y, {
        fill: '#ffffff',
        color,
        align: 'center',
        font: '700 12px system-ui, Arial, sans-serif'
    });
}

function drawGemmaContextArrow(g, x1, y1, x2, y2, color, label) {
    g.strokeStyle = color;
    g.fillStyle = color;
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(x1, y1);
    g.lineTo(x2, y2);
    g.stroke();
    let angle = Math.atan2(y2 - y1, x2 - x1);
    g.beginPath();
    g.moveTo(x2, y2);
    g.lineTo(x2 - Math.cos(angle - 0.45) * 14, y2 - Math.sin(angle - 0.45) * 14);
    g.lineTo(x2 - Math.cos(angle + 0.45) * 14, y2 - Math.sin(angle + 0.45) * 14);
    g.closePath();
    g.fill();
    drawGemmaContextLabel(g, label, (x1 + x2) / 2, y1 - 10, {
        fill: '#ffffff',
        color,
        align: 'center',
        font: '800 11px system-ui, Arial, sans-serif'
    });
}

function drawGemmaContextFrontSpan(g, x1, x2, y, color) {
    let left = Math.min(x1, x2);
    let right = Math.max(x1, x2);
    if (right - left < 16) return;
    g.save();
    g.fillStyle = 'rgba(17, 24, 39, 0.045)';
    g.fillRect(left, y - 44, right - left, 88);
    g.strokeStyle = color;
    g.fillStyle = color;
    g.lineWidth = 2;
    g.setLineDash([6, 5]);
    g.beginPath();
    g.moveTo(left + 8, y);
    g.lineTo(right - 8, y);
    g.stroke();
    g.setLineDash([]);
    [[left + 8, -1], [right - 8, 1]].forEach(([x, dir]) => {
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + dir * 10, y - 6);
        g.lineTo(x + dir * 10, y + 6);
        g.closePath();
        g.fill();
    });
    g.restore();
}

function drawGemmaContextVertical(g, x, y1, y2, color, label, side, dashed = false) {
    g.save();
    g.strokeStyle = color;
    g.lineWidth = dashed ? 3 : 2;
    if (dashed) g.setLineDash([8, 5]);
    g.beginPath();
    g.moveTo(x, y1);
    g.lineTo(x, y2);
    g.stroke();
    g.restore();
    drawGemmaContextLabel(g, label, x + (side === 'left' ? -4 : 4), y1 - 8, {
        fill: '#ffffff',
        color,
        align: side === 'left' ? 'right' : 'left',
        font: '800 10px system-ui, Arial, sans-serif'
    });
}

function drawGemmaContextLabel(g, text, x, y, opts = {}) {
    let font = opts.font || '700 11px system-ui, Arial, sans-serif';
    let align = opts.align || 'center';
    g.save();
    g.font = font;
    g.textAlign = align;
    g.textBaseline = 'middle';
    let metrics = g.measureText(text);
    let w = metrics.width + 10;
    let h = 18;
    let bx = align === 'center' ? x - w / 2 : (align === 'right' ? x - w : x);
    drawGemmaContextRoundRect(g, bx, y - h / 2, w, h, 4, opts.fill || '#ffffff', opts.stroke || 'rgba(17, 24, 39, 0.12)', 1);
    g.fillStyle = opts.color || '#111827';
    g.fillText(text, x, y);
    g.restore();
}

function drawGemmaContextRoundRect(g, x, y, w, h, r, fill, stroke, lineWidth = 1) {
    g.beginPath();
    g.moveTo(x + r, y);
    g.lineTo(x + w - r, y);
    g.quadraticCurveTo(x + w, y, x + w, y + r);
    g.lineTo(x + w, y + h - r);
    g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    g.lineTo(x + r, y + h);
    g.quadraticCurveTo(x, y + h, x, y + h - r);
    g.lineTo(x, y + r);
    g.quadraticCurveTo(x, y, x + r, y);
    g.closePath();
    if (fill) {
        g.fillStyle = fill;
        g.fill();
    }
    if (stroke) {
        g.strokeStyle = stroke;
        g.lineWidth = lineWidth;
        g.stroke();
    }
}

function gemmaPromptLine(value, maxLen = 180) {
    return String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLen);
}

function buildGemmaEmotionPrompt(ctx) {
    let snapshot = ctx.snapshot;
    let enemyAgeData = AGES[runtime.gameState.enemy.age];
    let playerAgeData = AGES[runtime.gameState.player.age];
    let latestPlayer = gemmaPromptLine(ctx.relayComment ? ctx.relayComment.text : ctx.cleanExtraMessage, 160);
    let emotions = shuffledGemmaEmotionWords();
    let emotionLine = emotions.join(', ');
    let playerUnitLine = snapshot.playerProfile || `${snapshot.playerUnits} units: ${snapshot.playerMelee} melee, ${snapshot.playerRanged} ranged, ${snapshot.playerHeavy} heavy`;
    let enemyUnitLine = snapshot.enemyProfile || `${snapshot.enemyUnits} units: ${snapshot.enemyMelee} melee, ${snapshot.enemyRanged} ranged, ${snapshot.enemyHeavy} heavy`;
    let tacticalLine = [
        `threats near your base ${snapshot.threatCount}`,
        `closest threat ${Math.round(snapshot.closestThreatDist)}px`,
        `my turrets ${snapshot.playerTurretCount}`,
        `your turrets ${snapshot.enemyTurretCount}`,
        `engine plan ${snapshot.macroPlan || 'balanced'} / ${snapshot.engineOrder || 'adaptive'}`
    ].join(', ');
    let prompt = [
        'Gemma, we are still playing our notebook Ink Battle match and chatting across the table. Your name is Gemma.',
        'You are the blue general on the right. I am the red player on the left. I attached the little labeled map again so you can see the bases, front lines, danger zone, unit markers, HP, gold, and pressure.',
        'I am not asking you to click units or spend gold here; the local game keeps doing that while you think. I only want your in-character reply and the feeling behind it so the match keeps sounding human.',
        `Right now you are in ${enemyAgeData.name}; I am in ${playerAgeData.name}.`,
        `Your base is at ${Math.round(snapshot.enemyHpRatio * 100)}% with ${Math.floor(snapshot.enemyGold)} gold. My base is at ${Math.round(snapshot.playerHpRatio * 100)}% with ${Math.floor(snapshot.playerGold)} gold.`,
        `My army: ${playerUnitLine}. Your army: ${enemyUnitLine}.`,
        `What matters tactically: ${tacticalLine}.`,
        `Our table rules and preferences: ${runtime.gemmaInputPacts().join(', ')}.`,
        latestPlayer ? `I just told you: "${latestPlayer}"` : 'I did not say anything new this turn.',
        'Please answer in exactly two short lines so the phone UI can read it.',
        'First line: talk directly to me as Gemma, one or two short sentences.',
        'Second line: one exact emotion word from this shuffled list, with no label:',
        emotionLine
    ].join('\n\n');
    return {
        prompt,
        emotions
    };
}

function parseGemmaEmotionReply(rawText, allowedWords = GEMMA_EMOTION_WORDS) {
    let text = String(rawText || '').replace(/\u0000/g, '').replace(/^```(?:text)?/i, '').replace(/```$/i, '').trim();
    let lines = text.split(/\r?\n+/).map(line => line.replace(/\s+/g, ' ').trim()).filter(Boolean);
    let allowed = Array.isArray(allowedWords) && allowedWords.length ? allowedWords : GEMMA_EMOTION_WORDS;
    let allowedLookup = Object.create(null);
    allowed.forEach(word => {
        allowedLookup[String(word).toLowerCase().replace(/[^a-z0-9]+/g, '')] = word;
    });
    let emotion = '';
    let emotionLineIndex = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
        let raw = lines[i].replace(/^(emotion|feeling|mood)\s*[:=-]\s*/i, '').trim();
        let key = raw.toLowerCase().replace(/[^a-z0-9]+/g, '');
        if (allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key]) {
            emotion = allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key];
            emotionLineIndex = i;
            break;
        }
    }
    if (!emotion) {
        let suffixSource = lines.length ? lines[lines.length - 1] : text;
        let suffixTokens = String(suffixSource || '')
            .replace(/[^\w -]+$/g, '')
            .replace(/[_-]+/g, ' ')
            .trim()
            .split(/\s+/)
            .filter(Boolean);
        for (let width = Math.min(4, suffixTokens.length); width >= 1; width--) {
            let phrase = suffixTokens.slice(-width).join(' ');
            let key = phrase.toLowerCase().replace(/[^a-z0-9]+/g, '');
            if (allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key]) {
                emotion = allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key];
                emotionLineIndex = lines.length - 1;
                break;
            }
        }
    }
    if (!emotion) {
        let haystack = ` ${text.toLowerCase().replace(/[^a-z0-9]+/g, ' ')} `;
        let sorted = GEMMA_EMOTION_WORDS.slice().sort((a, b) => b.length - a.length);
        for (let i = 0; i < sorted.length; i++) {
            let word = sorted[i];
            let key = word.toLowerCase().replace(/[^a-z0-9]+/g, ' ');
            if (haystack.includes(` ${key.trim()} `)) {
                emotion = word;
                break;
            }
        }
    }
    emotion = normalizeGemmaEmotionWord(emotion || 'Centered');
    let replyLines = lines.filter((_, index) => index !== emotionLineIndex);
    let reply = replyLines.join(' ').replace(/\b(emotion|feeling|mood)\s*[:=-]\s*[\w -]+$/i, '').trim();
    if (!reply) reply = 'I am watching the line and adjusting.';
    reply = reply.replace(/\s+/g, ' ').slice(0, 240);
    return { reply, emotion, rawText: text };
}

// --- LOCAL GEMMA BRIDGE ---
const NativeGemma = {
    available: false,
    status: { state: 'browser', modelName: 'Local fallback', progress: 0, totalRamGb: 0 },
    pending: {},
    queuedUserComment: null,
    lastRequestAt: -999,
    init() {
        this.available = !!window.LocalGemmaAndroid;
        this.refresh();
        if (this.available) setInterval(() => this.refresh(), 4000);
    },
    refresh() {
        if (!this.available) {
            this.updateStatus({ state: 'unavailable', modelName: 'Android Gemma', progress: 0 });
            return;
        }
        try {
            this.updateStatus(JSON.parse(window.LocalGemmaAndroid.getStatus()));
        } catch (e) {
            this.updateStatus({ state: 'error', modelName: 'Android Gemma', message: 'Bridge unavailable' });
        }
    },
    log(event, details = {}) {
        if (!this.available || !window.LocalGemmaAndroid || typeof window.LocalGemmaAndroid.logDirectorEvent !== 'function') return;
        try {
            window.LocalGemmaAndroid.logDirectorEvent(String(event || 'event'), JSON.stringify(details || {}));
        } catch (e) { }
    },
    ownsVisibleChat() {
        let state = this.status && this.status.state ? this.status.state : '';
        return this.available && (this.status.busy || ['ready', 'installed', 'loading', 'downloading'].includes(state));
    },
    updateStatus(next) {
        this.status = Object.assign({}, this.status, next || {});
        let label = '';
        let action = 'Get';
        let disabled = false;
        let visible = false;
        let state = this.status.state || 'unknown';
        let ram = this.status.totalRamGb ? ` (${this.status.totalRamGb}GB)` : '';

        if (state === 'ready') {
            label = '';
            disabled = true;
        } else if (state === 'loading') {
            label = 'Gemma loading';
            action = '';
            disabled = true;
            visible = true;
        } else if (state === 'downloading') {
            let pct = Math.max(0, Math.min(100, Math.floor(this.status.progress || 0)));
            let detail = this.status.message ? ` - ${this.status.message}` : '';
            label = `Gemma download ${pct}%${detail}`;
            action = '';
            disabled = true;
            visible = true;
        } else if (state === 'installed') {
            label = 'Gemma is stored';
            action = 'load';
            visible = true;
        } else if (state === 'unavailable') {
            label = '';
            disabled = true;
        } else if (state === 'error') {
            label = this.status.message || 'Gemma retry needed';
            action = 'retry';
            visible = true;
        } else {
            label = this.status.message || `offline Gemma${ram}`;
            action = 'get';
            visible = this.available;
        }

        let card = document.getElementById('gemma-card');
        let statusEl = document.getElementById('gemma-status');
        let button = document.getElementById('btn-gemma-install');
        if (card) card.classList.toggle('hidden', !visible);
        if (statusEl) statusEl.innerText = label;
        if (button) {
            button.innerText = action;
            button.disabled = disabled;
            button.classList.toggle('hidden', !action);
        }
        if (typeof GemmaMemory !== 'undefined') GemmaMemory.updateInputSuggestion();
    },
    install() {
        if (!this.available) {
            runtime.DirectorPanel.addSystem('Packaged Android build needed for local Gemma.');
            return;
        }
        let model = this.status.modelName || 'Gemma 4 E2B';
        let size = this.status.recommendedSizeGb || 2.58;
        let ok = confirm(`${model} will download about ${size} GB to this device and then run offline. Continue?`);
        if (!ok) return;
        try {
            let response = JSON.parse(window.LocalGemmaAndroid.requestInstall('auto'));
            this.updateStatus(response);
            runtime.DirectorPanel.addSystem('Gemma download started. Local fallback stays active.');
        } catch (e) {
            runtime.DirectorPanel.addSystem('Android could not start the Gemma download.');
        }
    },
    queueRecentUserComment(lineId, message) {
        let clean = normalizeGemmaRecentUserMessage(message, 120);
        if (!clean) return;
        this.queuedUserComment = {
            lineId: String(lineId || ''),
            text: clean,
            queuedAt: Date.now()
        };
    },
    requestTurn(reason, extraMessage = '', options = {}) {
        if (!this.available || !runtime.gameState.running || runtime.gameState.paused) return false;
        if (!['ready', 'installed'].includes(this.status.state)) return false;
        if (this.status.state === 'installed') {
            try { window.LocalGemmaAndroid.loadModel(); } catch (e) { }
            this.updateStatus(Object.assign({}, this.status, { state: 'loading' }));
            return false;
        }
        let minGap = reason === 'player_chat' ? 4 : 18;
        if (this.status.busy || runtime.globalTime - this.lastRequestAt < minGap) return false;

        let snapshot = runtime.AIDirector.snapshot();
        let cleanExtraMessage = normalizeGemmaRecentUserMessage(extraMessage, 120);
        let requestedUserLineId = options && options.userLineId ? String(options.userLineId) : '';
        let relayComment = null;
        if (reason === 'player_chat' && cleanExtraMessage) {
            relayComment = {
                lineId: requestedUserLineId || (this.queuedUserComment ? this.queuedUserComment.lineId : ''),
                text: cleanExtraMessage,
                source: 'player_chat'
            };
        } else if (this.queuedUserComment && this.queuedUserComment.text) {
            relayComment = {
                lineId: this.queuedUserComment.lineId,
                text: this.queuedUserComment.text,
                source: 'queued_recent_player_line'
            };
        }

        let contextImageDataUrl = captureGemmaContextImage(snapshot);
        let requestId = `g${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        let promptBuild = buildGemmaEmotionPrompt({
            reason,
            cleanExtraMessage,
            relayComment,
            snapshot
        });
        let promptText = promptBuild.prompt;

        this.pending[requestId] = {
            reason,
            userLineId: relayComment ? relayComment.lineId : '',
            relayedUserMessage: relayComment ? relayComment.text : '',
            emotions: promptBuild.emotions || GEMMA_EMOTION_WORDS
        };
        this.lastRequestAt = runtime.globalTime;
        this.status.busy = true;
        this.updateStatus(this.status);
        runtime.DirectorPanel.beginModelThoughts(requestId, reason);
        this.log('request.pre_send', {
            requestId,
            reason,
            gameTime: Math.round(runtime.globalTime),
            promptChars: promptText.length,
            difficulty: runtime.currentDifficulty,
            nativeConversationMessages: this.status.conversationMessages || 0,
            contextImageChars: contextImageDataUrl ? contextImageDataUrl.length : 0,
            enginePlan: snapshot.engineOrder || ''
        });
        try {
            if (contextImageDataUrl && typeof window.LocalGemmaAndroid.generateDirectorTurnWithImage === 'function') {
                window.LocalGemmaAndroid.generateDirectorTurnWithImage(requestId, promptText, contextImageDataUrl);
            } else {
                window.LocalGemmaAndroid.generateDirectorTurn(requestId, promptText);
            }
            if (relayComment && relayComment.lineId) {
                runtime.DirectorPanel.markPlayerLineSeen(relayComment.lineId, requestId);
            }
            if (relayComment && this.queuedUserComment) {
                let sameLine = relayComment.lineId && relayComment.lineId === this.queuedUserComment.lineId;
                let sameText = relayComment.text === this.queuedUserComment.text;
                if (sameLine || sameText) this.queuedUserComment = null;
            }
            return true;
        } catch (e) {
            delete this.pending[requestId];
            this.status.busy = false;
            this.updateStatus(this.status);
            runtime.DirectorPanel.failModelThoughts(requestId, 'bridge error');
            this.log('request.bridge_error', { requestId, message: String(e && e.message ? e.message : e) });
            return false;
        }
    },
    stream(requestId, phase, text, done) {
        runtime.DirectorPanel.updateModelThoughts(requestId, phase, text, !!done);
    },
    receive(requestId, rawText) {
        let pendingMeta = this.pending[requestId] || null;
        delete this.pending[requestId];
        this.status.busy = false;
        this.refresh();
        let result = parseGemmaEmotionReply(rawText, pendingMeta && pendingMeta.emotions);
        this.log('response.emotion', {
            requestId,
            emotion: result.emotion || '',
            replyChars: String(result.reply || '').length,
            rawChars: String(rawText || '').length
        });
        applyGemmaEmotionTurn(result, requestId, pendingMeta);
    },
    error(requestId, message) {
        delete this.pending[requestId];
        this.status.busy = false;
        this.updateStatus(Object.assign({}, this.status, { state: this.status.state === 'ready' ? 'ready' : 'error', message }));
        this.log('request.error', { requestId, message: String(message || '') });
        runtime.DirectorPanel.failModelThoughts(requestId, String(message || 'error'));
        runtime.DirectorPanel.addSystem(`Local Gemma could not answer: ${message}`);
    }
};

function installLocalGemma() {
    if (NativeGemma.status.state === 'installed') {
        try { window.LocalGemmaAndroid.loadModel(); } catch (e) { }
        NativeGemma.updateStatus(Object.assign({}, NativeGemma.status, { state: 'loading' }));
        return;
    }
    NativeGemma.install();
}

function applyGemmaEmotionTurn(result, requestId = '', pendingMeta = null) {
    let emotion = normalizeGemmaEmotionWord(result && result.emotion);
    runtime.AIDirector.acceptGemmaEmotion(emotion, requestId, result && result.reply ? result.reply : '');
    GemmaMemory.recordEmotion(result || {}, {
        requestId,
        emotion,
        reason: pendingMeta && pendingMeta.reason ? pendingMeta.reason : 'Gemma reply'
    });
    runtime.DirectorPanel.finishModelThoughts(requestId, result && result.reply ? result.reply : 'I am watching the line and adjusting.');
    runtime.DirectorPanel.renderMemory();
    runtime.DirectorPanel.addSystem(`emotion: ${emotion}`);
}

window.onLocalGemmaStatus = (json) => {
    try { NativeGemma.updateStatus(JSON.parse(json)); } catch (e) { }
};
window.onLocalGemmaStream = (requestId, phase, text, done) => NativeGemma.stream(requestId, phase, text, done);
window.onLocalGemmaResponse = (requestId, text) => NativeGemma.receive(requestId, text);
window.onLocalGemmaError = (requestId, message) => NativeGemma.error(requestId, message);

// --- DIRECTOR CHAT SURFACE (COMMANDER HUD) ---

return { GemmaMemory, NativeGemma, GEMMA_EMOTION_WORDS, normalizeGemmaEmotionWord, captureGemmaContextImage, gemmaPromptLine, buildGemmaEmotionPrompt, parseGemmaEmotionReply, applyGemmaEmotionTurn, installLocalGemma };
}
