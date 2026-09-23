import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createDirectorPanel(runtime) {
const DirectorPanel = {
    els: {},
    aiWriteTimeout: null,
    playerWriteTimeout: null,
    systemWriteTimeout: null,
    playerLineSeq: 0,
    currentPlayerLine: null,
    thoughtEntries: {},
    init() {
        ['commander-hud', 'ai-hud', 'director-center-status', 'emotion-badge', 'emotion-word', 'agreement-strip', 'director-log', 'director-signal-log', 'director-input', 'director-memory', 'player-last-line', 'btn-pause'].forEach(id => {
            this.els[id] = document.getElementById(id);
        });
        this.renderMemory();
    },
    start(diffKey) {
        if (!this.els['ai-hud']) return;
        runtime.GemmaMemory.start(diffKey);
        this.els['ai-hud'].classList.remove('hidden');
        if (this.els['director-center-status']) this.els['director-center-status'].classList.remove('hidden');
        if (this.els['director-log']) this.els['director-log'].innerHTML = '';
        if (this.els['director-signal-log']) this.els['director-signal-log'].innerHTML = '';
        if (this.els['player-last-line']) {
            this.els['player-last-line'].innerHTML = '';
            this.els['player-last-line'].classList.add('hidden');
        }
        this.playerLineSeq = 0;
        this.currentPlayerLine = null;
        this.thoughtEntries = {};
        this.renderMemory();
        runtime.NativeGemma.refresh();

        setTimeout(() => {
            this.addSystem(`Director online. Pacts and notes are active.`);
        }, 800);
    },
    add(role, text) {
        if (!text) return;
        if (role === 'player') {
            return this.addPlayerLine(text);
        }
        this.addSystem(text);
    },
    addPlayerLine(text) {
        let message = this.normalizeLine(text, 120);
        if (!message) return '';
        this.playerLineSeq++;
        let line = {
            id: `pl${Date.now()}_${this.playerLineSeq}`,
            text: message,
            seen: false,
            requestId: ''
        };
        this.currentPlayerLine = line;
        this.renderPlayerLine(line);
        return line.id;
    },
    renderPlayerLine(line) {
        let host = this.els['player-last-line'];
        if (!host || !line) return;
        host.classList.remove('hidden');
        clearTimeout(this.playerWriteTimeout);

        let render = () => {
            host.innerHTML = '';
            let row = document.createElement('div');
            row.className = 'player-last-text is-writing';
            row.setAttribute('data-player-line-id', line.id);

            let seen = document.createElement('span');
            seen.className = `player-last-seen ${line.seen ? 'is-seen' : 'is-pending'}`;
            seen.innerText = line.seen ? 'seen' : 'pending';

            let text = document.createElement('span');
            text.className = 'player-last-message';
            text.innerText = line.text;

            row.appendChild(seen);
            row.appendChild(text);
            host.appendChild(row);
        };

        let current = host.firstElementChild;
        if (current) {
            current.classList.remove('is-writing');
            current.classList.add('is-erasing');
            this.playerWriteTimeout = setTimeout(render, 190);
        } else {
            render();
        }
    },
    markPlayerLineSeen(lineId, requestId = '') {
        if (!lineId || !this.currentPlayerLine || this.currentPlayerLine.id !== lineId) return;
        if (requestId && this.currentPlayerLine.requestId === requestId && this.currentPlayerLine.seen) return;

        this.currentPlayerLine.seen = true;
        if (requestId) this.currentPlayerLine.requestId = requestId;

        let host = this.els['player-last-line'];
        let row = host ? host.firstElementChild : null;
        if (row && row.getAttribute('data-player-line-id') === lineId) {
            let badge = row.querySelector('.player-last-seen');
            if (badge) {
                badge.classList.remove('is-pending');
                badge.classList.add('is-seen');
                badge.innerText = 'seen';
            }
            return;
        }
        this.renderPlayerLine(this.currentPlayerLine);
    },
    addModel(text) {
        let message = this.normalizeLine(this.sanitizeModelLine(text), 220);
        if (!message) return;
        this.writeLatest(this.els['director-log'], message, 'director-msg', 'ai');
    },
    addModelRaw(text) {
        let message = this.normalizeRawModelLine(text, 1400);
        if (!message) return;
        this.writeLatest(this.els['director-log'], message, 'director-msg', 'ai');
    },
    beginModelThoughts(requestId, reason = '') {
        let host = this.els['director-log'];
        if (!host || !requestId) return;
        host.classList.remove('hidden');
        clearTimeout(this.aiWriteTimeout);
        let entry = {
            requestId,
            reason,
            visible: '...',
            phases: {},
            done: {},
            open: false
        };
        this.thoughtEntries = {};
        this.thoughtEntries[requestId] = entry;
        host.innerHTML = '';

        let row = document.createElement('div');
        row.className = 'director-msg has-thoughts is-writing';
        row.setAttribute('data-gemma-request-id', requestId);
        row.setAttribute('role', 'button');
        row.setAttribute('tabindex', '0');
        row.setAttribute('aria-label', 'Toggle opponent thoughts');
        row.addEventListener('click', () => this.toggleModelThoughts(requestId));
        row.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.toggleModelThoughts(requestId);
            }
        });

        let main = document.createElement('div');
        main.className = 'director-msg-main';

        let toggle = document.createElement('button');
        toggle.className = 'director-thought-toggle';
        toggle.type = 'button';
        toggle.title = 'Opponent thoughts';
        toggle.setAttribute('aria-label', 'Opponent thoughts');
        toggle.innerText = '...';
        toggle.addEventListener('click', event => {
            event.stopPropagation();
            this.toggleModelThoughts(requestId);
        });

        let visible = document.createElement('span');
        visible.className = 'director-msg-text';
        visible.innerText = entry.visible;

        let panel = document.createElement('div');
        panel.className = 'director-thought-panel';

        let viewport = document.createElement('div');
        viewport.className = 'director-thought-viewport';

        let track = document.createElement('div');
        track.className = 'director-thought-track';
        track.innerText = 'reading map...';

        viewport.appendChild(track);
        panel.appendChild(viewport);
        main.appendChild(toggle);
        main.appendChild(visible);
        row.appendChild(main);
        row.appendChild(panel);
        host.appendChild(row);

        entry.row = row;
        entry.visibleEl = visible;
        entry.trackEl = track;
    },
    updateModelThoughts(requestId, phase, text, done = false) {
        if (!requestId) return;
        let entry = this.thoughtEntries[requestId];
        if (!entry) {
            this.beginModelThoughts(requestId, 'model');
            entry = this.thoughtEntries[requestId];
            if (!entry) return;
        }
        let clean = this.normalizeThoughtLine(text);
        if (clean) entry.phases[phase] = clean;
        if (done) entry.done[phase] = true;
        if (phase === 'message' && clean) entry.visible = 'writing...';
        this.renderThoughtEntry(entry);
    },
    finishModelThoughts(requestId, visibleText) {
        let entry = this.thoughtEntries[requestId];
        if (!entry) {
            this.addModel(visibleText);
            return;
        }
        entry.visible = this.normalizeLine(this.sanitizeModelLine(visibleText), 220) || entry.visible || 'I am adjusting the plan.';
        entry.done.final = true;
        this.renderThoughtEntry(entry);
    },
    failModelThoughts(requestId, message) {
        let entry = this.thoughtEntries[requestId];
        if (!entry) return;
        entry.phases.error = this.normalizeLine(message || 'Gemma could not finish', 120);
        if (!entry.phases.opinion) entry.visible = 'The thought broke before a clean reply.';
        this.renderThoughtEntry(entry);
    },
    toggleModelThoughts(requestId) {
        let entry = this.thoughtEntries[requestId];
        if (!entry || !entry.row) return;
        entry.open = !entry.open;
        entry.row.classList.toggle('thoughts-open', entry.open);
    },
    renderThoughtEntry(entry) {
        if (!entry) return;
        if (entry.visibleEl) entry.visibleEl.innerText = entry.visible || '...';
        if (entry.trackEl) entry.trackEl.innerText = this.buildThoughtLine(entry);
    },
    buildThoughtLine(entry) {
        let labels = {
            message: 'reply',
            error: 'error'
        };
        let parts = ['message', 'error']
            .map(phase => entry.phases[phase] ? `${labels[phase]}: ${entry.phases[phase]}` : '')
            .filter(Boolean);
        if (parts.length === 0) return 'reading map...';
        return parts.join('    //    ');
    },
    sanitizeModelLine(text) {
        let raw = String(text || '').trim();
        if (!raw) return '';
        if (!this.looksLikeModelJsonLeak(raw)) return raw;
        return raw.replace(/[{}\[\]"]/g, '').replace(/\s+/g, ' ').slice(0, 220);
    },
    looksLikeModelJsonLeak(text) {
        let sample = String(text || '').trim();
        if (!sample) return false;
        if (/^[\[{]/.test(sample)) return true;
        return /"say"\s*:|"action"\s*:|"pressure"\s*:/.test(sample);
    },
    normalizeRawModelLine(text, maxLen = 1400) {
        let raw = String(text || '').replace(/\u0000/g, '').trim();
        if (!raw) return '';
        if (raw.length <= maxLen) return raw;
        return `${raw.slice(0, maxLen)} ...[truncated ${raw.length - maxLen} chars]`;
    },
    normalizeThoughtLine(text) {
        return String(text || '').replace(/\u0000/g, '').replace(/\s+/g, ' ').trim();
    },
    normalizeLine(text, maxLen = 220) {
        return String(text || '').replace(/\s+/g, ' ').trim().slice(0, maxLen);
    },
    writeLatest(host, text, className, lane) {
        if (!host || !text) return;
        host.classList.remove('hidden');
        let timeoutKey = lane === 'player' ? 'playerWriteTimeout' : (lane === 'system' ? 'systemWriteTimeout' : 'aiWriteTimeout');
        clearTimeout(this[timeoutKey]);

        let render = () => {
            host.innerHTML = '';
            let row = document.createElement('div');
            row.className = `${className} is-writing`;
            row.innerText = text;
            host.appendChild(row);
        };

        let current = host.firstElementChild;
        if (current) {
            current.classList.remove('is-writing');
            current.classList.add('is-erasing');
            this[timeoutKey] = setTimeout(render, 190);
        } else {
            render();
        }
    },
    addSystem(text) {
        let host = this.els['director-signal-log'];
        if (!host || !text) return;
        this.writeLatest(host, this.normalizeLine(text, 96), 'director-signal-msg', 'system');
    },
    showAction(signalName, reason) {
        let name = String(signalName || '').toLowerCase();
        let label = 'move';
        if (name.includes('order')) label = 'order';
        else if (name.includes('spawn') || name.includes('unit')) label = 'unit';
        else if (name.includes('upgrade') || name.includes('econ') || name.includes('dmg') || name.includes('hp')) label = 'upgrade';
        else if (name.includes('turret') || name.includes('slot')) label = 'fort';
        else if (name.includes('evolve') || name.includes('age')) label = 'age';
        else if (name.includes('special')) label = 'special';

        let detail = String(reason || 'new plan').replace(/\s+/g, ' ').trim().slice(0, 64);
        this.addSystem(`${label}: ${detail}`);
    },
    renderMemory() {
        let host = this.els['director-memory'];
        if (host) {
            host.innerHTML = '';
            let tags = [];
            if (typeof runtime.AIDirector !== 'undefined' && runtime.AIDirector.activeOrderFromState) {
                tags.push(`plan: ${runtime.AIDirector.macroPlan || 'balanced'} / ${runtime.AIDirector.activeOrderFromState()}`);
            }
            tags.forEach(tag => {
                let chip = document.createElement('span');
                chip.className = 'memory-chip';
                chip.innerText = tag;
                host.appendChild(chip);
            });
        }
        this.renderCenterStatus();
        runtime.GemmaMemory.updateInputSuggestion();
    },
    renderCenterStatus() {
        let moodWord = runtime.normalizeGemmaEmotionWord((runtime.GemmaMemory.data && runtime.GemmaMemory.data.emotion) || (typeof runtime.AIDirector !== 'undefined' && runtime.AIDirector.emotionWord) || 'Centered');
        let wordEl = this.els['emotion-word'];
        let badge = this.els['emotion-badge'];
        if (wordEl) wordEl.innerText = moodWord;
        if (badge) {
            let icon = badge.querySelector('.emotion-icon');
            if (icon) icon.innerText = this.emotionPlaceholder(moodWord);
            badge.title = `Gemma emotion: ${moodWord}`;
        }
        let strip = this.els['agreement-strip'];
        if (!strip) return;
        strip.innerHTML = '';
        let items = runtime.DirectorMemory.agreementItems();
        if (typeof runtime.AIDirector !== 'undefined' && runtime.globalTime < runtime.AIDirector.restraintUntil) {
            items.push({ key: 'restraint', label: `truce: ${Math.ceil(runtime.AIDirector.restraintUntil - runtime.globalTime)}s` });
        }
        items.forEach(item => {
            let chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'agreement-chip';
            chip.title = `Remove ${item.label}`;
            chip.innerText = `${item.label} x`;
            chip.addEventListener('click', () => this.removeAgreement(item.key));
            strip.appendChild(chip);
        });
    },
    emotionPlaceholder(word) {
        let key = String(word || '').toLowerCase();
        if (/angry|furious|hostile|irritated|pissed|resentful|vindictive/.test(key)) return '!';
        if (/fear|afraid|anxious|panic|worried|scared|terrified|tense|stressed/.test(key)) return '?';
        if (/joy|happy|excited|eager|thrilled|vibrant|energized/.test(key)) return '*';
        if (/sad|despair|gloomy|grief|hopeless|lonely|weary/.test(key)) return '.';
        if (/curious|intrigued|skeptical|questioning/.test(key)) return '~';
        return '◇';
    },
    removeAgreement(key) {
        if (key === 'restraint') {
            if (typeof runtime.AIDirector !== 'undefined') runtime.AIDirector.restraintUntil = 0;
        } else if (String(key || '').startsWith('note:')) {
            runtime.DirectorMemory.removeNote(Number(String(key).slice(5)));
        } else {
            runtime.DirectorMemory.clearAgreement(key);
        }
        runtime.GemmaMemory.recordSystem(`Player removed agreement ${key}.`);
        this.renderMemory();
    },
    handlePlayerText(raw) {
        let message = String(raw || '').trim();
        if (!message) return;
        let playerLineId = this.add('player', message);
        runtime.NativeGemma.queueRecentUserComment(playerLineId, message);
        runtime.GemmaMemory.recordPlayer(message);

        let text = message.toLowerCase();
        let replies = [];

        if (/\bforget\b|clear memory|reset memory/.test(text)) {
            runtime.DirectorMemory.clear();
            runtime.GemmaMemory.clearAll();
            runtime.AIDirector.restraintUntil = 0;
            replies.push('Fresh page. I dropped the saved pacts and notes.');
        }

        let rememberMatch = message.match(/\bremember\s+(.+)/i);
        if (rememberMatch && rememberMatch[1]) {
            runtime.DirectorMemory.addNote(rememberMatch[1]);
            replies.push('Noted for later matches.');
        }

        if (/no\s+special|don'?t use special|no\s+ult/.test(text)) {
            runtime.DirectorMemory.setAgreement('noSpecials', true);
            replies.push('Agreed: no enemy specials.');
        } else if (/specials?\s+(ok|allowed|on)|use specials?/.test(text)) {
            runtime.DirectorMemory.setAgreement('noSpecials', false);
            replies.push('Specials are back on the page.');
        }

        if (/no\s+turret|don'?t build turret/.test(text)) {
            runtime.DirectorMemory.setAgreement('noTurrets', true);
            replies.push('Agreed: I will not buy enemy turrets.');
        } else if (/turrets?\s+(ok|allowed|on)|build turrets?/.test(text)) {
            runtime.DirectorMemory.setAgreement('noTurrets', false);
            replies.push('Turrets are allowed again.');
        }

        if (/melee only|no ranged|only melee/.test(text)) {
            runtime.DirectorMemory.setAgreement('meleeOnly', true);
            replies.push('Agreed: enemy unit buys avoid ranged units.');
        } else if (/all units|ranged ok|anything goes|use ranged/.test(text)) {
            runtime.DirectorMemory.setAgreement('meleeOnly', false);
            replies.push('All enemy unit types are available again.');
        }

        if (/truce|pause attacks|give me/.test(text)) {
            let secondsMatch = text.match(/(\d{1,2})\s*(sec|second)/);
            let seconds = secondsMatch ? Math.max(10, Math.min(60, parseInt(secondsMatch[1], 10))) : 30;
            runtime.AIDirector.setRestraint(seconds);
            replies.push(`Truce: no new enemy troops or specials for ${seconds}s. Troops already on the page keep fighting.`);
        }

        this.renderMemory();
        if (replies.length) {
            let localNote = replies.join(' ');
            runtime.GemmaMemory.recordSystem(`Local pact update: ${localNote}`);
            this.addSystem(localNote);
        }
        let requested = runtime.NativeGemma.requestTurn('player_chat', message, { userLineId: playerLineId });
        if (!requested && (!runtime.NativeGemma.available || !['ready', 'installed', 'loading', 'downloading'].includes(runtime.NativeGemma.status.state || ''))) {
            setTimeout(() => this.add('ai', replies.join(' ') || 'I heard you. I will keep reading the lane and adapt.'), 400);
        }
    }
};

function submitDirectorChat(event) {
    event.preventDefault();
    let input = DirectorPanel.els['director-input'];
    if (!input) return;
    DirectorPanel.handlePlayerText(input.value);
    input.value = '';
}

function toggleDirectorPanel() {
    let hud = DirectorPanel.els['ai-hud'];
    if (hud) hud.classList.toggle('hidden');
}

function toggleMusicMute() {
    runtime.MusicDirector.toggleMute();
}

function togglePause(forceState) {
    if (!runtime.gameState || !runtime.gameState.running) return;
    runtime.session.pause(typeof forceState === 'boolean' ? forceState : !runtime.gameState.paused);
    runtime.gameState.paused = runtime.session.paused;
    let overlay = document.getElementById('pause-overlay');
    let btn = DirectorPanel.els['btn-pause'];
    if (overlay) overlay.classList.toggle('hidden', !runtime.gameState.paused);
    if (btn) btn.innerText = runtime.gameState.paused ? 'Resume' : 'Pause';
    runtime.MusicDirector.setDucked(runtime.gameState.paused);
    if (!runtime.gameState.paused) runtime.lastTime = performance.now();
}

// --- LOCAL TOOL-USING OPPONENT DIRECTOR ---

return { DirectorPanel, submitDirectorChat, toggleDirectorPanel, toggleMusicMute, togglePause };
}
