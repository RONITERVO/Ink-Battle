import { UNIT_FORMS } from "./catalog.js";
import { glyph } from "./glyphs.js";
import { PENCIL } from "./pencil-palette.js";

const INK = PENCIL.ink,
  GRAPHITE = PENCIL.graphite;
export const TEAM_COLORS = { 1: PENCIL.player, "-1": PENCIL.enemy };

function stickman(b, form, age, color, t, walking, attacking, held) {
  const gait = walking && !held ? Math.sin(t * 10) * 0.026 : 0.002;
  const swing = attacking ? Math.sin(t * 18) * 0.045 : 0;
  const hip = [0, 0.071, 0],
    neck = [0, 0.13, 0];
  b.line(hip, neck, 0.0045);
  b.outlineBall([0, 0.158, 0], 0.025);
  b.line([0.021, 0.16, -0.012], [0.023, 0.163, -0.012], 0.0035, INK);
  b.line([0.021, 0.16, 0.012], [0.023, 0.163, 0.012], 0.0035, INK);
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
  // A little scarf is readable from behind and from either side of the table.
  b.path(
    [
      [-0.012, 0.126, 0.023],
      [-0.036, 0.119, 0.024],
      [-0.028, 0.108, 0.025],
    ],
    0.004,
    color,
  );
  if (["sword", "halberd", "blade"].includes(form)) {
    b.line(hand, [hand[0] + 0.028, hand[1] + 0.09, hand[2]], 0.005, color);
    b.line(
      [hand[0] - 0.016, hand[1] + 0.016, hand[2]],
      [hand[0] + 0.018, hand[1] + 0.007, hand[2]],
      0.004,
    );
    if (form === "halberd")
      b.box(
        [hand[0] + 0.025, hand[1] + 0.071, hand[2]],
        [0.027, 0.028, 0.007],
        GRAPHITE,
      );
  } else if (["rifle", "soldier", "musket", "blaster"].includes(form)) {
    b.box([hand[0] - 0.006, hand[1], hand[2]], [0.035, 0.012, 0.012], GRAPHITE);
    b.line(
      hand,
      [hand[0] + 0.06, hand[1] + 0.012, hand[2]],
      0.0048,
      form === "blaster" ? color : INK,
    );
  } else if (form === "bow") {
    b.line([0.071, 0.145, 0.021], [0.085, 0.103, 0.021], 0.003);
    b.line([0.085, 0.103, 0.021], [0.07, 0.058, 0.021], 0.003);
    b.line([0.071, 0.145, 0.021], [0.07, 0.058, 0.021], 0.0014, GRAPHITE);
  } else if (form === "sling") {
    b.path(
      [
        hand,
        [hand[0] + 0.033, hand[1] + 0.02, 0.023],
        [hand[0] + 0.023, hand[1] + 0.065, 0.021],
        [hand[0] - 0.01, hand[1] + 0.028, 0.021],
        hand,
      ],
      0.0023,
    );
    b.outlineBall([hand[0] + 0.023, hand[1] + 0.047, 0.021], 0.006);
  } else {
    b.path(
      [
        hand,
        [hand[0] + 0.006, hand[1] + 0.061, 0.022],
        [hand[0] + 0.021, hand[1] + 0.071, 0.022],
        [hand[0] + 0.034, hand[1] + 0.057, 0.022],
        [hand[0] + 0.01, hand[1], 0.022],
      ],
      0.004,
    );
    b.line(
      [hand[0] + 0.014, hand[1] + 0.018, 0.024],
      [hand[0] + 0.023, hand[1] + 0.055, 0.024],
      0.002,
    );
  }
  if (form === "sword") {
    b.path(
      [
        [-0.027, 0.12, -0.03],
        [0.008, 0.119, -0.033],
        [0.009, 0.08, -0.033],
        [-0.009, 0.063, -0.033],
        [-0.029, 0.082, -0.03],
        [-0.027, 0.12, -0.03],
      ],
      0.0038,
      color,
    );
    b.line([-0.009, 0.111, -0.034], [-0.009, 0.08, -0.034], 0.0025);
  }
  if (form === "musket") {
    b.line(
      [hand[0] + 0.045, hand[1] + 0.012, hand[2]],
      [hand[0] + 0.093, hand[1] + 0.012, hand[2]],
      0.003,
    );
    b.path(
      [
        [-0.026, 0.179, 0],
        [0, 0.199, -0.027],
        [0.033, 0.181, 0.008],
        [-0.026, 0.179, 0],
      ],
      0.003,
    );
  }
  if (form === "rifle") {
    b.box([0.042, 0.117, 0.024], [0.029, 0.009, 0.008]);
    b.line([0.024, 0.119, 0.024], [0.058, 0.119, 0.024], 0.002);
  }
  if (form === "soldier") b.box([-0.018, 0.105, -0.014], [0.02, 0.035, 0.034]);
  if (form === "blade")
    b.path(
      [
        [hand[0], hand[1] + 0.03, hand[2]],
        [hand[0] + 0.009, hand[1] + 0.11, hand[2]],
        [hand[0] + 0.029, hand[1] + 0.09, hand[2]],
        [hand[0], hand[1] + 0.03, hand[2]],
      ],
      0.003,
      color,
    );
  if (form === "blaster")
    b.part(
      "ring",
      [hand[0] + 0.047, hand[1] + 0.011, hand[2]],
      [0.013, 0.013, 0.013],
      color,
      [0, Math.PI / 2, 0],
    );
  if (age === 1) b.part("cone", [0, 0.183, 0], [0.028, 0.025, 0.028], GRAPHITE);
  if (age === 2) b.part("cone", [0, 0.185, 0], [0.031, 0.025, 0.024], GRAPHITE);
  if (age === 3)
    b.part("sphere", [0, 0.175, 0], [0.028, 0.012, 0.028], GRAPHITE);
  if (age === 4) {
    b.box([0, 0.11, 0], [0.023, 0.033, 0.029], GRAPHITE);
    b.line([0.024, 0.166, -0.017], [0.024, 0.166, 0.017], 0.004, GRAPHITE);
  }
}

