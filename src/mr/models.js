import { UNIT_FORMS } from './catalog.js';

const INK = '#342d2b',
  PAPER = '#fff3d8';
export const TEAM_COLORS = { 1: '#2b8d88', '-1': '#b64f42' };
const ACCENTS = [
  '#bb793b',
  '#63758c',
  '#916142',
  '#647f5d',
  '#55b7c8',
  '#ac75c5'
];

function stickman(b, form, age, color, t, walking, attacking, held) {
  const gait = walking && !held ? Math.sin(t * 10) * 0.026 : 0.002;
  const swing = attacking ? Math.sin(t * 18) * 0.045 : 0;
  const hip = [0, 0.071, 0],
    neck = [0, 0.13, 0];
  b.line(hip, neck, 0.0045);
  b.outlineBall([0, 0.158, 0], 0.025);
  b.sphere([0.021, 0.16, -0.012], 0.0028, INK);
  b.sphere([0.021, 0.16, 0.012], 0.0028, INK);
  for (const side of [-1, 1]) {
    const foot = [side * gait, 0.006, side * 0.02],
      knee = [-side * gait * 0.5, 0.038, side * 0.013];
    b.line(hip, knee);
    b.line(knee, foot);
    b.line(foot, [foot[0] + 0.014, 0.004, foot[2]], 0.005);
  }
  const hand = held
    ? [0.018, 0.226, 0.02]
    : [0.061 + swing, 0.099 + swing * 0.3, 0.02];
  b.line(neck, [0.02, held ? 0.17 : 0.1, 0.019]);
  b.line([0.02, held ? 0.17 : 0.1, 0.019], hand);
  b.line(neck, [-0.024, 0.097, -0.018]);
  b.line([-0.024, 0.097, -0.018], [0.016, 0.079, -0.025]);
  b.line([-0.01, 0.127, -0.017], [0.017, 0.119, 0.024], 0.009, color);
  if (['sword', 'halberd', 'blade'].includes(form)) {
    b.line(
      hand,
      [hand[0] + 0.028, hand[1] + 0.09, hand[2]],
      0.005,
      form === 'blade' ? '#53dfe2' : '#a3a7a5'
    );
    b.line(
      [hand[0] - 0.016, hand[1] + 0.016, hand[2]],
      [hand[0] + 0.018, hand[1] + 0.007, hand[2]],
      0.004
    );
    if (form === 'halberd')
      b.box(
        [hand[0] + 0.025, hand[1] + 0.071, hand[2]],
        [0.027, 0.028, 0.007],
        '#a3a7a5'
      );
  } else if (['rifle', 'soldier', 'musket', 'blaster'].includes(form)) {
    b.box(
      [hand[0] - 0.006, hand[1], hand[2]],
      [0.035, 0.012, 0.012],
      ACCENTS[age]
    );
    b.line(
      hand,
      [hand[0] + 0.06, hand[1] + 0.012, hand[2]],
      0.0048,
      form === 'blaster' ? '#65cbd8' : INK
    );
  } else if (form === 'bow') {
    b.line([0.071, 0.145, 0.021], [0.085, 0.103, 0.021], 0.003);
    b.line([0.085, 0.103, 0.021], [0.07, 0.058, 0.021], 0.003);
    b.line([0.071, 0.145, 0.021], [0.07, 0.058, 0.021], 0.0014, '#8a7a64');
  } else if (form === 'sling') {
    b.line(hand, [hand[0] + 0.023, hand[1] + 0.047, 0.021], 0.0018);
    b.outlineBall([hand[0] + 0.023, hand[1] + 0.047, 0.021], 0.006);
  } else {
    b.line(hand, [hand[0] + 0.025, hand[1] + 0.051, 0.022], 0.008, '#866342');
    b.outlineBall([hand[0] + 0.023, hand[1] + 0.048, 0.022], 0.012, '#a38a6b');
  }
  if (age === 1)
    b.part('cone', [0, 0.183, 0], [0.028, 0.025, 0.028], '#84919c');
  if (age === 2)
    b.part('cone', [0, 0.185, 0], [0.031, 0.025, 0.024], '#514c47');
  if (age === 3)
    b.part('sphere', [0, 0.175, 0], [0.028, 0.012, 0.028], '#667755');
  if (age === 4) {
    b.box([0, 0.11, 0], [0.023, 0.033, 0.029], '#a7c8cd');
    b.line([0.024, 0.166, -0.017], [0.024, 0.166, 0.017], 0.004, '#43c4d8');
  }
}

