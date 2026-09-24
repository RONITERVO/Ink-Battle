import { TabletopScene } from "../../src/mr/scene.js";
import { TabletopHost } from "../../src/mr/host.js";
import { Session } from "../../src/sdk/session.js";
import { AGES } from "../../src/content/ages.js";

// Renderer-only fixture: deliberately exercises the engine's maximum capacity.
// It never feeds invented units into a playable Session or a release replay.
window.measureMRStress = async () => {
  let state = new Session({battlefield:'tabletop'}).observe();
  const host = new TabletopHost({ session: { observe: () => state } }),
    view = new TabletopScene(document.querySelector("canvas"), host),
    results = [];
  await document.fonts.ready;
  for (let age = 0; age < AGES.length; age++) {
    state = new Session({ startAge: age, battlefield:'tabletop' }).observe();
    state.units = Array.from({ length: 160 }, (_, i) => {
      const index = i % 3,
        data = AGES[age].units[index];
      return {
        ...data,
        id: i + 1,
        uType: index,
        age,
        team: i % 2 ? 1 : -1,
        x: 180 + (i / 160) * 920,
        z: -230 + (i % 9) * 57,
        heading: (i % 2 ? 0 : Math.PI) + (i % 5 - 2) * .14,
        guide: i % 2 ? {z:-190+(i%7)*60,until:720,target:null} : null,
        intent: 'following',
        y: 600,
        hp: data.hp,
        maxHp: data.hp,
        drawProgress: 1,
        moving: false,
        isAttacking: true,
      };
    });
    state.player.turrets = [0, 1, 2, 2];
    state.player.unlockedSlots = state.enemy.unlockedSlots = 4;
    state.enemy.turrets = [0, 1, 2, 2];
    state.player.turretProgress = state.enemy.turretProgress = [1, 1, 1, 1];
    for (const [team,p] of [[1,state.player],[-1,state.enemy]]) {
      p.turretHp=[50,50,50,50];p.turretMaxHp=[100,100,100,100];
      p.turretAim=p.turrets.map((_,slot)=>({heading:(team===1?0:Math.PI)+(slot-2)*.2,target:{kind:'unit',id:1}}));
    }
    view.labelClock = 0;
    for (let frame = 0; frame < 12; frame++) {
      await new Promise(requestAnimationFrame);
      // All pieces fire together: release (extra flashes), recovery, then
      // preparation. Record each phase, not only a cheap resting frame.
      const phase = Math.floor(frame / 4);
      for (const unit of state.units)
        unit.attackCooldown =
          phase === 0
            ? unit.attackSpeed
            : phase === 1
              ? Math.max(0.001, unit.attackSpeed - 0.15)
              : 0.05;
      for (const side of [state.player, state.enemy])
        side.turretTimers = side.turrets.map((index) => {
          const period = AGES[age].turrets[index].attackSpeed;
          return phase === 0
            ? period
            : phase === 1
              ? Math.max(0.001, period - 0.15)
              : 0.05;
        });
      view.update(state, [], 1 / 72);
      view.render();
      if (frame % 4 === 3) results.push({ age, phase, ...view.stats() });
    }
  }
  return results;
};