function mount(b, dinosaur, color, t, walking, held) {
  b.part("sphere", [-0.012, 0.061, 0], [0.062, 0.035, 0.034], GRAPHITE);
  b.line([0.024, 0.077, 0], [0.065, 0.116, 0], 0.017, GRAPHITE);
  b.outlineBall([0.073, 0.125, 0], 0.024, GRAPHITE);
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
    held ? [0.018, 0.226, 0.02] : [0.048, 0.116, 0.02],
  );
  b.line([-0.01, 0.137, -0.015], [0.002, 0.13, 0.016], 0.008, color);
  if (!dinosaur) b.line([0.033, 0.109, 0.024], [0.117, 0.2, 0.024], 0.0025);
  if (dinosaur) {
    // Stegosaur plates, a blunt muzzle and claws distinguish it from the horse.
    for (let i = 0; i < 4; i++) {
      const x = -0.06 + i * 0.022;
      b.path(
        [
          [x, 0.083, 0],
          [x + 0.004, 0.116, 0],
          [x + 0.019, 0.085, 0],
        ],
        0.003,
      );
    }
    b.line([0.078, 0.117, 0.02], [0.097, 0.12, 0.02], 0.003);
  } else {
    b.path(
      [
        [0.061, 0.14, 0],
        [0.058, 0.165, -0.008],
        [0.071, 0.143, 0],
      ],
      0.003,
    );
    b.path(
      [
        [0.048, 0.1, -0.014],
        [0.036, 0.079, -0.02],
        [0.053, 0.122, -0.016],
      ],
      0.003,
    );
    b.line([0.073, 0.123, 0.026], [0.005, 0.12, 0.028], 0.002);
  }
}

