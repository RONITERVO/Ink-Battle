import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import * as THREE from "three";
import { InkBatch } from "../src/mr/ink-batch.js";
import { unitModel, cannonModel } from "../src/mr/models.js";
import {
  REST,
  attackMotion,
  unitMotion,
  defenseMotion,
} from "../src/mr/combat-motion.js";
import { AGES } from "../src/content/ages.js";
import { createState } from "../src/core/state.js";
import { applyCommand } from "../src/core/commands.js";
import { step } from "../src/core/engine.js";
import { Session } from "../src/sdk/session.js";
import { TabletopHost } from "../src/mr/host.js";
import { BASE_WIDTH, CANVAS_WIDTH } from "../src/core/constants.js";

test("defenses recover after a shot but only prepare against drawable enemies in range", () => {
  for (const [age, data] of AGES.entries())
    for (const [index, defense] of data.turrets.entries()) {
      for (const team of [1, -1]) {
        const state = createState({ startAge: age, opponent: false });
        const side = team === 1 ? state.player : state.enemy;
        side.gold = 1e8;
        assert.ok(applyCommand(state, team, { type: "turret", index }).ok);
        assert.ok(applyCommand(state, -team, { type: "unit", index: 0 }).ok);
        side.turretProgress[0] = 1;
        const target = state.units[0];
        const x =
          (team === 1 ? BASE_WIDTH : CANVAS_WIDTH - BASE_WIDTH) - team * 10;
        target.drawProgress = 1;
        target.x = x + team * 50;
        step(state);
        assert.equal(defenseMotion(state, team, 0).strike, 1);
        state.units = [];
        assert.equal(
          defenseMotion(state, team, 0).strike,
          1,
          "The completed shot still recovers after its target disappears",
        );
        for (
          let tick = 0;
          tick < Math.ceil(defense.attackSpeed * 60) + 1;
          tick++
        ) {
          step(state);
          assert.equal(
            defenseMotion(state, team, 0).prepare,
            0,
            "An empty battlefield never triggers another windup",
          );
        }
        side.turretTimers[0] = 0.001;
        state.units = [target];
        target.drawProgress = 0.8;
        target.x = x + team * defense.range;
        assert.ok(
          defenseMotion(state, team, 0).prepare > 0,
          "An enemy on the range boundary permits preparation",
        );
        target.x += team * 0.001;
        assert.equal(
          defenseMotion(state, team, 0).prepare,
          0,
          "An out-of-range enemy cannot trigger preparation",
        );
        target.x = x + team * 50;
        target.drawProgress = 0.79;
        assert.equal(
          defenseMotion(state, team, 0).prepare,
          0,
          "An unfinished target is excluded just as in combatTick",
        );
        target.drawProgress = 1;
        target.team = team;
        assert.equal(
          defenseMotion(state, team, 0).prepare,
          0,
          "Allies cannot trigger preparation",
        );
        state.running = false;
        side.turretTimers[0] = defense.attackSpeed;
        assert.deepEqual(defenseMotion(state, team, 0), REST);
      }
    }
});

test("every winning troop returns to rest without advancing the finished engine", () => {
  for (const [age, data] of AGES.entries())
    for (const [index] of data.units.entries()) {
      const state = createState({ startAge: age, opponent: false });
      state.player.gold = 1e8;
      state.enemy.hp = 1;
      assert.ok(applyCommand(state, 1, { type: "unit", index }).ok);
      const unit = state.units[0];
      unit.drawProgress = 1;
      unit.x = CANVAS_WIDTH - BASE_WIDTH - 10;
      for (let tick = 0; tick < 120 && state.running; tick++) step(state);
      assert.equal(state.running, false, data.units[index].name);
      assert.ok(
        unitMotion(unit).strike > 0,
        "Winning attack was still in progress",
      );
      const before = structuredClone(state);
      assert.deepEqual(unitMotion(unit, state.running), REST);
      assert.deepEqual(
        state,
        before,
        "Settling the presentation does not alter the final replay state",
      );
    }
});

function signature(batch, draw) {
  batch.begin();
  batch.model(0, 0, 0);
  draw();
  batch.end();
  assert.equal(batch.overflow, 0);
  const hash = createHash("sha256");
  for (const [name, mesh] of Object.entries(batch.meshes)) {
    const values = mesh.instanceMatrix.array.slice(0, mesh.count * 16);
    assert.ok(values.every(Number.isFinite), name);
    hash.update(name);
    hash.update(Buffer.from(values.buffer));
  }
  return hash.digest("hex");
}

test("attacks start on actual engine hits or shots for every troop and defense", () => {
  for (const [age, data] of AGES.entries())
    for (let index = 0; index < 3; index++) {
      const state = createState({ startAge: age, opponent: false });
      state.player.gold = state.enemy.gold = 1e8;
      assert.ok(applyCommand(state, 1, { type: "unit", index }).ok);
      assert.ok(applyCommand(state, -1, { type: "unit", index: 0 }).ok);
      const unit = state.units[0],
        target = state.units[1];
      unit.x = 600;
      target.x = 640;
      unit.drawProgress = target.drawProgress = 1;
      target.hp = target.maxHp = 1e8;
      assert.deepEqual(unitMotion(unit), REST);
      step(state);
      assert.equal(unitMotion(unit).strike, 1, data.units[index].name);
      assert.ok(unit.animTimer > 0);
      for (let i = 0; i < 10; i++) step(state);
      assert.ok(unitMotion(unit).strike < 1);

      // Move the target into defense range, using the real firing path.
      state.units = [target];
      target.x = 220;
      assert.ok(applyCommand(state, 1, { type: "turret", index }).ok);
      assert.deepEqual(defenseMotion(state, 1, 0), REST);
      state.player.turretProgress[0] = 1;
      step(state);
      assert.equal(
        defenseMotion(state, 1, 0).strike,
        1,
        data.turrets[index].name,
      );
      assert.ok(state.projectiles.some((p) => p.team === 1));
    }
});