function mount(b, dinosaur, color, t, walking, held) {
  b.part(
    'sphere',
    [-0.012, 0.061, 0],
    [0.062, 0.035, 0.034],
    dinosaur ? '#a8ad80' : '#c6a379'
  );
  b.line(
    [0.024, 0.077, 0],
    [0.065, 0.116, 0],
    0.017,
    dinosaur ? '#a8ad80' : '#c6a379'
  );
  b.outlineBall([0.073, 0.125, 0], 0.024, dinosaur ? '#a8ad80' : '#c6a379');
  b.line([-0.063, 0.072, 0], [-0.113, 0.09, 0], 0.007);
  for (const x of [-0.045, 0.03])
    for (const z of [-0.025, 0.025]) {
      const gait = walking ? Math.sin(t * 9 + x * 30 + z * 30) * 0.02 : 0;
      b.line([x, 0.064, z], [x + gait, 0.006, z], 0.005);
    }
  b.outlineBall([-0.005, 0.163, 0], 0.019);
  b.line([-0.005, 0.144, 0], [-0.014, 0.089, 0]);
  b.line([-0.014, 0.099, 0], [-0.009, 0.042, 0.039]);
  b.line(
    [-0.012, 0.129, 0.012],
    held ? [0.018, 0.226, 0.02] : [0.048, 0.116, 0.02]
  );
  b.line([-0.01, 0.137, -0.015], [0.002, 0.13, 0.016], 0.008, color);
  if (!dinosaur) b.line([0.033, 0.109, 0.024], [0.117, 0.2, 0.024], 0.0025);
}

export function cannonModel(
  b,
  age = 0,
  index = 0,
  color = '#64768a',
  moving = false
) {
  const dark = age >= 4 ? '#567a8d' : '#8e7454';
  b.box([0, 0.031, 0], [0.085, 0.032, 0.065], dark);
  for (const x of [-0.028, 0.029])
    for (const z of [-0.038, 0.038]) {
      b.part('ring', [x, 0.026, z], [0.022, 0.022, 0.022], INK);
      b.line([x, 0.026, z], [x, 0.026, -z], 0.003);
    }
  const end = [0.1 + index * 0.013, 0.079 + index * 0.019, 0];
  b.line([-0.034, 0.065, 0], end, 0.014 + index * 0.002, color);
  b.line([end[0] - 0.006, end[1] - 0.001, 0], end, 0.018 + index * 0.002, INK);
  if (age >= 4) b.outlineBall([0.034, 0.071, 0], 0.023, '#71d2de');
  if (age === 0) {
    b.line([-0.033, 0.055, 0], [-0.06, 0.115, 0], 0.004);
    b.outlineBall([-0.06, 0.118, 0], 0.025, '#bdb49d');
  }
  if (age === 1) {
    b.line([-0.054, 0.09, -0.046], [0.01, 0.09, 0], 0.004);
    b.line([-0.054, 0.09, 0.046], [0.01, 0.09, 0], 0.004);
  }
  if (moving)
    b.line(
      [-0.01, 0.058, -0.025],
      [0.014, 0.077, -0.026],
      0.006,
      TEAM_COLORS[1]
    );
}

