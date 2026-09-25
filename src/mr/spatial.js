import { TABLE } from './catalog.js';
import { Quaternion, Vector3 } from 'three';

export const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
export const length = (p) => Math.hypot(p.x, p.y, p.z);
const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
export const midpoint = (a, b) => ({
  x: (a.x + b.x) / 2,
  y: (a.y + b.y) / 2,
  z: (a.z + b.z) / 2
});
export const rotationOf = (table) => new Quaternion().copy(table.rotation).normalize();
export const rotationData = (q) => ({ x: q.x, y: q.y, z: q.z, w: q.w });
const vector = (p) => new Vector3(p.x, p.y, p.z);
const coordinates = (p) => ({ x: p.x, y: p.y, z: p.z });
export function toLocalVector(p, table) {
  return coordinates(vector(p).applyQuaternion(rotationOf(table).invert()).divideScalar(table.scale));
}
export function toLocal(p, table) {
  return toLocalVector(sub(p, table.position), table);
}
export function toWorld(p, table) {
  const v = vector(p).applyQuaternion(rotationOf(table));
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
  begin(id, point, orientation = null) {
    this.grips.set(id, { point: { ...point }, orientation: orientation && rotationData(orientation) });
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
    const grips = [...this.grips.values()], points = grips.map(g => g.point);
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
      distance: Math.max(0.04, length(delta)),
      direction: vector(delta).normalize(),
      scale: this.table.scale,
      rotation: rotationOf(this.table),
      orientations: grips.map(g => g.orientation && new Quaternion().copy(g.orientation).normalize())
    };
    this.collapsed = points.length > 1 && length(delta) < 0.04;
  }
  move(id, point, orientation = null) {
    if (!this.grips.has(id)) return;
    this.grips.set(id, { point: { ...point }, orientation: orientation && rotationData(orientation) });
    const grips = [...this.grips.values()], points = grips.map(g => g.point);
    const center =
      points.length > 1 ? midpoint(points[0], points[1]) : points[0];
    let origin = this.origin, rotation = rotationOf(this.table);
    if (points.length > 1) {
      const delta = vector(sub(points[1], points[0])), distance = delta.length();
      if (distance < 0.04) this.collapsed = true;
      else {
        // Coincident grips do not define an axis. Resume from the current pose
        // when they separate rather than suddenly flipping or growing the book.
        if (this.collapsed) { this.rebase(); origin = this.origin; }
        const direction = delta.normalize();
        this.table.scale = clamp(origin.scale * distance / origin.distance, TABLE.minScale, TABLE.maxScale);
        rotation = new Quaternion().setFromUnitVectors(origin.direction, direction).multiply(origin.rotation);
        // The grip line sets swing; relative wrist rotation resolves twist around
        // that line, including a book held vertically or face-down above a bed.
        const deltas = grips.flatMap((g, i) => g.orientation && origin.orientations[i]
          ? [new Quaternion().copy(g.orientation).normalize().multiply(origin.orientations[i].clone().invert())] : []);
        if (deltas.length) {
          const average = deltas[0].clone();
          if (deltas.length === 2) average.slerp(deltas[1], 0.5);
          const normal = new Vector3(0, 1, 0).applyQuaternion(rotation);
          const desired = new Vector3(0, 1, 0).applyQuaternion(origin.rotation).applyQuaternion(average);
          normal.addScaledVector(direction, -normal.dot(direction));
          desired.addScaledVector(direction, -desired.dot(direction));
          if (normal.lengthSq() > 1e-8 && desired.lengthSq() > 1e-8) {
            normal.normalize(); desired.normalize();
            const twist = Math.atan2(direction.dot(normal.clone().cross(desired)), normal.dot(desired));
            rotation.premultiply(new Quaternion().setFromAxisAngle(direction, twist));
          }
        }
      }
    } else if (grips[0].orientation && origin.orientations[0]) {
      rotation = new Quaternion().copy(grips[0].orientation).normalize()
        .multiply(origin.orientations[0].clone().invert()).multiply(origin.rotation);
    }
    this.table.rotation = rotationData(rotation.normalize());
    const offset = vector(origin.local).applyQuaternion(rotation);
    this.table.position = {
      x: center.x - offset.x * this.table.scale,
      y: center.y - offset.y * this.table.scale,
      z: center.z - offset.z * this.table.scale
    };
  }
}

/** Presentation-only throw integration. Segment-plane hits cannot tunnel past a drop. */
export function fly(item, dt, gravity = 9.81, planeY = 0) {
  const before = { ...item.position };
  item.position.x += item.velocity.x * dt;
  item.position.z += item.velocity.z * dt;
  item.position.y += item.velocity.y * dt - (gravity * dt * dt) / 2;
  item.velocity.y -= gravity * dt;
  item.age += dt;
  if (before.y >= planeY && item.position.y <= planeY) {
    const t = (before.y - planeY) / (before.y - item.position.y || 1);
    return {
      x: before.x + (item.position.x - before.x) * t,
      y: planeY,
      z: before.z + (item.position.z - before.z) * t
    };
  }
  return null;
}
