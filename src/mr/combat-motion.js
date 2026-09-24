import { AGES } from "../content/ages.js";

export const REST = Object.freeze({
  strike: 0,
  recoil: 0,
  prepare: 0,
  flash: 0,
});
const ease = (n) => {
  const t = Math.max(0, Math.min(1, n));
  return t * t * (3 - 2 * t);
};

/** A pose sampled from the authoritative cooldown, never a free-running attack
 * loop. Zero means no shot has fired. This survives skipped render frames,
 * checkpoints and 1/2/3x play without extra engine events or replay fields. */
export function attackMotion(cooldown, period, engaged = false, progress = 1) {
  if (!(cooldown > 0) || !(period > 0) || progress < 1) return REST;
  const elapsed = Math.max(0, period - cooldown);
  const recovery = Math.min(0.42, period * 0.65);
  const preparation = Math.min(0.22, period * 0.25);
  return {
    strike: 1 - ease(elapsed / recovery),
    recoil: (1 - ease(elapsed / Math.min(0.23, period * 0.55))) ** 2,
    prepare: engaged ? ease(1 - cooldown / preparation) : 0,
    flash: 1 - ease(elapsed / Math.min(0.09, period * 0.35)),
  };
}

export function unitMotion(unit) {
  return attackMotion(
    unit.attackCooldown,
    unit.attackSpeed,
    unit.isAttacking,
    unit.drawProgress,
  );
}

export function defenseMotion(side, slot) {
  const index = side.turrets[slot];
  if (index === null) return REST;
  return attackMotion(
    side.turretTimers[slot],
    AGES[side.age].turrets[index].attackSpeed,
    true,
    side.turretProgress[slot],
  );
}