export function unitModel(
  b,
  age,
  index,
  {
    x = 0,
    y = 0,
    z = 0,
    scale = 1,
    team = 1,
    time = 0,
    walking = false,
    attacking = false,
    held = false
  } = {}
) {
  b.model(x, y, z, scale, team);
  const form = UNIT_FORMS[age]?.[index] || 'club',
    color = TEAM_COLORS[team];
  if (form === 'dinosaur' || form === 'horse')
    mount(b, form === 'dinosaur', color, time, walking, held);
  else if (form === 'cannon') cannonModel(b, age, 1, color, true);
  else if (form === 'tank') {
    b.box([0, 0.053, 0], [0.14, 0.049, 0.091], '#778465');
    b.box([0, 0.091, 0], [0.072, 0.036, 0.065], color);
    for (const z0 of [-0.054, 0.054]) {
      b.box([0, 0.026, z0], [0.16, 0.034, 0.024], '#484747');
      for (const xx of [-0.052, -0.017, 0.019, 0.055])
        b.part('ring', [xx, 0.026, z0 * 1.2], [0.016, 0.016, 0.014], '#bcb29b');
    }
    b.line([0.018, 0.096, 0], [0.15, 0.105, 0], 0.008);
  } else if (form === 'mech') {
    const step = walking ? Math.sin(time * 8) * 0.025 : 0;
    b.box([0, 0.133, 0], [0.074, 0.065, 0.062], '#bdd3d0');
    b.outlineBall([0.025, 0.175, 0], 0.023, '#77c8d7');
    for (const s of [-1, 1]) {
      b.line([0, 0.112, s * 0.027], [-step * s, 0.056, s * 0.04], 0.009);
      b.line([-step * s, 0.056, s * 0.04], [step * s, 0.006, s * 0.05], 0.008);
      b.line([0, 0.147, s * 0.049], [0.096, 0.138, s * 0.049], 0.011, color);
    }
  } else if (['drone', 'ray', 'mothership'].includes(form)) {
    const size = form === 'mothership' ? 0.077 : 0.041,
      lift = 0.095 + Math.sin(time * 2) * 0.006;
    b.part('sphere', [0, lift, 0], [size, size * 0.45, size * 0.75], PAPER);
    b.part('ring', [0, lift, 0], [size * 1.3, size * 1.3, size * 0.8], INK, [
      Math.PI / 2,
      0,
      0.1
    ]);
    b.outlineBall([0.035, lift + 0.008, 0], 0.013, color);
    for (const s of [-1, 1])
      b.line(
        [0, lift, s * size * 0.7],
        [-0.015, lift + 0.03, s * size * 1.7],
        0.004,
        '#ac75c5'
      );
    if (form === 'mothership') {
      b.part('cone', [0, lift + 0.045, 0], [0.029, 0.054, 0.029], color);
      b.line([0, lift + 0.071, 0], [0, lift + 0.12, 0], 0.003);
    }
  } else stickman(b, form, age, color, time, walking, attacking, held);
}

export function baseModel(b, age, x, team, progress = 1) {
  const color = TEAM_COLORS[team],
    y = -0.3 * (1 - progress);
  b.model(x, y, 0.14, 1, team);
  b.box([0, 0.025, 0], [0.27, 0.05, 0.48], '#d5c09a');
  if (age === 0) {
    b.part('sphere', [0, 0.07, 0], [0.14, 0.145, 0.15], '#dbcba7');
    b.part('sphere', [0.11, 0.066, 0.02], [0.013, 0.068, 0.05], INK);
    for (let i = 0; i < 8; i++)
      b.line(
        [-0.1 + i * 0.028, 0.05, 0.13],
        [-0.06 + i * 0.02, 0.18 - Math.abs(i - 3.5) * 0.016, -0.09],
        0.0018,
        '#6c6455'
      );
  } else if (age === 1 || age === 2) {
    b.box([0, 0.111, 0], [0.21, 0.17, 0.3], PAPER);
    for (const z of [-0.12, 0.12]) {
      b.box([0, 0.175, z], [0.15, 0.24, 0.065], '#e1d5ba');
      for (const xx of [-0.06, 0, 0.06])
        b.box([xx, 0.31, z], [0.037, 0.044, 0.065], PAPER);
    }
    b.box([0.109, 0.089, 0.01], [0.008, 0.105, 0.07], INK);
  } else if (age === 3) {
    b.box([0, 0.07, 0], [0.22, 0.1, 0.31], '#9caa8b');
    b.part('sphere', [0, 0.12, 0], [0.15, 0.04, 0.18], '#687660');
    b.box([0.117, 0.077, 0], [0.012, 0.024, 0.19], INK);
  } else {
    b.part(
      'sphere',
      [0, 0.064, 0],
      [0.145, 0.12, 0.18],
      age === 4 ? '#acd0cd' : '#bb9ace'
    );
    for (const z of [-0.15, 0.15]) {
      b.part('cone', [0, 0.175, z], [0.047, 0.3, 0.047], color);
      b.sphere([0, 0.333, z], 0.022, '#e6c48a');
    }
    if (age === 5)
      b.part('ring', [0.11, 0.16, 0], [0.12, 0.12, 0.12], '#bc74d0', [
        0,
        Math.PI / 2,
        0
      ]);
  }
  b.line([0, 0.17, -0.2], [0, 0.4, -0.2], 0.004);
  b.box([0.043, 0.369, -0.2], [0.083, 0.045, 0.004], color);
}

