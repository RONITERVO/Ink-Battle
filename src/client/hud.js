import { AGES } from '../content/ages.js';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, BASE_WIDTH, UPGRADE_COSTS, DIFFICULTY_SETTINGS } from '../core/constants.js';
export function createHUD(runtime) {
function updateUI() {
    if (!runtime.gameState.player) return;
    let p = runtime.gameState.player;
    let ageData = AGES[p.age];

    runtime.UIManager.setText('ui-gold', Math.floor(p.gold));
    runtime.UIManager.setText('ui-xp', Math.floor(p.xp));
    runtime.UIManager.setText('ui-income', runtime.getIncome().toFixed(1) + "/s");
    runtime.UIManager.setText('age-title', ageData.name);

    if (runtime.currentTab === 'units') {
        for (let i = 0; i < 3; i++) {
            let uData = ageData.units[i];
            runtime.UIManager.setText(`name-u${i + 1}`, uData.name);
            runtime.UIManager.setText(`cost-u${i + 1}`, uData.cost);
            runtime.UIManager.setDisabled(`btn-u${i + 1}`, !runtime.isLegal({type: 'unit', index: i}));
        }
    } else if (runtime.currentTab === 'turrets') {
        let hasEmptySlot = p.turrets.slice(0, p.unlockedSlots).includes(null);
        let hasTurret = p.turrets.some(t => t !== null);
        for (let i = 0; i < 3; i++) {
            let tData = ageData.turrets[i];
            runtime.UIManager.setText(`name-t${i + 1}`, tData.name);
            runtime.UIManager.setText(`cost-t${i + 1}`, tData.cost);
            runtime.UIManager.setDisabled(`btn-t${i + 1}`, !runtime.isLegal({type: 'turret', index: i}));
        }
        runtime.UIManager.setDisabled('btn-sell', !hasTurret);

        if (p.unlockedSlots >= 4) {
            runtime.UIManager.setDisabled('btn-slot', true); runtime.UIManager.setText('cost-slot', "MAX");
        } else {
            let slotCost = p.unlockedSlots * 500;
            runtime.UIManager.setText('cost-slot', slotCost); runtime.UIManager.setDisabled('btn-slot', p.gold < slotCost);
        }
    } else if (runtime.currentTab === 'upgrades') {
        ['dmg', 'hp', 'econ'].forEach(t => {
            let lvl = p.upgrades[t];
            if (lvl >= 10) {
                runtime.UIManager.setDisabled(`btn-up-${t}`, true); runtime.UIManager.setText(`cost-up-${t}`, "MAX"); runtime.UIManager.setText(`val-up-${t}`, `Lvl 10`);
            } else {
                let cost = UPGRADE_COSTS[lvl];
                runtime.UIManager.setText(`cost-up-${t}`, cost); runtime.UIManager.setDisabled(`btn-up-${t}`, !runtime.isLegal({type: 'upgrade', stat: t}));
                let mult = (t === 'dmg') ? 15 : (t === 'hp' ? 25 : 20);
                runtime.UIManager.setText(`val-up-${t}`, `Lvl ${lvl} (+${lvl * mult}%)`);
            }
        });
    }

    if (p.age >= AGES.length - 1) {
        runtime.UIManager.setDisabled('btn-evolve', true); runtime.UIManager.setText('cost-evolve', "MAX AGE");
    } else {
        runtime.UIManager.setText('cost-evolve', ageData.evolveXP + " XP");
        runtime.UIManager.setDisabled('btn-evolve', p.xp < ageData.evolveXP || p.drawProgress < 1);
    }

    if (p.specialTimer > 0) {
        runtime.UIManager.setDisabled('btn-special', true); runtime.UIManager.setText('cost-special', Math.ceil(p.specialTimer) + "s");
    } else if (runtime.gameState.specialActive) {
        runtime.UIManager.setDisabled('btn-special', true); runtime.UIManager.setText('cost-special', "Busy");
    } else {
        runtime.UIManager.setDisabled('btn-special', false); runtime.UIManager.setText('cost-special', "Ready");
    }

    runtime.UIManager.setWidth('player-hp-fill', `${Math.max(0, p.hp / p.maxHp) * 100}%`);
    runtime.UIManager.setWidth('enemy-hp-fill', `${Math.max(0, runtime.gameState.enemy.hp / runtime.gameState.enemy.maxHp) * 100}%`);
    runtime.UIManager.setText('player-hp-text', `${Math.floor(Math.max(0, p.hp))} / ${Math.floor(p.maxHp)}`);
    runtime.UIManager.setText('enemy-hp-text', `${Math.floor(Math.max(0, runtime.gameState.enemy.hp))} / ${Math.floor(runtime.gameState.enemy.maxHp)}`);
}

return { updateUI };
}
