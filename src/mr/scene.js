import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { InkBatch } from "./ink-batch.js";
import {
  unitModel,
  baseModel,
  cannonModel,
  objectModel,
  projectileModel,
  specialModel,
  TEAM_COLORS,
} from "./models.js";
import { TABLE } from "./catalog.js";
import { AGES } from "../content/ages.js";
import {
  CHAPTERS,
  bookPaths,
  landscapePaths,
  mistPaths,
  pencilMesh,
} from "./sketchbook.js";
import { pencilGeometries } from "./pencil-geometry.js";
import { BookPaper } from "./book-paper.js";

export const HANDLES = [-1, 1].flatMap((x) =>
  [-0.65, 1.34].map((z) => ({
    id: `handle-${x}-${z}`,
    x: x * 1.28,
    y: 0.035,
    z,
  })),
);
const ink = "#342d2b";

class Label {
  constructor(parent, width, height, { flat = true, backing = false } = {}) {
    this.backing = backing;
    this.canvas = document.createElement("canvas");
    this.canvas.width = 768;
    this.canvas.height = Math.round((768 * height) / width);
    this.ctx = this.canvas.getContext("2d");
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    this.mesh.rotation.x = flat ? -Math.PI / 2 : -0.35;
    parent.add(this.mesh);
    this.last = "";
  }
  text(lines, color = ink) {
    const key = JSON.stringify([lines, color]);
    if (key === this.last) return;
    this.last = key;
    const {
      ctx: c,
      canvas: { width: w, height: h },
    } = this;
    c.clearRect(0, 0, w, h);
    if (this.backing) {
      // A paper tab travels with the book. Floating text needs its own opaque
      // backing because it can extend beyond the page against a busy room.
      c.fillStyle = "#fff0d5";
      c.beginPath();
      c.moveTo(4, 7);
      c.lineTo(w * 0.53, 3);
      c.lineTo(w - 4, 8);
      c.lineTo(w - 7, h - 5);
      c.lineTo(7, h - 3);
      c.closePath();
      c.fill();
      c.strokeStyle = "#927454";
      c.lineWidth = 2;
      c.stroke();
    }
    c.strokeStyle = "#a49b87";
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(8, h - 5);
    c.lineTo(w * 0.53, h - 3);
    c.lineTo(w - 8, h - 6);
    c.stroke();
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillStyle = color;
    lines.forEach((line, i) => {
      c.font = `${i === 0 ? "bold " : ""}${Math.floor((h / lines.length) * 0.61)}px 'Patrick Hand', cursive`;
      c.fillText(line, w / 2, ((i + 0.5) * h) / lines.length, w - 24);
    });
    this.texture.needsUpdate = true;
  }
  dispose() {
    this.mesh.removeFromParent();
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.texture.dispose();
  }
}

