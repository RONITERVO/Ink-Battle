import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TouchTwist } from '../src/mr/touch-twist.js';

const pair = (angle, span = 100, x = 0, y = 0) => [
  { x, y }, { x: x + span * Math.cos(angle), y: y + span * Math.sin(angle) }
];
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-9);

test('two-finger twist is gentle and independent of simultaneous pan and pinch', () => {
  const twist = new TouchTwist();
  near(twist.update(pair(0)), 0);
  near(twist.update(pair(0, 170, 40, -20)), 0);
  near(twist.update(pair(Math.PI / 2, 200, 70, 40)), Math.PI / 2 * .35);
  near(twist.update(pair(0, 60, -50, 20)), -Math.PI / 2 * .35);
});

test('twist crosses the angle seam without a full turn and returns without drift', () => {
  const twist = new TouchTwist();
  twist.update(pair(Math.PI - .02));
  near(twist.update(pair(-Math.PI + .02)), .04 * .35);
  near(twist.update(pair(Math.PI - .02)), -.04 * .35);
});

test('crossing fingers, contact changes and interruptions rebase the twist', () => {
  const twist = new TouchTwist();
  twist.update(pair(0));
  near(twist.update(pair(Math.PI, 10)), 0);
  near(twist.update(pair(Math.PI, 80)), 0);
  near(twist.update(pair(Math.PI + .1)), .1 * .35);
  for (const points of [[], [{ x: 0, y: 0 }], [...pair(0), { x: 4, y: 7 }]]) {
    near(twist.update(points), 0);
    near(twist.update(pair(0)), 0);
  }
  twist.reset();
  near(twist.update(pair(2)), 0);
});
