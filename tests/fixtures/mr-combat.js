import { TabletopScene } from "../../src/mr/scene.js";
import { TabletopHost } from "../../src/mr/host.js";
import { Session } from "../../src/sdk/session.js";
import { unitMotion } from "../../src/mr/combat-motion.js";
import { createState } from "../../src/core/state.js";
import { applyCommand } from "../../src/core/commands.js";
import { step } from "../../src/core/engine.js";
import { BASE_WIDTH, CANVAS_WIDTH } from "../../src/core/constants.js";
import { AGES } from "../../src/content/ages.js";

window.checkCombatClock = async () => {
  const host = new TabletopHost();
  host.start("normal", { opponent: false });
  host.session.command(1, { type: "unit", index: 0 });
  host.session.command(-1, { type: "unit", index: 0 });
  for (let tick = 0; tick < 5000; tick++) {
    host.advance(1);
    if (host.observe().units.some((u) => unitMotion(u).strike > 0)) break;
  }
  const view = new TabletopScene(document.querySelector("canvas"), host);
  await document.fonts.ready;
  const sample = (dt) => {
    view.update(host.observe(), [], dt);
    view.render();
    return JSON.stringify(
      Object.values(view.army.meshes).map((mesh) => [
        ...mesh.instanceMatrix.array.slice(0, mesh.count * 16),
      ]),
    );
  };
  const first = sample(0),
    checkpoint = host.session.checkpoint();
  host.session.pause(true);
  for (let i = 0; i < 20; i++) host.update(1 / 20);
  const frozen = sample(1) === first;
  host.session = Session.restore(checkpoint);
  const restored = sample(0) === first;
  host.speed = 3;
  host.update(0.1);
  const advanced = sample(0.1) !== first;
  const reference = Session.restore(checkpoint);
  reference.advance(18);
  const clockMatches = host.session.digest() === reference.digest();
  host.quality = "comfort";
  const comfortBefore = sample(0);
  host.update(0.05);
  const comfortMoves = sample(0.05) !== comfortBefore;
  const resultRests = [];
  // Real terminal hits: melee win, ranged win, mirrored defeat, simultaneous
  // draw. The rendering must equal a resting result, despite frozen cooldowns.
  for (const quality of ["clear", "comfort"]) {
    host.quality = quality;
    for (const [age, index, teams] of [
      [0, 0, [1]],
      [4, 1, [1]],
      [4, 1, [-1]],
      [0, 0, [1, -1]],
    ]) {
      const state = createState({ startAge: age, opponent: false });
      state.player.gold = state.enemy.gold = 1e8;
      state.player.hp = state.enemy.hp = 1;
      for (const team of teams) {
        applyCommand(state, team, { type: "unit", index });
        applyCommand(state, team, { type: "turret", index: 0 });
        const unit = state.units.at(-1);
        unit.x = team === 1 ? CANVAS_WIDTH - BASE_WIDTH - 10 : BASE_WIDTH + 10;
        unit.drawProgress = 1;
      }
      for (let tick = 0; tick < 120 && state.running; tick++) step(state);
      if (state.running) throw Error("Expected an actual terminal engine hit");
      // Include lingering turret recovery and special art in the ended state.
      for (const side of [state.player, state.enemy]) {
        side.turretProgress[0] = 1;
        side.turretTimers[0] = AGES[age].turrets[0].attackSpeed;
      }
      state.specials.push({ x: 640, age, team: 1 });
      host.session = { observe: () => state };
      const actual = sample(0);
      const finalTick = state.tick;
      const calm = structuredClone(state);
      for (const unit of calm.units) {
        unit.attackCooldown = 0;
        unit.isAttacking = false;
        unit.moving = false;
      }
      calm.player.turretTimers.fill(0);
      calm.enemy.turretTimers.fill(0);
      calm.projectiles = [];
      calm.specials = [];
      host.session = { observe: () => calm };
      resultRests.push(actual === sample(1) && state.tick === finalTick);
    }
  }
  return {
    attacking: reference.observe().units.some((u) => u.isAttacking),
    frozen,
    restored,
    advanced,
    clockMatches,
    comfortMoves,
    resultRests,
    ...view.stats(),
  };
};
