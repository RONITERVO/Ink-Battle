import { TabletopScene } from '../../src/mr/scene.js';
import { TabletopHost } from '../../src/mr/host.js';
import { Session } from '../../src/sdk/session.js';
import { AGES } from '../../src/content/ages.js';

// Renderer-only fixture: deliberately exercises the engine's maximum capacity.
// It never feeds invented units into a playable Session or a release replay.
window.measureMRStress = async () => {
  let state = new Session().observe();
  const host = new TabletopHost({ session: { observe: () => state } }),
    view = new TabletopScene(document.querySelector('canvas'), host),
    results = [];
  await document.fonts.ready;
  for (let age = 0; age < AGES.length; age++) {
    state = new Session({ startAge: age }).observe();
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
        y: 600,
        hp: data.hp,
        maxHp: data.hp,
        drawProgress: 1,
        moving: true,
        isAttacking: i % 4 === 0
      };
    });
    state.player.turrets = [0, 1, 2, 2];
    state.enemy.turrets = [0, 1, 2, 2];
    view.labelClock = 0;
    for (let frame = 0; frame < 12; frame++) {
      await new Promise(requestAnimationFrame);
      view.update(state, [], 1 / 72);
      view.render();
    }
    results.push({ age, ...view.stats() });
  }
  return results;
};