// Every defense has its own silhouette. Names and prices still come from AGES.
export function cannonModel(
  b,
  age = 0,
  index = 0,
  color = PENCIL.player,
  moving = false,
) {
  b.box([0, 0.024, 0], [0.085, 0.022, 0.072]);
  if (age < 3 || moving) {
    for (const z of [-0.042, 0.042]) {
      b.part("ring", [-0.016, 0.025, z], [0.023, 0.023, 0.023], INK);
      b.line([-0.039, 0.025, z], [0.007, 0.025, z], 0.0025);
      b.line([-0.016, 0.002, z], [-0.016, 0.048, z], 0.0025);
    }
  } else {
    for (const z of [-0.035, 0.035])
      b.path(
        [
          [-0.043, 0.002, z * 1.4],
          [0, 0.05, z],
          [0.043, 0.002, z * 1.4],
        ],
        0.003,
      );
  }
  const barrel = (x, y, length, slope = 0.12, z = 0, r = 0.01) => {
    for (const sign of [-1, 1])
      b.path(
        [
          [x, y + sign * r, z - r],
          [x + length, y + slope * length + sign * r, z - r],
          [x + length, y + slope * length + sign * r, z + r],
          [x, y + sign * r, z + r],
        ],
        0.0038,
      );
    b.part(
      "ring",
      [x + length, y + slope * length, z],
      [r * 1.25, r * 1.25, r * 1.25],
      color,
      [0, Math.PI / 2, 0],
    );
  };
  if ((age === 0 && index === 0) || (age === 1 && index === 0)) {
    // Rock thrower / counterweight catapult.
    b.path(
      [
        [-0.034, 0.034, 0],
        [-0.02, 0.076, 0],
        [0.058, 0.151, 0],
      ],
      0.004,
    );
    b.outlineBall([0.058, 0.151, 0], 0.023);
    b.path(
      [
        [-0.02, 0.076, -0.034],
        [-0.047, 0.03, -0.034],
        [0.022, 0.03, -0.034],
        [-0.02, 0.076, -0.034],
      ],
      0.003,
    );
    if (age === 1) b.box([-0.052, 0.056, 0], [0.032, 0.044, 0.036]);
  } else if (age === 0 && index === 1) {
    b.path(
      [
        [-0.02, 0.026, 0],
        [-0.01, 0.075, 0],
        [0, 0.131, -0.045],
      ],
      0.004,
    );
    b.line([-0.01, 0.075, 0], [0, 0.131, 0.045], 0.004);
    b.path(
      [
        [0, 0.131, -0.045],
        [-0.048, 0.091, 0],
        [0, 0.131, 0.045],
      ],
      0.002,
    );
    b.part("sphere", [-0.048, 0.097, 0], [0.016, 0.024, 0.016]);
  } else if (age === 0 && index === 2) {
    b.part("rod", [0, 0.073, 0], [0.034, 0.065, 0.034]);
    for (let i = 0; i < 3; i++)
      b.path(
        [
          [-0.024 + i * 0.023, 0.103, 0],
          [-0.009 + i * 0.018, 0.153 + (i % 2) * 0.02, 0],
          [0.014 + i * 0.015, 0.109, 0],
        ],
        0.0035,
        color,
      );
  } else if (age === 1 && index === 1) {
    b.path(
      [
        [-0.035, 0.047, 0],
        [0.025, 0.081, 0],
        [0.105, 0.084, 0],
      ],
      0.004,
    );
    b.path(
      [
        [0.018, 0.081, -0.066],
        [0.053, 0.081, 0],
        [0.018, 0.081, 0.066],
      ],
      0.004,
    );
    b.path(
      [
        [0.018, 0.081, -0.066],
        [-0.022, 0.075, 0],
        [0.018, 0.081, 0.066],
      ],
      0.002,
    );
    b.path(
      [
        [0.088, 0.084, -0.012],
        [0.112, 0.084, 0],
        [0.088, 0.084, 0.012],
      ],
      0.003,
    );
  } else if (age === 1 && index === 2) {
    for (const z of [-0.04, 0.04])
      b.path(
        [
          [-0.04, 0.02, z],
          [-0.022, 0.139, z],
          [0.014, 0.139, z],
          [0.042, 0.02, z],
        ],
        0.0035,
      );
    b.part("sphere", [0.02, 0.103, 0], [0.045, 0.032, 0.034]);
    b.part("ring", [0.02, 0.125, 0], [0.043, 0.043, 0.043], color, [
      Math.PI / 2,
      0,
      0,
    ]);
  } else if (age === 2) {
    barrel(
      -0.03,
      0.066,
      index === 2 ? 0.075 : 0.13,
      index === 2 ? 1.2 : 0.12,
      0,
      index === 1 ? 0.018 : 0.012,
    );
    if (index === 0) b.line([-0.01, 0.027, 0], [-0.01, 0.064, 0], 0.005);
    if (index === 1) b.box([-0.02, 0.044, 0], [0.071, 0.025, 0.051]);
  } else if (age === 3) {
    if (index === 1) {
      b.box([0, 0.089, 0], [0.09, 0.069, 0.07]);
      for (const y of [0.072, 0.1])
        for (const z of [-0.018, 0.018])
          b.part("ring", [0.047, y, z], [0.011, 0.011, 0.011], color, [
            0,
            Math.PI / 2,
            0,
          ]);
    } else {
      barrel(
        -0.025,
        0.072,
        index === 0 ? 0.12 : 0.17,
        index === 0 ? 0.03 : 0.4,
        0,
        index === 0 ? 0.006 : 0.012,
      );
      if (index === 0) b.box([-0.024, 0.059, 0.031], [0.039, 0.036, 0.019]);
      else b.box([0.006, 0.065, 0], [0.015, 0.085, 0.094]);
    }
  } else if (age === 4) {
    b.part("sphere", [0, 0.057, 0], [0.036, 0.022, 0.033]);
    if (index === 0)
      for (const z of [-0.02, 0, 0.02])
        barrel(-0.005, 0.091, 0.094, 0.1, z, 0.005);
    else if (index === 1) {
      barrel(-0.025, 0.086, 0.14, 0.13, 0, 0.015);
      for (let i = 0; i < 3; i++)
        b.part(
          "ring",
          [0.015 + i * 0.027, 0.094, 0],
          [0.025, 0.025, 0.025],
          color,
          [0, Math.PI / 2, 0],
        );
    } else {
      for (const z of [-0.036, 0.036])
        b.path(
          [
            [-0.02, 0.05, 0],
            [0.015, 0.11, z],
            [0.1, 0.123, z],
          ],
          0.004,
          color,
        );
      b.outlineBall([0.078, 0.115, 0], 0.025, color);
    }
  } else {
    b.part("cone", [0, 0.065, 0], [0.027, 0.07, 0.027]);
    if (index === 0) {
      b.part("sphere", [0.01, 0.119, 0], [0.049, 0.025, 0.025]);
      barrel(0.025, 0.119, 0.065, 0, 0, 0.009);
    } else if (index === 1) {
      b.part("ring", [0.012, 0.126, 0], [0.047, 0.047, 0.047], color, [
        0,
        Math.PI / 2,
        0.2,
      ]);
      b.part("ring", [0.012, 0.126, 0], [0.029, 0.029, 0.029], INK, [
        0.5,
        Math.PI / 2,
        0,
      ]);
    } else {
      for (const z of [-0.036, 0.036])
        b.path(
          [
            [-0.025, 0.08, z],
            [0, 0.148, z],
            [0.036, 0.113, z],
            [0.07, 0.164, z],
          ],
          0.004,
          color,
        );
      b.part("sphere", [0.025, 0.137, 0], [0.026, 0.031, 0.026], color);
    }
  }
  b.line([-0.041, 0.023, 0.039], [0.038, 0.023, 0.039], 0.004, color);
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
    held = false,
  } = {},
) {
  b.model(x, y, z, scale, team);
  const form = UNIT_FORMS[age]?.[index] || "club",
    color = TEAM_COLORS[team];
  if (form === "dinosaur" || form === "horse")
    mount(b, form === "dinosaur", color, time, walking, held);
  else if (form === "cannon") cannonModel(b, age, 1, color, true);
  else if (form === "tank") {
    b.box([0, 0.053, 0], [0.14, 0.049, 0.091], GRAPHITE);
    b.box([0, 0.091, 0], [0.072, 0.036, 0.065], color);
    for (const z0 of [-0.054, 0.054]) {
      b.box([0, 0.026, z0], [0.16, 0.034, 0.024], GRAPHITE);
      for (const xx of [-0.052, -0.017, 0.019, 0.055])
        b.part("ring", [xx, 0.026, z0 * 1.2], [0.016, 0.016, 0.014], GRAPHITE);
    }
    b.line([0.018, 0.096, 0], [0.15, 0.105, 0], 0.008);
  } else if (form === "mech") {
    const step = walking ? Math.sin(time * 8) * 0.025 : 0;
    b.box([0, 0.133, 0], [0.074, 0.065, 0.062], GRAPHITE);
    b.outlineBall([0.025, 0.175, 0], 0.023, GRAPHITE);
    for (const s of [-1, 1]) {
      b.line([0, 0.112, s * 0.027], [-step * s, 0.056, s * 0.04], 0.009);
      b.line([-step * s, 0.056, s * 0.04], [step * s, 0.006, s * 0.05], 0.008);
      b.line([0, 0.147, s * 0.049], [0.096, 0.138, s * 0.049], 0.011, color);
    }
  } else if (["drone", "ray", "mothership"].includes(form)) {
    const size = form === "mothership" ? 0.077 : 0.041,
      lift = 0.095 + Math.sin(time * 2) * 0.006;
    b.part("sphere", [0, lift, 0], [size, size * 0.45, size * 0.75], GRAPHITE);
    b.part("ring", [0, lift, 0], [size * 1.3, size * 1.3, size * 0.8], INK, [
      Math.PI / 2,
      0,
      0.1,
    ]);
    b.outlineBall([0.035, lift + 0.008, 0], 0.013, color);
    for (const s of [-1, 1]) {
      if (form === "drone") {
        for (const xx of [-0.04, 0.04]) {
          b.line([0, lift, 0], [xx, lift, s * 0.067], 0.003);
          b.part("ring", [xx, lift, s * 0.067], [0.024, 0.024, 0.024], INK, [
            Math.PI / 2,
            0,
            0,
          ]);
        }
      } else if (form === "ray") {
        b.path(
          [
            [0.04, lift, s * 0.015],
            [-0.015, lift + 0.015, s * 0.13],
            [-0.064, lift, s * 0.047],
            [-0.04, lift, 0],
          ],
          0.004,
          color,
        );
        b.line([0, lift, 0], [-0.015, lift + 0.015, s * 0.13], 0.0025);
      } else {
        b.path(
          [
            [-0.025, lift, s * 0.06],
            [-0.072, lift - 0.035, s * 0.094],
            [-0.052, lift - 0.045, s * 0.116],
          ],
          0.004,
        );
      }
    }
    if (form === "ray")
      b.path(
        [
          [-0.03, lift, 0],
          [-0.11, lift + 0.009, 0],
          [-0.14, lift + 0.039, 0],
        ],
        0.003,
      );
    if (form === "drone") {
      for (const s of [-1, 1])
        b.path(
          [
            [-0.02, lift - 0.009, s * 0.02],
            [-0.03, lift - 0.038, s * 0.024],
            [0.025, lift - 0.038, s * 0.024],
          ],
          0.003,
        );
      b.line([0, lift + 0.013, 0], [0.008, lift + 0.039, 0], 0.003);
    }
    if (form === "mothership") {
      b.part("cone", [0, lift + 0.045, 0], [0.029, 0.054, 0.029], color);
      b.line([0, lift + 0.071, 0], [0, lift + 0.12, 0], 0.003);
    }
  } else stickman(b, form, age, color, time, walking, attacking, held);
}

