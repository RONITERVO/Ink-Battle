/** One presentation layout shared by rendering, targeting and input. Slot order
 * follows the engine: first empty unlocked cannon, next dock, last cannon sold.
 * Two foundations on each flank leave every age's base footprint unobstructed. */
export const DOCK = Object.freeze({ width: 0.16, depth: 0.13, height: 0.044 });
const Z = Object.freeze([-0.185, 0.46, -0.35, 0.6]);

export function dockPosition(slot, team = 1) {
  if (!Number.isInteger(slot) || slot < 0 || slot >= Z.length) return null;
  return { x: -team * 1.11, y: DOCK.height, z: Z[slot], slot };
}

export function defenseTarget(offer, state) {
  const side = state?.player;
  if (!side) return null;
  let slot = -1;
  if (offer.kind === 'turret')
    slot = side.turrets.slice(0, side.unlockedSlots).indexOf(null);
  else if (offer.kind === 'slot') slot = side.unlockedSlots;
  else if (offer.kind === 'eraser') slot = side.turrets.findLastIndex((t) => t !== null);
  const position = dockPosition(slot);
  return position && { ...position, y: offer.kind === 'slot' ? 0 : DOCK.height };
}

export function landingHeight(offer) {
  return ['turret', 'eraser'].includes(offer.kind) ? DOCK.height : 0;
}

export function onDock(point, target) {
  // Small hand-tracking allowance, clear of the base and neighboring dock
  // centers. Height is validated by the shared page landing envelope.
  return !!target && Math.abs(point.x - target.x) <= DOCK.width / 2 + 0.01 &&
    Math.abs(point.z - target.z) <= DOCK.depth / 2 + 0.01;
}
