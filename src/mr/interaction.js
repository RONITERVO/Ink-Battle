import { TableGesture, toLocal, rotate, fly, length } from './spatial.js';
import { landingHeight } from './defense-layout.js';

/** All input devices use the same grab lifetime and release transaction. */
export class Interaction {
  constructor(host, table, { onCarry = () => {} } = {}) {
    this.host = host;
    this.table = table;
    this.onCarry = onCarry;
    this.gesture = new TableGesture(table);
    this.grabs = new Map();
    this.flights = new Map();
  }
  begin(owner, target, world, time = 0) {
    if (this.grabs.has(owner) || this.flights.has(owner)) return false;
    if (target.startsWith('handle-')) {
      if (this.gesture.grips.size >= 2) return false;
      this.onCarry();
      this.gesture.begin(owner, world);
      this.grabs.set(owner, { handle: true });
      return true;
    }
    const result = this.host.grab(owner, target);
    if (!result.ok) return false;
    this.grabs.set(owner, {
      token: result.token,
      world: { ...world },
      position: toLocal(world, this.table),
      history: [{ world: { ...world }, time }]
    });
    return true;
  }
  move(owner, world, time = 0) {
    const item = this.grabs.get(owner);
    if (!item) return;
    if (item.handle) {
      this.gesture.move(owner, world);
      return;
    }
    item.world = { ...world };
    item.position = toLocal(world, this.table);
    item.history.push({ world: { ...world }, time });
    while (item.history.length > 2 && item.history[0].time < time - 0.12)
      item.history.shift();
  }
  release(owner, { desktop = false } = {}) {
    const item = this.grabs.get(owner);
    if (!item) return;
    this.grabs.delete(owner);
    if (item.handle) {
      this.gesture.end(owner);
      return;
    }
    if (!this.host.holds.has(owner)) return;
    const position = toLocal(item.world, this.table);
    // Hand/controller grips are at a raised arm or bottle neck; land the feet/base.
    position.y -= item.token.offer.kind === 'unit' ? 0.226 : 0.06;
    const floor = landingHeight(item.token.offer);
    if (desktop || position.y <= floor + 0.025) {
      this.host.drop(owner, { ...position, y: floor });
      return;
    }
    const first = item.history[0],
      last = item.history.at(-1),
      dt = Math.max(0.016, last.time - first.time);
    const speed = {
      x: (last.world.x - first.world.x) / dt,
      y: (last.world.y - first.world.y) / dt,
      z: (last.world.z - first.world.z) / dt
    };
    const cap = Math.min(1, 3 / (length(speed) || 1));
    const velocity = rotate(speed, -this.table.yaw);
    for (const k of ['x', 'y', 'z']) velocity[k] *= cap / this.table.scale;
    this.flights.set(owner, { token: item.token, position, velocity, age: 0 });
  }
  cancel(owner) {
    this.grabs.delete(owner);
    this.flights.delete(owner);
    this.gesture.end(owner);
    this.host.cancel(owner);
  }
  cancelAll() {
    for (const id of new Set([...this.grabs.keys(), ...this.flights.keys()]))
      this.cancel(id);
  }
  update(dt) {
    for (const [owner, item] of this.grabs)
      if (!item.handle && !this.host.holds.has(owner)) this.grabs.delete(owner);
    for (const [owner, item] of this.flights) {
      if (!this.host.holds.has(owner)) {
        this.flights.delete(owner);
        continue;
      }
      const hit = fly(item, Math.min(dt, 0.1), 9.81 / this.table.scale,
        landingHeight(item.token.offer));
      if (hit) {
        this.flights.delete(owner);
        this.host.drop(owner, hit);
      } else if (item.age > 3 || item.position.y < -1) this.cancel(owner);
    }
  }
  visuals() {
    const items = [];
    for (const item of this.grabs.values())
      if (!item.handle)
        items.push({
          offer: item.token.offer,
          age: item.token.age,
          position: toLocal(item.world, this.table)
        });
    for (const item of this.flights.values())
      items.push({
        offer: item.token.offer,
        age: item.token.age,
        position: {
          ...item.position,
          y: item.position.y + (item.token.offer.kind === 'unit' ? 0.226 : 0.06)
        }
      });
    return items;
  }
}