export function baseModel(b, age, x, team, progress = 1) {
  const color = TEAM_COLORS[team],
    y = -0.3 * (1 - progress);
  b.model(x, y, 0.14, 1, team);
  b.box([0, 0.025, 0], [0.27, 0.05, 0.48], GRAPHITE);
  if (age === 0) {
    b.part("sphere", [0, 0.07, 0], [0.14, 0.145, 0.15], GRAPHITE);
    b.part("sphere", [0.11, 0.066, 0.02], [0.013, 0.068, 0.05], INK);
    for (let i = 0; i < 8; i++)
      b.line(
        [-0.1 + i * 0.028, 0.05, 0.13],
        [-0.06 + i * 0.02, 0.18 - Math.abs(i - 3.5) * 0.016, -0.09],
        0.0018,
        GRAPHITE,
      );
  } else if (age === 1) {
    b.box([0, 0.111, 0], [0.21, 0.17, 0.3], GRAPHITE);
    for (const z of [-0.12, 0.12]) {
      b.box([0, 0.175, z], [0.15, 0.24, 0.065], GRAPHITE);
      for (const xx of [-0.06, 0, 0.06])
        b.box([xx, 0.31, z], [0.037, 0.044, 0.065], GRAPHITE);
    }
    b.box([0.109, 0.089, 0.01], [0.008, 0.105, 0.07], INK);
  } else if (age === 2) {
    b.box([0, 0.09, 0], [0.2, 0.12, 0.29], GRAPHITE);
    for (const z of [-0.14, 0.14]) {
      b.path(
        [
          [-0.11, 0.04, z],
          [-0.13, 0.15, z],
          [-0.045, 0.19, z],
          [0.09, 0.14, z],
          [0.13, 0.04, z],
        ],
        0.004,
      );
      b.path(
        [
          [-0.13, 0.15, z],
          [-0.13, 0.15, z + Math.sign(z) * 0.07],
          [-0.045, 0.19, z + Math.sign(z) * 0.1],
          [0.09, 0.14, z],
        ],
        0.004,
      );
    }
    b.part("cone", [-0.045, 0.227, 0], [0.065, 0.09, 0.075], GRAPHITE);
    for (const z of [-0.07, 0, 0.07])
      b.box([0.103, 0.09, z], [0.005, 0.026, 0.022]);
  } else if (age === 3) {
    b.box([0, 0.07, 0], [0.22, 0.1, 0.31], GRAPHITE);
    b.part("sphere", [0, 0.12, 0], [0.15, 0.04, 0.18], GRAPHITE);
    b.box([0.117, 0.077, 0], [0.012, 0.024, 0.19], INK);
    for (const z of [-0.11, 0, 0.11])
      b.box([0.114, 0.032, z], [0.045, 0.035, 0.08]);
    b.line([-0.08, 0.13, -0.12], [-0.08, 0.32, -0.12], 0.003);
    b.line([-0.12, 0.28, -0.12], [-0.035, 0.28, -0.12], 0.003);
  } else {
    b.part("sphere", [0, 0.064, 0], [0.145, 0.12, 0.18], GRAPHITE);
    for (const z of [-0.15, 0.15]) {
      b.part("cone", [0, 0.175, z], [0.047, 0.3, 0.047], color);
      b.sphere([0, 0.333, z], 0.022, GRAPHITE);
    }
    if (age === 5)
      b.part("ring", [0.11, 0.16, 0], [0.12, 0.12, 0.12], GRAPHITE, [
        0,
        Math.PI / 2,
        0,
      ]);
    if (age === 4) {
      b.part("ring", [0, 0.15, 0], [0.17, 0.17, 0.17], color, [
        Math.PI / 2,
        0,
        0,
      ]);
      b.path(
        [
          [-0.05, 0.17, 0],
          [-0.11, 0.23, 0],
          [-0.16, 0.25, 0],
        ],
        0.004,
      );
      b.part("ring", [-0.16, 0.25, 0], [0.05, 0.05, 0.05], INK, [
        0,
        Math.PI / 2,
        0.3,
      ]);
    }
  }
  b.line([0, 0.17, -0.2], [0, 0.4, -0.2], 0.004);
  b.box([0.043, 0.369, -0.2], [0.083, 0.045, 0.004], color);
}