/** Presentation only: no prices, targeting, hit points or timing are decided here. */
export class TabletopScene {
  constructor(canvas, host) {
    this.host = host;
    this.time = 0;
    this.age = -1;
    this.labelClock = 0;
    this.labels = new Map();
    this.offers = [];
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType("local-floor");
    this.renderer.xr.setFramebufferScaleFactor(0.9);
    this.renderer.xr.setFoveation(0.7);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#f5f1e8");
    this.camera = new THREE.PerspectiveCamera(43, 1, 0.01, 30);
    this.camera.position.set(0.45, 2.45, 3.3);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.set(0, 0.1, 0.3);
    this.controls.enableDamping = true;
    this.controls.maxPolarAngle = Math.PI * 0.485;
    this.controls.minDistance = 0.4;
    this.controls.maxDistance = 8;
    this.controls.mouseButtons = {
      RIGHT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.PAN,
    };
    this.controls.touches = { TWO: THREE.TOUCH.DOLLY_ROTATE };
    this.scene.add(new THREE.HemisphereLight("#fffaf0", "#8c8f82", 1.9));
    const sun = new THREE.DirectionalLight("#fff8ed", 1.2);
    sun.position.set(-2, 4, 2);
    this.scene.add(sun);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.table = { position: { x: 0, y: 0, z: 0 }, yaw: 0, scale: 1 };
    this.army = new InkBatch(this.root, { capacity: 6000 });
    this.shop = new InkBatch(this.root, { capacity: 1200 });
    this.held = new InkBatch(this.root, { capacity: 600 });
    this.details = new InkBatch(this.root, { capacity: 100 });
    this.book = pencilMesh(bookPaths(), "#514a42", 0.002);
    this.paper = new BookPaper();
    this.root.add(this.paper);
    this.root.add(this.book);
    this.landscape = null;
    this.chapter = new Label(this.root, 0.92, 0.063);
    this.chapter.mesh.position.set(0, 0.003, -0.65);
    this.zone(-0.66, 0.395, 0.44, 0.51, "#438e72");
    this.zone(-1.06, 0.13, 0.27, 1.02, "#a98440");
    this.status = new Label(this.root, 1.38, 0.22, {
      flat: false,
      backing: true,
    });
    this.status.mesh.position.set(0.02, 0.2, -0.58);
    this.hint = new Label(this.root, 1.85, 0.105);
    this.hint.mesh.position.set(0, 0.004, -0.17);
    this.hint.text([
      "Lift a difficulty seal from the tray. Drop it onto the page.",
    ]);
    this.shadow = new THREE.InstancedMesh(
      pencilGeometries().shadow,
      new THREE.MeshBasicMaterial({
        color: "#382f2b",
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
      }),
      170,
    );
    this.shadow.frustumCulled = false;
    this.root.add(this.shadow);
    this.shadowMatrix = new THREE.Matrix4();
    this.shadowQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(-Math.PI / 2, 0, 0),
    );
    this.mist = this.makeMist();
    this.root.add(this.mist);
    this.reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.09, 0.115, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: "#74c4a5", side: THREE.DoubleSide }),
    );
    this.reticle.visible = false;
    this.reticle.matrixAutoUpdate = false;
    this.scene.add(this.reticle);
    this.refreshArt(0);
    this.resize();
    this.syncTable();
  }
  zone(x, z, width, depth, color) {
    const marks = [];
    for (let i = 0; i < 12; i++) {
      const xx = x - width / 2 + (i * width) / 12;
      marks.push([
        [xx, 0.003, z + depth / 2 - 0.035],
        [xx + 0.018, 0.003, z + depth / 2 - 0.006],
      ]);
    }
    this.root.add(pencilMesh(marks, color, 0.0009));
    const points = [
      [x - width / 2, 0.004, z - depth / 2],
      [x + width / 2, 0.004, z - depth / 2],
      [x + width / 2, 0.004, z + depth / 2],
      [x - width / 2, 0.004, z + depth / 2],
      [x - width / 2, 0.004, z - depth / 2],
    ].map((p) => new THREE.Vector3(...p));
    const border = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineDashedMaterial({ color, dashSize: 0.035, gapSize: 0.018 }),
    );
    border.computeLineDistances();
    this.root.add(border);
  }
  makeMist() {
    const mesh = pencilMesh(mistPaths(), "#91897c", 0.00055);
    mesh.material.transparent = true;
    mesh.material.opacity = 0.33;
    mesh.material.depthWrite = false;
    return mesh;
  }
  refreshArt(age) {
    if (age === this.age) return;
    this.age = age;
    this.paper.setAge(age);
    if (this.landscape) {
      this.landscape.removeFromParent();
      this.landscape.geometry.dispose();
      this.landscape.material.dispose();
    }
    this.landscape = pencilMesh(landscapePaths(age), "#635b51", 0.00165);
    this.root.add(this.landscape);
    this.chapter.text([CHAPTERS[age].title]);
  }
  resize() {
    const canvas = this.renderer.domElement,
      w = canvas.clientWidth,
      h = canvas.clientHeight;
    if (!w || !h || this.renderer.xr.isPresenting) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.fov = Math.min(
      95,
      THREE.MathUtils.radToDeg(
        2 *
          Math.atan(
            Math.tan(THREE.MathUtils.degToRad(43 / 2)) *
              Math.max(1, 1 / this.camera.aspect),
          ),
      ),
    );
    this.camera.updateProjectionMatrix();
  }
  syncTable() {
    const t = this.table;
    this.root.position.set(t.position.x, t.position.y, t.position.z);
    this.root.rotation.y = t.yaw;
    this.root.scale.setScalar(t.scale);
    this.root.updateMatrixWorld(true);
  }
  immersive(active) {
    this.scene.background = active ? null : new THREE.Color("#f5f1e8");
    this.controls.enabled = !active;
    if (!active) this.resize();
  }
  message(text) {
    this.hint.text([text]);
  }
  refreshShop(state) {
    this.offers = this.host.offers(state);
    const ids = new Set(this.offers.map((o) => o.id));
    for (const [id, label] of this.labels)
      if (!ids.has(id)) {
        label.dispose();
        this.labels.delete(id);
      }
    this.shop.begin();
    for (const offer of this.offers) {
      objectModel(this.shop, offer, state?.player.age || 0, {
        x: offer.x,
        z: offer.z,
      });
      let label = this.labels.get(offer.id);
      if (!label) {
        label = new Label(
          this.root,
          offer.kind === "seal" ? 0.39 : 0.245,
          0.072,
        );
        this.labels.set(offer.id, label);
      }
      label.mesh.position.set(offer.x, 0.006, offer.z + 0.113);
      const error = this.host.reason(offer, state);
      const cost =
        offer.price === Infinity
          ? "MAX"
          : offer.price
            ? `${offer.price} ${offer.currency || "gold"}`
            : offer.action === "speed"
              ? `${this.host.speed}×`
              : offer.action === "quality"
                ? this.host.quality
                : offer.command?.type === "special" &&
                    state?.player.specialTimer > 0
                  ? `${Math.ceil(state.player.specialTimer)}s`
                  : "";
      label.text(
        [offer.label, cost || (offer.action ? "Lift & drop" : "Ready")],
        error ? "#81766a" : ink,
      );
    }
    this.shop.end();
    this.details.begin();
    for (const handle of HANDLES) {
      this.details.model(handle.x, handle.y, handle.z);
      this.details.part("ring", [0, 0, 0], [0.075, 0.075, 0.075], "#8b7051", [
        Math.PI / 2,
        0,
        0,
      ]);
    }
    this.details.end();
  }
  update(state, heldItems, dt) {
    this.time += dt;
    this.labelClock -= dt;
    this.refreshArt(state?.player.age || 0);
    this.syncTable();
    if (this.labelClock <= 0) {
      this.labelClock = 0.25;
      this.refreshShop(state);
      this.status.text(
        state
          ? [
              state.running
                ? `${AGES[state.player.age].name}  ·  ${Math.floor(state.player.gold)} gold  ·  ${Math.floor(state.player.xp)} XP`
                : state.winner === 0
                  ? "A draw. Both pages fell together."
                  : state.winner === 1
                    ? "Victory! The page is yours."
                    : "Defeat. A new page awaits.",
              `${Math.ceil(state.player.hp)} / ${Math.ceil(state.player.maxHp)} HP   —   Enemy ${Math.ceil(state.enemy.hp)} HP   ·   ${state.paused ? "PAUSED" : `${this.host.speed}×`}`,
            ]
          : ["INK BATTLE · THE SKETCHBOOK", "Choose a seal. Lift a world."],
      );
    }
    this.army.begin();
    let shadowCount = 0;
    if (state) {
      for (const team of [1, -1]) {
        const side = team === 1 ? state.player : state.enemy,
          x = -team * 1.06;
        baseModel(this.army, side.age, x, team, side.drawProgress);
        side.turrets.forEach((index, slot) => {
          if (index === null) return;
          this.army.model(
            x,
            0.04,
            -0.28 + slot * 0.13,
            0.83 * Math.max(0.02, side.turretProgress[slot]),
            team,
          );
          cannonModel(this.army, side.age, index, TEAM_COLORS[team]);
        });
      }
      for (const unit of state.units) {
        const x = (unit.x / 1280 - 0.5) * TABLE.width,
          z = TABLE.lane + ((unit.id % 5) - 2) * 0.024;
        const scale =
          Math.max(0.02, unit.drawProgress) * Math.min(1.8, unit.size / 50);
        const comfort = this.host.quality === "comfort";
        unitModel(this.army, unit.age, unit.uType, {
          x,
          z,
          scale,
          team: unit.team,
          time: comfort ? 0 : this.time + unit.id,
          walking: !comfort && unit.moving,
          attacking: !comfort && unit.isAttacking,
        });
        if (!comfort) {
          this.army.model(x, 0.23 * scale, z, 1);
          this.army.line([-0.035, 0, 0], [0.035, 0, 0], 0.0028, "#aa8f7e");
          this.army.line(
            [-0.035, 0, 0.001],
            [-0.035 + 0.07 * Math.max(0, unit.hp / unit.maxHp), 0, 0.001],
            0.003,
            TEAM_COLORS[unit.team],
          );
        }
        this.shadowMatrix.compose(
          new THREE.Vector3(x, 0.005, z),
          this.shadowQuaternion,
          new THREE.Vector3(0.045 * scale, 0.025 * scale, 1),
        );
        this.shadow.setMatrixAt(shadowCount++, this.shadowMatrix);
      }
      for (const p of state.projectiles) {
        if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) continue;
        this.army.model(
          (p.x / 1280 - 0.5) * TABLE.width,
          Math.max(0.035, ((600 - p.y) / 1280) * TABLE.width),
          TABLE.lane,
        );
        projectileModel(
          this.army,
          p.type,
          p.team,
          p.team === 1 ? state.player.age : state.enemy.age,
        );
      }
      for (const special of state.specials) {
        const x = (special.x / 1280 - 0.5) * TABLE.width;
        this.army.model(x, 0.012, TABLE.lane);
        specialModel(
          this.army,
          special.age,
          this.time,
          special.team,
          this.host.quality !== "comfort",
        );
      }
    }
    this.army.end();
    this.shadow.count = shadowCount;
    this.shadow.instanceMatrix.needsUpdate = true;
    this.shadow.visible = this.host.quality !== "comfort";
    this.held.begin();
    for (const item of heldItems) {
      const p = item.position,
        unit = item.offer.kind === "unit";
      objectModel(this.held, item.offer, item.age || 0, {
        x: p.x - (unit ? 0.018 : 0),
        y: p.y - (unit ? 0.226 : 0.06),
        z: p.z,
        held: true,
        time: this.time,
      });
    }
    this.held.end();
    this.mist.visible = this.host.quality === "mist";
    this.mist.position.z = Math.sin(this.time * 0.18) * 0.012;
    if (!this.renderer.xr.isPresenting) this.controls.update();
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  stats() {
    return {
      calls: this.renderer.info.render.calls,
      triangles: this.renderer.info.render.triangles,
      instances: Object.values(this.army.counts).reduce((a, b) => a + b, 0),
      overflow: this.army.overflow + this.held.overflow + this.shop.overflow,
      geometries: this.renderer.info.memory.geometries,
      textures: this.renderer.info.memory.textures,
    };
  }
}
