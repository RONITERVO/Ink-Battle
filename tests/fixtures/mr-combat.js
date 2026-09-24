import { TabletopScene } from "../../src/mr/scene.js";
import { TabletopHost } from "../../src/mr/host.js";
import { Session } from "../../src/sdk/session.js";
import { unitMotion } from "../../src/mr/combat-motion.js";

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
  return {
    attacking: host.observe().units.some((u) => u.isAttacking),
    frozen,
    restored,
    advanced,
    clockMatches,
    comfortMoves,
    ...view.stats(),
  };
};