export function objectModel(b, offer, age, options = {}) {
  const { x = 0, y = 0, z = 0, scale = 1, time = 0, held = false } = options;
  if (offer.kind === "unit")
    return unitModel(b, age, offer.command.index, { ...options, team: 1 });
  b.model(x, y, z, scale);
  if (offer.kind === "turret")
    return cannonModel(b, age, offer.command.index, TEAM_COLORS[1]);
  const potionColor =
    { dmg: PENCIL.damage, hp: PENCIL.health, econ: PENCIL.income }[
      offer.command?.stat
    ] || (offer.kind === "special" ? PENCIL.special : PENCIL.evolution);
  if (["potion", "evolve", "special"].includes(offer.kind)) {
    const symbol = offer.command?.stat || offer.kind;
    const outlines = {
      dmg: [
        [-0.011, 0.095],
        [-0.011, 0.073],
        [-0.034, 0.042],
        [-0.026, 0.014],
        [0.026, 0.014],
        [0.034, 0.042],
        [0.011, 0.073],
        [0.011, 0.095],
      ],
      hp: [
        [-0.013, 0.093],
        [-0.013, 0.076],
        [-0.036, 0.064],
        [-0.039, 0.035],
        [-0.023, 0.012],
        [0.022, 0.012],
        [0.039, 0.035],
        [0.036, 0.064],
        [0.013, 0.076],
        [0.013, 0.093],
      ],
      econ: [
        [-0.025, 0.084],
        [-0.033, 0.072],
        [-0.033, 0.015],
        [0.033, 0.015],
        [0.033, 0.072],
        [0.025, 0.084],
      ],
      evolve: [
        [-0.012, 0.12],
        [-0.012, 0.081],
        [-0.036, 0.023],
        [-0.031, 0.013],
        [0.031, 0.013],
        [0.036, 0.023],
        [0.012, 0.081],
        [0.012, 0.12],
      ],
      special: [
        [-0.017, 0.098],
        [-0.017, 0.081],
        [-0.041, 0.045],
        [-0.026, 0.009],
        [0, 0.003],
        [0.026, 0.009],
        [0.041, 0.045],
        [0.017, 0.081],
        [0.017, 0.098],
      ],
    };
    const outline = outlines[symbol];
    for (const zz of [-0.021, 0.021])
      b.path(
        outline.map(([xx, yy]) => [xx, yy, zz]),
        0.0037,
      );
    for (const i of [0, Math.floor(outline.length / 2), outline.length - 1])
      b.line([...outline[i], -0.021], [...outline[i], 0.021], 0.003);
    const top = outline[0][1];
    b.box([0, top + 0.004, 0], [Math.abs(outline[0][0]) * 2.3, 0.012, 0.047]);
    // The liquid is quick parallel pencil shading, with open glass above it.
    for (let i = 0; i < 5; i++)
      b.line(
        [-0.025 + i * 0.01, 0.018, 0.022],
        [-0.019 + i * 0.01, 0.04, 0.022],
        0.0028,
        potionColor,
      );
    glyph(b, symbol, 0, 0.055, 0.024, 0.017, potionColor);
  } else if (offer.kind === "hourglass") {
    for (const yy of [0.013, 0.122])
      b.box([0, yy, 0], [0.08, 0.013, 0.055], GRAPHITE);
    b.part("cone", [0, 0.044, 0], [0.03, 0.056, 0.025], GRAPHITE);
    b.part("cone", [0, 0.088, 0], [0.03, 0.056, 0.025], GRAPHITE, [
      Math.PI,
      0,
      0,
    ]);
    for (const xx of [-0.034, 0.034])
      b.line([xx, 0.018, 0], [xx, 0.115, 0], 0.003);
  } else if (offer.kind === "clock" || offer.kind === "compass") {
    b.part("ring", [0, 0.063, 0], [0.046, 0.046, 0.015], GRAPHITE);
    b.part("sphere", [0, 0.063, 0], [0.043, 0.043, 0.007], GRAPHITE);
    if (offer.kind === "compass") glyph(b, "compass", 0, 0.063, 0.015, 0.031);
    else {
      b.line([0, 0.063, 0.012], [0.018, 0.083, 0.012], 0.0025);
      b.line([0, 0.063, 0.012], [-0.025, 0.049, 0.012], 0.0025);
      for (let i = 0; i < 12; i++) {
        const a = (i * Math.PI) / 6;
        b.line(
          [Math.cos(a) * 0.035, 0.063 + Math.sin(a) * 0.035, 0.013],
          [Math.cos(a) * 0.04, 0.063 + Math.sin(a) * 0.04, 0.013],
          0.0025,
        );
      }
    }
  } else if (offer.kind === "music") {
    b.box([0, 0.033, 0], [0.09, 0.066, 0.066], GRAPHITE);
    b.part("ring", [0, 0.04, 0.035], [0.023, 0.023, 0.012], INK);
    b.line([0.04, 0.07, 0], [0.065, 0.12, 0], 0.003);
    b.line([0.065, 0.12, 0], [0.092, 0.127, 0], 0.003);
    b.sphere([0.092, 0.12, 0], 0.009, INK);
    glyph(b, "music", 0, 0.041, 0.035, 0.019);
  } else if (offer.kind === "feather") {
    b.line([-0.021, 0.012, 0], [0.031, 0.135, 0], 0.002);
    for (let i = 0; i < 7; i++)
      b.line(
        [-0.015 + i * 0.006, 0.025 + i * 0.014, 0],
        [0.025 + i * 0.006, 0.037 + i * 0.014, 0.003],
        0.004,
        GRAPHITE,
      );
  } else if (offer.kind === "slot") {
    b.box([0, 0.018, 0], [0.115, 0.035, 0.075], GRAPHITE);
    b.part("ring", [0, 0.038, 0], [0.03, 0.03, 0.03], INK, [Math.PI / 2, 0, 0]);
  } else if (offer.kind === "eraser") {
    b.box([0, 0.022, 0], [0.085, 0.039, 0.048], GRAPHITE);
    for (let i = 0; i < 4; i++)
      b.line(
        [-0.04 + i * 0.008, 0.004, 0.025],
        [-0.035 + i * 0.008, 0.039, 0.025],
        0.002,
      );
  } else if (offer.kind === "seal") {
    b.part("rod", [0, 0.018, 0], [0.058, 0.022, 0.058], GRAPHITE);
    b.part("ring", [0, 0.034, 0], [0.043, 0.043, 0.043], GRAPHITE, [
      Math.PI / 2,
      0,
      0,
    ]);
    b.part("cone", [0, 0.064, 0], [0.024, 0.06, 0.024], GRAPHITE);
    const rank =
      ["normal", "hard", "harder", "impossible"].indexOf(offer.difficulty) + 1;
    for (let i = 0; i < rank; i++)
      b.path(
        [
          [-0.018, 0.004 + i * 0.011, 0.06],
          [0, 0.012 + i * 0.011, 0.06],
          [0.018, 0.004 + i * 0.011, 0.06],
        ],
        0.003,
      );
  } else {
    b.box([0, 0.025, 0], [0.1, 0.04, 0.08], GRAPHITE);
    glyph(b, "page", 0, 0.05, 0.042, 0.03);
    for (let i = 0; i < 3; i++)
      b.line(
        [-0.046, 0.015 + i * 0.007, 0.042],
        [0.046, 0.015 + i * 0.007, 0.042],
        0.002,
      );
  }
  if (held)
    b.part(
      "ring",
      [0, 0.15 + Math.sin(time * 4) * 0.003, 0],
      [0.019, 0.019, 0.019],
      GRAPHITE,
      [Math.PI / 2, 0, 0],
    );
}