export function objectModel(b, offer, age, options = {}) {
  const { x = 0, y = 0, z = 0, scale = 1, time = 0, held = false } = options;
  if (offer.kind === 'unit')
    return unitModel(b, age, offer.command.index, { ...options, team: 1 });
  b.model(x, y, z, scale);
  if (offer.kind === 'turret')
    return cannonModel(b, age, offer.command.index, TEAM_COLORS[1]);
  const potionColor =
    { dmg: '#d37768', hp: '#70b392', econ: '#d7b750' }[offer.command?.stat] ||
    (offer.kind === 'special' ? '#ce8260' : '#859ac1');
  if (['potion', 'evolve', 'special'].includes(offer.kind)) {
    b.part('sphere', [0, 0.046, 0], [0.035, 0.043, 0.027], '#efe7cb');
    b.part('sphere', [0, 0.041, 0.002], [0.03, 0.032, 0.024], potionColor);
    b.part('rod', [0, 0.088, 0], [0.013, 0.035, 0.013], '#e8dcb6');
    b.box([0, 0.108, 0], [0.027, 0.011, 0.025], '#926c4a');
    b.part('ring', [0, 0.039, 0.027], [0.012, 0.012, 0.012], INK);
  } else if (offer.kind === 'hourglass') {
    for (const yy of [0.013, 0.122])
      b.box([0, yy, 0], [0.08, 0.013, 0.055], '#b88f5b');
    b.part('cone', [0, 0.044, 0], [0.03, 0.056, 0.025], '#debc67');
    b.part('cone', [0, 0.088, 0], [0.03, 0.056, 0.025], '#e5d9be', [
      Math.PI,
      0,
      0
    ]);
    for (const xx of [-0.034, 0.034])
      b.line([xx, 0.018, 0], [xx, 0.115, 0], 0.003);
  } else if (offer.kind === 'clock' || offer.kind === 'compass') {
    b.part('ring', [0, 0.063, 0], [0.046, 0.046, 0.015], '#a68b5c');
    b.part('sphere', [0, 0.063, 0], [0.043, 0.043, 0.007], PAPER);
    b.line([0, 0.063, 0.012], [0.018, 0.083, 0.012], 0.0025);
    b.line([0, 0.063, 0.012], [-0.025, 0.049, 0.012], 0.0025);
  } else if (offer.kind === 'music') {
    b.box([0, 0.033, 0], [0.09, 0.066, 0.066], '#bc966a');
    b.part('ring', [0, 0.04, 0.035], [0.023, 0.023, 0.012], INK);
    b.line([0.04, 0.07, 0], [0.065, 0.12, 0], 0.003);
    b.line([0.065, 0.12, 0], [0.092, 0.127, 0], 0.003);
    b.sphere([0.092, 0.12, 0], 0.009, INK);
  } else if (offer.kind === 'feather') {
    b.line([-0.021, 0.012, 0], [0.031, 0.135, 0], 0.002);
    for (let i = 0; i < 7; i++)
      b.line(
        [-0.015 + i * 0.006, 0.025 + i * 0.014, 0],
        [0.025 + i * 0.006, 0.037 + i * 0.014, 0.003],
        0.004,
        '#c9c6b7'
      );
  } else if (offer.kind === 'slot') {
    b.box([0, 0.018, 0], [0.115, 0.035, 0.075], '#c9b38b');
    b.part('ring', [0, 0.038, 0], [0.03, 0.03, 0.03], INK, [Math.PI / 2, 0, 0]);
  } else if (offer.kind === 'eraser')
    b.box([0, 0.022, 0], [0.085, 0.039, 0.048], '#c88d89');
  else if (offer.kind === 'seal') {
    b.part(
      'rod',
      [0, 0.018, 0],
      [0.058, 0.022, 0.058],
      ['#6b8375', '#618dab', '#bc8851', '#b85a55'][
        ['normal', 'hard', 'harder', 'impossible'].indexOf(offer.difficulty)
      ]
    );
    b.part('ring', [0, 0.034, 0], [0.043, 0.043, 0.043], PAPER, [
      Math.PI / 2,
      0,
      0
    ]);
    b.part('cone', [0, 0.064, 0], [0.024, 0.06, 0.024], '#e6d5ac');
  } else b.box([0, 0.025, 0], [0.1, 0.04, 0.08], PAPER);
  if (held)
    b.part(
      'ring',
      [0, 0.15 + Math.sin(time * 4) * 0.003, 0],
      [0.019, 0.019, 0.019],
      '#b3975a',
      [Math.PI / 2, 0, 0]
    );
}