test("all 36 combat pieces have visible attacks on both teams and in comfort mode", () => {
  const batch = new InkBatch(new THREE.Group(), { capacity: 1200 });
  for (const [age, data] of AGES.entries())
    for (let index = 0; index < 3; index++) {
      for (const team of [1, -1])
        for (const detailed of [true, false]) {
          for (const kind of ["unit", "turret"]) {
            const period =
              data[kind === "unit" ? "units" : "turrets"][index].attackSpeed;
            const poses = [
              REST,
              attackMotion(0.001, period, true),
              attackMotion(period, period, true),
            ];
            const hashes = poses.map((motion) =>
              signature(batch, () => {
                if (kind === "unit")
                  unitModel(batch, age, index, { team, motion, detailed });
                else {
                  batch.model(0, 0, 0, 1, team);
                  cannonModel(
                    batch,
                    age,
                    index,
                    undefined,
                    false,
                    motion,
                    detailed,
                  );
                }
              }),
            );
            // Some guns prepare by holding still, but every single piece must act
            // on release, including comfort mode and enemy-facing instances.
            assert.notEqual(
              hashes[0],
              hashes[2],
              `${age}/${index}/${kind}/${team}/${detailed}`,
            );
            assert.equal(
              signature(batch, () =>
                unitModel(batch, age, index, { held: true, motion: poses[2] }),
              ),
              signature(batch, () =>
                unitModel(batch, age, index, { held: true }),
              ),
              "Held pieces never attack",
            );
          }
        }
    }
  batch.dispose();
});

test("joint rotations keep paint and pencil together, including nested mirrored joints", () => {
  const batch = new InkBatch(new THREE.Group());
  for (const face of [1, -1]) {
    batch.begin();
    batch.model(2, 3, 4, 2, face);
    batch.pose([0, 0, 0], [0, 0, Math.PI / 2], [0.2, 0, 0], () => {
      batch.pose([0, 0, 0], [0.3, 0.1, 0], [0, 0.1, 0], () => {
        batch.box([1, 0, 0], [0.1, 0.2, 0.3]);
        const lineStart = batch.point([1, 0, 0]);
        const outline = new THREE.Matrix4(),
          paint = new THREE.Matrix4();
        batch.meshes.box.getMatrixAt(0, outline);
        batch.meshes.fill_box.getMatrixAt(0, paint);
        assert.deepEqual(outline.elements, paint.elements);
        assert.ok(outline.determinant() > 0);
        for (let i = 0; i < 3; i++)
          assert.ok(Math.abs(outline.elements[12 + i] - lineStart[i]) < 1e-6);
      });
    });
    assert.deepEqual(
      batch.point([0, 0, 0]),
      [2, 3, 4],
      "Local joints do not leak into the next part",
    );
  }
  batch.dispose();
});

test("combat poses survive paused rendering, speed changes and checkpoint restore without altering replay", () => {
  const host = new TabletopHost();
  host.start("normal", { opponent: false });
  host.session.command(1, { type: "unit", index: 0 });
  host.session.command(-1, { type: "unit", index: 0 });
  let state;
  for (let i = 0; i < 5000; i++) {
    host.advance(1);
    state = host.observe();
    if (state.units.some((u) => unitMotion(u).strike > 0)) break;
  }
  assert.ok(state.units.some((u) => unitMotion(u).strike > 0));
  const checkpoint = host.session.checkpoint(),
    original = host.session.digest();
  const poses = state.units.map(unitMotion);
  assert.equal(
    host.session.digest(),
    original,
    "Sampling cannot mutate the engine",
  );
  assert.deepEqual(
    Session.restore(checkpoint).observe().units.map(unitMotion),
    poses,
  );
  host.session.pause(true);
  for (let i = 0; i < 100; i++) host.update(1 / 72);
  assert.deepEqual(host.observe().units.map(unitMotion), poses);
  for (const speed of [1, 2, 3]) {
    host.session = Session.restore(checkpoint);
    host.speed = speed;
    const reference = Session.restore(checkpoint);
    host.update(1 / 60);
    reference.advance(speed);
    assert.deepEqual(
      host.observe().units.map(unitMotion),
      reference.observe().units.map(unitMotion),
    );
    assert.equal(host.session.digest(), reference.digest());
  }
  assert.deepEqual(
    attackMotion(1, 1, true, 0.5),
    REST,
    "Drawing pieces cannot fire",
  );
  assert.deepEqual(
    attackMotion(0, 1, true),
    REST,
    "Expired timers cannot loop attacks",
  );
});
