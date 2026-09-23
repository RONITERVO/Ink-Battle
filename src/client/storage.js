import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createStorage(runtime) {
// --- LOCAL STORAGE MANAGER ---
const StorageManager = {
    key: 'aow_sketch_progress',
    data: { beaten: [] },
    init() {
        try {
            let stored = localStorage.getItem(this.key);
            if (stored) this.data = JSON.parse(stored);
        } catch (e) { console.warn("Local storage blocked"); }
        if (!this.data || !Array.isArray(this.data.beaten)) this.data = { beaten: [] };
        this.updateUI();
    },
    saveWin(diffKey) {
        if (!this.data.beaten.includes(diffKey)) {
            this.data.beaten.push(diffKey);
            try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (e) { }
        }
    },
    updateUI() {
        ['normal', 'hard', 'harder', 'impossible'].forEach(d => {
            if (this.data.beaten.includes(d)) {
                let btn = document.getElementById(`diff-btn-${d}`);
                if (btn) btn.classList.add('beaten');
            }
        });
    }
};

// --- CODEX DIRECTOR MEMORY ---
const DIRECTOR_AGREEMENT_DEFAULTS = Object.freeze({
    noSpecials: false,
    noTurrets: false,
    meleeOnly: false
});
const GEMMA_FIXED_INPUT_PACTS = Object.freeze(['pressure: rush']);

function directorAgreementDefaults() {
    return Object.assign({}, DIRECTOR_AGREEMENT_DEFAULTS);
}

function gemmaInputPacts() {
    return GEMMA_FIXED_INPUT_PACTS.concat(DirectorMemory.tags());
}

const DirectorMemory = {
    key: 'aow_sketch_director_memory_v1',
    data: {
        notes: [],
        agreements: directorAgreementDefaults()
    },
    init() {
        let migrated = false;
        try {
            let stored = localStorage.getItem(this.key);
            if (stored) {
                let parsed = JSON.parse(stored);
                this.data.notes = Array.isArray(parsed.notes) ? parsed.notes.slice(-8) : [];
                this.data.agreements = this.normalizeAgreements(parsed.agreements);
                migrated = !!(parsed.agreements && Object.prototype.hasOwnProperty.call(parsed.agreements, 'pressure'));
            }
        } catch (e) { console.warn("Director memory blocked"); }
        this.data.agreements = this.normalizeAgreements(this.data.agreements);
        if (migrated) this.save();
    },
    save() {
        runtime.session?.agreements(this.data.agreements);
        try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (e) { }
    },
    normalizeAgreements(value) {
        let source = value && typeof value === 'object' ? value : {};
        let clean = directorAgreementDefaults();
        Object.keys(clean).forEach(key => {
            clean[key] = !!source[key];
        });
        return clean;
    },
    setAgreement(key, value) {
        if (!Object.prototype.hasOwnProperty.call(DIRECTOR_AGREEMENT_DEFAULTS, key)) return;
        this.data.agreements[key] = !!value;
        this.save();
    },
    clearAgreement(key) {
        if (Object.prototype.hasOwnProperty.call(this.data.agreements, key)) this.data.agreements[key] = false;
        this.save();
    },
    addNote(note) {
        let clean = String(note || '').trim().slice(0, 90);
        if (!clean) return;
        this.data.notes = this.data.notes.filter(n => n.toLowerCase() !== clean.toLowerCase());
        this.data.notes.push(clean);
        this.data.notes = this.data.notes.slice(-8);
        this.save();
    },
    removeNote(index) {
        let idx = Math.max(0, Math.floor(Number(index) || 0));
        if (idx >= this.data.notes.length) return;
        this.data.notes.splice(idx, 1);
        this.save();
    },
    clear() {
        this.data = {
            notes: [],
            agreements: directorAgreementDefaults()
        };
        this.save();
    },
    agreementItems() {
        let a = this.data.agreements;
        let items = [];
        if (a.noSpecials) items.push({ key: 'noSpecials', label: 'no specials' });
        if (a.noTurrets) items.push({ key: 'noTurrets', label: 'no turrets' });
        if (a.meleeOnly) items.push({ key: 'meleeOnly', label: 'melee only' });
        this.data.notes.forEach((note, index) => items.push({ key: `note:${index}`, label: `note: ${note}` }));
        return items;
    },
    inputAgreementTags() {
        return this.agreementItems().map(item => item.label);
    },
    tags() {
        let a = this.data.agreements;
        let tags = [];
        if (a.noSpecials) tags.push('no specials');
        if (a.noTurrets) tags.push('no turrets');
        if (a.meleeOnly) tags.push('melee only');
        this.data.notes.forEach(note => tags.push(`note: ${note}`));
        return tags;
    }
};

// --- 6 FULL AGES ARCHITECTURE ---
// 101% correct: player and AI unit purchases read their prices from the AGES unit data.

return { StorageManager, DirectorMemory, gemmaInputPacts };
}
