(() => {
  // src/content/ages.js
  var AGES = [
    {
      name: "Stone Age",
      evolveXP: 400,
      baseHp: 500,
      baseStyle: "cave",
      theme: { bg: "39 35% 90%", fg: "25 15% 20%", accent: "18 60% 55%" },
      special: { name: "Meteor Shower", cooldown: 60, duration: 4, type: "meteor" },
      units: [
        { name: "Clubman", desc: "Cheap melee screen. Takes half damage from siege shots.", cost: 15, hp: 30, dmg: 8, range: 40, speed: 50, type: "melee", size: 45, attackSpeed: 1.2, killXp: 5, killGold: 10 },
        { name: "Slinger", desc: "Basic ranged support.", cost: 25, hp: 20, dmg: 5, range: 250, speed: 45, type: "ranged", size: 40, attackSpeed: 1.5, projType: "arc", projSpeed: 400, killXp: 8, killGold: 15 },
        { name: "Dino Rider", desc: "Heavy pushing power.", cost: 100, hp: 150, dmg: 35, range: 50, speed: 70, type: "heavy", size: 80, attackSpeed: 2, killXp: 30, killGold: 50 }
      ],
      turrets: [
        { name: "Rock Thrower", desc: "A simple defensive rock flinger.", cost: 100, dmg: 10, range: 350, attackSpeed: 1.5, projType: "arc", projSpeed: 350 },
        { name: "Egg Slingshot", desc: "Fires volatile dino eggs.", cost: 200, dmg: 25, range: 400, attackSpeed: 2, projType: "arc", projSpeed: 400 },
        { name: "Fire Beryl", desc: "Spits concentrated fireballs.", cost: 400, dmg: 50, range: 450, attackSpeed: 2.5, projType: "arc", projSpeed: 450 }
      ]
    },
    {
      name: "Castle Age",
      evolveXP: 1400,
      baseHp: 1500,
      baseStyle: "castle",
      theme: { bg: "45 25% 85%", fg: "220 20% 25%", accent: "200 60% 45%" },
      special: { name: "Arrow Volley", cooldown: 60, duration: 3, type: "arrows" },
      units: [
        { name: "Swordsman", desc: "Armored infantry. Takes half damage from siege shots.", cost: 50, hp: 120, dmg: 25, range: 45, speed: 55, type: "melee", size: 50, attackSpeed: 1, killXp: 15, killGold: 25 },
        { name: "Archer", desc: "Sharp-eyed ranged combatant.", cost: 75, hp: 70, dmg: 20, range: 300, speed: 50, type: "ranged", size: 45, attackSpeed: 1.2, projType: "arc", projSpeed: 500, killXp: 20, killGold: 35 },
        { name: "Knight", desc: "Mounted terror of the battlefield.", cost: 250, hp: 400, dmg: 55, range: 60, speed: 80, type: "heavy", size: 90, attackSpeed: 1.5, killXp: 70, killGold: 100 }
      ],
      turrets: [
        { name: "Catapult", desc: "Lobs heavy stones at attackers.", cost: 500, dmg: 40, range: 450, attackSpeed: 1.5, projType: "arc", projSpeed: 400 },
        { name: "Ballista", desc: "Fires massive piercing bolts.", cost: 750, dmg: 80, range: 500, attackSpeed: 2.5, projType: "straight", projSpeed: 800 },
        { name: "Hot Oil", desc: "Boiling defense for close range.", cost: 1e3, dmg: 150, range: 300, attackSpeed: 3, projType: "arc", projSpeed: 300 }
      ]
    },
    {
      name: "Renaissance",
      evolveXP: 4500,
      baseHp: 4e3,
      baseStyle: "fort",
      theme: { bg: "30 20% 88%", fg: "10 30% 25%", accent: "0 50% 50%" },
      special: { name: "Cannon Barrage", cooldown: 60, duration: 4, type: "cannons" },
      units: [
        { name: "Halberdier", desc: "Long-reaching infantry. Takes half damage from siege shots.", cost: 200, hp: 400, dmg: 80, range: 65, speed: 50, type: "melee", size: 50, attackSpeed: 1.2, killXp: 40, killGold: 60 },
        { name: "Musketeer", desc: "Deadly black powder marksman.", cost: 300, hp: 250, dmg: 100, range: 400, speed: 45, type: "ranged", size: 45, attackSpeed: 2, projType: "straight", projSpeed: 1200, killXp: 50, killGold: 80 },
        { name: "Field Cannon", splashRadius: 65, siegeMultiplier: 2, desc: "Siege gun: 2x base damage; splashes two nearby troops at 35%.", cost: 900, hp: 1e3, dmg: 250, range: 450, speed: 30, type: "ranged", size: 75, attackSpeed: 3, projType: "arc", projSpeed: 600, killXp: 150, killGold: 300 }
      ],
      turrets: [
        { name: "Swivel Gun", desc: "Fast firing anti-infantry gun.", cost: 1500, dmg: 100, range: 450, attackSpeed: 1, projType: "straight", projSpeed: 1200 },
        { name: "Heavy Cannon", desc: "Slow firing massive damage.", cost: 2500, dmg: 250, range: 500, attackSpeed: 2.5, projType: "arc", projSpeed: 700 },
        { name: "Mortar", desc: "Extreme range plunging fire.", cost: 4e3, dmg: 500, range: 600, attackSpeed: 4, projType: "arc", projSpeed: 500 }
      ]
    },
    {
      name: "Modern Age",
      evolveXP: 15e3,
      baseHp: 12e3,
      baseStyle: "bunker",
      theme: { bg: "120 10% 85%", fg: "120 20% 20%", accent: "30 70% 50%" },
      special: { name: "Airstrike", cooldown: 60, duration: 5, type: "airstrike" },
      units: [
        { name: "Infantry", desc: "Trench fighter. Takes half damage from siege shots.", cost: 1500, hp: 1200, dmg: 250, range: 50, speed: 60, type: "melee", size: 50, attackSpeed: 0.8, killXp: 200, killGold: 300 },
        { name: "Marine", desc: "Rapid-fire assault troops.", cost: 2e3, hp: 800, dmg: 130, range: 400, speed: 55, type: "ranged", size: 45, attackSpeed: 0.65, projType: "straight", projSpeed: 1800, killXp: 250, killGold: 400 },
        { name: "Tank", splashRadius: 80, siegeMultiplier: 2, desc: "Armored siege: 2x base damage; splashes two nearby troops at 35%.", cost: 6500, hp: 4500, dmg: 800, range: 350, speed: 40, type: "heavy", size: 110, attackSpeed: 2.5, projType: "straight", projSpeed: 1e3, killXp: 800, killGold: 1200 }
      ],
      turrets: [
        { name: "Machine Gun", desc: "Shreds lightly armored units.", cost: 6e3, dmg: 80, range: 500, attackSpeed: 0.15, projType: "straight", projSpeed: 2e3 },
        { name: "Rocket Pod", desc: "Fires armor piercing missiles.", cost: 9e3, dmg: 600, range: 550, attackSpeed: 2, projType: "straight", projSpeed: 800 },
        { name: "Artillery", desc: "Long range explosive barrage.", cost: 15e3, dmg: 1500, range: 700, attackSpeed: 3.5, projType: "arc", projSpeed: 800 }
      ]
    },
    {
      name: "Future Age",
      evolveXP: 5e4,
      baseHp: 4e4,
      baseStyle: "dome",
      theme: { bg: "210 30% 25%", fg: "210 60% 85%", accent: "180 80% 60%" },
      special: { name: "Orbital Laser", cooldown: 60, duration: 4, type: "laser" },
      units: [
        { name: "Energy Blade", desc: "Cyber swordsman. Takes half damage from siege shots.", cost: 5e3, hp: 5e3, dmg: 1e3, range: 60, speed: 70, type: "melee", size: 55, attackSpeed: 1, killXp: 800, killGold: 1e3 },
        { name: "Blaster", desc: "Fires concentrated energy beams.", cost: 7e3, hp: 3e3, dmg: 600, range: 420, speed: 60, type: "ranged", size: 50, attackSpeed: 0.8, projType: "laser", projSpeed: 3e3, killXp: 1e3, killGold: 1500 },
        { name: "War Mech", splashRadius: 90, siegeMultiplier: 2, desc: "Siege beams: 2x base damage; splashes two nearby troops at 35%.", cost: 2e4, hp: 15e3, dmg: 3e3, range: 400, speed: 45, type: "heavy", size: 130, attackSpeed: 2, projType: "laser", projSpeed: 3e3, killXp: 3e3, killGold: 4e3 }
      ],
      turrets: [
        { name: "Laser Gatling", desc: "Unending beam of light.", cost: 2e4, dmg: 300, range: 550, attackSpeed: 0.2, projType: "laser", projSpeed: 3e3 },
        { name: "Ion Cannon", desc: "Heavy anti-armor blasts.", cost: 4e4, dmg: 2500, range: 600, attackSpeed: 2, projType: "laser", projSpeed: 3e3 },
        { name: "Plasma Ray", desc: "Melts organic matter.", cost: 8e4, dmg: 6e3, range: 800, attackSpeed: 3, projType: "arc", projSpeed: 1200 }
      ]
    },
    {
      name: "Cosmic Age",
      evolveXP: 9999999,
      baseHp: 15e4,
      baseStyle: "portal",
      theme: { bg: "260 40% 10%", fg: "280 50% 80%", accent: "300 80% 60%" },
      special: { name: "Void Rift", cooldown: 70, duration: 5, type: "orbital" },
      units: [
        { name: "Hover Drone", desc: "Swift hunter. Takes half damage from siege shots.", cost: 15e3, hp: 14e3, dmg: 2400, range: 70, speed: 85, type: "melee", size: 60, attackSpeed: 1, killXp: 2e3, killGold: 3e3 },
        { name: "Void Ray", desc: "Channels antimatter.", cost: 2e4, hp: 8e3, dmg: 2400, range: 500, speed: 70, type: "ranged", size: 55, attackSpeed: 1, projType: "laser", projSpeed: 4e3, killXp: 3e3, killGold: 4500 },
        { name: "Mothership", splashRadius: 140, siegeMultiplier: 2, desc: "Siege orbs: 2x base damage; splashes two nearby troops at 35%.", cost: 65e3, hp: 5e4, dmg: 8e3, range: 550, speed: 35, type: "heavy", size: 160, attackSpeed: 3, projType: "orb", projSpeed: 600, killXp: 1e4, killGold: 15e3 }
      ],
      turrets: [
        { name: "Plasma Rep.", cost: 5e4, dmg: 1200, range: 600, attackSpeed: 0.3, projType: "laser", projSpeed: 4e3 },
        { name: "Black Hole", cost: 1e5, dmg: 6e3, range: 650, attackSpeed: 2.5, projType: "orb", projSpeed: 500 },
        { name: "Antimatter", cost: 2e5, dmg: 2e4, range: 900, attackSpeed: 4, projType: "laser", projSpeed: 5e3 }
      ]
    }
  ];
  function freeze(value) {
    if (value && typeof value === "object") {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
  }
  freeze(AGES);

  // src/core/constants.js
  var RULES_VERSION = "2.0.0";
  var TICK_RATE = 60;
  var FIXED_DT = 1 / TICK_RATE;
  var CANVAS_WIDTH = 1280;
  var CANVAS_HEIGHT = 720;
  var GROUND_Y = 600;
  var BASE_WIDTH = 180;
  var MAX_UNITS = 80;
  var UPGRADE_COSTS = [500, 1500, 3500, 8e3, 18e3, 35e3, 75e3, 15e4, 35e4, 75e4];
  var INCOME = [5, 12, 35, 200, 700, 1800];
  var DIFFICULTY_SETTINGS = Object.freeze({
    normal: { name: "Normal", color: "hsl(var(--diff-normal))", hpMult: 1, dmgMult: 1, econMult: 1, xpMult: 1, baseGold: 175, baseHpMult: 1, thinkRate: 1.8, aiAggression: 0.35 },
    hard: { name: "Hard", color: "hsl(var(--diff-hard))", hpMult: 1.2, dmgMult: 1.1, econMult: 1.4, xpMult: 1.2, baseGold: 250, baseHpMult: 1.2, thinkRate: 1.15, aiAggression: 0.58 },
    harder: { name: "Harder", color: "hsl(var(--diff-harder))", hpMult: 1.5, dmgMult: 1.3, econMult: 2, xpMult: 1.5, baseGold: 500, baseHpMult: 1.5, thinkRate: 0.65, aiAggression: 0.82 },
    impossible: { name: "Impossible", color: "hsl(var(--diff-impossible))", hpMult: 2, dmgMult: 1.5, econMult: 4, xpMult: 2.5, baseGold: 1500, baseHpMult: 2, thinkRate: 0.28, aiAggression: 1 }
  });

  // src/core/state.js
  function side(state, team) {
    return team === 1 ? state.player : state.enemy;
  }
  function multiplier(state, team, stat) {
    const upgrade = side(state, team).upgrades[stat];
    const base = 1 + upgrade * { dmg: 0.15, hp: 0.25, econ: 0.2 }[stat];
    return base * (team === -1 ? DIFFICULTY_SETTINGS[state.difficulty][`${stat}Mult`] : 1);
  }
  function income(state, team) {
    return INCOME[side(state, team).age] * multiplier(state, team, "econ");
  }
  function random(state) {
    let x = state.rng >>> 0;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    state.rng = x >>> 0;
    return state.rng / 4294967296;
  }
  function emit(state, type, data = {}) {
    state.events.push({ tick: state.tick, type, ...data });
  }
  function createState({ seed = 1, difficulty = "normal", startAge = 0, opponent = true } = {}) {
    if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) throw new Error("seed must be a uint32");
    if (!Object.hasOwn(DIFFICULTY_SETTINGS, difficulty)) throw new Error("Unknown difficulty");
    if (!Number.isInteger(startAge) || startAge < 0 || startAge >= AGES.length) throw new Error("Invalid startAge");
    if (typeof opponent !== "boolean") throw new Error("opponent must be boolean");
    const config = DIFFICULTY_SETTINGS[difficulty];
    const makeSide = (team) => {
      const maxHp = AGES[startAge].baseHp * (team === -1 ? config.baseHpMult : 1);
      return {
        hp: maxHp,
        maxHp,
        age: startAge,
        gold: (team === -1 ? config.baseGold : 175) * AGES[startAge].units[0].cost / 15,
        xp: startAge ? AGES[startAge - 1].evolveXP : 0,
        upgrades: { dmg: 0, hp: 0, econ: 0 },
        turrets: [null, null, null, null],
        turretProgress: [1, 1, 1, 1],
        turretTimers: [0, 0, 0, 0],
        unlockedSlots: 1,
        specialTimer: 0,
        drawProgress: 1,
        deployTimer: 0,
        rng: (seed || 1) >>> 0
      };
    };
    return {
      version: RULES_VERSION,
      seed,
      difficulty,
      tick: 0,
      nextId: 1,
      running: true,
      paused: false,
      winner: null,
      player: makeSide(1),
      enemy: makeSide(-1),
      units: [],
      projectiles: [],
      specials: [],
      events: [],
      agreements: { noSpecials: false, noTurrets: false, meleeOnly: false },
      restraintUntil: 0,
      opponent: { enabled: opponent, nextTick: Math.round(0.8 * TICK_RATE), order: "balanced", lastAction: "", emotion: "Centered" },
      metrics: {
        firstContactTick: null,
        kills: { "1": 0, "-1": 0 },
        spent: { "1": 0, "-1": 0 },
        damage: { "1": 0, "-1": 0 },
        spawned: { "1": 0, "-1": 0 },
        peakUnits: 0,
        evolutions: []
      }
    };
  }

  // src/core/commands.js
  function commandError(s, team, c) {
    if (team !== 1 && team !== -1) return "invalid-team";
    if (!c || typeof c !== "object" || Array.isArray(c)) return "invalid-command";
    if (!s.running) return "match-ended";
    if (s.paused) return "paused";
    const p = side(s, team), age = AGES[p.age], pacts = team === -1 ? s.agreements : {};
    if (p.drawProgress < 1) return "base-drawing";
    switch (c.type) {
      case "unit":
        if (!Number.isInteger(c.index) || !age.units[c.index]) return "invalid-unit";
        if (pacts.meleeOnly && age.units[c.index].type === "ranged") return "pact";
        if (team === -1 && s.tick < s.restraintUntil) return "truce";
        if (p.deployTimer > 0) return "deploying";
        if (s.units.some((u) => u.team === team && u.range <= age.units[c.index].range && Math.abs(u.x - (team === 1 ? BASE_WIDTH : CANVAS_WIDTH - BASE_WIDTH)) < (u.size + age.units[c.index].size) / 2 + 10)) return "deployment-blocked";
        if (s.units.filter((u) => u.team === team).length >= MAX_UNITS) return "unit-cap";
        return p.gold < age.units[c.index].cost ? "gold" : null;
      case "turret":
        if (!Number.isInteger(c.index) || !age.turrets[c.index]) return "invalid-turret";
        if (pacts.noTurrets) return "pact";
        if (!p.turrets.slice(0, p.unlockedSlots).includes(null)) return "slots-full";
        return p.gold < age.turrets[c.index].cost ? "gold" : null;
      case "sell":
        return p.turrets.some((t) => t !== null) ? null : "no-turret";
      case "slot":
        return p.unlockedSlots >= 4 ? "slots-full" : p.gold < p.unlockedSlots * 500 ? "gold" : null;
      case "upgrade":
        if (!["hp", "dmg", "econ"].includes(c.stat)) return "invalid-upgrade";
        return p.upgrades[c.stat] >= UPGRADE_COSTS.length ? "max-upgrade" : p.gold < UPGRADE_COSTS[p.upgrades[c.stat]] ? "gold" : null;
      case "evolve":
        return p.age >= AGES.length - 1 ? "max-age" : p.xp < age.evolveXP ? "xp" : null;
      case "special":
        if (pacts.noSpecials) return "pact";
        if (team === -1 && s.tick < s.restraintUntil) return "truce";
        return p.specialTimer > 0 ? "cooldown" : null;
      default:
        return "unknown-command";
    }
  }
  function applyCommand(s, team, c) {
    const error = commandError(s, team, c);
    if (error) return { ok: false, error };
    const p = side(s, team), age = AGES[p.age];
    const pay = (cost) => {
      p.gold -= cost;
      s.metrics.spent[team] += cost;
    };
    switch (c.type) {
      case "unit": {
        const data = age.units[c.index], hp = data.hp * multiplier(s, team, "hp");
        pay(data.cost);
        p.deployTimer = 0.4;
        const u = {
          ...data,
          id: s.nextId++,
          team,
          age: p.age,
          uType: c.index,
          x: team === 1 ? BASE_WIDTH : CANVAS_WIDTH - BASE_WIDTH,
          y: GROUND_Y,
          hp,
          maxHp: hp,
          attackCooldown: 0,
          drawProgress: 0,
          active: true,
          isAttacking: false,
          moving: true,
          animTimer: 0,
          animOffset: s.nextId * 17 % 100
        };
        s.units.push(u);
        s.metrics.spawned[team]++;
        emit(s, "spawn", { team, id: u.id, index: c.index, x: u.x, y: u.y, size: u.size });
        break;
      }
      case "turret": {
        const slot = p.turrets.findIndex((t, i) => t === null && i < p.unlockedSlots);
        pay(age.turrets[c.index].cost);
        p.turrets[slot] = c.index;
        p.turretProgress[slot] = 0;
        p.turretTimers[slot] = 0;
        break;
      }
      case "sell": {
        const i = p.turrets.findLastIndex((t) => t !== null);
        p.gold += age.turrets[p.turrets[i]].cost * 0.5;
        p.turrets[i] = null;
        p.turretTimers[i] = 0;
        break;
      }
      case "slot":
        pay(p.unlockedSlots * 500);
        p.unlockedSlots++;
        break;
      case "upgrade": {
        pay(UPGRADE_COSTS[p.upgrades[c.stat]]);
        p.upgrades[c.stat]++;
        if (c.stat === "hp") resizeBase(s, team);
        break;
      }
      case "evolve":
        p.age++;
        p.drawProgress = 0;
        resizeBase(s, team);
        p.gold += p.turrets.reduce((sum, t) => sum + (t === null ? 0 : age.turrets[t].cost * 0.5), 0);
        p.turrets.fill(null);
        p.turretTimers.fill(0);
        p.turretProgress.fill(1);
        s.metrics.evolutions.push({ tick: s.tick, team, age: p.age });
        emit(s, "evolve", { team, age: p.age });
        break;
      case "special": {
        p.specialTimer = age.special.cooldown;
        const targets = s.units.filter((u) => u.team !== team);
        const radius = p.age === 4 ? 150 : 300;
        const cluster = targets.map((u) => ({ x: u.x, value: targets.filter((v) => Math.abs(v.x - u.x) < radius).reduce((n, v) => n + v.cost, 0) })).sort((a, b) => b.value - a.value || (a.x - b.x) * team)[0];
        const x = cluster?.x ?? (team === 1 ? CANVAS_WIDTH - 300 : 300);
        s.specials.push({ id: s.nextId++, team, age: p.age, x, remaining: Math.round(age.special.duration * TICK_RATE), nextPulse: 0 });
        emit(s, "special", { team, age: p.age });
        break;
      }
    }
    emit(s, "command", { team, command: { ...c } });
    return { ok: true };
  }
  function resizeBase(s, team) {
    const p = side(s, team);
    const maxHp = AGES[p.age].baseHp * multiplier(s, team, "hp") * (team === -1 ? DIFFICULTY_SETTINGS[s.difficulty].baseHpMult : 1);
    p.hp += maxHp - p.maxHp;
    p.maxHp = maxHp;
  }

  // src/core/combat.js
  var baseX = (team) => team === 1 ? BASE_WIDTH : CANVAS_WIDTH - BASE_WIDTH;
  var separation = (a, b) => Math.round(Math.abs(a - b) * 1e6) / 1e6;
  var distance = (u, v) => Math.max(0, (v.x - u.x) * u.team - (u.size + v.size) / 2);
  function combatTick(s) {
    const hits = [], moves = [], shots = [];
    for (const team of [1, -1]) {
      const allies = s.units.filter((u) => u.team === team).sort((a, b) => (b.x - a.x) * team || a.id - b.id);
      const enemies = s.units.filter((u) => u.team !== team && u.drawProgress >= 0.8).sort((a, b) => (a.x - b.x) * team || a.id - b.id);
      let front = null;
      for (const u of allies) {
        u.attackCooldown = Math.max(0, u.attackCooldown - FIXED_DT);
        u.animTimer = Math.max(0, u.animTimer - FIXED_DT);
        if (u.drawProgress < 1) {
          u.drawProgress = Math.min(1, u.drawProgress + FIXED_DT * 2);
          front = u;
          continue;
        }
        const target = enemies.find((e) => (e.x - u.x) * team >= -(u.size + e.size) / 2);
        const targetIsBase = !target;
        const range = target ? distance(u, target) : Math.max(0, (baseX(-team) - u.x) * team - u.size / 2);
        u.isAttacking = range <= u.range + 1e-6;
        u.moving = !u.isAttacking;
        if (u.isAttacking) {
          if (u.siegeMultiplier && !targetIsBase) {
            const travel = Math.min(u.speed * FIXED_DT * 0.35, Math.max(0, range - 20));
            if (travel > 0) {
              moves.push([u, u.x + team * travel]);
              u.moving = true;
            }
          }
          if (s.metrics.firstContactTick === null) s.metrics.firstContactTick = s.tick;
          if (u.attackCooldown <= 1e-9) {
            u.attackCooldown = u.attackSpeed;
            u.animTimer = 0.3;
            const dmg = u.dmg * multiplier(s, team, "dmg");
            if (u.projType) shots.push({
              x: u.x,
              y: u.y - u.size * 0.7,
              targetX: target ? target.x : baseX(-team),
              targetY: target ? target.y - target.size / 2 : GROUND_Y - 40,
              type: u.projType,
              speed: u.projSpeed,
              dmg: dmg * (targetIsBase ? u.siegeMultiplier || 1 : 1),
              team,
              targetId: target?.id ?? null,
              targetIsBase,
              splashRadius: u.splashRadius || 0
            });
            else {
              hits.push({ team, targetId: target?.id ?? null, dmg });
              emit(s, "melee", { team, x: u.x + team * u.size / 2, y: u.y - u.size / 2 });
            }
          }
        } else {
          let travel = Math.min(u.speed * FIXED_DT, Math.max(0, range - u.range));
          if (front && front.range <= u.range) travel = Math.min(travel, Math.max(0, (front.x - u.x) * team - (front.size + u.size) / 2 - 10));
          moves.push([u, Math.max(BASE_WIDTH, Math.min(CANVAS_WIDTH - BASE_WIDTH, u.x + team * travel))]);
          u.moving = travel > 0;
        }
        front = u;
      }
      const owner = side(s, team);
      for (let i = 0; i < owner.unlockedSlots; i++) {
        owner.turretTimers[i] = Math.max(0, owner.turretTimers[i] - FIXED_DT);
        if (owner.turrets[i] === null || owner.turretProgress[i] < 1 || owner.turretTimers[i] > 1e-9) continue;
        const data = AGES[owner.age].turrets[owner.turrets[i]], x = baseX(team) - team * 10;
        const target = enemies.find((e) => Math.abs(e.x - x) <= data.range + 1e-6);
        if (target) {
          shots.push({
            x,
            y: GROUND_Y - 150 - i * 90,
            targetX: target.x,
            targetY: target.y - target.size / 2,
            type: data.projType,
            speed: data.projSpeed,
            dmg: data.dmg * multiplier(s, team, "dmg"),
            team,
            targetId: target.id,
            targetIsBase: false
          });
          owner.turretTimers[i] = data.attackSpeed;
        }
      }
    }
    for (const [u, x] of moves) u.x = Math.round(x * 1e6) / 1e6;
    for (const shot of shots) launch(s, shot);
    specialTick(s, hits);
    projectileTick(s, hits);
    for (const hit of hits) {
      const target = hit.targetId === null ? side(s, -hit.team) : s.units.find((u) => u.id === hit.targetId);
      if (!target) continue;
      s.metrics.damage[hit.team] += Math.min(Math.max(0, target.hp), hit.dmg);
      target.hp -= hit.dmg;
      emit(s, "damage", {
        team: hit.team,
        targetId: hit.targetId,
        amount: hit.dmg,
        x: target.x ?? baseX(-hit.team),
        y: target.y ? target.y - target.size / 2 : GROUND_Y - 100
      });
    }
    const config = DIFFICULTY_SETTINGS[s.difficulty];
    for (const u of s.units) {
      if (u.hp > 0) continue;
      const winner = side(s, -u.team), loser = side(s, u.team);
      winner.gold += u.killGold * (u.team === 1 ? config.econMult : 1);
      winner.xp += u.killXp * (u.team === 1 ? config.xpMult : 1);
      loser.xp += u.killXp * 0.5 * (u.team === -1 ? config.xpMult : 1);
      s.metrics.kills[-u.team]++;
      emit(s, "death", { team: u.team, id: u.id, x: u.x, y: u.y, size: u.size, gold: u.killGold, xp: u.killXp });
    }
    s.units = s.units.filter((u) => u.hp > 0);
    s.metrics.peakUnits = Math.max(s.metrics.peakUnits, s.units.length);
    if (s.player.hp <= 0 || s.enemy.hp <= 0) {
      s.player.hp = Math.max(0, s.player.hp);
      s.enemy.hp = Math.max(0, s.enemy.hp);
      s.winner = s.player.hp === 0 && s.enemy.hp === 0 ? 0 : s.enemy.hp === 0 ? 1 : -1;
      s.running = false;
      emit(s, "end", { winner: s.winner });
    }
  }
  function launch(s, shot) {
    const dx = shot.targetX - shot.x, dy = shot.targetY - shot.y;
    const beam = shot.type === "laser";
    const arc = ["arc", "meteor", "arrow", "cannonball"].includes(shot.type);
    const seconds = beam ? FIXED_DT : Math.max(FIXED_DT, (arc ? Math.abs(dx) : Math.hypot(dx, dy)) / shot.speed);
    const flightTicks = Math.max(1, Math.ceil(seconds * TICK_RATE - 1e-8));
    s.projectiles.push({
      ...shot,
      id: s.nextId++,
      startX: shot.x,
      startY: shot.y,
      flightTicks,
      elapsed: 0,
      vx: dx / seconds,
      vy: dy / seconds - (arc ? 400 * seconds : 0),
      arc,
      active: true,
      isSpecial: !!shot.isSpecial,
      hit: false,
      life: beam ? 0.25 : 0,
      trailX: [],
      trailY: [],
      trailCount: 0
    });
  }
  function projectileTick(s, hits) {
    for (const p of s.projectiles) {
      p.elapsed++;
      if (p.hit) {
        p.life -= FIXED_DT;
        p.active = p.life > 0;
        continue;
      }
      p.trailX.unshift(p.x);
      p.trailY.unshift(p.y);
      p.trailX.length = Math.min(10, p.trailX.length);
      p.trailY.length = p.trailX.length;
      p.trailCount = p.trailX.length;
      const t = Math.min(1, p.elapsed / p.flightTicks), duration = p.flightTicks / TICK_RATE;
      p.x = p.startX + (p.targetX - p.startX) * t;
      p.y = p.startY + (p.targetY - p.startY) * t - (p.arc ? 400 * duration * duration * t * (1 - t) : 0);
      if (t < 1) continue;
      if (p.isSpecial) {
        for (const u of s.units) if (u.team !== p.team && Math.abs(u.x - p.x) < p.radius) hits.push({ team: p.team, targetId: u.id, dmg: p.dmg });
        emit(s, "impact", { x: p.x, y: p.y, type: p.type });
      } else if (p.targetIsBase) hits.push({ team: p.team, targetId: null, dmg: p.dmg });
      else {
        const target = s.units.find((u) => u.id === p.targetId);
        if (target && separation(target.x, p.targetX) <= target.size + 20) {
          const direct = p.splashRadius && target.uType === 0 ? p.dmg * 0.5 : p.dmg;
          hits.push({ team: p.team, targetId: target.id, dmg: direct });
          if (p.splashRadius) {
            const nearby = s.units.filter((u) => u.team !== p.team && u.id !== target.id && separation(u.x, target.x) < p.splashRadius).sort((a, b) => separation(a.x, target.x) - separation(b.x, target.x) || a.id - b.id).slice(0, 2);
            for (const u of nearby) hits.push({ team: p.team, targetId: u.id, dmg: p.dmg * 0.35 * (u.uType === 0 ? 0.5 : 1) });
            if (separation(baseX(-p.team), target.x) < p.splashRadius) hits.push({ team: p.team, targetId: null, dmg: p.dmg * 0.35 });
          }
        }
      }
      p.hit = true;
      p.active = p.type === "laser";
    }
    s.projectiles = s.projectiles.filter((p) => p.active);
  }
  function specialTick(s, hits) {
    for (const sp of s.specials) {
      const data = AGES[sp.age].special, owner = side(s, sp.team);
      const cx = sp.x;
      if (data.type === "laser" || data.type === "orbital") {
        const radius = data.type === "laser" ? 150 : 300, dmg = (data.type === "laser" ? 800 : 2500) * FIXED_DT;
        for (const u of s.units) if (u.team !== sp.team && Math.abs(u.x - cx) < radius) hits.push({ team: sp.team, targetId: u.id, dmg });
      } else {
        sp.nextPulse--;
        if (sp.nextPulse <= 0) {
          const profiles = {
            meteor: [8, 150, 150, "meteor", 800],
            arrows: [30, 40, 60, "arrow", 1e3],
            cannons: [6, 300, 120, "cannonball", 1200],
            airstrike: [8, 400, 120, "bombDrop", 800]
          };
          const [rate, dmg, radius, type, speed] = profiles[data.type];
          sp.nextPulse += TICK_RATE / rate;
          const position = BASE_WIDTH + 50 + random(owner) * (CANVAS_WIDTH - BASE_WIDTH - 50);
          const x = sp.team === 1 ? position : CANVAS_WIDTH - position;
          launch(s, {
            x: type === "bombDrop" ? x : x - sp.team * 200,
            y: -50,
            targetX: x,
            targetY: GROUND_Y,
            team: sp.team,
            type,
            speed,
            dmg,
            radius,
            targetId: null,
            targetIsBase: false,
            isSpecial: true
          });
        }
      }
      sp.remaining--;
    }
    s.specials = s.specials.filter((sp) => sp.remaining > 0);
  }

  // src/core/opponent.js
  function chooseAction(s, team = -1, style = "adaptive") {
    const own = side(s, team), enemy = side(s, -team), age = AGES[own.age];
    const ours = s.units.filter((u) => u.team === team), theirs = s.units.filter((u) => u.team !== team);
    const x = team === 1 ? BASE_WIDTH : CANVAS_WIDTH - BASE_WIDTH;
    const threats = theirs.filter((u) => Math.abs(u.x - x) < 500);
    const danger = theirs.filter((u) => Math.abs(u.x - x) < 320);
    const legal = (c) => !commandError(s, team, c);
    const evolve = { type: "evolve" };
    if (legal(evolve)) return evolve;
    const special = { type: "special" };
    if (style !== "passive" && legal(special) && (theirs.length >= 3 || danger.length > 0 && own.hp < own.maxHp * 0.4)) return special;
    if (style === "passive") return null;
    const candidates = [];
    const add = (command2, score) => {
      if (legal(command2)) candidates.push({ command: command2, score });
      else if (command2.type === "unit" && command2.index > 0 && commandError(s, team, command2) === "gold" && danger.length === 0 && ours.length >= 1)
        candidates.push({ command: null, score });
    };
    const front = ours.filter((u) => u.type !== "ranged").length;
    const ranged = ours.filter((u) => u.type === "ranged").length;
    const incomingRanged = theirs.filter((u) => u.type === "ranged").length;
    const emotion = team === -1 ? s.opponent.emotion.toLowerCase() : "centered";
    const aggressive = /angry|furious|brave|confident|excited|eager/.test(emotion);
    const cautious = /afraid|anxious|worried|scared|tense|sad|weary/.test(emotion);
    for (let i = 0; i < age.units.length; i++) {
      const u = age.units[i];
      let score = 2;
      if (style === "melee") score += i === 0 ? 10 : -10;
      else if (style === "ranged") score += i === 1 ? 10 : -10;
      else if (style === "heavy") score += i === 2 ? 10 : -10;
      else if (style === "mixed") score += i === s.metrics.spawned[team] % 3 ? 5 : 0;
      else {
        if (u.type === "ranged") score += front > 0 ? 3 : -0.5;
        else score += front === 0 ? 3 : 0;
        if (i === 2) score += incomingRanged > 1 ? 2 : 0.5;
        if (i === 2 && enemy.turrets.some((t) => t !== null)) score += 3;
        if (i === 2 && theirs.length >= 3 && ours.filter((u2) => u2.uType === 2).length < 2) score += 3;
        if (aggressive && i === 2) score += 0.5;
        if (cautious && i === 0) score += 0.5;
        if (u.type === "ranged" && ranged >= Math.max(2, front * 2)) score -= 3;
        if (i === 0 && front > Math.max(2, ranged)) score -= 2;
        score += Math.min(1, u.hp * u.dmg / u.attackSpeed / (u.cost * u.cost));
      }
      if (style === "heavy" && i !== 2 && threats.length < 2) continue;
      if (style === "melee" && i !== 0 || style === "ranged" && i !== 1) continue;
      add({ type: "unit", index: i }, score);
    }
    if (style === "adaptive" || style === "turtle" || style === "mixed") {
      if (danger.length >= 2 || style === "turtle") {
        for (let i = 0; i < age.turrets.length; i++) add({ type: "turret", index: i }, 3 + threats.length * 0.7 + (style === "turtle" ? 5 : 0) + i * 0.1);
        if (own.turrets.every((t, i) => i >= own.unlockedSlots || t !== null)) add({ type: "slot" }, style === "turtle" ? 6 : threats.length > 4 ? 4 : 0);
      }
      if (ours.length >= 1 || own.gold >= age.units[2].cost * 2) {
        for (const stat of ["econ", "dmg", "hp"]) {
          const level = own.upgrades[stat], cost = UPGRADE_COSTS[level];
          if (own.gold >= cost + age.units[0].cost * 0.25) add({ type: "upgrade", stat }, stat === "econ" ? threats.length < 2 ? 5 : 2 : 5.5);
        }
      }
    }
    candidates.sort((a, b) => b.score - a.score);
    return candidates[0]?.command ?? null;
  }
  function opponentTick(s) {
    if (!s.opponent.enabled || s.tick < s.opponent.nextTick) return;
    const config = DIFFICULTY_SETTINGS[s.difficulty];
    s.opponent.nextTick = s.tick + Math.max(1, Math.round(config.thinkRate * TICK_RATE));
    const command2 = chooseAction(s);
    if (command2 && applyCommand(s, -1, command2).ok) {
      s.opponent.lastAction = command2.type;
      s.opponent.order = command2.type === "turret" ? "defend" : command2.type === "evolve" ? "tech" : command2.type === "special" ? "special" : "counter";
    } else s.opponent.order = "hold";
  }

  // src/core/engine.js
  function step(s) {
    if (!s.running || s.paused) return false;
    s.tick++;
    for (const team of [1, -1]) {
      const p = side(s, team);
      p.gold += income(s, team) * FIXED_DT;
      if (p.age < AGES.length - 1) {
        const previous = p.age ? AGES[p.age - 1].evolveXP : 0;
        p.xp += (AGES[p.age].evolveXP - previous) / 110 * FIXED_DT * (team === -1 ? DIFFICULTY_SETTINGS[s.difficulty].xpMult : 1);
      }
      p.specialTimer = Math.max(0, p.specialTimer - FIXED_DT);
      p.deployTimer = Math.max(0, p.deployTimer - FIXED_DT);
      p.drawProgress = Math.min(1, p.drawProgress + FIXED_DT * 0.3);
      for (let i = 0; i < 4; i++) p.turretProgress[i] = Math.min(1, p.turretProgress[i] + FIXED_DT * 0.5);
    }
    opponentTick(s);
    combatTick(s);
    return true;
  }

  // src/sdk/session.js
  function boundedInteger(value, min, max, label) {
    if (!Number.isSafeInteger(value) || value < min || value > max) throw new Error(`Invalid ${label}`);
  }
  function cleanCommand(c) {
    if (!c || typeof c !== "object" || Array.isArray(c)) throw new Error("Invalid command");
    const fields = { unit: ["index"], turret: ["index"], upgrade: ["stat"], sell: [], slot: [], evolve: [], special: [] };
    if (!Object.hasOwn(fields, c.type)) throw new Error("Unknown command type");
    if (Object.keys(c).some((k) => k !== "type" && !fields[c.type].includes(k))) throw new Error("Unknown command field");
    return structuredClone(c);
  }
  function canonical(value) {
    if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
    if (value && typeof value === "object") return `{${Object.keys(value).sort().map((k) => `${JSON.stringify(k)}:${canonical(value[k])}`).join(",")}}`;
    return JSON.stringify(value);
  }
  function digest(value) {
    let hash = 2166136261;
    for (const char of canonical(value)) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
    return (hash >>> 0).toString(16).padStart(8, "0");
  }
  var Session = class _Session {
    #state;
    #options;
    #log = [];
    #receipts = /* @__PURE__ */ new Map();
    constructor(options = {}) {
      if (!options || typeof options !== "object" || Array.isArray(options)) throw new Error("Invalid options");
      if (Object.keys(options).some((k) => !["seed", "difficulty", "startAge", "opponent"].includes(k))) throw new Error("Unknown option");
      this.#state = createState(options);
      this.#options = { seed: this.#state.seed, difficulty: this.#state.difficulty, startAge: this.#state.player.age, opponent: this.#state.opponent.enabled };
    }
    observe() {
      const observation = structuredClone(this.#state);
      observation.events = [];
      return observation;
    }
    get tick() {
      return this.#state.tick;
    }
    get running() {
      return this.#state.running;
    }
    get paused() {
      return this.#state.paused;
    }
    get winner() {
      return this.#state.winner;
    }
    legal(team, command2) {
      return !commandError(this.#state, team, cleanCommand(command2));
    }
    decide(team = 1, style = "adaptive") {
      if (![1, -1].includes(team) || !["adaptive", "mixed", "melee", "ranged", "heavy", "turtle", "passive"].includes(style)) throw new Error("Invalid policy");
      return chooseAction(this.#state, team, style);
    }
    command(team, command2, requestId) {
      const c = cleanCommand(command2);
      return this.#once(requestId, { team, command: c }, () => {
        const result = applyCommand(this.#state, team, c);
        if (result.ok) this.#record("command", { team, command: c });
        return result;
      });
    }
    client(team) {
      if (team !== 1 && team !== -1) throw new Error("Invalid team");
      return Object.freeze({ observe: () => this.observe(), command: (c, id) => this.command(team, c, id), legal: (c) => this.legal(team, c) });
    }
    advance(ticks, { events = true } = {}) {
      boundedInteger(ticks, 0, 36e3, "tick count");
      const output = events ? this.#state.events.splice(0) : [];
      this.#state.events.length = 0;
      for (let i = 0; i < ticks; i++) {
        if (!step(this.#state)) break;
        if (events) output.push(...this.#state.events);
        this.#state.events.length = 0;
      }
      return { tick: this.tick, events: output, running: this.running };
    }
    advanceOnce(requestId, ticks) {
      return this.#once(requestId, { advance: ticks }, () => this.advance(ticks));
    }
    pause(paused) {
      if (typeof paused !== "boolean") throw new Error("Invalid pause");
      this.#state.paused = paused;
      this.#record("pause", { paused });
    }
    agreements(value) {
      if (!value || typeof value !== "object" || Array.isArray(value) || Object.keys(value).some((k) => !["noSpecials", "noTurrets", "meleeOnly"].includes(k) || typeof value[k] !== "boolean")) throw new Error("Invalid agreements");
      Object.assign(this.#state.agreements, value);
      this.#record("agreements", { value: structuredClone(value) });
    }
    truce(seconds) {
      boundedInteger(seconds, 0, 300, "truce");
      this.#state.restraintUntil = seconds ? Math.max(this.#state.restraintUntil, this.tick + seconds * TICK_RATE) : 0;
      this.#record("truce", { seconds });
    }
    emotion(word) {
      if (typeof word !== "string" || !word.trim() || word.length > 80) throw new Error("Invalid emotion");
      this.#state.opponent.emotion = word.trim();
      this.#record("emotion", { word: word.trim() });
    }
    #record(type, data) {
      this.#log.push({ tick: this.tick, type, ...data });
    }
    #once(id, input, operation) {
      if (id === void 0) return operation();
      if (typeof id !== "string" || !id || id.length > 128) throw new Error("Invalid request id");
      const fingerprint = canonical(input), old = this.#receipts.get(id);
      if (old) {
        if (old.fingerprint !== fingerprint) throw new Error("Request id conflict");
        return structuredClone(old.result);
      }
      if (this.#receipts.size >= 1e4) throw new Error("Request receipt limit reached; start a new session");
      const result = operation();
      this.#receipts.set(id, { fingerprint, result: structuredClone(result) });
      return result;
    }
    digest() {
      return digest(this.observe());
    }
    replay() {
      return { version: RULES_VERSION, options: structuredClone(this.#options), ticks: this.tick, entries: structuredClone(this.#log), digest: this.digest() };
    }
    checkpoint() {
      return { replay: this.replay(), receipts: structuredClone([...this.#receipts]) };
    }
    static restore(checkpoint) {
      if (!checkpoint || !Array.isArray(checkpoint.receipts) || checkpoint.receipts.length > 1e4) throw new Error("Invalid checkpoint");
      const session = _Session.fromReplay(checkpoint.replay);
      session.#receipts = new Map(structuredClone(checkpoint.receipts));
      return session;
    }
    static fromReplay(replay) {
      if (!replay || replay.version !== RULES_VERSION || !Array.isArray(replay.entries) || replay.entries.length > 25e4) throw new Error("Unsupported replay");
      boundedInteger(replay.ticks, 0, 5184e3, "replay duration");
      const session = new _Session(replay.options);
      const advanceTo = (tick) => {
        boundedInteger(tick, session.tick, replay.ticks, "entry tick");
        while (session.tick < tick) {
          const before = session.tick;
          session.advance(Math.min(36e3, tick - before), { events: false });
          if (session.tick === before) throw new Error("Replay advances a paused or ended match");
        }
      };
      for (const entry of replay.entries) {
        advanceTo(entry.tick);
        switch (entry.type) {
          case "command":
            if (!session.command(entry.team, entry.command).ok) throw new Error("Illegal replay command");
            break;
          case "pause":
            session.pause(entry.paused);
            break;
          case "agreements":
            session.agreements(entry.value);
            break;
          case "truce":
            session.truce(entry.seconds);
            break;
          case "emotion":
            session.emotion(entry.word);
            break;
          default:
            throw new Error("Unknown replay entry");
        }
      }
      advanceTo(replay.ticks);
      if (session.digest() !== replay.digest) throw new Error("Replay digest mismatch");
      return session;
    }
  };

  // src/client/palette.js
  var COLORS = {
    pencil: "hsl(25, 15%, 25%)",
    pencilLight: "hsl(25, 10%, 55%)",
    accent: "hsl(18, 60%, 55%)",
    destructive: "hsl(0, 65%, 50%)",
    gold: "#b8860b",
    blue: "hsl(200, 45%, 55%)",
    green: "hsl(120, 40%, 40%)",
    fire: "hsl(15, 80%, 60%)",
    darkVoid: "hsl(260, 40%, 20%)"
  };

  // src/client/storage.js
  function createStorage(runtime2) {
    const StorageManager = {
      key: "aow_sketch_progress",
      data: { beaten: [] },
      init() {
        try {
          let stored = localStorage.getItem(this.key);
          if (stored) this.data = JSON.parse(stored);
        } catch (e) {
          console.warn("Local storage blocked");
        }
        if (!this.data || !Array.isArray(this.data.beaten)) this.data = { beaten: [] };
        this.updateUI();
      },
      saveWin(diffKey) {
        if (!this.data.beaten.includes(diffKey)) {
          this.data.beaten.push(diffKey);
          try {
            localStorage.setItem(this.key, JSON.stringify(this.data));
          } catch (e) {
          }
        }
      },
      updateUI() {
        ["normal", "hard", "harder", "impossible"].forEach((d) => {
          if (this.data.beaten.includes(d)) {
            let btn = document.getElementById(`diff-btn-${d}`);
            if (btn) btn.classList.add("beaten");
          }
        });
      }
    };
    const DIRECTOR_AGREEMENT_DEFAULTS = Object.freeze({
      noSpecials: false,
      noTurrets: false,
      meleeOnly: false
    });
    const GEMMA_FIXED_INPUT_PACTS = Object.freeze(["pressure: rush"]);
    function directorAgreementDefaults() {
      return Object.assign({}, DIRECTOR_AGREEMENT_DEFAULTS);
    }
    function gemmaInputPacts() {
      return GEMMA_FIXED_INPUT_PACTS.concat(DirectorMemory.tags());
    }
    const DirectorMemory = {
      key: "aow_sketch_director_memory_v1",
      data: {
        notes: [],
        agreements: directorAgreementDefaults()
      },
      init() {
        let migrated = false;
        try {
          let stored = localStorage.getItem(this.key);
          if (stored) {
            let parsed = JSON.parse(stored);
            this.data.notes = Array.isArray(parsed.notes) ? parsed.notes.slice(-8) : [];
            this.data.agreements = this.normalizeAgreements(parsed.agreements);
            migrated = !!(parsed.agreements && Object.prototype.hasOwnProperty.call(parsed.agreements, "pressure"));
          }
        } catch (e) {
          console.warn("Director memory blocked");
        }
        this.data.agreements = this.normalizeAgreements(this.data.agreements);
        if (migrated) this.save();
      },
      save() {
        runtime2.session?.agreements(this.data.agreements);
        try {
          localStorage.setItem(this.key, JSON.stringify(this.data));
        } catch (e) {
        }
      },
      normalizeAgreements(value) {
        let source = value && typeof value === "object" ? value : {};
        let clean = directorAgreementDefaults();
        Object.keys(clean).forEach((key) => {
          clean[key] = !!source[key];
        });
        return clean;
      },
      setAgreement(key, value) {
        if (!Object.prototype.hasOwnProperty.call(DIRECTOR_AGREEMENT_DEFAULTS, key)) return;
        this.data.agreements[key] = !!value;
        this.save();
      },
      clearAgreement(key) {
        if (Object.prototype.hasOwnProperty.call(this.data.agreements, key)) this.data.agreements[key] = false;
        this.save();
      },
      addNote(note) {
        let clean = String(note || "").trim().slice(0, 90);
        if (!clean) return;
        this.data.notes = this.data.notes.filter((n) => n.toLowerCase() !== clean.toLowerCase());
        this.data.notes.push(clean);
        this.data.notes = this.data.notes.slice(-8);
        this.save();
      },
      removeNote(index) {
        let idx = Math.max(0, Math.floor(Number(index) || 0));
        if (idx >= this.data.notes.length) return;
        this.data.notes.splice(idx, 1);
        this.save();
      },
      clear() {
        this.data = {
          notes: [],
          agreements: directorAgreementDefaults()
        };
        this.save();
      },
      agreementItems() {
        let a = this.data.agreements;
        let items = [];
        if (a.noSpecials) items.push({ key: "noSpecials", label: "no specials" });
        if (a.noTurrets) items.push({ key: "noTurrets", label: "no turrets" });
        if (a.meleeOnly) items.push({ key: "meleeOnly", label: "melee only" });
        this.data.notes.forEach((note, index) => items.push({ key: `note:${index}`, label: `note: ${note}` }));
        return items;
      },
      inputAgreementTags() {
        return this.agreementItems().map((item) => item.label);
      },
      tags() {
        let a = this.data.agreements;
        let tags = [];
        if (a.noSpecials) tags.push("no specials");
        if (a.noTurrets) tags.push("no turrets");
        if (a.meleeOnly) tags.push("melee only");
        this.data.notes.forEach((note) => tags.push(`note: ${note}`));
        return tags;
      }
    };
    return { StorageManager, DirectorMemory, gemmaInputPacts };
  }

  // src/client/ui.js
  function createUI(runtime2) {
    const UIManager = {
      els: {},
      state: {},
      init() {
        const idList = [
          "ui-gold",
          "ui-xp",
          "ui-income",
          "age-title",
          "btn-special",
          "cost-special",
          "btn-evolve",
          "cost-evolve",
          "tab-units",
          "tab-turrets",
          "tab-upgrades",
          "player-hp-fill",
          "enemy-hp-fill",
          "player-hp-text",
          "enemy-hp-text",
          "btn-sell",
          "btn-slot",
          "cost-slot",
          "diff-badge"
        ];
        for (let i = 1; i <= 3; i++) {
          idList.push(`name-u${i}`, `cost-u${i}`, `btn-u${i}`, `name-t${i}`, `cost-t${i}`, `btn-t${i}`);
        }
        ["dmg", "hp", "econ"].forEach((t) => idList.push(`btn-up-${t}`, `val-up-${t}`, `cost-up-${t}`));
        idList.forEach((id) => {
          let el = document.getElementById(id);
          if (el) this.els[id] = el;
        });
        this.els.menuUnits = document.querySelectorAll(".menu-unit");
        this.els.menuTurrets = document.querySelectorAll(".menu-turret");
        this.els.menuUpgrades = document.querySelectorAll(".menu-upgrade");
      },
      setText(id, val) {
        if (this.els[id] && this.state[id] !== val) {
          this.els[id].innerText = val;
          this.state[id] = val;
        }
      },
      setDisabled(id, val) {
        let key = id + "_dis";
        if (this.els[id] && this.state[key] !== val) {
          this.els[id].disabled = val;
          this.state[key] = val;
        }
      },
      setWidth(id, val) {
        let key = id + "_w";
        if (this.els[id] && this.state[key] !== val) {
          this.els[id].style.width = val;
          this.state[key] = val;
        }
      },
      setHtml(id, val) {
        let key = id + "_h";
        if (this.els[id] && this.state[key] !== val) {
          this.els[id].innerHTML = val;
          this.state[key] = val;
        }
      },
      toggleClass(group, condition, className) {
        let key = group + "_cls";
        if (this.state[key] !== condition) {
          this.els[group].forEach((el) => el.classList.toggle(className, condition));
          this.state[key] = condition;
        }
      }
    };
    const TooltipManager = {
      el: document.getElementById("tooltip"),
      title: document.getElementById("tt-title"),
      stats: document.getElementById("tt-stats-container"),
      desc: document.getElementById("tt-desc"),
      finePointerQuery: window.matchMedia ? window.matchMedia("(hover: hover) and (pointer: fine)") : null,
      init() {
        document.querySelectorAll("[data-type]").forEach((btn) => {
          btn.addEventListener("mouseenter", (e) => {
            if (this.usesHoverTooltip()) this.show(btn, e);
          });
          btn.addEventListener("mouseleave", () => this.hide());
          btn.addEventListener("mousemove", (e) => {
            if (this.usesHoverTooltip()) this.move(e);
          });
          btn.addEventListener("pointerdown", (e) => {
            if (!this.usesHoverTooltip() || e.pointerType !== "mouse") this.flash(btn);
          });
        });
      },
      usesHoverTooltip() {
        return !!(this.finePointerQuery && this.finePointerQuery.matches);
      },
      show(btn, e) {
        let info = this.readInfo(btn);
        if (!info) return;
        this.title.innerText = info.title;
        this.desc.innerText = info.desc || "";
        let html = "";
        for (let i = 0; i < info.stats.length; i++) {
          html += `<div class="tt-stat"><span>${info.stats[i].label}:</span> <strong>${info.stats[i].value}</strong></div>`;
        }
        this.stats.innerHTML = html;
        this.el.classList.add("visible");
        this.move(e);
      },
      hide() {
        this.el.classList.remove("visible");
      },
      flash(btn) {
        let info = this.readInfo(btn);
        if (!info || !runtime2.gameState.floatingTexts) return;
        this.hide();
        let point = this.canvasAnchor(btn);
        runtime2.spawnCanvasText(info.title, point.x, point.y, info.color || runtime2.COLORS.pencil, {
          life: 1.25,
          size: 24,
          grow: 4,
          rise: 28,
          stroke: true
        });
        runtime2.spawnCanvasText(info.shortStats, point.x, point.y + 26, runtime2.COLORS.pencil, {
          life: 1.15,
          size: 17,
          grow: 2,
          rise: 24,
          stroke: true
        });
      },
      readInfo(btn) {
        if (!runtime2.gameState.player) return null;
        let type = btn.getAttribute("data-type");
        let idx = parseInt(btn.getAttribute("data-idx"), 10);
        let pAge = runtime2.gameState.player.age;
        let data = null;
        if (type === "unit") {
          data = AGES[pAge].units[idx];
          if (!data) return null;
          return {
            title: data.name,
            desc: data.desc || "",
            color: runtime2.COLORS.accent,
            shortStats: `${data.cost}g  HP ${data.hp}  DMG ${data.dmg}  ${data.type}`,
            stats: [
              { label: "Cost", value: `${data.cost}g` },
              { label: "Health", value: data.hp },
              { label: "Damage", value: data.dmg },
              { label: "Type", value: data.type }
            ]
          };
        }
        if (type === "turret") {
          data = AGES[pAge].turrets[idx];
          if (!data) return null;
          return {
            title: data.name,
            desc: data.desc || "",
            color: runtime2.COLORS.blue,
            shortStats: `${data.cost}g  DMG ${data.dmg}  RNG ${data.range}  ${data.attackSpeed}s`,
            stats: [
              { label: "Cost", value: `${data.cost}g` },
              { label: "Damage", value: data.dmg },
              { label: "Fire Rate", value: `${data.attackSpeed}s` },
              { label: "Range", value: data.range }
            ]
          };
        }
        if (type === "upgrade") {
          let upgradeType = btn.getAttribute("data-upgrade");
          let info = runtime2.UPGRADE_INFO[upgradeType];
          if (!info) return null;
          let level = runtime2.gameState.player.upgrades[upgradeType] || 0;
          let cost = level < UPGRADE_COSTS.length ? `${UPGRADE_COSTS[level]}g` : "MAX";
          return {
            title: info.title,
            desc: info.stat,
            color: info.color,
            shortStats: `Lvl ${level}  ${cost}  ${info.compact}`,
            stats: [
              { label: "Level", value: level },
              { label: "Cost", value: cost },
              { label: "Effect", value: info.stat }
            ]
          };
        }
        return null;
      },
      canvasAnchor(btn) {
        let wrapper = document.getElementById("aspect-wrapper");
        let wrapperRect = wrapper.getBoundingClientRect();
        let btnRect = btn.getBoundingClientRect();
        let x = (btnRect.left + btnRect.width / 2 - wrapperRect.left) / wrapperRect.width * CANVAS_WIDTH;
        let y = (btnRect.top - wrapperRect.top) / wrapperRect.height * CANVAS_HEIGHT;
        return {
          x: this.clamp(x, 260, CANVAS_WIDTH - 260),
          y: this.clamp(y + 220, 320, GROUND_Y - 150)
        };
      },
      move(e) {
        if (!this.el.classList.contains("visible")) return;
        const rect = document.getElementById("aspect-wrapper").getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        if (y < this.el.offsetHeight + 20) {
          y = this.el.offsetHeight + 20;
        }
        this.el.style.left = `${x}px`;
        this.el.style.top = `${y - this.el.offsetHeight - 15}px`;
      },
      clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }
    };
    return { UIManager, TooltipManager };
  }

  // src/client/watercolor.js
  function createWatercolor(runtime2) {
    const WatercolorEngine = {
      canvases: [],
      generateAll() {
        return new Promise((resolve) => {
          let index = 0;
          const bar = document.getElementById("loading-bar");
          const step2 = () => {
            if (index < AGES.length) {
              this.canvases.push(this.renderWash(index));
              if (bar) bar.style.width = `${(index + 1) / AGES.length * 100}%`;
              index++;
              requestAnimationFrame(step2);
            } else {
              resolve();
            }
          };
          step2();
        });
      },
      renderWash(ageIndex) {
        const wc = document.createElement("canvas");
        wc.width = CANVAS_WIDTH;
        wc.height = CANVAS_HEIGHT;
        const xctx = wc.getContext("2d");
        xctx.globalCompositeOperation = "source-over";
        const theme = AGES[ageIndex].theme;
        let hslBg = `hsl(${theme.bg})`;
        let hslAcc = `hsl(${theme.accent})`;
        for (let i = 0; i < 45; i++) {
          let isCorner = Math.random() > 0.3;
          let cx = isCorner ? Math.random() > 0.5 ? Math.random() * 400 : CANVAS_WIDTH - Math.random() * 400 : Math.random() * CANVAS_WIDTH;
          let cy = isCorner ? Math.random() > 0.5 ? Math.random() * 300 : CANVAS_HEIGHT - Math.random() * 300 : Math.random() * CANVAS_HEIGHT;
          let radius = 100 + Math.random() * 250;
          this.drawWatercolorBlob(xctx, cx, cy, radius, hslBg, 0.08);
          if (Math.random() < 0.25) {
            this.drawWatercolorBlob(xctx, cx, cy, radius * 0.6, hslAcc, 0.04);
          }
        }
        for (let i = 0; i < 15; i++) {
          this.drawWatercolorBlob(xctx, Math.random() * CANVAS_WIDTH, GROUND_Y - 100 + Math.random() * 200, 200 + Math.random() * 400, hslBg, 0.04);
        }
        return wc;
      },
      drawWatercolorBlob(ctx, x, y, r, color, alpha) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        const points = 14;
        for (let i = 0; i <= points; i++) {
          let angle = i / points * Math.PI * 2;
          let radiusVariation = r + (Math.random() - 0.5) * r * 0.4;
          let px = x + Math.cos(angle) * radiusVariation;
          let py = y + Math.sin(angle) * radiusVariation;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.bezierCurveTo(x + Math.cos(angle - 0.2) * radiusVariation, y + Math.sin(angle - 0.2) * radiusVariation, px, py, px, py);
        }
        ctx.fill();
        ctx.lineWidth = 1.5 + Math.random() * 2;
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha * 1.5;
        ctx.stroke();
        ctx.restore();
      }
    };
    return { WatercolorEngine };
  }

  // src/client/gemma.js
  function createGemma(runtime2) {
    const LOCAL_GEMMA_IMAGE_INPUT_ENABLED = true;
    const GemmaMemory = {
      key: "aow_sketch_gemma_memory_v1",
      version: 6,
      maxRecentTurns: 6,
      maxActions: 10,
      maxEvents: 12,
      data: null,
      init() {
        let stored = null;
        try {
          let raw = localStorage.getItem(this.key);
          if (raw) stored = JSON.parse(raw);
        } catch (e) {
        }
        this.data = this.normalizeData(stored);
        this.save();
        this.updateInputSuggestion();
      },
      freshData(diffKey) {
        return {
          version: this.version,
          matchId: "",
          difficulty: diffKey || "normal",
          emotion: "Centered",
          emotionHistory: [],
          openLoops: [],
          recentTurns: [],
          actionLedger: [],
          eventLog: [],
          turnCount: 0
        };
      },
      normalizeData(raw) {
        let diffKey = raw && typeof raw === "object" ? raw.difficulty || runtime2.currentDifficulty || "normal" : "normal";
        let data = this.freshData(diffKey);
        if (!raw || typeof raw !== "object") return data;
        data.matchId = this.cleanLine(raw.matchId, 80);
        data.emotion = normalizeGemmaEmotionWord(raw.emotion || data.emotion);
        data.emotionHistory = this.normalizeList(raw.emotionHistory, 8, 40).map((word) => normalizeGemmaEmotionWord(word)).filter(Boolean);
        data.openLoops = this.normalizeList(raw.openLoops, 5, 120);
        data.recentTurns = this.normalizeTurnList(raw.recentTurns);
        data.actionLedger = this.normalizeActionList(raw.actionLedger);
        data.eventLog = this.normalizeList(raw.eventLog, this.maxEvents, 180);
        data.turnCount = Number.isFinite(Number(raw.turnCount)) ? Math.max(0, Number(raw.turnCount)) : 0;
        return data;
      },
      normalizeList(value, maxItems, maxLen) {
        return (Array.isArray(value) ? value : []).map((item) => this.cleanLine(item, maxLen)).filter(Boolean).slice(-maxItems);
      },
      normalizeTurnList(value) {
        return (Array.isArray(value) ? value : []).map((turn) => ({
          role: turn && turn.role === "model" ? "model" : "player",
          time: Math.round(Number(turn && turn.time) || 0),
          ages: this.cleanLine(turn && turn.ages, 80),
          text: this.cleanLine(turn && turn.text, 180),
          action: this.cleanLine(turn && turn.action, 80),
          reason: this.cleanLine(turn && turn.reason, 90)
        })).filter((turn) => turn.text).slice(-this.maxRecentTurns);
      },
      normalizeActionList(value) {
        return (Array.isArray(value) ? value : []).map((action) => ({
          time: Math.round(Number(action && action.time) || 0),
          signal: this.cleanLine(action && action.signal, 40) || "none",
          applied: !!(action && action.applied),
          reason: this.cleanLine(action && action.reason, 90),
          say: this.cleanLine(action && action.say, 120)
        })).slice(-this.maxActions);
      },
      start(diffKey) {
        this.data = this.freshData(diffKey);
        this.data.matchId = `m${Date.now()}_${Math.floor(Math.random() * 1e4)}`;
        this.save();
        this.updateInputSuggestion();
      },
      clearAll() {
        this.data = this.freshData(runtime2.currentDifficulty);
        this.data.matchId = `m${Date.now()}_${Math.floor(Math.random() * 1e4)}`;
        this.data.emotion = "Centered";
        this.data.emotionHistory = [];
        this.save();
        this.updateInputSuggestion();
      },
      save() {
        try {
          localStorage.setItem(this.key, JSON.stringify(this.data));
        } catch (e) {
        }
      },
      cleanLine(value, maxLen = 180) {
        return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLen);
      },
      ageLine() {
        if (!runtime2.gameState || !runtime2.gameState.player || !runtime2.gameState.enemy) return "";
        return `${AGES[runtime2.gameState.player.age].name} vs ${AGES[runtime2.gameState.enemy.age].name}`;
      },
      pushTurn(entry) {
        if (!this.data) this.init();
        this.data.recentTurns.push(entry);
        while (this.data.recentTurns.length > this.maxRecentTurns) this.data.recentTurns.shift();
      },
      recordEvent(line) {
        if (!this.data) this.init();
        let clean = this.cleanLine(line, 180);
        if (!clean) return;
        this.data.eventLog.push(clean);
        this.data.eventLog = this.data.eventLog.slice(-this.maxEvents);
      },
      recordPlayer(text) {
        let clean = this.cleanLine(text, 160);
        if (!clean) return;
        this.pushTurn({ role: "player", time: Math.round(runtime2.globalTime), ages: this.ageLine(), text: clean });
        this.data.openLoops = this.data.openLoops.filter((loop) => !String(loop).startsWith("Answer player:"));
        this.data.openLoops.push(`Answer player: ${clean}`);
        this.data.openLoops = this.data.openLoops.slice(-5);
        this.recordEvent(`Player said: ${clean}`);
        this.save();
      },
      recordSystem(text) {
        let clean = this.cleanLine(text, 180);
        if (!clean) return;
        this.recordEvent(clean);
        this.save();
      },
      recordEmotion(result, outcome) {
        if (!this.data) this.init();
        let say = this.cleanLine(result && result.reply ? result.reply : "", 180);
        let action = outcome || {};
        let emotion = normalizeGemmaEmotionWord(result && result.emotion || action.emotion || this.data.emotion || "Centered");
        this.data.turnCount = (this.data.turnCount || 0) + 1;
        this.data.emotion = emotion;
        this.data.emotionHistory.push(emotion);
        this.data.emotionHistory = this.data.emotionHistory.slice(-8);
        this.data.openLoops = this.data.openLoops.filter((loop) => !String(loop).startsWith("Answer player:"));
        this.pushTurn({
          role: "model",
          time: Math.round(runtime2.globalTime),
          ages: this.ageLine(),
          text: say || "(no visible reply)",
          action: `emotion:${emotion}`,
          reason: action.reason || "Gemma emotional state"
        });
        this.data.actionLedger.push({
          time: Math.round(runtime2.globalTime),
          signal: `emotion:${emotion}`,
          applied: true,
          reason: action.reason || "Gemma emotional state",
          say,
          emotion
        });
        this.data.actionLedger = this.data.actionLedger.slice(-this.maxActions);
        this.save();
        this.updateInputSuggestion();
      },
      updateInputSuggestion() {
        let input = document.getElementById("director-input");
        if (!input) return;
        let pacts = runtime2.DirectorMemory.inputAgreementTags ? runtime2.DirectorMemory.inputAgreementTags() : runtime2.DirectorMemory.tags();
        let pactLine = pacts.length ? pacts.join(", ") : "none";
        let gemmaState = typeof NativeGemma !== "undefined" && NativeGemma.status && NativeGemma.status.state || "";
        let hasGemma = typeof NativeGemma !== "undefined" && NativeGemma.available && ["ready", "installed", "loading", "downloading"].includes(gemmaState);
        if (!hasGemma) {
          input.placeholder = `agreements: ${pactLine}`;
          return;
        }
        let ideas = [
          `Gemma, remember my usual trap is fake rush then tech. Pacts: ${pactLine}`,
          `Gemma, answer like you noticed my army habits. Pacts: ${pactLine}`,
          `Gemma, keep the rivalry personal but fair. Pacts: ${pactLine}`
        ];
        input.placeholder = ideas[Math.floor(Date.now() / 5e3 % ideas.length)];
      }
    };
    const GEMMA_EMOTION_WORDS = [
      "Accepting",
      "Open",
      "Calm",
      "Centered",
      "Content",
      "Fulfilled",
      "Patient",
      "Peaceful",
      "Present",
      "Relaxed",
      "Serene",
      "Trusting",
      "Aliveness",
      "Joy",
      "Amazed",
      "Awe",
      "Bliss",
      "Delighted",
      "Eager",
      "Ecstatic",
      "Enchanted",
      "Energized",
      "Engaged",
      "Enthusiastic",
      "Excited",
      "Free",
      "Happy",
      "Inspired",
      "Invigorated",
      "Lively",
      "Passionate",
      "Playful",
      "Radiant",
      "Refreshed",
      "Rejuvenated",
      "Renewed",
      "Satisfied",
      "Thrilled",
      "Vibrant",
      "Angry",
      "Annoyed",
      "Agitated",
      "Aggravated",
      "Bitter",
      "Contempt",
      "Cynical",
      "Disdain",
      "Disgruntled",
      "Disturbed",
      "Edgy",
      "Exasperated",
      "Frustrated",
      "Furious",
      "Grouchy",
      "Hostile",
      "Impatient",
      "Irritated",
      "Irate",
      "Moody",
      "On edge",
      "Outraged",
      "Pissed",
      "Resentful",
      "Upset",
      "Vindictive",
      "Courageous",
      "Powerful",
      "Adventurous",
      "Brave",
      "Capable",
      "Confident",
      "Daring",
      "Determined",
      "Grounded",
      "Proud",
      "Strong",
      "Worthy",
      "Valiant",
      "Connected",
      "Loving",
      "Affectionate",
      "Caring",
      "Compassion",
      "Empathy",
      "Safe",
      "Warm",
      "Curious",
      "Exploring",
      "Fascinated",
      "Interested",
      "Intrigued",
      "Involved",
      "Stimulated",
      "Despair",
      "Sad",
      "Anguish",
      "Depressed",
      "Despondent",
      "Disappointed",
      "Discouraged",
      "Forlorn",
      "Gloomy",
      "Grief",
      "Heartbroken",
      "Hopeless",
      "Lonely",
      "Longing",
      "Melancholy",
      "Sorrow",
      "Teary",
      "Unhappy",
      "Weary",
      "Yearning",
      "Disconnected",
      "Numb",
      "Aloof",
      "Bored",
      "Confused",
      "Distant",
      "Empty",
      "Indifferent",
      "Isolated",
      "Lethargic",
      "Listless",
      "Removed",
      "Resistant",
      "Shut Down",
      "Uneasy",
      "Withdrawn",
      "Embarrassed",
      "Shame",
      "Ashamed",
      "Humiliated",
      "Inhibited",
      "Mortified",
      "Self-conscious",
      "Useless",
      "Weak",
      "Worthless",
      "Fear",
      "Afraid",
      "Anxious",
      "Apprehensive",
      "Frightened",
      "Hesitant",
      "Nervous",
      "Panic",
      "Paralyzed",
      "Scared",
      "Terrified",
      "Worried",
      "Fragile",
      "Helpless",
      "Sensitive",
      "Grateful",
      "Appreciative",
      "Blessed",
      "Fortunate",
      "Grace",
      "Humbled",
      "Lucky",
      "Moved",
      "Thankful",
      "Touched",
      "Guilt",
      "Regret",
      "Remorseful",
      "Sorry",
      "Hopeful",
      "Encouraged",
      "Expectant",
      "Optimistic",
      "Powerless",
      "Impotent",
      "Incapable",
      "Resigned",
      "Trapped",
      "Victim",
      "Tender",
      "Reflective",
      "Self-loving",
      "Vulnerable",
      "Stressed",
      "Tense",
      "Burned out",
      "Cranky",
      "Depleted",
      "Exhausted",
      "Frazzled",
      "Overwhelm",
      "Rattled",
      "Rejecting",
      "Restless",
      "Shaken",
      "Tight",
      "Worn out",
      "Unsettled",
      "Doubt",
      "Concerned",
      "Dissatisfied",
      "Perplexed",
      "Questioning",
      "Reluctant",
      "Shocked",
      "Skeptical",
      "Suspicious",
      "Ungrounded",
      "Unsure",
      "Achy",
      "Airy",
      "Blocked",
      "Breathless",
      "Bruised",
      "Burning",
      "Buzzy",
      "Clammy",
      "Clenched",
      "Cold",
      "Constricted",
      "Contained",
      "Contracted",
      "Dizzy",
      "Drained",
      "Dull",
      "Electric",
      "Expanded",
      "Flowing",
      "Fluid",
      "Fluttery",
      "Frozen",
      "Full",
      "Gentle",
      "Hard",
      "Heavy",
      "Hollow",
      "Hot",
      "Icy",
      "Itchy",
      "Jumpy",
      "Knotted",
      "Light",
      "Loose",
      "Nauseous",
      "Pain",
      "Pounding",
      "Prickly",
      "Pulsing",
      "Queasy",
      "Radiating",
      "Releasing",
      "Rigid",
      "Settled",
      "Shaky",
      "Shivery",
      "Slow",
      "Smooth",
      "Soft",
      "Sore",
      "Spacey",
      "Spacious",
      "Sparkly",
      "Stiff",
      "Still",
      "Suffocated",
      "Sweaty",
      "Throbbing",
      "Tingling",
      "Trembly",
      "Twitchy",
      "Vibrating",
      "Wobbly",
      "Wooden"
    ];
    const GEMMA_EMOTION_LOOKUP = (() => {
      let lookup = /* @__PURE__ */ Object.create(null);
      GEMMA_EMOTION_WORDS.forEach((word) => {
        lookup[String(word).toLowerCase().replace(/[^a-z0-9]+/g, "")] = word;
      });
      return lookup;
    })();
    function normalizeGemmaEmotionWord(value) {
      let key = String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
      return GEMMA_EMOTION_LOOKUP[key] || "Centered";
    }
    function shuffledGemmaEmotionWords() {
      let out = GEMMA_EMOTION_WORDS.slice();
      for (let i = out.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = out[i];
        out[i] = out[j];
        out[j] = tmp;
      }
      return out;
    }
    function normalizeGemmaRecentUserMessage(value, maxLen = 120) {
      return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLen);
    }
    function captureGemmaContextImage(snapshot = null) {
      if (!LOCAL_GEMMA_IMAGE_INPUT_ENABLED) return null;
      if (!runtime2.canvas || !runtime2.gameState || !runtime2.gameState.running) return null;
      try {
        let shot = document.createElement("canvas");
        shot.width = 896;
        shot.height = 504;
        let g = shot.getContext("2d", { alpha: false });
        if (!g) return null;
        drawGemmaContextImage(g, shot.width, shot.height, snapshot || runtime2.AIDirector.snapshot());
        return shot.toDataURL("image/jpeg", 0.82);
      } catch (e) {
        NativeGemma.log("context_image.capture_failed", { message: String(e && e.message ? e.message : e) });
        return null;
      }
    }
    function drawGemmaContextImage(g, width, height, snapshot) {
      const playerColor = "#b91c1c";
      const enemyColor = "#1d4ed8";
      const ink = "#111827";
      const muted = "#6b7280";
      const paper = "#fffaf0";
      const laneLeft = 56;
      const laneRight = width - 56;
      const laneY = 292;
      const laneW = laneRight - laneLeft;
      const mapX = (worldX) => laneLeft + Math.max(0, Math.min(1, worldX / CANVAS_WIDTH)) * laneW;
      const pct = (value) => `${Math.round(Math.max(0, Math.min(1, value || 0)) * 100)}%`;
      g.fillStyle = paper;
      g.fillRect(0, 0, width, height);
      g.fillStyle = "#f3ead7";
      for (let y = 24; y < height; y += 36) {
        g.fillRect(0, y, width, 1);
      }
      g.fillStyle = ink;
      g.font = "800 24px system-ui, Arial, sans-serif";
      g.textAlign = "center";
      g.fillText("MAP FOR GEMMA AI: YOU ARE BLUE ON THE RIGHT", width / 2, 30);
      g.font = "700 15px system-ui, Arial, sans-serif";
      g.fillText("RED PLAYER is your opponent on the LEFT and attacks RIGHT. BLUE GEMMA is YOU and attacks LEFT.", width / 2, 54);
      drawGemmaContextBase(g, 28, 76, 224, 90, playerColor, "RED PLAYER / OPPONENT", AGES[runtime2.gameState.player.age].name, pct(snapshot.playerHpRatio), runtime2.gameState.player);
      drawGemmaContextBase(g, width - 252, 76, 224, 90, enemyColor, "BLUE GEMMA / YOU", AGES[runtime2.gameState.enemy.age].name, pct(snapshot.enemyHpRatio), runtime2.gameState.enemy);
      drawGemmaContextLegend(g, width / 2 - 184, 76, 368, 90, playerColor, enemyColor, ink, muted);
      drawGemmaContextRoundRect(g, 28, 176, width - 56, 34, 8, "#ffffff", "#d1d5db", 1.25);
      g.font = "800 14px system-ui, Arial, sans-serif";
      g.textAlign = "center";
      g.fillStyle = ink;
      g.fillText("READ THE MAP AS BLUE GEMMA: defend the right base, push left, destroy the red base.", width / 2, 194);
      g.fillStyle = "#fee2e2";
      g.fillRect(mapX(0), laneY - 82, mapX(BASE_WIDTH) - mapX(0), 164);
      g.fillStyle = "#dbeafe";
      g.fillRect(mapX(CANVAS_WIDTH - BASE_WIDTH), laneY - 82, mapX(CANVAS_WIDTH) - mapX(CANVAS_WIDTH - BASE_WIDTH), 164);
      g.fillStyle = "rgba(29, 78, 216, 0.10)";
      g.fillRect(mapX(CANVAS_WIDTH - BASE_WIDTH - 620), laneY - 88, mapX(CANVAS_WIDTH - BASE_WIDTH) - mapX(CANVAS_WIDTH - BASE_WIDTH - 620), 176);
      g.strokeStyle = ink;
      g.lineWidth = 4;
      g.beginPath();
      g.moveTo(laneLeft, laneY);
      g.lineTo(laneRight, laneY);
      g.stroke();
      drawGemmaContextArrow(g, laneLeft + 132, laneY - 64, laneRight - 132, laneY - 64, playerColor, "RED PLAYER ATTACKS RIGHT ->");
      drawGemmaContextArrow(g, laneRight - 132, laneY + 64, laneLeft + 132, laneY + 64, enemyColor, "<- YOU ATTACK LEFT AS BLUE GEMMA");
      drawGemmaContextVertical(g, mapX(BASE_WIDTH), laneY - 94, laneY + 94, "#374151", "PLAYER HIT LINE", "left");
      drawGemmaContextVertical(g, mapX(CANVAS_WIDTH - BASE_WIDTH), laneY - 94, laneY + 94, "#374151", "GEMMA HIT LINE", "right");
      drawGemmaContextVertical(g, mapX(snapshot.playerFrontX || BASE_WIDTH), laneY - 116, laneY + 116, playerColor, "PLAYER FRONT", "left", true);
      drawGemmaContextVertical(g, mapX(snapshot.enemyFrontX || CANVAS_WIDTH - BASE_WIDTH), laneY - 116, laneY + 116, enemyColor, "GEMMA FRONT", "right", true);
      drawGemmaContextFrontSpan(g, mapX(snapshot.playerFrontX || BASE_WIDTH), mapX(snapshot.enemyFrontX || CANVAS_WIDTH - BASE_WIDTH), laneY, muted);
      drawGemmaContextLabel(g, "BLUE SHADE = DANGER TO YOUR GEMMA BASE", mapX(CANVAS_WIDTH - BASE_WIDTH - 310), laneY - 108, {
        fill: "#eff6ff",
        color: enemyColor,
        align: "center",
        font: "800 12px system-ui, Arial, sans-serif"
      });
      let markers = collectGemmaContextUnitMarkers();
      if (markers.length === 0) {
        drawGemmaContextLabel(g, "NO ACTIVE UNITS IN LANE", width / 2, laneY - 10, {
          fill: "#ffffff",
          color: muted,
          align: "center",
          font: "700 14px system-ui, Arial, sans-serif"
        });
      } else {
        markers.forEach((marker) => {
          let x = mapX(marker.x);
          let y = laneY + (marker.team === 1 ? -32 : 32) + (marker.type === "heavy" ? 14 : marker.type === "ranged" ? 0 : -14);
          drawGemmaContextUnitMarker(g, x, y, marker, marker.team === 1 ? playerColor : enemyColor);
        });
      }
      drawGemmaContextTurrets(g, mapX(BASE_WIDTH * 0.5), laneY + 118, runtime2.gameState.player, playerColor, "Player turrets");
      drawGemmaContextTurrets(g, mapX(CANVAS_WIDTH - BASE_WIDTH * 0.5), laneY + 118, runtime2.gameState.enemy, enemyColor, "Gemma turrets");
      let closest = snapshot.closestThreatDist >= 9999 ? "none" : `${Math.floor(snapshot.closestThreatDist)} px from Gemma hit line`;
      let status = [
        `Time ${Math.round(runtime2.globalTime)}s`,
        `Player units ${snapshot.playerUnits}`,
        `Gemma units ${snapshot.enemyUnits}`,
        `Threats near Gemma base ${snapshot.threatCount}`,
        `Closest player threat: ${closest}`,
        "Pressure pact: rush",
        `Gemma emotion: ${snapshot.emotion || "Centered"}`,
        `Engine plan: ${snapshot.engineOrder || "adaptive"}`,
        `Engine order: ${snapshot.engineOrder || "adaptive"}`,
        `Lane pressure ${Math.round(snapshot.lanePressure)}`
      ];
      g.fillStyle = "#111827";
      g.font = "600 13px system-ui, Arial, sans-serif";
      g.textAlign = "left";
      status.forEach((line, idx) => g.fillText(line, 34 + idx % 4 * 214, 430 + Math.floor(idx / 4) * 21));
      g.fillStyle = muted;
      g.font = "600 11px system-ui, Arial, sans-serif";
      g.textAlign = "center";
      g.fillText("This is the complete tactical diagram. Color, side, labels, arrows, and marker shapes define the current battle.", width / 2, height - 14);
    }
    function drawGemmaContextBase(g, x, y, w, h, color, title, age, hpText, state) {
      drawGemmaContextRoundRect(g, x, y, w, h, 8, "#ffffff", color, 2);
      g.fillStyle = color;
      g.font = "800 13px system-ui, Arial, sans-serif";
      g.textAlign = "left";
      g.fillText(title, x + 12, y + 22);
      g.fillStyle = "#111827";
      g.font = "600 12px system-ui, Arial, sans-serif";
      g.fillText(age, x + 12, y + 42);
      g.fillText(`HP ${hpText}  Gold ${Math.floor(state.gold)}`, x + 12, y + 62);
      g.fillStyle = "#e5e7eb";
      g.fillRect(x + 126, y + 28, 78, 10);
      g.fillStyle = color;
      g.fillRect(x + 126, y + 28, Math.max(0, Math.min(78, 78 * state.hp / state.maxHp)), 10);
    }
    function drawGemmaContextLegend(g, x, y, w, h, playerColor, enemyColor, ink, muted) {
      drawGemmaContextRoundRect(g, x, y, w, h, 8, "#ffffff", "#d1d5db", 1);
      g.fillStyle = ink;
      g.font = "800 13px system-ui, Arial, sans-serif";
      g.textAlign = "center";
      g.fillText("LEGEND", x + w / 2, y + 20);
      drawGemmaContextShape(g, x + 30, y + 42, "melee", playerColor);
      drawGemmaContextShape(g, x + 92, y + 42, "ranged", enemyColor);
      drawGemmaContextShape(g, x + 158, y + 42, "heavy", ink);
      g.fillStyle = muted;
      g.font = "700 11px system-ui, Arial, sans-serif";
      g.textAlign = "left";
      g.fillText("circle melee", x + 42, y + 46);
      g.fillText("triangle ranged", x + 104, y + 46);
      g.fillText("diamond heavy", x + 170, y + 46);
      g.fillText("dashed vertical = front line", x + 30, y + 68);
      g.fillText("gray vertical = base hit line", x + 170, y + 68);
      g.fillText("P0/P1/P2 = red player units; G0/G1/G2 = your blue units", x + 30, y + 84);
    }
    function collectGemmaContextUnitMarkers() {
      let units = [];
      if (!runtime2.gameState.units || !runtime2.gameState.units.pool) return units;
      for (let i = 0; i < runtime2.gameState.units.pool.length; i++) {
        let u = runtime2.gameState.units.pool[i];
        if (!u.active || u.hp <= 0 || u.drawProgress < 0.5) continue;
        units.push({
          team: u.team,
          type: u.type || "melee",
          typeIndex: Number.isFinite(Number(u.uType)) ? Number(u.uType) : 0,
          name: u.name || u.type || "unit",
          x: Math.max(0, Math.min(CANVAS_WIDTH, u.x)),
          hpRatio: u.maxHp ? Math.max(0, Math.min(1, u.hp / u.maxHp)) : 1,
          count: 1
        });
      }
      if (units.length <= 28) return units.sort((a, b) => a.x - b.x);
      let groups = /* @__PURE__ */ new Map();
      units.forEach((unit) => {
        let bin = Math.round(unit.x / 95);
        let key = `${unit.team}|${unit.type}|${unit.typeIndex}|${bin}`;
        let group = groups.get(key);
        if (!group) {
          group = Object.assign({}, unit, { count: 0, hpTotal: 0, xTotal: 0 });
          groups.set(key, group);
        }
        group.count++;
        group.hpTotal += unit.hpRatio;
        group.xTotal += unit.x;
      });
      let grouped = Array.from(groups.values()).map((group) => {
        group.x = group.xTotal / group.count;
        group.hpRatio = group.hpTotal / group.count;
        delete group.hpTotal;
        delete group.xTotal;
        return group;
      }).sort((a, b) => a.x - b.x);
      if (grouped.length <= 36) return grouped;
      let sampled = [];
      let step2 = grouped.length / 36;
      for (let i = 0; i < 36; i++) {
        sampled.push(grouped[Math.min(grouped.length - 1, Math.floor(i * step2))]);
      }
      return sampled;
    }
    function drawGemmaContextUnitMarker(g, x, y, marker, color) {
      drawGemmaContextShape(g, x, y, marker.type, color);
      g.strokeStyle = "#111827";
      g.lineWidth = 2;
      g.beginPath();
      g.arc(x, y, 15, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * marker.hpRatio);
      g.stroke();
      let side2 = marker.team === 1 ? "P" : "G";
      let label = `${side2}${marker.typeIndex} ${marker.type}${marker.count > 1 ? ` x${marker.count}` : ""}`;
      drawGemmaContextLabel(g, label, x, y + (marker.team === 1 ? -24 : 30), {
        fill: "#ffffff",
        color,
        align: "center",
        font: "800 10px system-ui, Arial, sans-serif"
      });
    }
    function drawGemmaContextShape(g, x, y, type, color) {
      g.fillStyle = color;
      g.strokeStyle = "#111827";
      g.lineWidth = 2;
      g.beginPath();
      if (type === "ranged") {
        g.moveTo(x, y - 12);
        g.lineTo(x + 12, y + 10);
        g.lineTo(x - 12, y + 10);
        g.closePath();
      } else if (type === "heavy") {
        g.moveTo(x, y - 14);
        g.lineTo(x + 14, y);
        g.lineTo(x, y + 14);
        g.lineTo(x - 14, y);
        g.closePath();
      } else {
        g.arc(x, y, 12, 0, Math.PI * 2);
      }
      g.fill();
      g.stroke();
    }
    function drawGemmaContextTurrets(g, x, y, state, color, label) {
      let count = state.turrets.filter((t) => t !== null).length;
      drawGemmaContextLabel(g, `${label}: ${count}/${state.unlockedSlots}`, x, y, {
        fill: "#ffffff",
        color,
        align: "center",
        font: "700 12px system-ui, Arial, sans-serif"
      });
    }
    function drawGemmaContextArrow(g, x1, y1, x2, y2, color, label) {
      g.strokeStyle = color;
      g.fillStyle = color;
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(x1, y1);
      g.lineTo(x2, y2);
      g.stroke();
      let angle = Math.atan2(y2 - y1, x2 - x1);
      g.beginPath();
      g.moveTo(x2, y2);
      g.lineTo(x2 - Math.cos(angle - 0.45) * 14, y2 - Math.sin(angle - 0.45) * 14);
      g.lineTo(x2 - Math.cos(angle + 0.45) * 14, y2 - Math.sin(angle + 0.45) * 14);
      g.closePath();
      g.fill();
      drawGemmaContextLabel(g, label, (x1 + x2) / 2, y1 - 10, {
        fill: "#ffffff",
        color,
        align: "center",
        font: "800 11px system-ui, Arial, sans-serif"
      });
    }
    function drawGemmaContextFrontSpan(g, x1, x2, y, color) {
      let left = Math.min(x1, x2);
      let right = Math.max(x1, x2);
      if (right - left < 16) return;
      g.save();
      g.fillStyle = "rgba(17, 24, 39, 0.045)";
      g.fillRect(left, y - 44, right - left, 88);
      g.strokeStyle = color;
      g.fillStyle = color;
      g.lineWidth = 2;
      g.setLineDash([6, 5]);
      g.beginPath();
      g.moveTo(left + 8, y);
      g.lineTo(right - 8, y);
      g.stroke();
      g.setLineDash([]);
      [[left + 8, -1], [right - 8, 1]].forEach(([x, dir]) => {
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + dir * 10, y - 6);
        g.lineTo(x + dir * 10, y + 6);
        g.closePath();
        g.fill();
      });
      g.restore();
    }
    function drawGemmaContextVertical(g, x, y1, y2, color, label, side2, dashed = false) {
      g.save();
      g.strokeStyle = color;
      g.lineWidth = dashed ? 3 : 2;
      if (dashed) g.setLineDash([8, 5]);
      g.beginPath();
      g.moveTo(x, y1);
      g.lineTo(x, y2);
      g.stroke();
      g.restore();
      drawGemmaContextLabel(g, label, x + (side2 === "left" ? -4 : 4), y1 - 8, {
        fill: "#ffffff",
        color,
        align: side2 === "left" ? "right" : "left",
        font: "800 10px system-ui, Arial, sans-serif"
      });
    }
    function drawGemmaContextLabel(g, text, x, y, opts = {}) {
      let font = opts.font || "700 11px system-ui, Arial, sans-serif";
      let align = opts.align || "center";
      g.save();
      g.font = font;
      g.textAlign = align;
      g.textBaseline = "middle";
      let metrics = g.measureText(text);
      let w = metrics.width + 10;
      let h = 18;
      let bx = align === "center" ? x - w / 2 : align === "right" ? x - w : x;
      drawGemmaContextRoundRect(g, bx, y - h / 2, w, h, 4, opts.fill || "#ffffff", opts.stroke || "rgba(17, 24, 39, 0.12)", 1);
      g.fillStyle = opts.color || "#111827";
      g.fillText(text, x, y);
      g.restore();
    }
    function drawGemmaContextRoundRect(g, x, y, w, h, r, fill, stroke, lineWidth = 1) {
      g.beginPath();
      g.moveTo(x + r, y);
      g.lineTo(x + w - r, y);
      g.quadraticCurveTo(x + w, y, x + w, y + r);
      g.lineTo(x + w, y + h - r);
      g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      g.lineTo(x + r, y + h);
      g.quadraticCurveTo(x, y + h, x, y + h - r);
      g.lineTo(x, y + r);
      g.quadraticCurveTo(x, y, x + r, y);
      g.closePath();
      if (fill) {
        g.fillStyle = fill;
        g.fill();
      }
      if (stroke) {
        g.strokeStyle = stroke;
        g.lineWidth = lineWidth;
        g.stroke();
      }
    }
    function gemmaPromptLine(value, maxLen = 180) {
      return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLen);
    }
    function buildGemmaEmotionPrompt(ctx) {
      let snapshot = ctx.snapshot;
      let enemyAgeData = AGES[runtime2.gameState.enemy.age];
      let playerAgeData = AGES[runtime2.gameState.player.age];
      let latestPlayer = gemmaPromptLine(ctx.relayComment ? ctx.relayComment.text : ctx.cleanExtraMessage, 160);
      let emotions = shuffledGemmaEmotionWords();
      let emotionLine = emotions.join(", ");
      let playerUnitLine = snapshot.playerProfile || `${snapshot.playerUnits} units: ${snapshot.playerMelee} melee, ${snapshot.playerRanged} ranged, ${snapshot.playerHeavy} heavy`;
      let enemyUnitLine = snapshot.enemyProfile || `${snapshot.enemyUnits} units: ${snapshot.enemyMelee} melee, ${snapshot.enemyRanged} ranged, ${snapshot.enemyHeavy} heavy`;
      let tacticalLine = [
        `threats near your base ${snapshot.threatCount}`,
        `closest threat ${Math.round(snapshot.closestThreatDist)}px`,
        `my turrets ${snapshot.playerTurretCount}`,
        `your turrets ${snapshot.enemyTurretCount}`,
        `engine plan ${snapshot.macroPlan || "balanced"} / ${snapshot.engineOrder || "adaptive"}`
      ].join(", ");
      let prompt = [
        "Gemma, we are still playing our notebook Ink Battle match and chatting across the table. Your name is Gemma.",
        "You are the blue general on the right. I am the red player on the left. I attached the little labeled map again so you can see the bases, front lines, danger zone, unit markers, HP, gold, and pressure.",
        "I am not asking you to click units or spend gold here; the local game keeps doing that while you think. I only want your in-character reply and the feeling behind it so the match keeps sounding human.",
        `Right now you are in ${enemyAgeData.name}; I am in ${playerAgeData.name}.`,
        `Your base is at ${Math.round(snapshot.enemyHpRatio * 100)}% with ${Math.floor(snapshot.enemyGold)} gold. My base is at ${Math.round(snapshot.playerHpRatio * 100)}% with ${Math.floor(snapshot.playerGold)} gold.`,
        `My army: ${playerUnitLine}. Your army: ${enemyUnitLine}.`,
        `What matters tactically: ${tacticalLine}.`,
        `Our table rules and preferences: ${runtime2.gemmaInputPacts().join(", ")}.`,
        latestPlayer ? `I just told you: "${latestPlayer}"` : "I did not say anything new this turn.",
        "Please answer in exactly two short lines so the phone UI can read it.",
        "First line: talk directly to me as Gemma, one or two short sentences.",
        "Second line: one exact emotion word from this shuffled list, with no label:",
        emotionLine
      ].join("\n\n");
      return {
        prompt,
        emotions
      };
    }
    function parseGemmaEmotionReply(rawText, allowedWords = GEMMA_EMOTION_WORDS) {
      let text = String(rawText || "").replace(/\u0000/g, "").replace(/^```(?:text)?/i, "").replace(/```$/i, "").trim();
      let lines = text.split(/\r?\n+/).map((line) => line.replace(/\s+/g, " ").trim()).filter(Boolean);
      let allowed = Array.isArray(allowedWords) && allowedWords.length ? allowedWords : GEMMA_EMOTION_WORDS;
      let allowedLookup = /* @__PURE__ */ Object.create(null);
      allowed.forEach((word) => {
        allowedLookup[String(word).toLowerCase().replace(/[^a-z0-9]+/g, "")] = word;
      });
      let emotion = "";
      let emotionLineIndex = -1;
      for (let i = lines.length - 1; i >= 0; i--) {
        let raw = lines[i].replace(/^(emotion|feeling|mood)\s*[:=-]\s*/i, "").trim();
        let key = raw.toLowerCase().replace(/[^a-z0-9]+/g, "");
        if (allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key]) {
          emotion = allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key];
          emotionLineIndex = i;
          break;
        }
      }
      if (!emotion) {
        let suffixSource = lines.length ? lines[lines.length - 1] : text;
        let suffixTokens = String(suffixSource || "").replace(/[^\w -]+$/g, "").replace(/[_-]+/g, " ").trim().split(/\s+/).filter(Boolean);
        for (let width = Math.min(4, suffixTokens.length); width >= 1; width--) {
          let phrase = suffixTokens.slice(-width).join(" ");
          let key = phrase.toLowerCase().replace(/[^a-z0-9]+/g, "");
          if (allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key]) {
            emotion = allowedLookup[key] || GEMMA_EMOTION_LOOKUP[key];
            emotionLineIndex = lines.length - 1;
            break;
          }
        }
      }
      if (!emotion) {
        let haystack = ` ${text.toLowerCase().replace(/[^a-z0-9]+/g, " ")} `;
        let sorted = GEMMA_EMOTION_WORDS.slice().sort((a, b) => b.length - a.length);
        for (let i = 0; i < sorted.length; i++) {
          let word = sorted[i];
          let key = word.toLowerCase().replace(/[^a-z0-9]+/g, " ");
          if (haystack.includes(` ${key.trim()} `)) {
            emotion = word;
            break;
          }
        }
      }
      emotion = normalizeGemmaEmotionWord(emotion || "Centered");
      let replyLines = lines.filter((_, index) => index !== emotionLineIndex);
      let reply = replyLines.join(" ").replace(/\b(emotion|feeling|mood)\s*[:=-]\s*[\w -]+$/i, "").trim();
      if (!reply) reply = "I am watching the line and adjusting.";
      reply = reply.replace(/\s+/g, " ").slice(0, 240);
      return { reply, emotion, rawText: text };
    }
    const NativeGemma = {
      available: false,
      status: { state: "browser", modelName: "Local fallback", progress: 0, totalRamGb: 0 },
      pending: {},
      queuedUserComment: null,
      lastRequestAt: -999,
      init() {
        this.available = !!window.LocalGemmaAndroid;
        this.refresh();
        if (this.available) setInterval(() => this.refresh(), 4e3);
      },
      refresh() {
        if (!this.available) {
          this.updateStatus({ state: "unavailable", modelName: "Android Gemma", progress: 0 });
          return;
        }
        try {
          this.updateStatus(JSON.parse(window.LocalGemmaAndroid.getStatus()));
        } catch (e) {
          this.updateStatus({ state: "error", modelName: "Android Gemma", message: "Bridge unavailable" });
        }
      },
      log(event, details = {}) {
        if (!this.available || !window.LocalGemmaAndroid || typeof window.LocalGemmaAndroid.logDirectorEvent !== "function") return;
        try {
          window.LocalGemmaAndroid.logDirectorEvent(String(event || "event"), JSON.stringify(details || {}));
        } catch (e) {
        }
      },
      ownsVisibleChat() {
        let state = this.status && this.status.state ? this.status.state : "";
        return this.available && (this.status.busy || ["ready", "installed", "loading", "downloading"].includes(state));
      },
      updateStatus(next) {
        this.status = Object.assign({}, this.status, next || {});
        let label = "";
        let action = "Get";
        let disabled = false;
        let visible = false;
        let state = this.status.state || "unknown";
        let ram = this.status.totalRamGb ? ` (${this.status.totalRamGb}GB)` : "";
        if (state === "ready") {
          label = "";
          disabled = true;
        } else if (state === "loading") {
          label = "Gemma loading";
          action = "";
          disabled = true;
          visible = true;
        } else if (state === "downloading") {
          let pct = Math.max(0, Math.min(100, Math.floor(this.status.progress || 0)));
          let detail = this.status.message ? ` - ${this.status.message}` : "";
          label = `Gemma download ${pct}%${detail}`;
          action = "";
          disabled = true;
          visible = true;
        } else if (state === "installed") {
          label = "Gemma is stored";
          action = "load";
          visible = true;
        } else if (state === "unavailable") {
          label = "";
          disabled = true;
        } else if (state === "error") {
          label = this.status.message || "Gemma retry needed";
          action = "retry";
          visible = true;
        } else {
          label = this.status.message || `offline Gemma${ram}`;
          action = "get";
          visible = this.available;
        }
        let card = document.getElementById("gemma-card");
        let statusEl = document.getElementById("gemma-status");
        let button = document.getElementById("btn-gemma-install");
        if (card) card.classList.toggle("hidden", !visible);
        if (statusEl) statusEl.innerText = label;
        if (button) {
          button.innerText = action;
          button.disabled = disabled;
          button.classList.toggle("hidden", !action);
        }
        if (typeof GemmaMemory !== "undefined") GemmaMemory.updateInputSuggestion();
      },
      install() {
        if (!this.available) {
          runtime2.DirectorPanel.addSystem("Packaged Android build needed for local Gemma.");
          return;
        }
        let model = this.status.modelName || "Gemma 4 E2B";
        let size = this.status.recommendedSizeGb || 2.58;
        let ok = confirm(`${model} will download about ${size} GB to this device and then run offline. Continue?`);
        if (!ok) return;
        try {
          let response = JSON.parse(window.LocalGemmaAndroid.requestInstall("auto"));
          this.updateStatus(response);
          runtime2.DirectorPanel.addSystem("Gemma download started. Local fallback stays active.");
        } catch (e) {
          runtime2.DirectorPanel.addSystem("Android could not start the Gemma download.");
        }
      },
      queueRecentUserComment(lineId, message) {
        let clean = normalizeGemmaRecentUserMessage(message, 120);
        if (!clean) return;
        this.queuedUserComment = {
          lineId: String(lineId || ""),
          text: clean,
          queuedAt: Date.now()
        };
      },
      requestTurn(reason, extraMessage = "", options = {}) {
        if (!this.available || !runtime2.gameState.running || runtime2.gameState.paused) return false;
        if (!["ready", "installed"].includes(this.status.state)) return false;
        if (this.status.state === "installed") {
          try {
            window.LocalGemmaAndroid.loadModel();
          } catch (e) {
          }
          this.updateStatus(Object.assign({}, this.status, { state: "loading" }));
          return false;
        }
        let minGap = reason === "player_chat" ? 4 : 18;
        if (this.status.busy || runtime2.globalTime - this.lastRequestAt < minGap) return false;
        let snapshot = runtime2.AIDirector.snapshot();
        let cleanExtraMessage = normalizeGemmaRecentUserMessage(extraMessage, 120);
        let requestedUserLineId = options && options.userLineId ? String(options.userLineId) : "";
        let relayComment = null;
        if (reason === "player_chat" && cleanExtraMessage) {
          relayComment = {
            lineId: requestedUserLineId || (this.queuedUserComment ? this.queuedUserComment.lineId : ""),
            text: cleanExtraMessage,
            source: "player_chat"
          };
        } else if (this.queuedUserComment && this.queuedUserComment.text) {
          relayComment = {
            lineId: this.queuedUserComment.lineId,
            text: this.queuedUserComment.text,
            source: "queued_recent_player_line"
          };
        }
        let contextImageDataUrl = captureGemmaContextImage(snapshot);
        let requestId = `g${Date.now()}_${Math.floor(Math.random() * 1e4)}`;
        let promptBuild = buildGemmaEmotionPrompt({
          reason,
          cleanExtraMessage,
          relayComment,
          snapshot
        });
        let promptText = promptBuild.prompt;
        this.pending[requestId] = {
          reason,
          userLineId: relayComment ? relayComment.lineId : "",
          relayedUserMessage: relayComment ? relayComment.text : "",
          emotions: promptBuild.emotions || GEMMA_EMOTION_WORDS
        };
        this.lastRequestAt = runtime2.globalTime;
        this.status.busy = true;
        this.updateStatus(this.status);
        runtime2.DirectorPanel.beginModelThoughts(requestId, reason);
        this.log("request.pre_send", {
          requestId,
          reason,
          gameTime: Math.round(runtime2.globalTime),
          promptChars: promptText.length,
          difficulty: runtime2.currentDifficulty,
          nativeConversationMessages: this.status.conversationMessages || 0,
          contextImageChars: contextImageDataUrl ? contextImageDataUrl.length : 0,
          enginePlan: snapshot.engineOrder || ""
        });
        try {
          if (contextImageDataUrl && typeof window.LocalGemmaAndroid.generateDirectorTurnWithImage === "function") {
            window.LocalGemmaAndroid.generateDirectorTurnWithImage(requestId, promptText, contextImageDataUrl);
          } else {
            window.LocalGemmaAndroid.generateDirectorTurn(requestId, promptText);
          }
          if (relayComment && relayComment.lineId) {
            runtime2.DirectorPanel.markPlayerLineSeen(relayComment.lineId, requestId);
          }
          if (relayComment && this.queuedUserComment) {
            let sameLine = relayComment.lineId && relayComment.lineId === this.queuedUserComment.lineId;
            let sameText = relayComment.text === this.queuedUserComment.text;
            if (sameLine || sameText) this.queuedUserComment = null;
          }
          return true;
        } catch (e) {
          delete this.pending[requestId];
          this.status.busy = false;
          this.updateStatus(this.status);
          runtime2.DirectorPanel.failModelThoughts(requestId, "bridge error");
          this.log("request.bridge_error", { requestId, message: String(e && e.message ? e.message : e) });
          return false;
        }
      },
      stream(requestId, phase, text, done) {
        runtime2.DirectorPanel.updateModelThoughts(requestId, phase, text, !!done);
      },
      receive(requestId, rawText) {
        let pendingMeta = this.pending[requestId] || null;
        delete this.pending[requestId];
        this.status.busy = false;
        this.refresh();
        let result = parseGemmaEmotionReply(rawText, pendingMeta && pendingMeta.emotions);
        this.log("response.emotion", {
          requestId,
          emotion: result.emotion || "",
          replyChars: String(result.reply || "").length,
          rawChars: String(rawText || "").length
        });
        applyGemmaEmotionTurn(result, requestId, pendingMeta);
      },
      error(requestId, message) {
        delete this.pending[requestId];
        this.status.busy = false;
        this.updateStatus(Object.assign({}, this.status, { state: this.status.state === "ready" ? "ready" : "error", message }));
        this.log("request.error", { requestId, message: String(message || "") });
        runtime2.DirectorPanel.failModelThoughts(requestId, String(message || "error"));
        runtime2.DirectorPanel.addSystem(`Local Gemma could not answer: ${message}`);
      }
    };
    function installLocalGemma() {
      if (NativeGemma.status.state === "installed") {
        try {
          window.LocalGemmaAndroid.loadModel();
        } catch (e) {
        }
        NativeGemma.updateStatus(Object.assign({}, NativeGemma.status, { state: "loading" }));
        return;
      }
      NativeGemma.install();
    }
    function applyGemmaEmotionTurn(result, requestId = "", pendingMeta = null) {
      let emotion = normalizeGemmaEmotionWord(result && result.emotion);
      runtime2.AIDirector.acceptGemmaEmotion(emotion, requestId, result && result.reply ? result.reply : "");
      GemmaMemory.recordEmotion(result || {}, {
        requestId,
        emotion,
        reason: pendingMeta && pendingMeta.reason ? pendingMeta.reason : "Gemma reply"
      });
      runtime2.DirectorPanel.finishModelThoughts(requestId, result && result.reply ? result.reply : "I am watching the line and adjusting.");
      runtime2.DirectorPanel.renderMemory();
      runtime2.DirectorPanel.addSystem(`emotion: ${emotion}`);
    }
    window.onLocalGemmaStatus = (json) => {
      try {
        NativeGemma.updateStatus(JSON.parse(json));
      } catch (e) {
      }
    };
    window.onLocalGemmaStream = (requestId, phase, text, done) => NativeGemma.stream(requestId, phase, text, done);
    window.onLocalGemmaResponse = (requestId, text) => NativeGemma.receive(requestId, text);
    window.onLocalGemmaError = (requestId, message) => NativeGemma.error(requestId, message);
    return { GemmaMemory, NativeGemma, GEMMA_EMOTION_WORDS, normalizeGemmaEmotionWord, captureGemmaContextImage, gemmaPromptLine, buildGemmaEmotionPrompt, parseGemmaEmotionReply, applyGemmaEmotionTurn, installLocalGemma };
  }

  // src/client/director-panel.js
  function createDirectorPanel(runtime2) {
    const DirectorPanel = {
      els: {},
      aiWriteTimeout: null,
      playerWriteTimeout: null,
      systemWriteTimeout: null,
      playerLineSeq: 0,
      currentPlayerLine: null,
      thoughtEntries: {},
      init() {
        ["commander-hud", "ai-hud", "director-center-status", "emotion-badge", "emotion-word", "agreement-strip", "director-log", "director-signal-log", "director-input", "director-memory", "player-last-line", "btn-pause"].forEach((id) => {
          this.els[id] = document.getElementById(id);
        });
        this.renderMemory();
      },
      start(diffKey) {
        if (!this.els["ai-hud"]) return;
        runtime2.GemmaMemory.start(diffKey);
        this.els["ai-hud"].classList.remove("hidden");
        if (this.els["director-center-status"]) this.els["director-center-status"].classList.remove("hidden");
        if (this.els["director-log"]) this.els["director-log"].innerHTML = "";
        if (this.els["director-signal-log"]) this.els["director-signal-log"].innerHTML = "";
        if (this.els["player-last-line"]) {
          this.els["player-last-line"].innerHTML = "";
          this.els["player-last-line"].classList.add("hidden");
        }
        this.playerLineSeq = 0;
        this.currentPlayerLine = null;
        this.thoughtEntries = {};
        this.renderMemory();
        runtime2.NativeGemma.refresh();
        setTimeout(() => {
          this.addSystem(`Director online. Pacts and notes are active.`);
        }, 800);
      },
      add(role, text) {
        if (!text) return;
        if (role === "player") {
          return this.addPlayerLine(text);
        }
        this.addSystem(text);
      },
      addPlayerLine(text) {
        let message = this.normalizeLine(text, 120);
        if (!message) return "";
        this.playerLineSeq++;
        let line = {
          id: `pl${Date.now()}_${this.playerLineSeq}`,
          text: message,
          seen: false,
          requestId: ""
        };
        this.currentPlayerLine = line;
        this.renderPlayerLine(line);
        return line.id;
      },
      renderPlayerLine(line) {
        let host = this.els["player-last-line"];
        if (!host || !line) return;
        host.classList.remove("hidden");
        clearTimeout(this.playerWriteTimeout);
        let render = () => {
          host.innerHTML = "";
          let row = document.createElement("div");
          row.className = "player-last-text is-writing";
          row.setAttribute("data-player-line-id", line.id);
          let seen = document.createElement("span");
          seen.className = `player-last-seen ${line.seen ? "is-seen" : "is-pending"}`;
          seen.innerText = line.seen ? "seen" : "pending";
          let text = document.createElement("span");
          text.className = "player-last-message";
          text.innerText = line.text;
          row.appendChild(seen);
          row.appendChild(text);
          host.appendChild(row);
        };
        let current = host.firstElementChild;
        if (current) {
          current.classList.remove("is-writing");
          current.classList.add("is-erasing");
          this.playerWriteTimeout = setTimeout(render, 190);
        } else {
          render();
        }
      },
      markPlayerLineSeen(lineId, requestId = "") {
        if (!lineId || !this.currentPlayerLine || this.currentPlayerLine.id !== lineId) return;
        if (requestId && this.currentPlayerLine.requestId === requestId && this.currentPlayerLine.seen) return;
        this.currentPlayerLine.seen = true;
        if (requestId) this.currentPlayerLine.requestId = requestId;
        let host = this.els["player-last-line"];
        let row = host ? host.firstElementChild : null;
        if (row && row.getAttribute("data-player-line-id") === lineId) {
          let badge = row.querySelector(".player-last-seen");
          if (badge) {
            badge.classList.remove("is-pending");
            badge.classList.add("is-seen");
            badge.innerText = "seen";
          }
          return;
        }
        this.renderPlayerLine(this.currentPlayerLine);
      },
      addModel(text) {
        let message = this.normalizeLine(this.sanitizeModelLine(text), 220);
        if (!message) return;
        this.writeLatest(this.els["director-log"], message, "director-msg", "ai");
      },
      addModelRaw(text) {
        let message = this.normalizeRawModelLine(text, 1400);
        if (!message) return;
        this.writeLatest(this.els["director-log"], message, "director-msg", "ai");
      },
      beginModelThoughts(requestId, reason = "") {
        let host = this.els["director-log"];
        if (!host || !requestId) return;
        host.classList.remove("hidden");
        clearTimeout(this.aiWriteTimeout);
        let entry = {
          requestId,
          reason,
          visible: "...",
          phases: {},
          done: {},
          open: false
        };
        this.thoughtEntries = {};
        this.thoughtEntries[requestId] = entry;
        host.innerHTML = "";
        let row = document.createElement("div");
        row.className = "director-msg has-thoughts is-writing";
        row.setAttribute("data-gemma-request-id", requestId);
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");
        row.setAttribute("aria-label", "Toggle opponent thoughts");
        row.addEventListener("click", () => this.toggleModelThoughts(requestId));
        row.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.toggleModelThoughts(requestId);
          }
        });
        let main = document.createElement("div");
        main.className = "director-msg-main";
        let toggle = document.createElement("button");
        toggle.className = "director-thought-toggle";
        toggle.type = "button";
        toggle.title = "Opponent thoughts";
        toggle.setAttribute("aria-label", "Opponent thoughts");
        toggle.innerText = "...";
        toggle.addEventListener("click", (event) => {
          event.stopPropagation();
          this.toggleModelThoughts(requestId);
        });
        let visible = document.createElement("span");
        visible.className = "director-msg-text";
        visible.innerText = entry.visible;
        let panel = document.createElement("div");
        panel.className = "director-thought-panel";
        let viewport = document.createElement("div");
        viewport.className = "director-thought-viewport";
        let track = document.createElement("div");
        track.className = "director-thought-track";
        track.innerText = "reading map...";
        viewport.appendChild(track);
        panel.appendChild(viewport);
        main.appendChild(toggle);
        main.appendChild(visible);
        row.appendChild(main);
        row.appendChild(panel);
        host.appendChild(row);
        entry.row = row;
        entry.visibleEl = visible;
        entry.trackEl = track;
      },
      updateModelThoughts(requestId, phase, text, done = false) {
        if (!requestId) return;
        let entry = this.thoughtEntries[requestId];
        if (!entry) {
          this.beginModelThoughts(requestId, "model");
          entry = this.thoughtEntries[requestId];
          if (!entry) return;
        }
        let clean = this.normalizeThoughtLine(text);
        if (clean) entry.phases[phase] = clean;
        if (done) entry.done[phase] = true;
        if (phase === "message" && clean) entry.visible = "writing...";
        this.renderThoughtEntry(entry);
      },
      finishModelThoughts(requestId, visibleText) {
        let entry = this.thoughtEntries[requestId];
        if (!entry) {
          this.addModel(visibleText);
          return;
        }
        entry.visible = this.normalizeLine(this.sanitizeModelLine(visibleText), 220) || entry.visible || "I am adjusting the plan.";
        entry.done.final = true;
        this.renderThoughtEntry(entry);
      },
      failModelThoughts(requestId, message) {
        let entry = this.thoughtEntries[requestId];
        if (!entry) return;
        entry.phases.error = this.normalizeLine(message || "Gemma could not finish", 120);
        if (!entry.phases.opinion) entry.visible = "The thought broke before a clean reply.";
        this.renderThoughtEntry(entry);
      },
      toggleModelThoughts(requestId) {
        let entry = this.thoughtEntries[requestId];
        if (!entry || !entry.row) return;
        entry.open = !entry.open;
        entry.row.classList.toggle("thoughts-open", entry.open);
      },
      renderThoughtEntry(entry) {
        if (!entry) return;
        if (entry.visibleEl) entry.visibleEl.innerText = entry.visible || "...";
        if (entry.trackEl) entry.trackEl.innerText = this.buildThoughtLine(entry);
      },
      buildThoughtLine(entry) {
        let labels = {
          message: "reply",
          error: "error"
        };
        let parts = ["message", "error"].map((phase) => entry.phases[phase] ? `${labels[phase]}: ${entry.phases[phase]}` : "").filter(Boolean);
        if (parts.length === 0) return "reading map...";
        return parts.join("    //    ");
      },
      sanitizeModelLine(text) {
        let raw = String(text || "").trim();
        if (!raw) return "";
        if (!this.looksLikeModelJsonLeak(raw)) return raw;
        return raw.replace(/[{}\[\]"]/g, "").replace(/\s+/g, " ").slice(0, 220);
      },
      looksLikeModelJsonLeak(text) {
        let sample = String(text || "").trim();
        if (!sample) return false;
        if (/^[\[{]/.test(sample)) return true;
        return /"say"\s*:|"action"\s*:|"pressure"\s*:/.test(sample);
      },
      normalizeRawModelLine(text, maxLen = 1400) {
        let raw = String(text || "").replace(/\u0000/g, "").trim();
        if (!raw) return "";
        if (raw.length <= maxLen) return raw;
        return `${raw.slice(0, maxLen)} ...[truncated ${raw.length - maxLen} chars]`;
      },
      normalizeThoughtLine(text) {
        return String(text || "").replace(/\u0000/g, "").replace(/\s+/g, " ").trim();
      },
      normalizeLine(text, maxLen = 220) {
        return String(text || "").replace(/\s+/g, " ").trim().slice(0, maxLen);
      },
      writeLatest(host, text, className, lane) {
        if (!host || !text) return;
        host.classList.remove("hidden");
        let timeoutKey = lane === "player" ? "playerWriteTimeout" : lane === "system" ? "systemWriteTimeout" : "aiWriteTimeout";
        clearTimeout(this[timeoutKey]);
        let render = () => {
          host.innerHTML = "";
          let row = document.createElement("div");
          row.className = `${className} is-writing`;
          row.innerText = text;
          host.appendChild(row);
        };
        let current = host.firstElementChild;
        if (current) {
          current.classList.remove("is-writing");
          current.classList.add("is-erasing");
          this[timeoutKey] = setTimeout(render, 190);
        } else {
          render();
        }
      },
      addSystem(text) {
        let host = this.els["director-signal-log"];
        if (!host || !text) return;
        this.writeLatest(host, this.normalizeLine(text, 96), "director-signal-msg", "system");
      },
      showAction(signalName, reason) {
        let name = String(signalName || "").toLowerCase();
        let label = "move";
        if (name.includes("order")) label = "order";
        else if (name.includes("spawn") || name.includes("unit")) label = "unit";
        else if (name.includes("upgrade") || name.includes("econ") || name.includes("dmg") || name.includes("hp")) label = "upgrade";
        else if (name.includes("turret") || name.includes("slot")) label = "fort";
        else if (name.includes("evolve") || name.includes("age")) label = "age";
        else if (name.includes("special")) label = "special";
        let detail = String(reason || "new plan").replace(/\s+/g, " ").trim().slice(0, 64);
        this.addSystem(`${label}: ${detail}`);
      },
      renderMemory() {
        let host = this.els["director-memory"];
        if (host) {
          host.innerHTML = "";
          let tags = [];
          if (typeof runtime2.AIDirector !== "undefined" && runtime2.AIDirector.activeOrderFromState) {
            tags.push(`plan: ${runtime2.AIDirector.macroPlan || "balanced"} / ${runtime2.AIDirector.activeOrderFromState()}`);
          }
          tags.forEach((tag) => {
            let chip = document.createElement("span");
            chip.className = "memory-chip";
            chip.innerText = tag;
            host.appendChild(chip);
          });
        }
        this.renderCenterStatus();
        runtime2.GemmaMemory.updateInputSuggestion();
      },
      renderCenterStatus() {
        let moodWord = runtime2.normalizeGemmaEmotionWord(runtime2.GemmaMemory.data && runtime2.GemmaMemory.data.emotion || typeof runtime2.AIDirector !== "undefined" && runtime2.AIDirector.emotionWord || "Centered");
        let wordEl = this.els["emotion-word"];
        let badge = this.els["emotion-badge"];
        if (wordEl) wordEl.innerText = moodWord;
        if (badge) {
          let icon = badge.querySelector(".emotion-icon");
          if (icon) icon.innerText = this.emotionPlaceholder(moodWord);
          badge.title = `Gemma emotion: ${moodWord}`;
        }
        let strip = this.els["agreement-strip"];
        if (!strip) return;
        strip.innerHTML = "";
        let items = runtime2.DirectorMemory.agreementItems();
        if (typeof runtime2.AIDirector !== "undefined" && runtime2.globalTime < runtime2.AIDirector.restraintUntil) {
          items.push({ key: "restraint", label: `truce: ${Math.ceil(runtime2.AIDirector.restraintUntil - runtime2.globalTime)}s` });
        }
        items.forEach((item) => {
          let chip = document.createElement("button");
          chip.type = "button";
          chip.className = "agreement-chip";
          chip.title = `Remove ${item.label}`;
          chip.innerText = `${item.label} x`;
          chip.addEventListener("click", () => this.removeAgreement(item.key));
          strip.appendChild(chip);
        });
      },
      emotionPlaceholder(word) {
        let key = String(word || "").toLowerCase();
        if (/angry|furious|hostile|irritated|pissed|resentful|vindictive/.test(key)) return "!";
        if (/fear|afraid|anxious|panic|worried|scared|terrified|tense|stressed/.test(key)) return "?";
        if (/joy|happy|excited|eager|thrilled|vibrant|energized/.test(key)) return "*";
        if (/sad|despair|gloomy|grief|hopeless|lonely|weary/.test(key)) return ".";
        if (/curious|intrigued|skeptical|questioning/.test(key)) return "~";
        return "\u25C7";
      },
      removeAgreement(key) {
        if (key === "restraint") {
          if (typeof runtime2.AIDirector !== "undefined") runtime2.AIDirector.restraintUntil = 0;
        } else if (String(key || "").startsWith("note:")) {
          runtime2.DirectorMemory.removeNote(Number(String(key).slice(5)));
        } else {
          runtime2.DirectorMemory.clearAgreement(key);
        }
        runtime2.GemmaMemory.recordSystem(`Player removed agreement ${key}.`);
        this.renderMemory();
      },
      handlePlayerText(raw) {
        let message = String(raw || "").trim();
        if (!message) return;
        let playerLineId = this.add("player", message);
        runtime2.NativeGemma.queueRecentUserComment(playerLineId, message);
        runtime2.GemmaMemory.recordPlayer(message);
        let text = message.toLowerCase();
        let replies = [];
        if (/\bforget\b|clear memory|reset memory/.test(text)) {
          runtime2.DirectorMemory.clear();
          runtime2.GemmaMemory.clearAll();
          runtime2.AIDirector.restraintUntil = 0;
          replies.push("Fresh page. I dropped the saved pacts and notes.");
        }
        let rememberMatch = message.match(/\bremember\s+(.+)/i);
        if (rememberMatch && rememberMatch[1]) {
          runtime2.DirectorMemory.addNote(rememberMatch[1]);
          replies.push("Noted for later matches.");
        }
        if (/no\s+special|don'?t use special|no\s+ult/.test(text)) {
          runtime2.DirectorMemory.setAgreement("noSpecials", true);
          replies.push("Agreed: no enemy specials.");
        } else if (/specials?\s+(ok|allowed|on)|use specials?/.test(text)) {
          runtime2.DirectorMemory.setAgreement("noSpecials", false);
          replies.push("Specials are back on the page.");
        }
        if (/no\s+turret|don'?t build turret/.test(text)) {
          runtime2.DirectorMemory.setAgreement("noTurrets", true);
          replies.push("Agreed: I will not buy enemy turrets.");
        } else if (/turrets?\s+(ok|allowed|on)|build turrets?/.test(text)) {
          runtime2.DirectorMemory.setAgreement("noTurrets", false);
          replies.push("Turrets are allowed again.");
        }
        if (/melee only|no ranged|only melee/.test(text)) {
          runtime2.DirectorMemory.setAgreement("meleeOnly", true);
          replies.push("Agreed: enemy unit buys avoid ranged units.");
        } else if (/all units|ranged ok|anything goes|use ranged/.test(text)) {
          runtime2.DirectorMemory.setAgreement("meleeOnly", false);
          replies.push("All enemy unit types are available again.");
        }
        if (/truce|pause attacks|give me/.test(text)) {
          let secondsMatch = text.match(/(\d{1,2})\s*(sec|second)/);
          let seconds = secondsMatch ? Math.max(10, Math.min(60, parseInt(secondsMatch[1], 10))) : 30;
          runtime2.AIDirector.setRestraint(seconds);
          replies.push(`Truce: no new enemy troops or specials for ${seconds}s. Troops already on the page keep fighting.`);
        }
        this.renderMemory();
        if (replies.length) {
          let localNote = replies.join(" ");
          runtime2.GemmaMemory.recordSystem(`Local pact update: ${localNote}`);
          this.addSystem(localNote);
        }
        let requested = runtime2.NativeGemma.requestTurn("player_chat", message, { userLineId: playerLineId });
        if (!requested && (!runtime2.NativeGemma.available || !["ready", "installed", "loading", "downloading"].includes(runtime2.NativeGemma.status.state || ""))) {
          setTimeout(() => this.add("ai", replies.join(" ") || "I heard you. I will keep reading the lane and adapt."), 400);
        }
      }
    };
    function submitDirectorChat(event) {
      event.preventDefault();
      let input = DirectorPanel.els["director-input"];
      if (!input) return;
      DirectorPanel.handlePlayerText(input.value);
      input.value = "";
    }
    function toggleDirectorPanel() {
      let hud = DirectorPanel.els["ai-hud"];
      if (hud) hud.classList.toggle("hidden");
    }
    function toggleMusicMute() {
      runtime2.MusicDirector.toggleMute();
    }
    function togglePause(forceState) {
      if (!runtime2.gameState || !runtime2.gameState.running) return;
      runtime2.session.pause(typeof forceState === "boolean" ? forceState : !runtime2.gameState.paused);
      runtime2.gameState.paused = runtime2.session.paused;
      let overlay = document.getElementById("pause-overlay");
      let btn = DirectorPanel.els["btn-pause"];
      if (overlay) overlay.classList.toggle("hidden", !runtime2.gameState.paused);
      if (btn) btn.innerText = runtime2.gameState.paused ? "Resume" : "Pause";
      runtime2.MusicDirector.setDucked(runtime2.gameState.paused);
      if (!runtime2.gameState.paused) runtime2.lastTime = performance.now();
    }
    return { DirectorPanel, submitDirectorChat, toggleDirectorPanel, toggleMusicMute, togglePause };
  }

  // src/client/commander.js
  function createCommander(runtime2) {
    const AIDirector = {
      emotionWord: "Centered",
      emotionUntil: 0,
      emotionReply: "",
      macroPlan: "balanced",
      localOrder: "balanced",
      lastPlayerAge: 0,
      lastEnemyAge: 0,
      lowHpWarned: false,
      lastCommentKey: "",
      chatTimer: 4,
      gemmaTimer: 12,
      get restraintUntil() {
        return runtime2.session ? runtime2.session.observe().restraintUntil / 60 : 0;
      },
      set restraintUntil(value) {
        if (runtime2.session && value === 0) runtime2.session.truce(0);
      },
      start(diff) {
        this.chatTimer = 4;
        this.gemmaTimer = 12;
        runtime2.DirectorPanel.start(diff);
      },
      tick(dt) {
        if (!runtime2.gameState.enemy) return;
        this.localOrder = runtime2.gameState.opponent.order;
        this.macroPlan = this.localOrder;
        this.chatTimer -= dt;
        this.gemmaTimer -= dt;
        const snapshot = this.snapshot();
        this.maybeMilestoneChat(snapshot);
        if (this.chatTimer <= 0) {
          this.chatTimer = 12;
          this.comment(snapshot);
          runtime2.DirectorPanel.renderMemory();
        }
        if (this.gemmaTimer <= 0) {
          this.gemmaTimer = 26;
          runtime2.NativeGemma.requestTurn("periodic_director_turn");
        }
      },
      setRestraint(seconds) {
        runtime2.session?.truce(seconds);
      },
      activeOrderFromState() {
        return this.localOrder;
      },
      acceptGemmaEmotion(emotion, requestId = "", reply = "") {
        this.emotionWord = runtime2.normalizeGemmaEmotionWord(emotion);
        this.emotionReply = reply;
        runtime2.session?.emotion(this.emotionWord);
        this.emotionUntil = runtime2.globalTime + 40;
        return this.emotionWord;
      },
      snapshot() {
        let ai = runtime2.gameState.enemy;
        let player = runtime2.gameState.player;
        let playerUnits = 0, enemyUnits = 0, threatCount = 0;
        let playerMelee = 0, playerRanged = 0, playerHeavy = 0;
        let enemyMelee = 0, enemyRanged = 0, enemyHeavy = 0;
        let playerValue = 0, enemyValue = 0, threatValue = 0;
        let playerNames = /* @__PURE__ */ Object.create(null), enemyNames = /* @__PURE__ */ Object.create(null);
        let heavyThreat = false, closestThreatDist = Infinity, closestThreatType = "none";
        let playerFront = BASE_WIDTH, enemyFront = CANVAS_WIDTH - BASE_WIDTH;
        for (let i = 0; i < runtime2.gameState.units.pool.length; i++) {
          let u = runtime2.gameState.units.pool[i];
          if (!u.active || u.hp <= 0 || u.drawProgress < 0.5) continue;
          let unitData = AGES[u.age] && AGES[u.age].units ? AGES[u.age].units[u.uType] : null;
          let value = unitData ? unitData.cost : u.maxHp || 1;
          if (u.team === 1) {
            playerUnits++;
            if (u.type === "ranged") playerRanged++;
            else if (u.type === "heavy") playerHeavy++;
            else playerMelee++;
            playerValue += value;
            playerNames[u.name || u.type] = (playerNames[u.name || u.type] || 0) + 1;
            playerFront = Math.max(playerFront, u.x);
            let dist = CANVAS_WIDTH - BASE_WIDTH - u.x;
            if (dist < closestThreatDist) {
              closestThreatDist = dist;
              closestThreatType = u.type || "unit";
            }
            if (dist < 620) {
              threatCount++;
              threatValue += value;
            }
            if (dist < 620 && u.type === "heavy") heavyThreat = true;
          } else {
            enemyUnits++;
            if (u.type === "ranged") enemyRanged++;
            else if (u.type === "heavy") enemyHeavy++;
            else enemyMelee++;
            enemyValue += value;
            enemyNames[u.name || u.type] = (enemyNames[u.name || u.type] || 0) + 1;
            enemyFront = Math.min(enemyFront, u.x);
          }
        }
        let evolveNeed = AGES[ai.age] && AGES[ai.age].evolveXP ? AGES[ai.age].evolveXP : 1;
        let describeNames = (names) => Object.keys(names).sort((a, b) => names[b] - names[a]).slice(0, 4).map((name) => `${names[name]} ${name}`).join(", ") || "none";
        let turretProfile = (state) => {
          let ageData = AGES[state.age];
          let count = 0, dps = 0, range = 0;
          for (let i = 0; i < state.turrets.length; i++) {
            let idx = state.turrets[i];
            if (idx === null || idx === void 0 || i >= state.unlockedSlots) continue;
            let turret = ageData.turrets[idx];
            if (!turret) continue;
            count++;
            dps += turret.dmg / Math.max(0.1, turret.attackSpeed || 1);
            range = Math.max(range, turret.range || 0);
          }
          return { count, dps, range };
        };
        let playerTurrets = turretProfile(player);
        let enemyTurrets = turretProfile(ai);
        return {
          playerUnits,
          enemyUnits,
          threatCount,
          heavyThreat,
          playerMelee,
          playerRanged,
          playerHeavy,
          enemyMelee,
          enemyRanged,
          enemyHeavy,
          playerValue,
          enemyValue,
          threatValue,
          closestThreatType,
          playerProfile: describeNames(playerNames),
          enemyProfile: describeNames(enemyNames),
          playerTurretCount: playerTurrets.count,
          playerTurretDps: playerTurrets.dps,
          playerTurretRange: playerTurrets.range,
          enemyTurretCount: enemyTurrets.count,
          enemyTurretDps: enemyTurrets.dps,
          enemyTurretRange: enemyTurrets.range,
          closestThreatDist: Number.isFinite(closestThreatDist) ? closestThreatDist : 9999,
          lanePressure: playerFront - (CANVAS_WIDTH - enemyFront),
          playerFrontX: Math.round(playerFront),
          enemyFrontX: Math.round(enemyFront),
          frontGap: Math.max(0, Math.round(enemyFront - playerFront)),
          playerHpRatio: player.hp / player.maxHp,
          enemyHpRatio: ai.hp / ai.maxHp,
          enemyGold: ai.gold,
          playerGold: player.gold,
          enemyAge: ai.age,
          playerAge: player.age,
          enemyXpRatio: ai.age >= AGES.length - 1 ? 1 : Math.max(0, Math.min(1, ai.xp / evolveNeed)),
          emotion: this.emotionWord || runtime2.GemmaMemory.data && runtime2.GemmaMemory.data.emotion || "Centered",
          macroPlan: this.macroPlan || "balanced",
          engineOrder: this.activeOrderFromState(),
          restrained: runtime2.globalTime < this.restraintUntil
        };
      },
      maybeMilestoneChat(snapshot) {
        let gemmaOwnsChat = runtime2.NativeGemma.ownsVisibleChat();
        if (runtime2.gameState.player.age !== this.lastPlayerAge) {
          this.lastPlayerAge = runtime2.gameState.player.age;
          let line = `You reached ${AGES[runtime2.gameState.player.age].name}. I am updating the counter-plan.`;
          if (!gemmaOwnsChat) runtime2.DirectorPanel.add("ai", line);
          runtime2.GemmaMemory.recordSystem(line);
        }
        if (runtime2.gameState.enemy.age !== this.lastEnemyAge) {
          this.lastEnemyAge = runtime2.gameState.enemy.age;
          runtime2.DirectorPanel.showAction("evolve_enemy", AGES[runtime2.gameState.enemy.age].name);
          runtime2.GemmaMemory.recordSystem(`Enemy evolved to ${AGES[runtime2.gameState.enemy.age].name}.`);
        }
        if (snapshot.enemyHpRatio < 0.25 && !this.lowHpWarned) {
          this.lowHpWarned = true;
          let line = "My base is down to the margin. Expect defensive spending.";
          if (!gemmaOwnsChat) runtime2.DirectorPanel.add("ai", line);
          runtime2.GemmaMemory.recordSystem(line);
        }
      },
      comment(snapshot) {
        if (runtime2.NativeGemma.ownsVisibleChat()) return;
        let a = runtime2.DirectorMemory.data.agreements;
        let order = this.activeOrderFromState();
        let orderLines = {
          press: ["I am keeping the lane busy; quiet gold is wasted pressure.", "Your front is too far out. I am forcing contact."],
          defend: ["You are close enough that I have to stabilize before I swing back.", "Base first, counterpush second. I am buying time."],
          counter: ["I am reading your unit mix and changing the answer, not just spamming.", "That composition has a weakness. I am moving into the counter."],
          tech: ["I can afford a slower minute, so I am turning it into economy and age timing.", "You gave me room; I am converting it into tech."],
          swarm: ["I am not waiting for a perfect unit. I am filling the lane now.", "Cheap bodies first; the timing matters more than elegance."],
          heavy: ["I am holding enough gold for a heavier hit.", "The next swing is being banked, not missed."],
          hold: ["I am not spending into a bad trade unless you force me.", "I am letting the position breathe until there is a better punish."],
          fortify: ["I am turning the right side into a harder target.", "You will have to pay for every step near my base."],
          special: ["I am watching for the special timing, not wasting it early.", "If you stack too tightly, I have the clear ready."]
        };
        let lines = orderLines[order] || [];
        if (lines.length && this.lastCommentKey !== order) {
          this.lastCommentKey = order;
          runtime2.DirectorPanel.add("ai", lines[Math.floor(Math.random() * lines.length)]);
          return;
        }
        if (snapshot.restrained) {
          runtime2.DirectorPanel.add("ai", "Truce timer is still active. I am using the quiet turns for upgrades.");
        } else if (a.noSpecials || a.noTurrets || a.meleeOnly) {
          runtime2.DirectorPanel.add("ai", `Pacts still active: ${runtime2.DirectorMemory.tags().join(", ")}.`);
        } else if (snapshot.threatCount >= 4) {
          runtime2.DirectorPanel.add("ai", "Your line is stacked near my base. I am spending defensively.");
        } else {
          runtime2.DirectorPanel.add("ai", "I am watching age timing, gold float, and front-line distance.");
        }
      }
    };
    return { AIDirector };
  }

  // src/client/audio.js
  function createAudio(runtime2) {
    const MUSIC_STORAGE_KEY = "inkBattle.musicMuted.v1";
    const MUSIC_LIBRARY_VERSION = "global-v2";
    const MUSIC_DEFAULT_TRACK = "evolvingCanvas";
    const MUSIC_SOURCE_EXTENSIONS = ["mp3", "ogg", "wav"];
    const MUSIC_CROSSFADE_CURVE_STEPS = 96;
    const MUSIC_IDLE_RELEASE_MS = 45e3;
    const MUSIC_SILENCE_EPSILON = 1e-3;
    const MUSIC_TRACKS = [
      {
        id: "evolvingCanvas",
        title: "The Evolving Canvas",
        file: "evolving_canvas",
        variants: ["evolving_canvas", "evolving_canvas_v2", "evolving_canvas_v3", "evolving_canvas_v4", "evolving_canvas_v5", "evolving_canvas_v6"],
        scene: "battle",
        roles: ["ink-battle", "active-fight", "progression", "age", "all-purpose", "fallback"],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0.18,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 16,
        priority: 84,
        fallback: true,
        classicBattle: true
      },
      {
        id: "pencilDawn",
        title: "Pencil Dawn",
        file: "pencil_dawn",
        variants: ["pencil_dawn", "pencil_dawn_v2"],
        scene: "opening",
        roles: ["stone-age", "opening", "low-tension"],
        ageMin: 0,
        ageMax: 1,
        tensionMin: 0,
        tensionMax: 0.38,
        loop: true,
        volume: 0.58,
        minPlaySec: 28,
        priority: 80
      },
      {
        id: "graphiteSkirmish",
        title: "Graphite Skirmish",
        file: "graphite_skirmish",
        variants: ["graphite_skirmish", "graphite_skirmish_v2", "graphite_skirmish_v3", "graphite_skirmish_v4", "graphite_skirmish_v5", "graphite_skirmish_v6", "graphite_skirmish_v7", "graphite_skirmish_v8"],
        scene: "battle",
        roles: ["early-game", "mid-game", "pressure"],
        ageMin: 0,
        ageMax: 2,
        tensionMin: 0.22,
        tensionMax: 0.72,
        loop: true,
        volume: 0.62,
        minPlaySec: 32,
        priority: 82
      },
      {
        id: "inklineAdvance",
        title: "Inkline Advance",
        file: "inkline_advance",
        variants: ["inkline_advance", "inkline_advance_v2", "inkline_advance_v3", "inkline_advance_v4", "inkline_advance_v5", "inkline_advance_v6"],
        scene: "pressure",
        roles: ["early-game", "lane-pressure", "fast-units"],
        ageMin: 0,
        ageMax: 2,
        tensionMin: 0.52,
        tensionMax: 1,
        loop: true,
        volume: 0.64,
        minPlaySec: 30,
        priority: 86
      },
      {
        id: "castleMarch",
        title: "Castle March",
        file: "castle_march",
        variants: ["castle_march", "castle_march_v2"],
        scene: "battle",
        roles: ["castle-age", "iron-age", "steady-battle"],
        ageMin: 1,
        ageMax: 2,
        tensionMin: 0.16,
        tensionMax: 0.68,
        loop: true,
        volume: 0.62,
        minPlaySec: 34,
        priority: 78
      },
      {
        id: "renaissanceRush",
        title: "Renaissance Rush",
        file: "renaissance_rush",
        variants: ["renaissance_rush", "renaissance_rush_v2"],
        scene: "battle",
        roles: ["renaissance", "momentum", "snare-march"],
        ageMin: 2,
        ageMax: 3,
        tensionMin: 0.28,
        tensionMax: 0.82,
        loop: true,
        volume: 0.65,
        minPlaySec: 34,
        priority: 84
      },
      {
        id: "cannonSmoke",
        title: "Cannon Smoke",
        file: "cannon_smoke",
        variants: ["cannon_smoke", "cannon_smoke_v2"],
        scene: "siege",
        roles: ["turrets", "specials", "base-pressure"],
        ageMin: 2,
        ageMax: 4,
        tensionMin: 0.58,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 34,
        priority: 90
      },
      {
        id: "modernWarfare",
        title: "Modern Warfare",
        file: "modern_warfare",
        variants: ["modern_warfare", "modern_warfare_v2"],
        scene: "battle",
        roles: ["modern-age", "electric-guitar", "orchestral-drop"],
        ageMin: 3,
        ageMax: 3,
        tensionMin: 0.26,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 36,
        priority: 86
      },
      {
        id: "futureArpeggio",
        title: "Future Arpeggio",
        file: "future_arpeggio",
        variants: ["future_arpeggio", "future_arpeggio_v2"],
        scene: "future",
        roles: ["future-age", "synth", "tech-window"],
        ageMin: 4,
        ageMax: 4,
        tensionMin: 0.12,
        tensionMax: 0.72,
        loop: true,
        volume: 0.62,
        minPlaySec: 34,
        priority: 82
      },
      {
        id: "neonFront",
        title: "Neon Front",
        file: "neon_front",
        variants: ["neon_front", "neon_front_v2"],
        scene: "pressure",
        roles: ["future-age", "high-pressure", "cyber-drums"],
        ageMin: 4,
        ageMax: 5,
        tensionMin: 0.52,
        tensionMax: 1,
        loop: true,
        volume: 0.68,
        minPlaySec: 34,
        priority: 89
      },
      {
        id: "cosmicClash",
        title: "Cosmic Clash",
        file: "cosmic_clash",
        variants: ["cosmic_clash", "cosmic_clash_v2"],
        scene: "cosmic",
        roles: ["cosmic-age", "choir", "final-battle"],
        ageMin: 5,
        ageMax: 5,
        tensionMin: 0.18,
        tensionMax: 1,
        loop: true,
        volume: 0.7,
        minPlaySec: 42,
        priority: 92
      },
      {
        id: "lastPageSiege",
        title: "Last Page Siege",
        file: "last_page_siege",
        variants: ["last_page_siege", "last_page_siege_v2"],
        scene: "siege",
        roles: ["critical-base-hp", "deathball", "endgame-pressure"],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0.76,
        tensionMax: 1,
        loop: true,
        volume: 0.72,
        minPlaySec: 32,
        priority: 105,
        urgent: true
      },
      {
        id: "codexGemma",
        title: "Codex Gemma",
        file: "codex_gemma",
        variants: ["codex_gemma", "codex_gemma_v2"],
        scene: "menu",
        roles: ["director", "pause", "memory"],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0,
        tensionMax: 0.45,
        loop: true,
        volume: 0.48,
        minPlaySec: 20,
        priority: 75
      },
      {
        id: "victoryCanvas",
        title: "Victory Canvas",
        file: "victory_canvas",
        variants: ["victory_canvas", "victory_canvas_v2"],
        scene: "victory",
        roles: ["victory", "results"],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0,
        tensionMax: 1,
        loop: true,
        volume: 0.58,
        minPlaySec: 20,
        priority: 120,
        outcome: "victory"
      },
      {
        id: "erasedPages",
        title: "Erased Pages",
        file: "erased_pages",
        variants: ["erased_pages", "erased_pages_v2"],
        scene: "defeat",
        roles: ["defeat", "results"],
        ageMin: 0,
        ageMax: 5,
        tensionMin: 0,
        tensionMax: 1,
        loop: true,
        volume: 0.54,
        minPlaySec: 20,
        priority: 120,
        outcome: "defeat"
      }
    ];
    const MusicDirector = {
      tracks: {},
      activeId: null,
      pendingId: null,
      started: false,
      muted: false,
      suspended: false,
      ducked: false,
      outcome: null,
      masterVolume: 0.72,
      fadeMs: 1600,
      idleReleaseMs: MUSIC_IDLE_RELEASE_MS,
      decisionTimer: 0,
      lastSwitchAt: -999,
      transitionToken: 0,
      audioContext: null,
      masterGainNode: null,
      mixerUnavailable: false,
      elementMixer: false,
      recentIds: [],
      signals: { tension: 0, playerAge: 0, enemyAge: 0, troopPressure: 0 },
      init() {
        this.elementMixer = this.shouldUseElementMixer();
        this.mixerUnavailable = this.elementMixer;
        try {
          this.muted = localStorage.getItem(MUSIC_STORAGE_KEY) === "1";
        } catch (e) {
          this.muted = false;
        }
        for (let i = 0; i < MUSIC_TRACKS.length; i++) {
          let config = MUSIC_TRACKS[i];
          let audio = new Audio();
          audio.preload = config.preload || "none";
          audio.loop = config.loop !== false;
          let entry = {
            config,
            audio,
            variantSources: this.buildVariantSources(config),
            variantBag: [],
            failedVariants: /* @__PURE__ */ new Set(),
            activeVariantIndex: -1,
            lastVariantIndex: -1,
            sources: [],
            sourceIndex: 0,
            failed: false,
            blocked: false,
            fadeToken: 0,
            playToken: 0,
            releaseTimer: 0,
            fadeTimer: 0,
            fadeFrame: 0,
            fadeStartedAt: 0,
            fadeDurationMs: 0,
            fadeStartVolume: 0,
            fadeTargetVolume: 0,
            currentVolume: 0,
            mediaNode: null,
            gainNode: null,
            webAudioFailed: false
          };
          audio.addEventListener("error", () => {
            if (this.pendingId === config.id) return;
            this.markVariantFailed(entry, entry.activeVariantIndex);
            if (!entry.failed && this.activeId === config.id) {
              this.play(config.id, { fadeMs: 500, force: true, reason: "variant_error", newVariant: true });
            } else if (entry.failed && this.activeId === config.id) {
              this.playFallback({ fadeMs: 800, reason: "active_error" }, config.id);
            }
            this.updateButton();
          });
          this.tracks[config.id] = entry;
        }
        this.updateButton();
      },
      buildSourceCandidates(base) {
        return MUSIC_SOURCE_EXTENSIONS.map((ext) => `assets/audio/${base}.${ext}`);
      },
      buildVariantSources(config) {
        let groups = [];
        let addGroup = (sources) => {
          if (!Array.isArray(sources) || !sources.length) return;
          groups.push(sources.slice());
        };
        if (Array.isArray(config.variants) && config.variants.length) {
          for (let i = 0; i < config.variants.length; i++) {
            let variant = config.variants[i];
            if (typeof variant === "string" && variant) {
              addGroup(this.buildSourceCandidates(variant));
              continue;
            }
            if (Array.isArray(variant) && variant.length) {
              addGroup(variant);
              continue;
            }
            if (variant && typeof variant === "object") {
              if (Array.isArray(variant.sources) && variant.sources.length) {
                addGroup(variant.sources);
                continue;
              }
              if (typeof variant.file === "string" && variant.file) {
                addGroup(this.buildSourceCandidates(variant.file));
              }
            }
          }
        } else if (Array.isArray(config.files) && config.files.length) {
          for (let i = 0; i < config.files.length; i++) {
            if (typeof config.files[i] === "string" && config.files[i]) {
              addGroup(this.buildSourceCandidates(config.files[i]));
            }
          }
        } else if (Array.isArray(config.sources) && config.sources.length) {
          addGroup(config.sources);
        }
        if (!groups.length) {
          let base = config.file || config.id;
          addGroup(this.buildSourceCandidates(base));
        }
        return groups;
      },
      refillVariantBag(entry) {
        if (!entry) return;
        let bag = [];
        for (let i = 0; i < entry.variantSources.length; i++) {
          if (!entry.failedVariants.has(i)) bag.push(i);
        }
        for (let i = bag.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = bag[i];
          bag[i] = bag[j];
          bag[j] = temp;
        }
        if (bag.length > 1 && entry.lastVariantIndex >= 0 && bag[0] === entry.lastVariantIndex) {
          let swapIndex = 1 + Math.floor(Math.random() * (bag.length - 1));
          let temp = bag[0];
          bag[0] = bag[swapIndex];
          bag[swapIndex] = temp;
        }
        entry.variantBag = bag;
      },
      markVariantFailed(entry, variantIndex) {
        if (!entry || variantIndex === void 0 || variantIndex === null || variantIndex < 0) return;
        entry.failedVariants.add(variantIndex);
        if (entry.variantBag && entry.variantBag.length) {
          entry.variantBag = entry.variantBag.filter((index) => index !== variantIndex);
        }
        entry.failed = entry.failedVariants.size >= entry.variantSources.length;
      },
      chooseVariant(entry, options = {}) {
        if (!entry || !entry.variantSources.length) return false;
        if (options.keepCurrent && entry.activeVariantIndex >= 0 && !entry.failedVariants.has(entry.activeVariantIndex)) {
          entry.sources = entry.variantSources[entry.activeVariantIndex];
          entry.sourceIndex = Math.max(0, Math.min(entry.sourceIndex || 0, entry.sources.length - 1));
          entry.failed = false;
          return entry.sources.length > 0;
        }
        if (!entry.variantBag || !entry.variantBag.length) this.refillVariantBag(entry);
        if (!entry.variantBag || !entry.variantBag.length) {
          entry.failed = true;
          return false;
        }
        entry.activeVariantIndex = entry.variantBag.shift();
        entry.lastVariantIndex = entry.activeVariantIndex;
        entry.sources = entry.variantSources[entry.activeVariantIndex];
        entry.sourceIndex = 0;
        entry.failed = false;
        this.cancelRelease(entry);
        this.cancelFade(entry);
        this.setOutputVolume(entry, 0);
        entry.audio.pause();
        entry.audio.removeAttribute("src");
        entry.audio.load();
        return entry.sources.length > 0;
      },
      start(reason = "game_start") {
        this.started = true;
        this.suspended = false;
        this.ducked = false;
        this.outcome = null;
        this.pendingId = null;
        this.decisionTimer = 0;
        this.recentIds = [];
        this.setSignals(this.readSignals());
        this.resumeMixer();
        this.fadeOutAll(0, true);
        this.play(MUSIC_DEFAULT_TRACK, { fadeMs: 900, force: true, reason });
      },
      update(dt) {
        if (!this.started || this.outcome || this.muted || this.suspended || !runtime2.gameState || !runtime2.gameState.running || runtime2.gameState.paused) return;
        this.decisionTimer -= dt;
        if (this.decisionTimer > 0) return;
        this.decisionTimer = 2.25;
        let signals = this.readSignals();
        this.setSignals(signals);
        let target = this.chooseTrack(signals, { reason: "flow" });
        if (target && target !== this.activeId) {
          this.play(target, { reason: "flow" });
        } else {
          this.refreshActiveVolume();
        }
      },
      setSignals(partial) {
        this.signals = Object.assign({}, this.signals, partial || {});
      },
      setScene(scene, reason = "scene") {
        let target = this.chooseScene(scene);
        return target ? this.play(target, { fadeMs: 850, force: true, reason }) : false;
      },
      setOutcome(won) {
        this.outcome = won ? "victory" : "defeat";
        this.ducked = false;
        this.play(won ? "victoryCanvas" : "erasedPages", { fadeMs: 1400, force: true, reason: this.outcome });
      },
      play(id, options = {}) {
        let entry = this.tracks[id];
        if (!entry || entry.failed) return this.playFallback(options, id);
        if (this.pendingId === id) return true;
        let fadeMs = options.fadeMs === void 0 ? this.fadeMs : options.fadeMs;
        if (!options.newVariant && this.activeId === id && !entry.audio.paused) {
          this.refreshActiveVolume();
          this.updateButton();
          return true;
        }
        if (!options.force && !this.canSwitchTo(entry)) return false;
        if (this.muted || this.suspended) {
          this.activeId = id;
          this.pendingId = null;
          this.transitionToken++;
          this.fadeOutAll(0, true);
          this.updateButton();
          return false;
        }
        let token = ++this.transitionToken;
        let previousPending = this.pendingId && this.pendingId !== id ? this.tracks[this.pendingId] : null;
        this.pendingId = null;
        if (previousPending && previousPending !== entry && previousPending.config.id !== this.activeId) {
          this.cancelEntryStart(previousPending);
          this.fadeOut(previousPending, Math.min(300, fadeMs || 300), true);
        }
        this.resumeMixer();
        let previous = this.activeId && this.activeId !== id ? this.tracks[this.activeId] : null;
        if (previous && !previous.audio.paused) this.fadeTo(previous, this.targetVolume(previous), Math.min(500, fadeMs || 500));
        let rotateVariant = options.newVariant === void 0 ? this.activeId !== id : !!options.newVariant;
        this.pendingId = id;
        this.startEntry(entry, { newVariant: rotateVariant }).then((ok) => {
          if (this.transitionToken !== token || this.pendingId !== id) {
            if (entry.config.id !== this.activeId) this.fadeOut(entry, Math.min(250, fadeMs || 250), true);
            return;
          }
          if (!ok) {
            if (this.pendingId === id) this.pendingId = null;
            this.playFallback(options, id);
            return;
          }
          this.pendingId = null;
          this.activeId = id;
          this.lastSwitchAt = runtime2.globalTime;
          this.rememberTrack(id);
          this.cancelRelease(entry);
          this.fadeTo(entry, this.targetVolume(entry), fadeMs);
          if (previous) this.fadeOut(previous, fadeMs, true);
          this.updateButton();
        });
        this.updateButton();
        return true;
      },
      toggleMute() {
        this.muted = !this.muted;
        try {
          localStorage.setItem(MUSIC_STORAGE_KEY, this.muted ? "1" : "0");
        } catch (e) {
        }
        if (this.muted) {
          this.transitionToken++;
          this.pendingId = null;
          this.fadeOutAll(350, true);
        } else if (this.started && this.activeId) {
          this.resumeMixer();
          this.play(this.activeId, { fadeMs: 650, force: true, reason: "unmute" });
        } else if (this.started) {
          this.resumeMixer();
          this.play(this.chooseTrack(this.readSignals(), { force: true, reason: "unmute" }) || MUSIC_DEFAULT_TRACK, { fadeMs: 650, force: true, reason: "unmute" });
        }
        this.updateButton();
      },
      setDucked(ducked) {
        this.ducked = !!ducked;
        if (this.ducked && this.started && !this.suspended && !this.muted) {
          if (this.setScene("menu", "pause")) return;
        } else if (!this.ducked && this.started && !this.outcome) {
          this.decisionTimer = 0;
          this.update(0);
        }
        this.refreshActiveVolume();
      },
      suspendForPage() {
        if (!this.started || this.suspended) return;
        this.suspended = true;
        this.transitionToken++;
        this.pendingId = null;
        this.fadeOutAll(0, true);
      },
      resumeForPage() {
        if (!this.suspended) return;
        this.suspended = false;
        if (this.started && this.activeId && !this.muted) {
          this.resumeMixer();
          this.play(this.activeId, { fadeMs: 700, force: true, reason: "page_visible" });
        }
      },
      startEntry(entry, options = {}) {
        return new Promise((resolve) => {
          if (!entry || entry.failed || this.muted || this.suspended) {
            resolve(false);
            return;
          }
          let playToken = ++entry.playToken;
          this.cancelRelease(entry);
          this.resumeMixer();
          if (!this.chooseVariant(entry, { keepCurrent: !options.newVariant })) {
            entry.failed = true;
            resolve(false);
            return;
          }
          if (!this.ensureSource(entry)) {
            this.markVariantFailed(entry, entry.activeVariantIndex);
            if (!this.chooseVariant(entry, { keepCurrent: false }) || !this.ensureSource(entry)) {
              entry.failed = true;
              resolve(false);
              return;
            }
          }
          let audio = entry.audio;
          let settled = false;
          let retrying = false;
          let settle = (ok) => {
            if (settled) return;
            settled = true;
            audio.removeEventListener("error", onError);
            if (entry.playToken !== playToken) {
              resolve(false);
              return;
            }
            resolve(ok);
          };
          let retry = () => {
            if (settled || retrying) return;
            retrying = true;
            audio.removeEventListener("error", onError);
            if (entry.playToken !== playToken) {
              settle(false);
              return;
            }
            if (this.advanceSource(entry)) {
              settled = true;
              this.startEntry(entry, { newVariant: false }).then(resolve);
            } else {
              entry.failed = true;
              settle(false);
            }
          };
          let onError = () => retry();
          audio.addEventListener("error", onError);
          audio.loop = entry.config.loop !== false;
          this.prepareOutput(entry);
          this.setOutputVolume(entry, 0);
          let playPromise = null;
          try {
            playPromise = audio.play();
          } catch (e) {
            retry();
            return;
          }
          if (playPromise && typeof playPromise.then === "function") {
            playPromise.then(() => {
              entry.failed = false;
              entry.blocked = false;
              settle(true);
            }).catch((error) => {
              if (error && error.name === "NotAllowedError") {
                entry.blocked = true;
                settle(false);
              } else {
                retry();
              }
            });
          } else {
            setTimeout(() => settle(!audio.paused || audio.readyState >= 2), 120);
          }
          setTimeout(() => {
            if (!settled && audio.readyState >= 2 && !audio.error) settle(true);
          }, 2400);
        });
      },
      ensureSource(entry) {
        if (!entry || !entry.sources.length) return false;
        this.cancelRelease(entry);
        if (entry.audio.getAttribute("src")) return true;
        entry.sourceIndex = Math.max(0, Math.min(entry.sourceIndex || 0, entry.sources.length - 1));
        entry.audio.src = entry.sources[entry.sourceIndex];
        entry.audio.load();
        return true;
      },
      advanceSource(entry) {
        if (!entry) return false;
        entry.sourceIndex = (entry.sourceIndex || 0) + 1;
        this.cancelRelease(entry);
        this.cancelFade(entry);
        this.setOutputVolume(entry, 0);
        entry.audio.pause();
        entry.audio.removeAttribute("src");
        entry.audio.load();
        if (entry.sourceIndex < entry.sources.length) {
          entry.audio.src = entry.sources[entry.sourceIndex];
          entry.audio.load();
          return true;
        }
        this.markVariantFailed(entry, entry.activeVariantIndex);
        if (!this.chooseVariant(entry, { keepCurrent: false })) return false;
        if (!this.ensureSource(entry)) {
          this.markVariantFailed(entry, entry.activeVariantIndex);
          return this.advanceSource(entry);
        }
        return true;
      },
      playFallback(options = {}, blockedId = "") {
        let active = this.activeId ? this.tracks[this.activeId] : null;
        if (!options.force && active && active.config.id !== blockedId && !active.failed && !active.audio.paused) {
          this.refreshActiveVolume();
          return false;
        }
        let fallback = this.tracks[MUSIC_DEFAULT_TRACK] && !this.tracks[MUSIC_DEFAULT_TRACK].failed ? MUSIC_DEFAULT_TRACK : "";
        if (!fallback) {
          for (let i = 0; i < MUSIC_TRACKS.length; i++) {
            let id = MUSIC_TRACKS[i].id;
            if (id !== blockedId && this.tracks[id] && !this.tracks[id].failed) {
              fallback = id;
              break;
            }
          }
        }
        if (!fallback || fallback === blockedId) return false;
        return this.play(fallback, Object.assign({}, options, { force: true, reason: "fallback" }));
      },
      canSwitchTo(entry) {
        if (!entry || !this.activeId || this.activeId === entry.config.id) return true;
        if (entry.config.urgent || entry.config.outcome) return true;
        let active = this.tracks[this.activeId];
        let minPlay = active && active.config ? active.config.minPlaySec || 24 : 24;
        return runtime2.globalTime - this.lastSwitchAt >= minPlay;
      },
      chooseTrack(signals, options = {}) {
        if (this.outcome) return this.outcome === "victory" ? "victoryCanvas" : "erasedPages";
        let bestId = "";
        let bestScore = -Infinity;
        for (let i = 0; i < MUSIC_TRACKS.length; i++) {
          let config = MUSIC_TRACKS[i];
          let entry = this.tracks[config.id];
          if (!entry || entry.failed || entry.blocked || config.outcome || config.scene === "menu") continue;
          let score = this.scoreTrack(config, signals);
          if (config.scene === "opening" && signals.elapsed < 38) score += 26;
          if (config.scene === "opening" && signals.elapsed >= 55) score -= 40;
          if (config.scene === "opening" && signals.activeFight) score -= 34;
          if (config.urgent && signals.tension > 0.74) score += 35;
          if (this.recentIds.includes(config.id)) score -= 34 - Math.min(18, this.recentIds.indexOf(config.id) * 6);
          if (this.activeId === config.id) score += 10;
          if (options.force && config.id === MUSIC_DEFAULT_TRACK) score += 4;
          if (score > bestScore) {
            bestScore = score;
            bestId = config.id;
          }
        }
        return bestId || MUSIC_DEFAULT_TRACK;
      },
      chooseScene(scene) {
        let bestId = "";
        let bestScore = -Infinity;
        for (let i = 0; i < MUSIC_TRACKS.length; i++) {
          let config = MUSIC_TRACKS[i];
          let entry = this.tracks[config.id];
          if (!entry || entry.failed || entry.blocked || config.scene !== scene) continue;
          let score = (config.priority || 0) - (this.recentIds.includes(config.id) ? 20 : 0);
          if (score > bestScore) {
            bestScore = score;
            bestId = config.id;
          }
        }
        return bestId || MUSIC_DEFAULT_TRACK;
      },
      scoreTrack(config, signals) {
        let age = signals.maxAge || 0;
        let tension = signals.tension || 0;
        let ageMin = config.ageMin === void 0 ? 0 : config.ageMin;
        let ageMax = config.ageMax === void 0 ? AGES.length - 1 : config.ageMax;
        let tensionMin = config.tensionMin === void 0 ? 0 : config.tensionMin;
        let tensionMax = config.tensionMax === void 0 ? 1 : config.tensionMax;
        if (age < ageMin - 0.01 || age > ageMax + 0.01) return -Infinity;
        let ageCenter = (ageMin + ageMax) / 2;
        let tensionCenter = (tensionMin + tensionMax) / 2;
        let score = config.priority || 0;
        score -= Math.abs(age - ageCenter) * 8;
        score -= Math.max(0, tensionMin - tension, tension - tensionMax) * 95;
        score -= Math.abs(tension - tensionCenter) * 18;
        if (signals.specialActive && (config.roles || []).some((role) => role === "specials" || role === "base-pressure")) score += 10;
        if (signals.baseDanger > 0.58 && (config.scene === "siege" || config.urgent)) score += 18;
        if (signals.troopPressure > 0.58 && (config.scene === "battle" || config.scene === "pressure")) score += 9;
        if (config.classicBattle) {
          if (signals.activeFight) {
            let classicFightBonus = age >= 3 ? 4 : 30;
            score += classicFightBonus + this.clamp((signals.clash || 0) * 10 + (signals.baseDanger || 0) * 8, 0, 14);
          } else {
            score -= 24;
          }
        }
        if (signals.activeFight && (config.id === "graphiteSkirmish" || config.id === "inklineAdvance")) score -= 16;
        return score;
      },
      readSignals() {
        if (!runtime2.gameState || !runtime2.gameState.player || !runtime2.gameState.enemy) return this.signals || {};
        let player = runtime2.gameState.player;
        let enemy = runtime2.gameState.enemy;
        let playerHpRatio = player.maxHp ? Math.max(0, player.hp / player.maxHp) : 1;
        let enemyHpRatio = enemy.maxHp ? Math.max(0, enemy.hp / enemy.maxHp) : 1;
        let activeUnits = 0;
        let playerUnits = 0;
        let enemyUnits = 0;
        let playerFront = BASE_WIDTH;
        let enemyFront = CANVAS_WIDTH - BASE_WIDTH;
        let playerBaseThreat = 0;
        let enemyBaseThreat = 0;
        if (runtime2.gameState.units && runtime2.gameState.units.pool) {
          for (let i = 0; i < runtime2.gameState.units.pool.length; i++) {
            let unit = runtime2.gameState.units.pool[i];
            if (!unit.active) continue;
            activeUnits++;
            if (unit.team === 1) {
              playerUnits++;
              playerFront = Math.max(playerFront, unit.x || BASE_WIDTH);
              enemyBaseThreat += this.clamp((CANVAS_WIDTH - BASE_WIDTH - (unit.x || 0)) / 280, 0, 1) < 1 ? 1 - this.clamp((CANVAS_WIDTH - BASE_WIDTH - (unit.x || 0)) / 280, 0, 1) : 0;
            } else {
              enemyUnits++;
              enemyFront = Math.min(enemyFront, unit.x || CANVAS_WIDTH - BASE_WIDTH);
              playerBaseThreat += this.clamp(((unit.x || CANVAS_WIDTH) - BASE_WIDTH) / 280, 0, 1) < 1 ? 1 - this.clamp(((unit.x || CANVAS_WIDTH) - BASE_WIDTH) / 280, 0, 1) : 0;
            }
          }
        }
        let frontGap = Math.max(0, enemyFront - playerFront);
        let clash = this.clamp(1 - frontGap / 560, 0, 1);
        let baseDanger = this.clamp(Math.max(playerBaseThreat, enemyBaseThreat) / 3, 0, 1);
        let lowBaseHp = 1 - Math.min(playerHpRatio, enemyHpRatio);
        let troopPressure = this.clamp(activeUnits / 16 + Math.abs(playerUnits - enemyUnits) / 18, 0, 1);
        let tension = this.clamp(
          activeUnits * 0.035 + clash * 0.24 + baseDanger * 0.36 + lowBaseHp * 0.32 + (runtime2.gameState.specialActive ? 0.18 : 0) + (runtime2.gameState.screenShake || 0) * 0.18,
          0,
          1
        );
        return {
          elapsed: runtime2.globalTime,
          playerAge: player.age || 0,
          enemyAge: enemy.age || 0,
          maxAge: Math.max(player.age || 0, enemy.age || 0),
          activeUnits,
          playerUnits,
          enemyUnits,
          troopPressure,
          playerHpRatio,
          enemyHpRatio,
          baseDanger,
          clash,
          activeFight: activeUnits >= 2 && (clash > 0.08 || baseDanger > 0.03 || troopPressure > 0.12),
          tension,
          specialActive: !!runtime2.gameState.specialActive,
          library: MUSIC_LIBRARY_VERSION
        };
      },
      rememberTrack(id) {
        if (!id) return;
        this.recentIds = [id].concat(this.recentIds.filter((existing) => existing !== id)).slice(0, 5);
      },
      refreshActiveVolume() {
        let entry = this.activeId ? this.tracks[this.activeId] : null;
        if (entry && !this.muted && !this.suspended && !entry.audio.paused) {
          this.fadeTo(entry, this.targetVolume(entry), 500);
        }
      },
      fadeOut(entry, fadeMs, pauseWhenDone) {
        if (!entry) return;
        this.fadeTo(entry, 0, fadeMs, () => {
          if (pauseWhenDone) {
            entry.audio.pause();
            this.scheduleRelease(entry);
          }
        });
      },
      fadeOutAll(fadeMs, pauseWhenDone, exceptId = "") {
        for (let id in this.tracks) {
          if (id === exceptId) continue;
          let entry = this.tracks[id];
          if (!entry) continue;
          if (entry.config.id !== this.activeId || this.muted || this.suspended) this.cancelEntryStart(entry);
          if (!entry.audio.paused || this.currentOutputVolume(entry) > MUSIC_SILENCE_EPSILON) {
            this.fadeOut(entry, fadeMs, pauseWhenDone);
          }
        }
      },
      fadeTo(entry, targetVolume, fadeMs, onDone) {
        if (!entry) return;
        let startVolume = this.currentOutputVolume(entry);
        let target = Math.max(0, Math.min(1, targetVolume));
        let duration = Math.max(0, fadeMs || 0);
        this.cancelFade(entry);
        let token = ++entry.fadeToken;
        entry.fadeStartVolume = startVolume;
        entry.fadeTargetVolume = target;
        entry.fadeStartedAt = performance.now();
        entry.fadeDurationMs = duration;
        if (!duration || Math.abs(startVolume - target) <= MUSIC_SILENCE_EPSILON) {
          this.setOutputVolume(entry, target);
          if (onDone) onDone();
          return;
        }
        if (this.prepareOutput(entry)) {
          let ctx = this.audioContext;
          let gain = entry.gainNode.gain;
          let now = ctx.currentTime;
          try {
            gain.cancelScheduledValues(now);
            gain.setValueAtTime(startVolume, now);
            gain.setValueCurveAtTime(this.buildEqualPowerCurve(startVolume, target), now, Math.max(0.016, duration / 1e3));
            entry.audio.volume = 1;
            entry.fadeTimer = setTimeout(() => {
              if (entry.fadeToken !== token) return;
              this.setOutputVolume(entry, target);
              if (onDone) onDone();
            }, duration + 60);
            return;
          } catch (e) {
          }
        }
        this.writeOutputVolume(entry, startVolume, true);
        let step2 = (now) => {
          if (entry.fadeToken !== token) return;
          let progress = Math.min(1, (now - entry.fadeStartedAt) / duration);
          this.writeOutputVolume(entry, this.curveVolume(startVolume, target, progress), false);
          if (progress < 1) {
            entry.fadeFrame = requestAnimationFrame(step2);
          } else {
            this.setOutputVolume(entry, target);
            if (onDone) onDone();
          }
        };
        entry.fadeFrame = requestAnimationFrame(step2);
      },
      cancelEntryStart(entry) {
        if (!entry) return;
        entry.playToken++;
      },
      cancelFade(entry) {
        if (!entry) return;
        entry.fadeToken++;
        if (entry.fadeTimer) clearTimeout(entry.fadeTimer);
        if (entry.fadeFrame) cancelAnimationFrame(entry.fadeFrame);
        entry.fadeTimer = 0;
        entry.fadeFrame = 0;
        entry.fadeDurationMs = 0;
      },
      scheduleRelease(entry) {
        if (!entry) return;
        this.cancelRelease(entry);
        if (!this.muted && !this.suspended && (this.activeId === entry.config.id || this.pendingId === entry.config.id)) return;
        entry.releaseTimer = setTimeout(() => this.releaseEntry(entry), this.idleReleaseMs);
      },
      cancelRelease(entry) {
        if (!entry || !entry.releaseTimer) return;
        clearTimeout(entry.releaseTimer);
        entry.releaseTimer = 0;
      },
      releaseEntry(entry) {
        if (!entry) return;
        entry.releaseTimer = 0;
        if (!this.muted && !this.suspended && (this.activeId === entry.config.id || this.pendingId === entry.config.id)) return;
        if (!entry.audio.paused) return;
        this.cancelFade(entry);
        this.setOutputVolume(entry, 0);
        entry.audio.removeAttribute("src");
        entry.audio.load();
      },
      shouldUseElementMixer() {
        let userAgent = navigator.userAgent || "";
        return !!window.LocalGemmaAndroid || /; wv\)/i.test(userAgent);
      },
      getAudioContext() {
        if (this.audioContext || this.mixerUnavailable) return this.audioContext;
        let AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextCtor) {
          this.mixerUnavailable = true;
          return null;
        }
        try {
          this.audioContext = new AudioContextCtor();
          this.masterGainNode = this.audioContext.createGain();
          this.masterGainNode.gain.value = 1;
          this.masterGainNode.connect(this.audioContext.destination);
        } catch (e) {
          this.mixerUnavailable = true;
          this.audioContext = null;
          this.masterGainNode = null;
        }
        return this.audioContext;
      },
      resumeMixer() {
        let ctx = this.getAudioContext();
        if (!ctx || ctx.state !== "suspended") return;
        try {
          let resumed = ctx.resume();
          if (resumed && typeof resumed.catch === "function") resumed.catch(() => {
          });
        } catch (e) {
        }
      },
      prepareOutput(entry) {
        if (!entry) return false;
        if (entry.gainNode) {
          entry.audio.volume = 1;
          return true;
        }
        if (entry.webAudioFailed) return false;
        let ctx = this.getAudioContext();
        if (!ctx || !this.masterGainNode) return false;
        try {
          entry.mediaNode = ctx.createMediaElementSource(entry.audio);
          entry.gainNode = ctx.createGain();
          entry.gainNode.gain.value = entry.currentVolume || 0;
          entry.mediaNode.connect(entry.gainNode);
          entry.gainNode.connect(this.masterGainNode);
          entry.audio.volume = 1;
          return true;
        } catch (e) {
          entry.webAudioFailed = true;
          entry.mediaNode = null;
          entry.gainNode = null;
          entry.audio.volume = entry.currentVolume || 0;
          return false;
        }
      },
      setOutputVolume(entry, volume) {
        if (!entry) return;
        this.cancelFade(entry);
        entry.fadeStartVolume = volume;
        entry.fadeTargetVolume = volume;
        this.writeOutputVolume(entry, volume, true);
      },
      writeOutputVolume(entry, volume, cancelSchedule) {
        if (!entry) return;
        let target = this.clamp(volume, 0, 1);
        entry.currentVolume = target;
        if (entry.gainNode && this.audioContext) {
          try {
            let gain = entry.gainNode.gain;
            let now = this.audioContext.currentTime;
            if (cancelSchedule) gain.cancelScheduledValues(now);
            gain.setValueAtTime(target, now);
            entry.audio.volume = 1;
            return;
          } catch (e) {
          }
        }
        entry.audio.volume = target;
      },
      currentOutputVolume(entry) {
        if (!entry) return 0;
        if (entry.fadeDurationMs > 0) {
          let progress = this.clamp((performance.now() - entry.fadeStartedAt) / entry.fadeDurationMs, 0, 1);
          return this.curveVolume(entry.fadeStartVolume, entry.fadeTargetVolume, progress);
        }
        if (typeof entry.currentVolume === "number") return entry.currentVolume;
        return entry.audio.volume || 0;
      },
      curveVolume(start, target, progress) {
        let t = this.clamp(progress, 0, 1);
        if (target >= start) {
          return start + (target - start) * Math.sin(t * Math.PI / 2);
        }
        return target + (start - target) * Math.cos(t * Math.PI / 2);
      },
      buildEqualPowerCurve(start, target) {
        let curve = new Float32Array(MUSIC_CROSSFADE_CURVE_STEPS);
        for (let i = 0; i < curve.length; i++) {
          curve[i] = this.curveVolume(start, target, i / (curve.length - 1));
        }
        return curve;
      },
      targetVolume(entry) {
        let level = this.masterVolume * (entry.config.volume || 1);
        if (this.ducked) level *= 0.45;
        return Math.max(0, Math.min(1, level));
      },
      clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      },
      updateButton() {
        let btn = document.getElementById("btn-music");
        if (!btn) return;
        let title = this.activeId && this.tracks[this.activeId] ? this.tracks[this.activeId].config.title : "Music";
        btn.classList.toggle("music-muted", this.muted);
        btn.innerHTML = this.muted ? "&#128263;" : "&#128266;";
        btn.title = this.muted ? "Music off" : `Music on: ${title}`;
        btn.setAttribute("aria-label", this.muted ? "Turn music on" : "Turn music off");
      }
    };
    return { MusicDirector };
  }

  // src/client/renderer.js
  function createRenderer(runtime2) {
    function jitterVal(x, y, amp) {
      let frame2 = Math.floor(runtime2.globalTime * 8) % 3;
      let seed = x * 12.9898 + y * 78.233 + frame2 * 13.131;
      let h = Math.sin(seed) * 43758.5453;
      return (h - Math.floor(h) - 0.5) * amp;
    }
    function setSketchStyle(color, thickness = 2) {
      runtime2.ctx.strokeStyle = color;
      runtime2.ctx.fillStyle = color;
      runtime2.ctx.lineWidth = thickness;
      runtime2.ctx.lineCap = "round";
      runtime2.ctx.lineJoin = "round";
    }
    function applyDash(progress, pathLen) {
      if (progress >= 1) {
        runtime2.ctx.setLineDash([]);
        return;
      }
      let dash = pathLen;
      runtime2.ctx.setLineDash([dash, dash]);
      runtime2.ctx.lineDashOffset = dash * (1 - progress);
    }
    function drawRoughLine(x1, y1, x2, y2, passes = 2, jAmp = 3, progress = 1) {
      runtime2.ctx.beginPath();
      let len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      for (let i = 0; i < passes; i++) {
        let ox1 = x1 + jitterVal(x1, y1 + i, jAmp);
        let oy1 = y1 + jitterVal(x1 + i, y1, jAmp);
        let ox2 = x2 + jitterVal(x2, y2 + i, jAmp);
        let oy2 = y2 + jitterVal(x2 + i, y2, jAmp);
        runtime2.ctx.moveTo(ox1, oy1);
        let mx = (x1 + x2) / 2 + jitterVal((x1 + x2) / 2, (y1 + y2) / 2 + i, jAmp * 2);
        let my = (y1 + y2) / 2 + jitterVal((x1 + x2) / 2 + i, (y1 + y2) / 2, jAmp * 2);
        runtime2.ctx.quadraticCurveTo(mx, my, ox2, oy2);
      }
      applyDash(progress, len);
      runtime2.ctx.stroke();
      runtime2.ctx.setLineDash([]);
    }
    function drawRoughCircle(cx, cy, r, passes = 2, jAmp = 3, progress = 1) {
      runtime2.ctx.beginPath();
      let len = 2 * Math.PI * r;
      for (let i = 0; i < passes; i++) {
        let jc_x = cx + jitterVal(cx, cy + i, jAmp);
        let jc_y = cy + jitterVal(cx + i, cy, jAmp);
        let jr = r + jitterVal(r, i, jAmp);
        runtime2.ctx.arc(jc_x, jc_y, jr, 0, Math.PI * 2);
      }
      applyDash(progress, len * passes);
      runtime2.ctx.stroke();
      runtime2.ctx.setLineDash([]);
    }
    function fillScribble(x, y, w, h, color, density = 5, progress = 1) {
      if (progress <= 0) return;
      runtime2.ctx.strokeStyle = color;
      runtime2.ctx.lineWidth = 1;
      runtime2.ctx.beginPath();
      let totalLines = Math.floor(w / density);
      let linesToDraw = Math.max(1, Math.floor(totalLines * progress));
      for (let i = 0; i <= linesToDraw; i++) {
        let cx = x + i * density;
        let j1 = jitterVal(cx, y, 5);
        let j2 = jitterVal(cx, y + h, 5);
        runtime2.ctx.moveTo(cx + j1, y + Math.abs(j1));
        runtime2.ctx.lineTo(cx + j2, y + h - Math.abs(j2));
      }
      runtime2.ctx.stroke();
    }
    function draw() {
      runtime2.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      runtime2.ctx.save();
      if (runtime2.gameState.screenShake > 0) {
        let mag = runtime2.gameState.screenShake * 15;
        runtime2.ctx.translate(Math.sin(runtime2.globalTime * 50) * mag, Math.cos(runtime2.globalTime * 43) * mag);
      }
      drawBackground(runtime2.gameState.worldProgress);
      if (runtime2.gameState.worldProgress >= 1) {
        drawBase(1, runtime2.gameState.player);
        drawBase(-1, runtime2.gameState.enemy);
        for (let i = 0; i < runtime2.gameState.units.pool.length; i++) {
          if (runtime2.gameState.units.pool[i].active) drawUnit(runtime2.gameState.units.pool[i]);
        }
        for (let i = 0; i < runtime2.gameState.projectiles.pool.length; i++) {
          if (runtime2.gameState.projectiles.pool[i].active) drawProjectile(runtime2.gameState.projectiles.pool[i]);
        }
        for (let i = 0; i < runtime2.gameState.visualFx.pool.length; i++) {
          if (runtime2.gameState.visualFx.pool[i].active) drawFX(runtime2.gameState.visualFx.pool[i]);
        }
        for (let i = 0; i < runtime2.gameState.particles.pool.length; i++) {
          let pt = runtime2.gameState.particles.pool[i];
          if (!pt.active) continue;
          setSketchStyle(pt.color, 2);
          runtime2.ctx.globalAlpha = Math.max(0, pt.life);
          if (pt.pType === "splatter") {
            runtime2.ctx.beginPath();
            runtime2.ctx.moveTo(pt.x, pt.y);
            runtime2.ctx.lineTo(pt.x - pt.vx * 0.05, pt.y - pt.vy * 0.05);
            runtime2.ctx.arc(pt.x, pt.y, pt.size / 2, 0, Math.PI * 2);
            runtime2.ctx.fill();
          } else if (pt.pType === "ghost") {
            setSketchStyle(runtime2.COLORS.pencilLight, 2);
            drawRoughCircle(pt.x, pt.y, 15, 1, 2);
            drawRoughLine(pt.x - 5, pt.y - 2, pt.x - 2, pt.y - 2, 1, 0);
            drawRoughLine(pt.x + 5, pt.y - 2, pt.x + 2, pt.y - 2, 1, 0);
            drawRoughLine(pt.x - 10, pt.y + 15, pt.x + 10, pt.y + 15, 1, 5);
          } else if (pt.pType === "slash") {
            setSketchStyle(runtime2.COLORS.pencil, 3);
            runtime2.ctx.beginPath();
            runtime2.ctx.arc(pt.x, pt.y, 30, -Math.PI / 4, Math.PI / 4);
            runtime2.ctx.stroke();
          } else if (pt.pType === "graphite") {
            setSketchStyle(runtime2.COLORS.pencil, 3);
            runtime2.ctx.beginPath();
            runtime2.ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
            runtime2.ctx.fill();
          } else if (pt.pType === "spark" || pt.pType === "dust") {
            drawRoughCircle(pt.x, pt.y, pt.size / 2, 1, 1);
          } else {
            fillScribble(pt.x, pt.y, pt.size, pt.size, pt.color, 3);
          }
        }
        runtime2.ctx.globalAlpha = 1;
        for (let i = 0; i < runtime2.gameState.floatingTexts.pool.length; i++) {
          let ft = runtime2.gameState.floatingTexts.pool[i];
          if (!ft.active) continue;
          let alpha = Math.max(0, Math.min(1, ft.life / (ft.maxLife || 1)));
          let progress = 1 - alpha;
          runtime2.ctx.globalAlpha = alpha;
          runtime2.ctx.fillStyle = ft.color;
          runtime2.ctx.font = `bold ${(ft.size || 30) + progress * (ft.grow === void 0 ? 15 : ft.grow)}px 'Caveat', cursive`;
          runtime2.ctx.textAlign = "center";
          if (ft.stroke) {
            runtime2.ctx.lineWidth = 5;
            runtime2.ctx.strokeStyle = "rgba(255, 250, 235, 0.82)";
            runtime2.ctx.strokeText(ft.text, ft.x, ft.y);
          }
          runtime2.ctx.fillText(ft.text, ft.x, ft.y);
        }
        runtime2.ctx.globalAlpha = 1;
      }
      runtime2.ctx.restore();
    }
    function drawBackground(wp) {
      runtime2.ctx.save();
      runtime2.ctx.globalCompositeOperation = "multiply";
      if (runtime2.gameState.ageTransition > 0) {
        runtime2.ctx.globalAlpha = runtime2.gameState.ageTransition;
        runtime2.ctx.drawImage(runtime2.WatercolorEngine.canvases[runtime2.gameState.player.age - 1], 0, 0);
        runtime2.ctx.globalAlpha = 1 - runtime2.gameState.ageTransition;
        runtime2.ctx.drawImage(runtime2.WatercolorEngine.canvases[runtime2.gameState.player.age], 0, 0);
      } else {
        runtime2.ctx.drawImage(runtime2.WatercolorEngine.canvases[runtime2.gameState.player.age], 0, 0);
      }
      runtime2.ctx.restore();
      setSketchStyle(runtime2.COLORS.pencilLight, 1);
      runtime2.ctx.save();
      runtime2.ctx.globalAlpha = 0.2 + 0.1 * Math.sin(runtime2.globalTime);
      let age = runtime2.gameState.player.age;
      if (age === 0) {
        drawRoughCircle(CANVAS_WIDTH / 2, 200, 50, 1, 5, wp);
        for (let i = 0; i < 3; i++) drawRoughCircle(CANVAS_WIDTH / 2, 200, 30 + i * 10, 1, 3, wp);
      } else if (age === 1) {
        for (let x = 200; x < CANVAS_WIDTH - 200; x += 150) {
          drawRoughLine(x, GROUND_Y, x, GROUND_Y - 300, 1, 1, wp);
          drawRoughLine(x, GROUND_Y - 300, x + 150, GROUND_Y - 300, 1, 1, wp);
          runtime2.ctx.beginPath();
          runtime2.ctx.arc(x + 75, GROUND_Y - 150, 75, Math.PI, 0);
          runtime2.ctx.stroke();
        }
      } else if (age === 2) {
        drawRoughCircle(CANVAS_WIDTH / 2, 300, 200, 2, 1, wp);
        drawRoughLine(CANVAS_WIDTH / 2 - 200, 300, CANVAS_WIDTH / 2 + 200, 300, 1, 1, wp);
        drawRoughLine(CANVAS_WIDTH / 2, 100, CANVAS_WIDTH / 2, 500, 1, 1, wp);
        runtime2.ctx.strokeRect(CANVAS_WIDTH / 2 - 140, 160, 280, 280);
      } else if (age === 3) {
        for (let r = 0; r < 4; r++) {
          runtime2.ctx.beginPath();
          for (let x = 0; x <= CANVAS_WIDTH; x += 100) {
            let y = 300 + Math.sin(x / 200) * 100 + r * 50 + Math.cos(x / 150 + r) * 30;
            runtime2.ctx.lineTo(x, y);
          }
          runtime2.ctx.stroke();
        }
      } else if (age === 4) {
        for (let x = 100; x < CANVAS_WIDTH; x += 150) {
          for (let y = 100; y < GROUND_Y; y += 130) {
            drawRoughCircle(x, y, 40, 1, 1, wp);
            drawRoughLine(x, y, x + 75, y + 65, 1, 1, wp);
          }
        }
      } else if (age === 5) {
        for (let i = 0; i < 15; i++) {
          let cx = (Math.sin(i * 12.2) * CANVAS_WIDTH + CANVAS_WIDTH) % CANVAS_WIDTH;
          let cy = (Math.cos(i * 3.1) * 400 + 400) % 400;
          drawRoughCircle(cx, cy, 20 + i * 2, 1, 2, wp);
          drawRoughLine(cx, cy, CANVAS_WIDTH / 2, 200, 1, 1, wp);
        }
      }
      runtime2.ctx.restore();
      drawRoughCircle(CANVAS_WIDTH * 0.8, 150, 60, 2, 5, wp);
      runtime2.ctx.beginPath();
      for (let x = 0; x <= CANVAS_WIDTH; x += 80) {
        let y = GROUND_Y - 200 - Math.sin(x / 300 + runtime2.globalTime * 0.1) * 100 + jitterVal(x, 0, 5);
        runtime2.ctx.lineTo(x, y);
      }
      applyDash(wp, CANVAS_WIDTH * 2);
      runtime2.ctx.stroke();
      runtime2.ctx.setLineDash([]);
      for (let c = 0; c < 4; c++) {
        let cx = (runtime2.globalTime * 5 + c * 300) % (CANVAS_WIDTH + 200) - 100;
        let cy = 100 + c * 40;
        drawRoughCircle(cx, cy, 30, 1, 5, wp);
        drawRoughCircle(cx + 40, cy - 10, 45, 1, 5, wp);
        drawRoughCircle(cx + 80, cy, 25, 1, 5, wp);
      }
      setSketchStyle(runtime2.COLORS.pencil, 2);
      drawRoughLine(0, GROUND_Y, CANVAS_WIDTH, GROUND_Y, 2, 5, wp);
      runtime2.ctx.beginPath();
      for (let i = 0; i < CANVAS_WIDTH; i += 60) {
        let j = jitterVal(i, GROUND_Y, 5);
        runtime2.ctx.moveTo(i, GROUND_Y + j);
        runtime2.ctx.lineTo(i + 30, GROUND_Y - 50 - Math.abs(j * 5));
        runtime2.ctx.lineTo(i + 60, GROUND_Y + j);
      }
      applyDash(wp, CANVAS_WIDTH * 2);
      runtime2.ctx.stroke();
      runtime2.ctx.setLineDash([]);
    }
    function drawFX(fx) {
      if (fx.type === "plane") {
        runtime2.ctx.save();
        runtime2.ctx.translate(fx.x, fx.y);
        if (fx.team === -1) runtime2.ctx.scale(-1, 1);
        setSketchStyle(runtime2.COLORS.pencil, 3);
        drawRoughLine(-40, 0, 50, 0, 2, 2);
        drawRoughCircle(50, 0, 10, 2, 2);
        drawRoughLine(10, 0, -20, -30, 2, 2);
        drawRoughLine(10, 0, -20, 30, 2, 2);
        drawRoughLine(-40, 0, -50, -15, 2, 2);
        fillScribble(-30, -5, 60, 10, runtime2.COLORS.pencil, 3);
        runtime2.ctx.restore();
      }
    }
    function drawBase(team, state) {
      let x = team === 1 ? 0 : CANVAS_WIDTH - BASE_WIDTH;
      let y = GROUND_Y;
      let dp = state.drawProgress;
      runtime2.ctx.save();
      runtime2.ctx.translate(x, y);
      if (team === -1) {
        runtime2.ctx.translate(BASE_WIDTH, 0);
        runtime2.ctx.scale(-1, 1);
      }
      setSketchStyle(runtime2.COLORS.pencil, 3);
      switch (AGES[state.age].baseStyle) {
        case "cave":
          drawRoughLine(10, 0, BASE_WIDTH, 0, 2, 5, dp);
          runtime2.ctx.beginPath();
          runtime2.ctx.moveTo(10, 0);
          runtime2.ctx.quadraticCurveTo(BASE_WIDTH / 2, -300, BASE_WIDTH, 0);
          applyDash(dp, BASE_WIDTH * 2);
          runtime2.ctx.stroke();
          runtime2.ctx.setLineDash([]);
          fillScribble(30, -150, BASE_WIDTH - 60, 150, runtime2.COLORS.pencil, 8, dp);
          break;
        case "castle":
          drawRoughLine(20, 0, 20, -200, 2, 3, dp);
          drawRoughLine(BASE_WIDTH - 20, 0, BASE_WIDTH - 20, -200, 2, 3, dp);
          drawRoughLine(20, -200, BASE_WIDTH - 20, -200, 2, 3, dp);
          for (let i = 20; i < BASE_WIDTH - 30; i += 30) {
            drawRoughLine(i, -200, i, -230, 2, 2, dp);
            drawRoughLine(i, -230, i + 15, -230, 2, 2, dp);
            drawRoughLine(i + 15, -230, i + 15, -200, 2, 2, dp);
          }
          fillScribble(BASE_WIDTH / 2 - 30, -100, 60, 100, runtime2.COLORS.pencil, 6, dp);
          break;
        case "fort":
          drawRoughLine(10, 0, 30, -250, 2, 2, dp);
          drawRoughLine(BASE_WIDTH - 10, 0, BASE_WIDTH - 30, -250, 2, 2, dp);
          drawRoughLine(30, -250, BASE_WIDTH - 30, -250, 2, 2, dp);
          for (let i = -200; i < 0; i += 40) drawRoughLine(15, i, BASE_WIDTH - 15, i, 1, 2, dp);
          break;
        case "bunker":
          drawRoughLine(10, 0, 10, -150, 2, 2, dp);
          drawRoughLine(10, -150, BASE_WIDTH / 2, -200, 2, 2, dp);
          drawRoughLine(BASE_WIDTH / 2, -200, BASE_WIDTH - 10, -150, 2, 2, dp);
          drawRoughLine(BASE_WIDTH - 10, -150, BASE_WIDTH - 10, 0, 2, 2, dp);
          for (let i = 0; i < 3; i++) drawRoughCircle(BASE_WIDTH + 20, -15 - i * 20, 15, 2, 2, dp);
          fillScribble(20, -120, BASE_WIDTH - 40, 20, runtime2.COLORS.pencil, 4, dp);
          break;
        case "dome":
          runtime2.ctx.beginPath();
          runtime2.ctx.arc(BASE_WIDTH / 2, 0, BASE_WIDTH / 2 - 10, Math.PI, 0);
          applyDash(dp, BASE_WIDTH * 2);
          runtime2.ctx.stroke();
          runtime2.ctx.setLineDash([]);
          setSketchStyle(runtime2.COLORS.blue, 2);
          runtime2.ctx.beginPath();
          runtime2.ctx.arc(BASE_WIDTH / 2, 0, BASE_WIDTH / 2 - 25, Math.PI, 0);
          applyDash(dp, BASE_WIDTH * 2);
          runtime2.ctx.stroke();
          runtime2.ctx.setLineDash([]);
          drawRoughLine(BASE_WIDTH / 2, 0, BASE_WIDTH / 2, -BASE_WIDTH / 2 + 25, 2, 2, dp);
          setSketchStyle(runtime2.COLORS.pencil, 3);
          break;
        case "portal":
          setSketchStyle(runtime2.COLORS.accent, 2);
          for (let i = 0; i < 4; i++) {
            let r = BASE_WIDTH / 2 - 10 - i * 10;
            drawRoughCircle(BASE_WIDTH / 2, -BASE_WIDTH / 2, r, 2, 4 + i * 2, dp);
          }
          drawRoughLine(0, 0, BASE_WIDTH, 0, 2, 3, dp);
          drawRoughLine(BASE_WIDTH / 2 - 20, 0, BASE_WIDTH / 2, -BASE_WIDTH / 2, 2, 2, dp);
          drawRoughLine(BASE_WIDTH / 2 + 20, 0, BASE_WIDTH / 2, -BASE_WIDTH / 2, 2, 2, dp);
          setSketchStyle(runtime2.COLORS.pencil, 3);
          break;
      }
      for (let i = 0; i < state.unlockedSlots; i++) {
        let ty = -150 - i * 90;
        let tx = BASE_WIDTH - 60;
        let tp = state.turretProgress[i];
        if (state.age !== 5) {
          drawRoughLine(tx, ty, tx + 50, ty, 2, 3, tp);
          drawRoughLine(tx + 10, ty, tx + 10, ty + 90, 2, 3, tp);
          drawRoughLine(tx + 40, ty, tx + 40, ty + 90, 2, 3, tp);
          drawRoughLine(tx + 10, ty + 90, tx + 40, ty, 1, 2, tp);
        }
        if (state.turrets[i] !== null) drawTurret(tx + 25, ty, state.age, AGES[state.age].turrets[state.turrets[i]].name, tp);
      }
      runtime2.ctx.restore();
    }
    function drawTurret(x, y, age, name, dp) {
      runtime2.ctx.save();
      runtime2.ctx.translate(x, y);
      setSketchStyle(runtime2.COLORS.pencil, 2);
      if (age === 0) {
        drawRoughLine(-15, 0, 15, 0, 2, 3, dp);
        drawRoughLine(0, 0, 0, -30, 2, 3, dp);
        if (name.includes("Rock")) {
          drawRoughCircle(0, -35, 10, 2, 3, dp);
        } else if (name.includes("Egg")) {
          drawRoughLine(-10, -40, 10, -40, 2, 3, dp);
          drawRoughLine(0, -30, 0, -40, 2, 3, dp);
        } else {
          fillScribble(-10, -40, 20, 20, runtime2.COLORS.accent, 4, dp);
        }
      } else if (age === 1) {
        drawRoughLine(-20, 0, 20, 0, 2, 3, dp);
        drawRoughLine(-10, 0, -20, -20, 2, 3, dp);
        if (name.includes("Catapult")) {
          drawRoughLine(-20, -20, 20, -30, 2, 3, dp);
          drawRoughCircle(20, -30, 8, 2, 3, dp);
        } else if (name.includes("Ballista")) {
          drawRoughLine(-25, -15, 25, -25, 2, 3, dp);
          drawRoughLine(10, -40, 10, -10, 2, 3, dp);
        } else {
          drawRoughLine(-15, -30, 15, -30, 3, 2, dp);
          fillScribble(-10, -25, 20, 25, runtime2.COLORS.pencil, 4, dp);
        }
      } else if (age === 2) {
        drawRoughCircle(0, -10, 10, 2, 3, dp);
        drawRoughLine(0, -10, 25, -20, 3, 2, dp);
        if (name.includes("Heavy")) drawRoughLine(0, -10, 35, -25, 4, 2, dp);
        if (name.includes("Mortar")) drawRoughLine(-10, 0, 15, -35, 5, 2, dp);
      } else if (age === 3) {
        drawRoughLine(-15, 0, 15, 0, 2, 3, dp);
        drawRoughLine(0, 0, 0, -20, 2, 3, dp);
        if (name.includes("Machine")) {
          drawRoughLine(-10, -20, 30, -20, 2, 1, dp);
        } else if (name.includes("Rocket")) {
          drawRoughLine(0, -20, 25, -30, 4, 1, dp);
          fillScribble(5, -35, 20, 10, runtime2.COLORS.pencil, 3, dp);
        } else {
          drawRoughLine(-5, -15, 40, -40, 4, 1, dp);
        }
      } else if (age === 4) {
        setSketchStyle(runtime2.COLORS.blue, 2);
        drawRoughLine(-10, 0, 10, 0, 2, 3, dp);
        drawRoughLine(0, 0, 0, -20, 2, 3, dp);
        if (name.includes("Gatling")) {
          drawRoughLine(0, -20, 30, -20, 2, 3, dp);
          drawRoughLine(0, -15, 30, -15, 2, 3, dp);
        } else if (name.includes("Ion")) {
          drawRoughCircle(0, -20, 15, 2, 3, dp);
          drawRoughLine(15, -20, 40, -20, 3, 1, dp);
        } else {
          drawRoughLine(-10, -30, 30, -40, 5, 1, dp);
          fillScribble(0, -45, 20, 20, runtime2.COLORS.blue, 4, dp);
        }
      } else if (age === 5) {
        setSketchStyle(runtime2.COLORS.accent, 2);
        drawRoughCircle(0, -20, 15, 2, 5, dp);
        if (name.includes("Plasma")) {
          drawRoughLine(0, -20, 40, -20, 4, 2, dp);
        } else if (name.includes("Black")) {
          fillScribble(-15, -35, 30, 30, runtime2.COLORS.pencil, 3, dp);
        } else {
          drawRoughLine(-15, -20, 45, -20, 6, 1, dp);
          drawRoughCircle(45, -20, 5, 2, 2, dp);
        }
      }
      runtime2.ctx.restore();
    }
    function drawUnit(u) {
      runtime2.ctx.save();
      runtime2.ctx.translate(u.x, u.y);
      if (u.team === -1) runtime2.ctx.scale(-1, 1);
      let bob = u.moving ? Math.abs(Math.sin(runtime2.globalTime * 10 + u.animOffset)) * 5 : 0;
      let lunge = 0, armRot = 0, legRot = 0;
      if (u.isAttacking) {
        lunge = Math.sin(u.animTimer * Math.PI * 3) * 15;
        armRot = Math.sin(u.animTimer * Math.PI * 3) * Math.PI / 3;
      } else if (u.moving) {
        armRot = Math.sin(runtime2.globalTime * 10 + u.animOffset) * Math.PI / 4;
        legRot = Math.sin(runtime2.globalTime * 10 + u.animOffset) * Math.PI / 4;
      }
      runtime2.ctx.translate(lunge, -bob);
      setSketchStyle(runtime2.COLORS.pencil, 2);
      let s = u.size;
      let dp = u.drawProgress;
      if (u.age === 0) {
        if (u.type === "heavy") {
          drawRoughCircle(0, -s / 2, s / 3, 2, 3, dp);
          drawRoughLine(s / 3, -s / 2, s / 1.5, -s * 0.8, 2, 4, dp);
          drawRoughCircle(s / 1.5, -s * 0.8, 15, 2, 3, dp);
          drawRoughLine(-s / 3, -s / 2, -s / 1.5, -s / 3, 2, 4, dp);
          drawRoughLine(0, -s * 0.8, 0, -s * 1.2, 2, 3, dp);
          drawRoughCircle(0, -s * 1.3, 8, 2, 3, dp);
          drawRoughLine(0, -s, 15, -s * 0.9, 2, 3, dp);
        } else {
          drawRoughCircle(0, -s + 10, 12, 2, 3, dp);
          drawRoughLine(0, -s + 22, 0, -20, 2, 3, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(-legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -s / 1.5);
          runtime2.ctx.rotate(armRot);
          drawRoughLine(0, 0, 20, 10, 2, 3, dp);
          if (u.type === "melee") {
            drawRoughLine(20, 10, 30, -10, 4, 3, dp);
          } else {
            drawRoughCircle(25, 15, 5, 2, 3, dp);
          }
          runtime2.ctx.restore();
        }
      } else if (u.age === 1) {
        if (u.type === "heavy") {
          drawRoughLine(-20, -s / 2, 20, -s / 2, 2, 8, dp);
          drawRoughLine(20, -s / 2, 30, -s * 0.8, 2, 4, dp);
          drawRoughLine(0, -s / 2, 0, -s, 2, 3, dp);
          drawRoughLine(-10, -s, 10, -s, 2, 3, dp);
          drawRoughCircle(0, -s - 10, 10, 2, 3, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -s / 1.2);
          runtime2.ctx.rotate(armRot);
          drawRoughLine(0, 0, 40, 0, 2, 2, dp);
          runtime2.ctx.restore();
        } else {
          drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
          drawRoughLine(-10, -s + 10, 10, -s + 10, 2, 3, dp);
          drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(-legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -s / 1.5);
          runtime2.ctx.rotate(armRot);
          drawRoughLine(0, 0, 15, 10, 2, 3, dp);
          if (u.type === "melee") {
            drawRoughLine(15, 10, 25, -15, 2, 1, dp);
            drawRoughLine(5, -5, 5, 20, 3, 2, dp);
          } else {
            drawRoughLine(15, 10, 15, -20, 2, 3, dp);
            drawRoughLine(15, -20, 25, 10, 2, 3, dp);
          }
          runtime2.ctx.restore();
        }
      } else if (u.age === 2) {
        if (u.type === "heavy") {
          drawRoughCircle(0, -15, 15, 2, 3, dp);
          drawRoughLine(-20, -15, 20, -15, 2, 2, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -15);
          runtime2.ctx.rotate(armRot * 0.2);
          drawRoughLine(-10, -10, 40, -15, 4, 2, dp);
          runtime2.ctx.restore();
        } else {
          drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
          drawRoughLine(-15, -s, 15, -s, 2, 3, dp);
          drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(-legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -s / 1.5);
          runtime2.ctx.rotate(armRot);
          drawRoughLine(0, 0, 15, 5, 2, 3, dp);
          if (u.type === "melee") drawRoughLine(15, 5, 30, -25, 2, 2, dp);
          else drawRoughLine(10, 5, 35, 0, 2, 1, dp);
          runtime2.ctx.restore();
        }
      } else if (u.age === 3) {
        if (u.type === "heavy") {
          drawRoughLine(-40, -10, 40, -10, 3, 2, dp);
          drawRoughLine(-30, 0, 30, 0, 3, 2, dp);
          fillScribble(-35, -25, 70, 15, runtime2.COLORS.pencilLight, 5, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -25);
          runtime2.ctx.rotate(armRot * 0.1);
          drawRoughLine(0, -5, 50, -5, 3, 1, dp);
          runtime2.ctx.restore();
        } else {
          drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
          drawRoughLine(-12, -s + 5, 12, -s + 5, 2, 2, dp);
          drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(-legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -s / 1.5);
          runtime2.ctx.rotate(armRot);
          drawRoughLine(0, 0, 15, 5, 2, 3, dp);
          if (u.type === "melee") drawRoughLine(15, 5, 25, -5, 2, 1, dp);
          else drawRoughLine(10, 5, 30, 5, 3, 1, dp);
          runtime2.ctx.restore();
        }
      } else if (u.age === 4) {
        setSketchStyle(runtime2.COLORS.blue, 2);
        if (u.type === "heavy") {
          drawRoughCircle(0, -s / 2, s / 2.5, 2, 4, dp);
          fillScribble(-s / 3, -s * 0.8, s / 1.5, s / 1.5, runtime2.COLORS.blue, 8, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -s / 2);
          runtime2.ctx.rotate(armRot);
          drawRoughLine(0, 0, 60, 0, 4, 1, dp);
          runtime2.ctx.restore();
        } else {
          drawRoughCircle(0, -s + 10, 10, 2, 3, dp);
          drawRoughLine(-5, -s + 10, 10, -s + 10, 2, 3, dp);
          drawRoughLine(0, -s + 20, 0, -20, 2, 3, dp);
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -20);
          runtime2.ctx.rotate(-legRot);
          drawRoughLine(0, 0, 0, 20, 2, 3, dp);
          runtime2.ctx.restore();
          runtime2.ctx.save();
          runtime2.ctx.translate(0, -s / 1.5);
          runtime2.ctx.rotate(armRot);
          drawRoughLine(0, 0, 15, 5, 2, 3, dp);
          if (u.type === "melee") {
            setSketchStyle(runtime2.COLORS.accent, 2);
            drawRoughLine(15, 5, 35, -15, 3, 1, dp);
          } else drawRoughLine(10, 5, 30, 5, 3, 1, dp);
          runtime2.ctx.restore();
        }
      } else if (u.age === 5) {
        setSketchStyle(runtime2.COLORS.accent, 2);
        if (u.type === "heavy") {
          drawRoughLine(-s / 2, -s / 2, s / 2, -s / 2, 3, 2, dp);
          drawRoughLine(-s / 3, -s / 2, 0, -s, 3, 2, dp);
          drawRoughLine(s / 3, -s / 2, 0, -s, 3, 2, dp);
          fillScribble(-s / 4, -s * 0.8, s / 2, s / 2, runtime2.COLORS.accent, 5, dp);
          drawRoughCircle(0, -s / 2, 20, 2, 5, dp);
        } else if (u.type === "melee") {
          drawRoughLine(-20, -s / 2, 20, -s / 2, 3, 2, dp);
          drawRoughCircle(0, -s / 2, 10, 2, 2, dp);
          drawRoughLine(0, -s / 2, 15, -s / 2 + 10, 3, 2, dp);
        } else {
          drawRoughLine(-15, -s / 2, 15, -s / 2, 2, 3, dp);
          drawRoughLine(0, -s / 2, 30, -s / 2, 4, 1, dp);
          fillScribble(-10, -s / 2 - 10, 20, 20, runtime2.COLORS.accent, 3, dp);
        }
      }
      if (u.drawProgress >= 1) {
        setSketchStyle(runtime2.COLORS.pencil, 1);
        drawRoughLine(-15, -s - 20, 15, -s - 20, 1, 1);
        setSketchStyle(runtime2.COLORS.green, 2);
        if (u.hp > 0) drawRoughLine(-15, -s - 20, -15 + 30 * (u.hp / u.maxHp), -s - 20, 2, 1);
      }
      runtime2.ctx.restore();
    }
    function drawProjectile(p) {
      runtime2.ctx.save();
      if (p.isSpecial && (p.type === "laser" || p.type === "orbital")) {
        let alpha = p.life > 0.5 ? 1 : p.life * 2;
        runtime2.ctx.globalAlpha = alpha;
        if (p.type === "laser") {
          setSketchStyle(p.team === 1 ? runtime2.COLORS.blue : runtime2.COLORS.accent, 3);
          let w = Math.min(150, (5 - p.life) * 50);
          fillScribble(p.x - w / 2, 0, w, CANVAS_HEIGHT, p.team === 1 ? runtime2.COLORS.blue : runtime2.COLORS.accent, 15);
          drawRoughLine(p.x - w / 2, 0, p.x - w / 2, CANVAS_HEIGHT, 3, 10);
          drawRoughLine(p.x + w / 2, 0, p.x + w / 2, CANVAS_HEIGHT, 3, 10);
        } else {
          setSketchStyle(runtime2.COLORS.darkVoid, 4);
          drawRoughCircle(p.x, p.y - 400, 150, 4, 30);
          fillScribble(p.x - 150, p.y - 550, 300, 300, runtime2.COLORS.darkVoid, 15);
          setSketchStyle(runtime2.COLORS.accent, 2);
          for (let i = 0; i < 5; i++) drawRoughCircle(p.x, p.y - 400, 50 + i * 20 + Math.sin(runtime2.globalTime * 5) * 10, 1, 10);
          for (let i = 0; i < 10; i++) drawRoughLine(p.x + (Math.random() - 0.5) * 400, GROUND_Y, p.x, p.y - 400, 1, 5);
        }
        runtime2.ctx.globalAlpha = 1;
        runtime2.ctx.restore();
        return;
      }
      if (p.trailCount > 1) {
        setSketchStyle(runtime2.COLORS.pencilLight, 1);
        runtime2.ctx.beginPath();
        runtime2.ctx.moveTo(p.trailX[0], p.trailY[0]);
        for (let i = 1; i < p.trailCount; i++) runtime2.ctx.lineTo(p.trailX[i], p.trailY[i]);
        runtime2.ctx.stroke();
      }
      runtime2.ctx.translate(p.x, p.y);
      let angle = Math.atan2(p.vy, p.vx);
      runtime2.ctx.rotate(angle);
      setSketchStyle(runtime2.COLORS.pencil, 2);
      if (p.type === "meteor") {
        setSketchStyle(runtime2.COLORS.fire, 3);
        drawRoughCircle(0, 0, 15, 3, 5);
        fillScribble(-30, -10, 30, 20, runtime2.COLORS.fire, 4);
        drawRoughLine(0, 5, -50, 20, 2, 5);
        drawRoughLine(0, -5, -50, -20, 2, 5);
      } else if (p.type === "arrow") {
        drawRoughLine(-15, 0, 10, 0, 1, 1);
        drawRoughLine(5, -5, 10, 0, 1, 1);
        drawRoughLine(5, 5, 10, 0, 1, 1);
      } else if (p.type === "cannonball") {
        drawRoughCircle(0, 0, 10, 3, 2);
        fillScribble(-10, -10, 20, 20, runtime2.COLORS.pencil, 3);
      } else if (p.type === "bombDrop") {
        runtime2.ctx.rotate(-angle + Math.PI / 2);
        drawRoughCircle(0, 10, 8, 2, 2);
        drawRoughLine(0, 10, 0, -15, 2, 2);
        drawRoughLine(-10, -15, 10, -15, 2, 2);
      } else if (p.type === "arc") {
        if (p.speed > 450) {
          drawRoughLine(-15, 0, 10, 0, 1, 1);
          drawRoughLine(-15, -5, -15, 5, 1, 1);
        } else {
          drawRoughCircle(0, 0, p.dmg > 100 ? 8 : 4, 2, 2);
        }
      } else if (p.type === "straight") {
        drawRoughLine(-10, 0, 10, 0, 2, 1);
      } else if (p.type === "laser") {
        setSketchStyle(p.team === 1 ? runtime2.COLORS.blue : runtime2.COLORS.accent, 3);
        runtime2.ctx.rotate(-angle);
        drawRoughLine(0, 0, p.targetX - p.x, p.targetY - p.y, 1, 3);
      } else if (p.type === "orb") {
        setSketchStyle(runtime2.COLORS.accent, 2);
        drawRoughCircle(0, 0, 15 + Math.sin(p.life * 20) * 5, 3, 5);
      }
      runtime2.ctx.restore();
    }
    return { draw };
  }

  // src/client/hud.js
  function createHUD(runtime2) {
    function updateUI() {
      if (!runtime2.gameState.player) return;
      let p = runtime2.gameState.player;
      let ageData = AGES[p.age];
      runtime2.UIManager.setText("ui-gold", Math.floor(p.gold));
      runtime2.UIManager.setText("ui-xp", Math.floor(p.xp));
      runtime2.UIManager.setText("ui-income", runtime2.getIncome().toFixed(1) + "/s");
      runtime2.UIManager.setText("age-title", ageData.name);
      if (runtime2.currentTab === "units") {
        for (let i = 0; i < 3; i++) {
          let uData = ageData.units[i];
          runtime2.UIManager.setText(`name-u${i + 1}`, uData.name);
          runtime2.UIManager.setText(`cost-u${i + 1}`, uData.cost);
          runtime2.UIManager.setDisabled(`btn-u${i + 1}`, !runtime2.isLegal({ type: "unit", index: i }));
        }
      } else if (runtime2.currentTab === "turrets") {
        let hasEmptySlot = p.turrets.slice(0, p.unlockedSlots).includes(null);
        let hasTurret = p.turrets.some((t) => t !== null);
        for (let i = 0; i < 3; i++) {
          let tData = ageData.turrets[i];
          runtime2.UIManager.setText(`name-t${i + 1}`, tData.name);
          runtime2.UIManager.setText(`cost-t${i + 1}`, tData.cost);
          runtime2.UIManager.setDisabled(`btn-t${i + 1}`, !runtime2.isLegal({ type: "turret", index: i }));
        }
        runtime2.UIManager.setDisabled("btn-sell", !hasTurret);
        if (p.unlockedSlots >= 4) {
          runtime2.UIManager.setDisabled("btn-slot", true);
          runtime2.UIManager.setText("cost-slot", "MAX");
        } else {
          let slotCost = p.unlockedSlots * 500;
          runtime2.UIManager.setText("cost-slot", slotCost);
          runtime2.UIManager.setDisabled("btn-slot", p.gold < slotCost);
        }
      } else if (runtime2.currentTab === "upgrades") {
        ["dmg", "hp", "econ"].forEach((t) => {
          let lvl = p.upgrades[t];
          if (lvl >= 10) {
            runtime2.UIManager.setDisabled(`btn-up-${t}`, true);
            runtime2.UIManager.setText(`cost-up-${t}`, "MAX");
            runtime2.UIManager.setText(`val-up-${t}`, `Lvl 10`);
          } else {
            let cost = UPGRADE_COSTS[lvl];
            runtime2.UIManager.setText(`cost-up-${t}`, cost);
            runtime2.UIManager.setDisabled(`btn-up-${t}`, !runtime2.isLegal({ type: "upgrade", stat: t }));
            let mult = t === "dmg" ? 15 : t === "hp" ? 25 : 20;
            runtime2.UIManager.setText(`val-up-${t}`, `Lvl ${lvl} (+${lvl * mult}%)`);
          }
        });
      }
      if (p.age >= AGES.length - 1) {
        runtime2.UIManager.setDisabled("btn-evolve", true);
        runtime2.UIManager.setText("cost-evolve", "MAX AGE");
      } else {
        runtime2.UIManager.setText("cost-evolve", ageData.evolveXP + " XP");
        runtime2.UIManager.setDisabled("btn-evolve", p.xp < ageData.evolveXP || p.drawProgress < 1);
      }
      if (p.specialTimer > 0) {
        runtime2.UIManager.setDisabled("btn-special", true);
        runtime2.UIManager.setText("cost-special", Math.ceil(p.specialTimer) + "s");
      } else if (runtime2.gameState.specialActive) {
        runtime2.UIManager.setDisabled("btn-special", true);
        runtime2.UIManager.setText("cost-special", "Busy");
      } else {
        runtime2.UIManager.setDisabled("btn-special", false);
        runtime2.UIManager.setText("cost-special", "Ready");
      }
      runtime2.UIManager.setWidth("player-hp-fill", `${Math.max(0, p.hp / p.maxHp) * 100}%`);
      runtime2.UIManager.setWidth("enemy-hp-fill", `${Math.max(0, runtime2.gameState.enemy.hp / runtime2.gameState.enemy.maxHp) * 100}%`);
      runtime2.UIManager.setText("player-hp-text", `${Math.floor(Math.max(0, p.hp))} / ${Math.floor(p.maxHp)}`);
      runtime2.UIManager.setText("enemy-hp-text", `${Math.floor(Math.max(0, runtime2.gameState.enemy.hp))} / ${Math.floor(runtime2.gameState.enemy.maxHp)}`);
    }
    return { updateUI };
  }

  // src/client/effects.js
  function createEffects(runtime2) {
    const particles = { pool: [] }, floatingTexts = { pool: [] }, visualFx = { pool: [] };
    function spawnParticles(x, y, color, count, pType) {
      for (let i = 0; i < count && particles.pool.length < 2500; i++) particles.pool.push({
        active: true,
        x,
        y,
        color,
        pType,
        vx: (Math.random() - 0.5) * 500,
        vy: (Math.random() - 1) * 400,
        life: 0.3 + Math.random() * 0.5,
        size: Math.random() * 8 + 4
      });
    }
    function spawnCanvasText(text, x, y, color, options = {}) {
      if (floatingTexts.pool.length >= 200) return;
      const life = options.life ?? 1;
      floatingTexts.pool.push({
        active: true,
        text,
        x,
        y,
        color,
        life,
        maxLife: life,
        size: options.size || 30,
        grow: options.grow ?? 15,
        rise: options.rise,
        decay: options.decay,
        stroke: !!options.stroke
      });
    }
    function effectsTick(dt, events) {
      for (const event of events) {
        if (event.type === "damage") {
          spawnParticles(event.x, event.y, runtime2.COLORS.destructive, 5, "splatter");
          if (event.amount >= 20) spawnCanvasText(`-${Math.floor(event.amount)}`, event.x, event.y - 20, runtime2.COLORS.destructive);
        } else if (event.type === "death") {
          spawnParticles(event.x, event.y - event.size / 2, runtime2.COLORS.destructive, 10, "splatter");
          spawnParticles(event.x, event.y - event.size, runtime2.COLORS.pencilLight, 1, "ghost");
          if (event.team === -1) spawnCanvasText(`+${event.gold}g`, event.x, event.y - event.size - 20, runtime2.COLORS.gold);
        } else if (event.type === "spawn") spawnParticles(event.x, event.y - event.size / 2, runtime2.COLORS.pencil, 8, "graphite");
        else if (event.type === "melee") spawnParticles(event.x, event.y, runtime2.COLORS.pencil, 1, "slash");
        else if (event.type === "impact") {
          spawnParticles(event.x, GROUND_Y, runtime2.COLORS.fire, 20, "explosion");
          runtime2.screenShake = 0.2;
        } else if (event.type === "special" && event.age === 3) {
          for (let i = 0; i < 2; i++) visualFx.pool.push({
            active: true,
            type: "plane",
            x: event.team === 1 ? -i * 200 : CANVAS_WIDTH + i * 200,
            y: 150 + i * 65,
            vx: event.team * 600,
            team: event.team
          });
        } else if (event.type === "evolve" && event.team === 1) {
          runtime2.applyTheme(event.age);
          runtime2.ageTransition = 1;
          runtime2.screenShake = 0.5;
          spawnCanvasText("NEW AGE!", 230, 360, runtime2.COLORS.gold);
        }
      }
      for (const pt of particles.pool) {
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        if (["splatter", "explosion", "dust"].includes(pt.pType)) pt.vy += 600 * dt;
        if (pt.pType === "graphite" || pt.pType === "ghost") {
          pt.x += Math.sin(pt.life * 10) * 15 * dt;
          pt.y -= 30 * dt;
        }
        pt.life -= dt;
      }
      particles.pool = particles.pool.filter((p) => p.life > 0);
      for (const ft of floatingTexts.pool) {
        ft.life -= dt * (ft.decay || 1.2);
        ft.y -= dt * (ft.rise ?? 40);
      }
      floatingTexts.pool = floatingTexts.pool.filter((p) => p.life > 0);
      for (const fx of visualFx.pool) fx.x += fx.vx * dt;
      visualFx.pool = visualFx.pool.filter((f) => f.x > -500 && f.x < CANVAS_WIDTH + 500);
      runtime2.screenShake = Math.max(0, (runtime2.screenShake || 0) - dt);
      runtime2.ageTransition = Math.max(0, (runtime2.ageTransition || 0) - dt);
    }
    return { particles, floatingTexts, visualFx, spawnParticles, spawnCanvasText, effectsTick };
  }

  // src/client/app.js
  var canvas = document.getElementById("game-canvas");
  var runtime = {
    canvas,
    ctx: canvas.getContext("2d"),
    COLORS: { ...COLORS },
    gameState: {},
    globalTime: 0,
    currentDifficulty: "normal",
    currentConfig: DIFFICULTY_SETTINGS.normal,
    currentTab: "units",
    RELEASE_VERSION: RULES_VERSION,
    UPGRADE_INFO: {
      dmg: { title: "Sharpened", stat: "+15% damage per level", compact: "+15% DMG/lvl", color: COLORS.accent },
      hp: { title: "Thick Paper", stat: "+25% base and new unit health", compact: "+25% HP/lvl", color: COLORS.green },
      econ: { title: "Fast Ink", stat: "+20% gold income per level", compact: "+20% gold/lvl", color: COLORS.gold }
    }
  };
  for (const factory of [createStorage, createUI, createWatercolor, createGemma, createDirectorPanel, createCommander, createAudio, createRenderer, createHUD, createEffects]) Object.assign(runtime, factory(runtime));
  var accumulator = 0;
  var ended = false;
  var manual = false;
  var frameId = 0;
  function syncView() {
    const s = runtime.session.observe();
    runtime.globalTime = s.tick / 60;
    runtime.gameState = {
      ...s,
      units: { pool: s.units },
      projectiles: { pool: s.projectiles },
      particles: runtime.particles,
      floatingTexts: runtime.floatingTexts,
      visualFx: runtime.visualFx,
      worldProgress: Math.min(1, runtime.globalTime * 0.75),
      screenShake: runtime.screenShake || 0,
      ageTransition: runtime.ageTransition || 0,
      specialActive: s.specials.find((sp) => sp.team === 1) || null
    };
    for (const sp of s.specials) {
      if (sp.age >= 4) runtime.gameState.projectiles.pool.push({
        active: true,
        isSpecial: true,
        team: sp.team,
        type: AGES[sp.age].special.type,
        x: sp.x,
        y: 600,
        life: sp.remaining / 60
      });
    }
  }
  function command(c) {
    if (!runtime.session) return { ok: false, error: "not-started" };
    const result = runtime.session.command(1, c);
    syncView();
    runtime.updateUI();
    return result;
  }
  Object.assign(runtime, {
    buyUnit: (index) => command({ type: "unit", index }),
    buyTurret: (index) => command({ type: "turret", index }),
    sellTurret: () => command({ type: "sell" }),
    buySlot: () => command({ type: "slot" }),
    buyUpgrade: (stat) => command({ type: "upgrade", stat }),
    evolve: () => command({ type: "evolve" }),
    useSpecial: () => command({ type: "special" }),
    getStatMult: (owner, type) => multiplier(runtime.session.observe(), owner === runtime.gameState.enemy ? -1 : 1, type),
    getIncome: () => INCOME[runtime.gameState.player.age] * runtime.getStatMult(runtime.gameState.player, "econ"),
    isLegal: (c) => runtime.session?.legal(1, c) ?? false,
    applyTheme(ageIndex) {
      const theme = AGES[ageIndex].theme;
      for (const [name, value] of Object.entries({ background: theme.bg, foreground: theme.fg, pencil: theme.fg, accent: theme.accent })) document.documentElement.style.setProperty(`--${name}`, value);
      Object.assign(runtime.COLORS, { pencil: `hsl(${theme.fg})`, pencilLight: `hsl(${theme.fg} / 0.5)`, accent: `hsl(${theme.accent})` });
    },
    switchTab(tab) {
      runtime.currentTab = tab;
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.getElementById(`tab-${tab}`).classList.add("active");
      runtime.UIManager.toggleClass("menuUnits", tab !== "units", "hidden");
      runtime.UIManager.toggleClass("menuTurrets", tab !== "turrets", "hidden");
      runtime.UIManager.toggleClass("menuUpgrades", tab !== "upgrades", "hidden");
      runtime.updateUI();
    }
  });
  function finish() {
    if (ended || runtime.session.running) return;
    ended = true;
    const won = runtime.session.winner === 1, draw = runtime.session.winner === 0;
    document.getElementById("game-over-screen").classList.remove("hidden");
    runtime.TooltipManager.hide();
    runtime.MusicDirector.setOutcome(won);
    document.getElementById("end-title").innerText = draw ? "A Draw!" : won ? "Victory!" : "Defeat...";
    document.getElementById("end-desc").innerText = draw ? "Both civilizations reached the end of the page together." : won ? "You have conquered history and filled the sketchbook." : "Your civilization was erased from the pages of history.";
    if (won) runtime.StorageManager.saveWin(runtime.currentDifficulty);
    runtime.DirectorPanel.add("ai", draw ? "We shared the last page." : won ? "That page is yours. I saved the difficulty medal." : "I took this page. The pacts and memory remain for the rematch.");
    runtime.GemmaMemory.recordSystem(`Match ended: ${draw ? "draw" : won ? "player won" : "opponent won"} ${runtime.currentDifficulty} at ${Math.round(runtime.globalTime)}s.`);
  }
  function advance(ticks) {
    const result = runtime.session.advance(ticks);
    runtime.effectsTick(ticks * FIXED_DT, result.events);
    syncView();
    runtime.updateUI();
    finish();
    return result;
  }
  function frame(timestamp) {
    if (!runtime.session) return;
    const elapsed = Math.max(0, (timestamp - runtime.lastTime) / 1e3);
    runtime.lastTime = timestamp;
    if (!manual && elapsed > 0.5 && runtime.session.running && !runtime.session.paused) runtime.togglePause(true);
    if (!manual && runtime.session.running && !runtime.session.paused) {
      accumulator += elapsed;
      const ticks = Math.floor(accumulator / FIXED_DT);
      if (ticks) {
        advance(ticks);
        accumulator -= ticks * FIXED_DT;
        runtime.AIDirector.tick(ticks * FIXED_DT);
        runtime.MusicDirector.update(ticks * FIXED_DT);
      }
    }
    runtime.draw();
    frameId = requestAnimationFrame(frame);
  }
  function initGame(diffKey = "normal", options = {}) {
    if (runtime.session?.running) return;
    const { manual: manualClock = false, ...sessionOptions } = options;
    runtime.session = new Session({ difficulty: diffKey, ...sessionOptions });
    runtime.session.agreements(runtime.DirectorMemory.data.agreements);
    runtime.currentDifficulty = diffKey;
    runtime.currentConfig = DIFFICULTY_SETTINGS[diffKey];
    manual = manualClock;
    accumulator = 0;
    ended = false;
    syncView();
    document.getElementById("start-screen").classList.add("fade-out");
    document.getElementById("game-over-screen").classList.add("hidden");
    document.getElementById("pause-overlay").classList.add("hidden");
    document.getElementById("ui-layer").classList.remove("hidden");
    const badge = document.getElementById("diff-badge");
    badge.innerText = runtime.currentConfig.name;
    badge.style.backgroundColor = runtime.currentConfig.color;
    runtime.applyTheme(runtime.gameState.player.age);
    runtime.switchTab("units");
    runtime.AIDirector.start(diffKey);
    runtime.MusicDirector.start("game_start");
    runtime.lastTime = performance.now();
    cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(frame);
  }
  for (const name of ["buyUnit", "buyTurret", "sellTurret", "buySlot", "buyUpgrade", "evolve", "useSpecial", "switchTab", "togglePause", "toggleDirectorPanel", "toggleMusicMute", "submitDirectorChat", "installLocalGemma"]) window[name] = runtime[name];
  window.initGame = initGame;
  window.InkBattle = Object.freeze({
    Session,
    start: initGame,
    command,
    advance,
    observe: () => runtime.session?.observe(),
    replay: () => runtime.session?.replay(),
    digest: () => runtime.session?.digest(),
    render: () => runtime.draw()
  });
  async function boot() {
    runtime.UIManager.init();
    runtime.TooltipManager.init();
    runtime.StorageManager.init();
    runtime.DirectorMemory.init();
    runtime.GemmaMemory.init();
    runtime.DirectorPanel.init();
    runtime.NativeGemma.init();
    runtime.MusicDirector.init();
    await runtime.WatercolorEngine.generateAll();
    document.getElementById("preloader").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
  }
  boot().catch((error) => {
    document.querySelector(".loader-brush").textContent = `Could not prepare the canvas: ${error.message}`;
    console.error(error);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) runtime.MusicDirector.suspendForPage();
    else runtime.MusicDirector.resumeForPage();
    if (document.hidden && runtime.session?.running && !runtime.session.paused) runtime.togglePause(true);
  });
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./service-worker.js").catch(() => {
  });
})();