/** Presentation effects follow authoritative projectiles/specials, never hit tests. */
export function projectileModel(b, type, team, age = 0) {
  const color = TEAM_COLORS[team];
  if (type === "arc" && age === 1) {
    b.line([-0.03 * team, 0, 0], [0.025 * team, 0, 0], 0.0028);
    b.path(
      [
        [0.012 * team, 0.009, 0],
        [0.028 * team, 0, 0],
        [0.012 * team, -0.009, 0],
      ],
      0.0025,
    );
  } else if (type === "laser") {
    b.line([-0.03 * team, -0.003, 0], [0.03 * team, -0.003, 0], 0.0028, color);
    b.line([-0.026 * team, 0.003, 0], [0.035 * team, 0.003, 0], 0.0028, color);
  } else if (type === "straight")
    b.line([-0.015 * team, 0, 0], [0.014 * team, 0, 0], 0.003, color);
  else {
    b.part("sphere", [0, 0, 0], [0.012, 0.012, 0.01], color);
    if (type === "orb")
      b.part("ring", [0, 0, 0], [0.02, 0.02, 0.02], color, [Math.PI / 2, 0, 0]);
  }
}

export function specialModel(b, age, time, team, detailed = true) {
  const color = TEAM_COLORS[team],
    radius = age === 4 ? 0.28 : 0.5;
  b.part("ring", [0, 0, 0], [radius, radius, 0.025], color, [
    Math.PI / 2,
    0,
    0,
  ]);
  if (!detailed) return;
  if (age === 4) {
    b.part("ring", [0, 0.55, 0], [0.09, 0.09, 0.09], color, [
      Math.PI / 2,
      0,
      0,
    ]);
    for (const x of [-0.022, 0, 0.023])
      b.path(
        [
          [x * 2, 0.54, 0],
          [x, 0.28, 0.009],
          [x * 0.3, 0, 0],
        ],
        0.003,
        color,
      );
  } else if (age === 5) {
    for (const sign of [-1, 1])
      b.path(
        [
          [sign * 0.07, 0.025, 0],
          [sign * 0.035, 0.13, 0.01],
          [sign * 0.065, 0.2, 0],
          [sign * 0.023, 0.3, -0.01],
          [0, 0.38, 0],
        ],
        0.004,
        color,
      );
    b.part("ring", [0, 0.16, 0], [0.14, 0.14, 0.14], color, [
      0.3,
      time * 0.3,
      0,
    ]);
  } else {
    for (let i = 0; i < 6; i++) {
      const x = Math.sin(i * 4.7) * radius,
        z = Math.cos(i * 2.3) * 0.075,
        y = 0.03 + ((((0.4 - time * 0.25 + i * 0.061) % 0.4) + 0.4) % 0.4);
      if (age === 1) {
        b.path(
          [
            [x - 0.012, y + 0.06, z],
            [x, y, z],
            [x - 0.008, y + 0.012, z],
          ],
          0.0028,
        );
      } else {
        b.outlineBall([x, y, z], age === 0 ? 0.02 : 0.012, color);
        b.line([x, y + 0.023, z], [x - 0.025, y + 0.08, z], 0.0025, color);
      }
    }
    if (age === 3) {
      const x = Math.sin(time * 2) * 0.4;
      b.path(
        [
          [x - 0.13, 0.45, 0],
          [x + 0.12, 0.45, 0],
          [x + 0.02, 0.45, -0.11],
          [x - 0.01, 0.45, 0.11],
          [x + 0.12, 0.45, 0],
        ],
        0.0035,
      );
    }
  }
}
