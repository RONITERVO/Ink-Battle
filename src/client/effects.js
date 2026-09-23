import { CANVAS_WIDTH, GROUND_Y } from '../core/constants.js';

export function createEffects(runtime) {
  const particles = { pool: [] }, floatingTexts = { pool: [] }, visualFx = { pool: [] };
  function spawnParticles(x, y, color, count, pType) {
    for (let i = 0; i < count && particles.pool.length < 2500; i++) particles.pool.push({ active: true, x, y, color, pType,
      vx: (Math.random() - .5) * 500, vy: (Math.random() - 1) * 400, life: .3 + Math.random() * .5, size: Math.random() * 8 + 4 });
  }
  function spawnCanvasText(text, x, y, color, options = {}) {
    if (floatingTexts.pool.length >= 200) return;
    const life = options.life ?? 1;
    floatingTexts.pool.push({ active: true, text, x, y, color, life, maxLife: life, size: options.size || 30, grow: options.grow ?? 15,
      rise: options.rise, decay: options.decay, stroke: !!options.stroke });
  }
  function effectsTick(dt, events) {
    for (const event of events) {
      if (event.type === 'damage') {
        spawnParticles(event.x, event.y, runtime.COLORS.destructive, 5, 'splatter');
        // Continuous specials emit sixty tiny damage events per second; keep the page readable.
        if (event.amount >= 20) spawnCanvasText(`-${Math.floor(event.amount)}`, event.x, event.y - 20, runtime.COLORS.destructive);
      } else if (event.type === 'death') {
        spawnParticles(event.x, event.y - event.size / 2, runtime.COLORS.destructive, 10, 'splatter');
        spawnParticles(event.x, event.y - event.size, runtime.COLORS.pencilLight, 1, 'ghost');
        if (event.team === -1) spawnCanvasText(`+${event.gold}g`, event.x, event.y - event.size - 20, runtime.COLORS.gold);
      } else if (event.type === 'spawn') spawnParticles(event.x, event.y - event.size / 2, runtime.COLORS.pencil, 8, 'graphite');
      else if (event.type === 'melee') spawnParticles(event.x, event.y, runtime.COLORS.pencil, 1, 'slash');
      else if (event.type === 'impact') { spawnParticles(event.x, GROUND_Y, runtime.COLORS.fire, 20, 'explosion'); runtime.screenShake = .2; }
      else if (event.type === 'special' && event.age === 3) {
        for (let i = 0; i < 2; i++) visualFx.pool.push({ active: true, type: 'plane', x: event.team === 1 ? -i * 200 : CANVAS_WIDTH + i * 200,
          y: 150 + i * 65, vx: event.team * 600, team: event.team });
      } else if (event.type === 'evolve' && event.team === 1) {
        runtime.applyTheme(event.age); runtime.ageTransition = 1; runtime.screenShake = .5;
        spawnCanvasText('NEW AGE!', 230, 360, runtime.COLORS.gold);
      }
    }
    for (const pt of particles.pool) {
      pt.x += pt.vx * dt; pt.y += pt.vy * dt;
      if (['splatter', 'explosion', 'dust'].includes(pt.pType)) pt.vy += 600 * dt;
      if (pt.pType === 'graphite' || pt.pType === 'ghost') { pt.x += Math.sin(pt.life * 10) * 15 * dt; pt.y -= 30 * dt; }
      pt.life -= dt;
    }
    particles.pool = particles.pool.filter(p => p.life > 0);
    for (const ft of floatingTexts.pool) { ft.life -= dt * (ft.decay || 1.2); ft.y -= dt * (ft.rise ?? 40); }
    floatingTexts.pool = floatingTexts.pool.filter(p => p.life > 0);
    for (const fx of visualFx.pool) fx.x += fx.vx * dt;
    visualFx.pool = visualFx.pool.filter(f => f.x > -500 && f.x < CANVAS_WIDTH + 500);
    runtime.screenShake = Math.max(0, (runtime.screenShake || 0) - dt);
    runtime.ageTransition = Math.max(0, (runtime.ageTransition || 0) - dt);
  }
  return { particles, floatingTexts, visualFx, spawnParticles, spawnCanvasText, effectsTick };
}
