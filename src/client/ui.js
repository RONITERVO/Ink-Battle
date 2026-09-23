import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createUI(runtime) {
const UIManager = {
    els: {}, state: {},
    init() {
        const idList = [
            'ui-gold', 'ui-xp', 'ui-income', 'age-title', 'btn-special', 'cost-special', 'btn-evolve', 'cost-evolve',
            'tab-units', 'tab-turrets', 'tab-upgrades', 'player-hp-fill', 'enemy-hp-fill', 'player-hp-text', 'enemy-hp-text',
            'btn-sell', 'btn-slot', 'cost-slot', 'diff-badge'
        ];
        for (let i = 1; i <= 3; i++) { idList.push(`name-u${i}`, `cost-u${i}`, `btn-u${i}`, `name-t${i}`, `cost-t${i}`, `btn-t${i}`); }
        ['dmg', 'hp', 'econ'].forEach(t => idList.push(`btn-up-${t}`, `val-up-${t}`, `cost-up-${t}`));
        idList.forEach(id => { let el = document.getElementById(id); if (el) this.els[id] = el; });
        this.els.menuUnits = document.querySelectorAll('.menu-unit');
        this.els.menuTurrets = document.querySelectorAll('.menu-turret');
        this.els.menuUpgrades = document.querySelectorAll('.menu-upgrade');
    },
    setText(id, val) { if (this.els[id] && this.state[id] !== val) { this.els[id].innerText = val; this.state[id] = val; } },
    setDisabled(id, val) { let key = id + '_dis'; if (this.els[id] && this.state[key] !== val) { this.els[id].disabled = val; this.state[key] = val; } },
    setWidth(id, val) { let key = id + '_w'; if (this.els[id] && this.state[key] !== val) { this.els[id].style.width = val; this.state[key] = val; } },
    setHtml(id, val) { let key = id + '_h'; if (this.els[id] && this.state[key] !== val) { this.els[id].innerHTML = val; this.state[key] = val; } },
    toggleClass(group, condition, className) {
        let key = group + '_cls';
        if (this.state[key] !== condition) { this.els[group].forEach(el => el.classList.toggle(className, condition)); this.state[key] = condition; }
    }
};

// --- TOOLTIP MANAGER ---
const TooltipManager = {
    el: document.getElementById('tooltip'),
    title: document.getElementById('tt-title'),
    stats: document.getElementById('tt-stats-container'),
    desc: document.getElementById('tt-desc'),
    finePointerQuery: window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)') : null,
    init() {
        document.querySelectorAll('[data-type]').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                if (this.usesHoverTooltip()) this.show(btn, e);
            });
            btn.addEventListener('mouseleave', () => this.hide());
            btn.addEventListener('mousemove', (e) => {
                if (this.usesHoverTooltip()) this.move(e);
            });
            btn.addEventListener('pointerdown', (e) => {
                if (!this.usesHoverTooltip() || e.pointerType !== 'mouse') this.flash(btn);
            });
        });
    },
    usesHoverTooltip() {
        return !!(this.finePointerQuery && this.finePointerQuery.matches);
    },
    show(btn, e) {
        let info = this.readInfo(btn);
        if (!info) return;

        this.title.innerText = info.title;
        this.desc.innerText = info.desc || "";

        let html = '';
        for (let i = 0; i < info.stats.length; i++) {
            html += `<div class="tt-stat"><span>${info.stats[i].label}:</span> <strong>${info.stats[i].value}</strong></div>`;
        }
        this.stats.innerHTML = html;
        this.el.classList.add('visible');
        this.move(e);
    },
    hide() { this.el.classList.remove('visible'); },
    flash(btn) {
        let info = this.readInfo(btn);
        if (!info || !runtime.gameState.floatingTexts) return;
        this.hide();

        let point = this.canvasAnchor(btn);
        runtime.spawnCanvasText(info.title, point.x, point.y, info.color || runtime.COLORS.pencil, {
            life: 1.25,
            size: 24,
            grow: 4,
            rise: 28,
            stroke: true
        });
        runtime.spawnCanvasText(info.shortStats, point.x, point.y + 26, runtime.COLORS.pencil, {
            life: 1.15,
            size: 17,
            grow: 2,
            rise: 24,
            stroke: true
        });
    },
    readInfo(btn) {
        if (!runtime.gameState.player) return null;
        let type = btn.getAttribute('data-type');
        let idx = parseInt(btn.getAttribute('data-idx'), 10);
        let pAge = runtime.gameState.player.age;
        let data = null;

        if (type === 'unit') {
            data = AGES[pAge].units[idx];
            if (!data) return null;
            return {
                title: data.name,
                desc: data.desc || '',
                color: runtime.COLORS.accent,
                shortStats: `${data.cost}g  HP ${data.hp}  DMG ${data.dmg}  ${data.type}`,
                stats: [
                    { label: 'Cost', value: `${data.cost}g` },
                    { label: 'Health', value: data.hp },
                    { label: 'Damage', value: data.dmg },
                    { label: 'Type', value: data.type }
                ]
            };
        }

        if (type === 'turret') {
            data = AGES[pAge].turrets[idx];
            if (!data) return null;
            return {
                title: data.name,
                desc: data.desc || '',
                color: runtime.COLORS.blue,
                shortStats: `${data.cost}g  DMG ${data.dmg}  RNG ${data.range}  ${data.attackSpeed}s`,
                stats: [
                    { label: 'Cost', value: `${data.cost}g` },
                    { label: 'Damage', value: data.dmg },
                    { label: 'Fire Rate', value: `${data.attackSpeed}s` },
                    { label: 'Range', value: data.range }
                ]
            };
        }

        if (type === 'upgrade') {
            let upgradeType = btn.getAttribute('data-upgrade');
            let info = runtime.UPGRADE_INFO[upgradeType];
            if (!info) return null;
            let level = runtime.gameState.player.upgrades[upgradeType] || 0;
            let cost = level < UPGRADE_COSTS.length ? `${UPGRADE_COSTS[level]}g` : 'MAX';
            return {
                title: info.title,
                desc: info.stat,
                color: info.color,
                shortStats: `Lvl ${level}  ${cost}  ${info.compact}`,
                stats: [
                    { label: 'Level', value: level },
                    { label: 'Cost', value: cost },
                    { label: 'Effect', value: info.stat }
                ]
            };
        }

        return null;
    },
    canvasAnchor(btn) {
        let wrapper = document.getElementById('aspect-wrapper');
        let wrapperRect = wrapper.getBoundingClientRect();
        let btnRect = btn.getBoundingClientRect();
        let x = ((btnRect.left + btnRect.width / 2 - wrapperRect.left) / wrapperRect.width) * CANVAS_WIDTH;
        let y = ((btnRect.top - wrapperRect.top) / wrapperRect.height) * CANVAS_HEIGHT;
        return {
            x: this.clamp(x, 260, CANVAS_WIDTH - 260),
            y: this.clamp(y + 220, 320, GROUND_Y - 150)
        };
    },
    move(e) {
        if (!this.el.classList.contains('visible')) return;
        const rect = document.getElementById('aspect-wrapper').getBoundingClientRect();

        // Prevent tooltip from overflowing screen bounds
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        if (y < this.el.offsetHeight + 20) {
            y = this.el.offsetHeight + 20;
        }

        this.el.style.left = `${x}px`;
        this.el.style.top = `${y - this.el.offsetHeight - 15}px`;
    },
    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
};

// --- GEMMA EMOTION MEMORY AND VISION CONTEXT ---

return { UIManager, TooltipManager };
}
