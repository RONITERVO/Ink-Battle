import { AGES } from '../content/ages.js';
import { BASE_WIDTH, CANVAS_WIDTH } from '../core/constants.js';
export function createCommander(runtime) {
const AIDirector = {
 emotionWord: 'Centered', emotionUntil: 0, emotionReply: '', macroPlan: 'balanced', localOrder: 'balanced',
 lastPlayerAge: 0, lastEnemyAge: 0, lowHpWarned: false, lastCommentKey: '', chatTimer: 4, gemmaTimer: 12,
 get restraintUntil() { return runtime.session ? runtime.session.observe().restraintUntil / 60 : 0; },
 set restraintUntil(value) { if(runtime.session && value === 0) runtime.session.truce(0); },
 start(diff) { this.chatTimer = 4; this.gemmaTimer = 12; runtime.DirectorPanel.start(diff); },
 tick(dt) {
   if (!runtime.gameState.enemy) return;
   this.localOrder = runtime.gameState.opponent.order;
   this.macroPlan = this.localOrder;
   this.chatTimer -= dt; this.gemmaTimer -= dt;
   const snapshot = this.snapshot(); this.maybeMilestoneChat(snapshot);
   if(this.chatTimer <= 0) { this.chatTimer = 12; this.comment(snapshot); runtime.DirectorPanel.renderMemory(); }
   if(this.gemmaTimer <= 0 && !runtime.NativeGemma.web) { this.gemmaTimer = 26; runtime.NativeGemma.requestTurn('periodic_director_turn'); }
 },
 setRestraint(seconds) { runtime.session?.truce(seconds); },
 activeOrderFromState() { return this.localOrder; },
 acceptGemmaEmotion(emotion, requestId = '', reply = '') {
   this.emotionWord = runtime.normalizeGemmaEmotionWord(emotion); this.emotionReply = reply;
   runtime.session?.emotion(this.emotionWord);
   this.emotionUntil = runtime.globalTime + 40; return this.emotionWord;
 },
    snapshot() {
        let ai = runtime.gameState.enemy;
        let player = runtime.gameState.player;
        let playerUnits = 0, enemyUnits = 0, threatCount = 0;
        let playerMelee = 0, playerRanged = 0, playerHeavy = 0;
        let enemyMelee = 0, enemyRanged = 0, enemyHeavy = 0;
        let playerValue = 0, enemyValue = 0, threatValue = 0;
        let playerNames = Object.create(null), enemyNames = Object.create(null);
        let heavyThreat = false, closestThreatDist = Infinity, closestThreatType = 'none';
        let playerFront = BASE_WIDTH, enemyFront = CANVAS_WIDTH - BASE_WIDTH;

        for (let i = 0; i < runtime.gameState.units.pool.length; i++) {
            let u = runtime.gameState.units.pool[i];
            if (!u.active || u.hp <= 0 || u.drawProgress < 0.5) continue;
            let unitData = AGES[u.age] && AGES[u.age].units ? AGES[u.age].units[u.uType] : null;
            let value = unitData ? unitData.cost : (u.maxHp || 1);
            if (u.team === 1) {
                playerUnits++;
                if (u.type === 'ranged') playerRanged++;
                else if (u.type === 'heavy') playerHeavy++;
                else playerMelee++;
                playerValue += value;
                playerNames[u.name || u.type] = (playerNames[u.name || u.type] || 0) + 1;
                playerFront = Math.max(playerFront, u.x);
                let dist = (CANVAS_WIDTH - BASE_WIDTH) - u.x;
                if (dist < closestThreatDist) {
                    closestThreatDist = dist;
                    closestThreatType = u.type || 'unit';
                }
                if (dist < 620) {
                    threatCount++;
                    threatValue += value;
                }
                if (dist < 620 && u.type === 'heavy') heavyThreat = true;
            } else {
                enemyUnits++;
                if (u.type === 'ranged') enemyRanged++;
                else if (u.type === 'heavy') enemyHeavy++;
                else enemyMelee++;
                enemyValue += value;
                enemyNames[u.name || u.type] = (enemyNames[u.name || u.type] || 0) + 1;
                enemyFront = Math.min(enemyFront, u.x);
            }
        }
        let evolveNeed = AGES[ai.age] && AGES[ai.age].evolveXP ? AGES[ai.age].evolveXP : 1;
        let describeNames = names => Object.keys(names)
            .sort((a, b) => names[b] - names[a])
            .slice(0, 4)
            .map(name => `${names[name]} ${name}`)
            .join(', ') || 'none';
        let turretProfile = state => {
            let ageData = AGES[state.age];
            let count = 0, dps = 0, range = 0;
            for (let i = 0; i < state.turrets.length; i++) {
                let idx = state.turrets[i];
                if (idx === null || idx === undefined || i >= state.unlockedSlots) continue;
                let turret = ageData.turrets[idx];
                if (!turret) continue;
                count++;
                dps += turret.dmg / Math.max(0.1, turret.attackSpeed || 1);
                range = Math.max(range, turret.range || 0);
            }
            return { count, dps, range };
        };
        let playerTurrets = turretProfile(player);
        let enemyTurrets = turretProfile(ai);

        return {
            playerUnits, enemyUnits, threatCount, heavyThreat,
            playerMelee, playerRanged, playerHeavy,
            enemyMelee, enemyRanged, enemyHeavy,
            playerValue, enemyValue, threatValue, closestThreatType,
            playerProfile: describeNames(playerNames),
            enemyProfile: describeNames(enemyNames),
            playerTurretCount: playerTurrets.count,
            playerTurretDps: playerTurrets.dps,
            playerTurretRange: playerTurrets.range,
            enemyTurretCount: enemyTurrets.count,
            enemyTurretDps: enemyTurrets.dps,
            enemyTurretRange: enemyTurrets.range,
            closestThreatDist: Number.isFinite(closestThreatDist) ? closestThreatDist : 9999,
            lanePressure: playerFront - (CANVAS_WIDTH - enemyFront),
            playerFrontX: Math.round(playerFront),
            enemyFrontX: Math.round(enemyFront),
            frontGap: Math.max(0, Math.round(enemyFront - playerFront)),
            playerHpRatio: player.hp / player.maxHp,
            enemyHpRatio: ai.hp / ai.maxHp,
            enemyGold: ai.gold,
            playerGold: player.gold,
            enemyAge: ai.age,
            playerAge: player.age,
            enemyXpRatio: ai.age >= AGES.length - 1 ? 1 : Math.max(0, Math.min(1, ai.xp / evolveNeed)),
            emotion: this.emotionWord || (runtime.GemmaMemory.data && runtime.GemmaMemory.data.emotion) || 'Centered',
            macroPlan: this.macroPlan || 'balanced',
            engineOrder: this.activeOrderFromState(),
            restrained: runtime.globalTime < this.restraintUntil
        };
    },
    maybeMilestoneChat(snapshot) {
        let gemmaOwnsChat = runtime.NativeGemma.ownsVisibleChat();
        if (runtime.gameState.player.age !== this.lastPlayerAge) {
            this.lastPlayerAge = runtime.gameState.player.age;
            let line = `You reached ${AGES[runtime.gameState.player.age].name}. I am updating the counter-plan.`;
            if (!gemmaOwnsChat) runtime.DirectorPanel.add('ai', line);
            runtime.GemmaMemory.recordSystem(line);
        }
        if (runtime.gameState.enemy.age !== this.lastEnemyAge) {
            this.lastEnemyAge = runtime.gameState.enemy.age;
            runtime.DirectorPanel.showAction('evolve_enemy', AGES[runtime.gameState.enemy.age].name);
            runtime.GemmaMemory.recordSystem(`Enemy evolved to ${AGES[runtime.gameState.enemy.age].name}.`);
        }
        if (snapshot.enemyHpRatio < 0.25 && !this.lowHpWarned) {
            this.lowHpWarned = true;
            let line = 'My base is down to the margin. Expect defensive spending.';
            if (!gemmaOwnsChat) runtime.DirectorPanel.add('ai', line);
            runtime.GemmaMemory.recordSystem(line);
        }
    },
    comment(snapshot) {
        if (runtime.NativeGemma.ownsVisibleChat()) return;
        let a = runtime.DirectorMemory.data.agreements;
        let order = this.activeOrderFromState();
        let orderLines = {
            press: ['I am keeping the lane busy; quiet gold is wasted pressure.', 'Your front is too far out. I am forcing contact.'],
            defend: ['You are close enough that I have to stabilize before I swing back.', 'Base first, counterpush second. I am buying time.'],
            counter: ['I am reading your unit mix and changing the answer, not just spamming.', 'That composition has a weakness. I am moving into the counter.'],
            tech: ['I can afford a slower minute, so I am turning it into economy and age timing.', 'You gave me room; I am converting it into tech.'],
            swarm: ['I am not waiting for a perfect unit. I am filling the lane now.', 'Cheap bodies first; the timing matters more than elegance.'],
            heavy: ['I am holding enough gold for a heavier hit.', 'The next swing is being banked, not missed.'],
            hold: ['I am not spending into a bad trade unless you force me.', 'I am letting the position breathe until there is a better punish.'],
            fortify: ['I am turning the right side into a harder target.', 'You will have to pay for every step near my base.'],
            special: ['I am watching for the special timing, not wasting it early.', 'If you stack too tightly, I have the clear ready.']
        };
        let lines = orderLines[order] || [];
        if (lines.length && this.lastCommentKey !== order) {
            this.lastCommentKey = order;
            runtime.DirectorPanel.add('ai', lines[Math.floor(Math.random() * lines.length)]);
            return;
        }
        if (snapshot.restrained) {
            runtime.DirectorPanel.add('ai', 'Truce timer is still active. I am using the quiet turns for upgrades.');
        } else if (a.noSpecials || a.noTurrets || a.meleeOnly) {
            runtime.DirectorPanel.add('ai', `Pacts still active: ${runtime.DirectorMemory.tags().join(', ')}.`);
        } else if (snapshot.threatCount >= 4) {
            runtime.DirectorPanel.add('ai', 'Your line is stacked near my base. I am spending defensively.');
        } else {
            runtime.DirectorPanel.add('ai', 'I am watching age timing, gold float, and front-line distance.');
        }
    },
};
return { AIDirector };
}
