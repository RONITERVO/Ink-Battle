import { TABLE } from './catalog.js';

export const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
export const length = (p) => Math.hypot(p.x, p.y, p.z);
const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
export const midpoint = (a, b) => ({
  x: (a.x + b.x) / 2,
  y: (a.y + b.y) / 2,
  z: (a.z + b.z) / 2
});
export function rotate(p, yaw) {
  const c = Math.cos(yaw),
    s = Math.sin(yaw);
  return { x: c * p.x + s * p.z, y: p.y, z: -s * p.x + c * p.z };
}
export function toLocal(p, table) {
  const v = rotate(sub(p, table.position), -table.yaw);
  return { x: v.x / table.scale, y: v.y / table.scale, z: v.z / table.scale };
}
export function toWorld(p, table) {
  const v = rotate(p, table.yaw);
  return {
    x: table.position.x + v.x * table.scale,
    y: table.position.y + v.y * table.scale,
    z: table.position.z + v.z * table.scale
  };
}

/** Keep the held points fixed while carrying, turning or resizing the whole table. */
export class TableGesture {
  constructor(table) {
    this.table = table;
    this.grips = new Map();
    this.origin = null;
  }
  begin(id, point) {
    this.grips.set(id, { ...point });
    this.rebase();
  }
  end(id) {
    this.grips.delete(id);
    this.rebase();
  }
  clear() {
    this.grips.clear();
    this.origin = null;
  }
  rebase() {
    const points = [...this.grips.values()];
    if (!points.length) {
      this.origin = null;
      return;
    }
    const center =
      points.length > 1 ? midpoint(points[0], points[1]) : points[0];
    const delta =
      points.length > 1 ? sub(points[1], points[0]) : { x: 1, y: 0, z: 0 };
    this.origin = {
      local: toLocal(center, this.table),
      distance: Math.max(0.06, length(delta)),
      angle: Math.atan2(delta.z, delta.x),
      scale: this.table.scale,
      yaw: this.table.yaw
    };
  }
  move(id, point) {
    if (!this.grips.has(id)) return;
    this.grips.set(id, { ...point });
    const points = [...this.grips.values()],
      origin = this.origin;
    const center =
      points.length > 1 ? midpoint(points[0], points[1]) : points[0];
    if (points.length > 1) {
      const delta = sub(points[1], points[0]);
      this.table.scale = clamp(
        (origin.scale * length(delta)) / origin.distance,
        TABLE.minScale,
        TABLE.maxScale
      );
      if (Math.hypot(delta.x, delta.z) > 0.05)
        this.table.yaw =
          origin.yaw - (Math.atan2(delta.z, delta.x) - origin.angle);
    }
    const offset = rotate(origin.local, this.table.yaw);
    this.table.position = {
      x: center.x - offset.x * this.table.scale,
      y: center.y - offset.y * this.table.scale,
      z: center.z - offset.z * this.table.scale
    };
  }
}

/** Presentation-only throw integration. Segment-plane hits cannot tunnel past a drop. */
export function fly(item, dt, gravity = 9.81) {
  const before = { ...item.position };
  item.position.x += item.velocity.x * dt;
  item.position.z += item.velocity.z * dt;
  item.position.y += item.velocity.y * dt - (gravity * dt * dt) / 2;
  item.velocity.y -= gravity * dt;
  item.age += dt;
  if (before.y >= 0 && item.position.y <= 0) {
    const t = before.y / (before.y - item.position.y || 1);
    return {
      x: before.x + (item.position.x - before.x) * t,
      y: 0,
      z: before.z + (item.position.z - before.z) * t
    };
  }
  return null;
}
