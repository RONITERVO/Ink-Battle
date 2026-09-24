import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { InkBatch } from './ink-batch.js';
import {
  unitModel,
  baseModel,
  cannonModel,
  objectModel,
  TEAM_COLORS
} from './models.js';
import { TABLE } from './catalog.js';
import { AGES } from '../content/ages.js';
import { COLORS } from '../client/palette.js';
import { createWatercolor } from '../client/watercolor.js';
import { createRenderer } from '../client/renderer.js';

export const HANDLES = [-1, 1].flatMap((x) =>
  [-0.65, 1.34].map((z) => ({
    id: `handle-${x}-${z}`,
    x: x * 1.28,
    y: 0.035,
    z
  }))
);
const ink = '#342d2b';

class Label {
  constructor(parent, width, height, { flat = true } = {}) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 768;
    this.canvas.height = Math.round((768 * height) / width);
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false
      })
    );
    this.mesh.rotation.x = flat ? -Math.PI / 2 : -0.35;
    parent.add(this.mesh);
    this.last = '';
  }
  text(lines, color = ink) {
    const key = JSON.stringify([lines, color]);
    if (key === this.last) return;
    this.last = key;
    const {
      ctx: c,
      canvas: { width: w, height: h }
    } = this;
    c.clearRect(0, 0, w, h);
    c.fillStyle = '#fff5df';
    c.fillRect(0, 0, w, h);
    c.strokeStyle = '#a49b87';
    c.lineWidth = 2;
    c.strokeRect(2, 2, w - 4, h - 4);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillStyle = color;
    lines.forEach((line, i) => {
      c.font = `${i === 0 ? 'bold ' : ''}${Math.floor((h / lines.length) * 0.61)}px 'Patrick Hand', cursive`;
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
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType('local-floor');
    this.renderer.xr.setFramebufferScaleFactor(0.9);
    this.renderer.xr.setFoveation(0.7);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#ded7c8');
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
      MIDDLE: THREE.MOUSE.PAN
    };
    this.controls.touches = { TWO: THREE.TOUCH.DOLLY_ROTATE };
    this.scene.add(new THREE.HemisphereLight('#fffaf0', '#8c8f82', 1.9));
    const sun = new THREE.DirectionalLight('#fff8ed', 1.2);
    sun.position.set(-2, 4, 2);
    this.scene.add(sun);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.table = { position: { x: 0, y: 0, z: 0 }, yaw: 0, scale: 1 };
    this.army = new InkBatch(this.root, { capacity: 6000 });
    this.shop = new InkBatch(this.root, { capacity: 1200 });
    this.held = new InkBatch(this.root, { capacity: 600 });
    this.details = new InkBatch(this.root, { capacity: 100 });
    const paper = document.createElement('canvas');
    paper.width = 1280;
    paper.height = 720;
    this.paperRuntime = {
      ctx: paper.getContext('2d'),
      COLORS: { ...COLORS },
      gameState: { player: { age: 0 }, ageTransition: 0 },
      globalTime: 0
    };
    Object.assign(this.paperRuntime, createWatercolor(this.paperRuntime));
    this.paperPainter = createRenderer(this.paperRuntime);
    this.paperTexture = new THREE.CanvasTexture(paper);
    this.paperTexture.colorSpace = THREE.SRGBColorSpace;
    this.paperTexture.anisotropy = Math.min(
      4,
      this.renderer.capabilities.getMaxAnisotropy()
    );
    this.page = new THREE.Mesh(
      new THREE.PlaneGeometry(TABLE.width, TABLE.depth),
      new THREE.MeshStandardMaterial({
        map: this.paperTexture,
        roughness: 1,
        side: THREE.DoubleSide
      })
    );
    this.page.rotation.x = -Math.PI / 2;
    this.root.add(this.page);
    const shelf = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.027, 0.65),
      new THREE.MeshStandardMaterial({ color: '#dbcaab', roughness: 1 })
    );
    shelf.position.set(0, -0.019, 1.025);
    this.root.add(shelf);
    const backing = new THREE.Mesh(
      new THREE.BoxGeometry(2.42, 0.025, 1.37),
      new THREE.MeshStandardMaterial({ color: '#665345', roughness: 1 })
    );
    backing.position.y = -0.02;
    this.root.add(backing);
    this.zone(-0.66, 0.395, 0.44, 0.51, '#438e72');
    this.zone(-1.06, 0.13, 0.27, 1.02, '#a98440');
    this.status = new Label(this.root, 1.38, 0.22, { flat: false });
    this.status.mesh.position.set(0.02, 0.2, -0.58);
    this.hint = new Label(this.root, 1.85, 0.105);
    this.hint.mesh.position.set(0, 0.004, -0.17);
    this.hint.text([
      'Lift a difficulty seal from the tray. Drop it onto the page.'
    ]);
    this.shadow = new THREE.InstancedMesh(
      new THREE.CircleGeometry(1, 12),
      new THREE.MeshBasicMaterial({
        color: '#382f2b',
        transparent: true,
        opacity: 0.16,
        depthWrite: false
      }),
      170
    );
    this.shadow.frustumCulled = false;
    this.root.add(this.shadow);
    this.shadowMatrix = new THREE.Matrix4();
    this.shadowQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(-Math.PI / 2, 0, 0)
    );
    this.mist = this.makeMist();
    this.root.add(this.mist);
    this.reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.09, 0.115, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: '#74c4a5', side: THREE.DoubleSide })
    );
    this.reticle.visible = false;
    this.reticle.matrixAutoUpdate = false;
    this.scene.add(this.reticle);
    this.refreshArt(0);
    this.resize();
    this.syncTable();
  }
  zone(x, z, width, depth, color) {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(width, depth),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.12,
        depthWrite: false
      })
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(x, 0.002, z);
    this.root.add(plane);
    const points = [
      [x - width / 2, 0.004, z - depth / 2],
      [x + width / 2, 0.004, z - depth / 2],
      [x + width / 2, 0.004, z + depth / 2],
      [x - width / 2, 0.004, z + depth / 2],
      [x - width / 2, 0.004, z - depth / 2]
    ].map((p) => new THREE.Vector3(...p));
    const border = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineDashedMaterial({ color, dashSize: 0.035, gapSize: 0.018 })
    );
    border.computeLineDistances();
    this.root.add(border);
  }
  makeMist() {
    return new THREE.Mesh(
      new THREE.PlaneGeometry(2.33, 1.26)
        .rotateX(-Math.PI / 2)
        .translate(0, 0.035, 0),
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        uniforms: { time: { value: 0 } },
        vertexShader:
          'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
        fragmentShader:
          'varying vec2 vUv; uniform float time; void main(){vec2 p=vUv;float edge=smoothstep(0.0,0.18,p.x)*smoothstep(0.0,0.18,1.0-p.x)*smoothstep(0.0,0.16,p.y)*smoothstep(0.0,0.16,1.0-p.y);float n=0.55+0.22*sin(p.x*24.0+sin(p.y*14.0+time*0.17))+0.18*sin(p.y*37.0-p.x*11.0+time*0.12);gl_FragColor=vec4(0.91,0.93,0.88,edge*n*0.24);}'
      })
    );
  }
  refreshArt(age) {
    if (age === this.age) return;
    this.age = age;
    const r = this.paperRuntime;
    r.gameState.player.age = age;
    if (!r.WatercolorEngine.canvases[age])
      r.WatercolorEngine.canvases[age] = r.WatercolorEngine.renderWash(age);
    r.ctx.fillStyle = '#f4eddc';
    r.ctx.fillRect(0, 0, 1280, 720);
    r.COLORS.pencil = `hsl(${AGES[age].theme.fg})`;
    r.COLORS.pencilLight = `hsl(${AGES[age].theme.fg} / .5)`;
    this.paperPainter.drawBackground(1);
    this.paperTexture.needsUpdate = true;
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
              Math.max(1, 1 / this.camera.aspect)
          )
      )
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
    this.scene.background = active ? null : new THREE.Color('#ded7c8');
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
        z: offer.z
      });
      let label = this.labels.get(offer.id);
      if (!label) {
        label = new Label(
          this.root,
          offer.kind === 'seal' ? 0.39 : 0.245,
          0.072
        );
        this.labels.set(offer.id, label);
      }
      label.mesh.position.set(offer.x, 0.006, offer.z + 0.113);
      const error = this.host.reason(offer, state);
      const cost =
        offer.price === Infinity
          ? 'MAX'
          : offer.price
            ? `${offer.price} ${offer.currency || 'gold'}`
            : offer.action === 'speed'
              ? `${this.host.speed}×`
              : offer.action === 'quality'
                ? this.host.quality
                : offer.command?.type === 'special' &&
                    state?.player.specialTimer > 0
                  ? `${Math.ceil(state.player.specialTimer)}s`
                  : '';
      label.text(
        [offer.label, cost || (offer.action ? 'Lift & drop' : 'Ready')],
        error ? '#81766a' : ink
      );
    }
    this.shop.end();
    this.details.begin();
    for (const handle of HANDLES) {
      this.details.model(handle.x, handle.y, handle.z);
      this.details.part('ring', [0, 0, 0], [0.075, 0.075, 0.075], '#8b7051', [
        Math.PI / 2,
        0,
        0
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
                  ? 'A draw. Both pages fell together.'
                  : state.winner === 1
                    ? 'Victory! The page is yours.'
                    : 'Defeat. A new page awaits.',
              `${Math.ceil(state.player.hp)} / ${Math.ceil(state.player.maxHp)} HP   —   Enemy ${Math.ceil(state.enemy.hp)} HP   ·   ${state.paused ? 'PAUSED' : `${this.host.speed}×`}`
            ]
          : ['INK BATTLE · TABLETOP', 'Choose a seal. Lift a world.']
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
            team
          );
          cannonModel(this.army, side.age, index, TEAM_COLORS[team]);
        });
      }
      for (const unit of state.units) {
        const x = (unit.x / 1280 - 0.5) * TABLE.width,
          z = TABLE.lane + ((unit.id % 5) - 2) * 0.024;
        const scale =
          Math.max(0.02, unit.drawProgress) * Math.min(1.8, unit.size / 50);
        const comfort = this.host.quality === 'comfort';
        unitModel(this.army, unit.age, unit.uType, {
          x,
          z,
          scale,
          team: unit.team,
          time: comfort ? 0 : this.time + unit.id,
          walking: !comfort && unit.moving,
          attacking: !comfort && unit.isAttacking
        });
        if (!comfort) {
          this.army.model(x, 0.23 * scale, z, 1);
          this.army.line([-0.035, 0, 0], [0.035, 0, 0], 0.0028, '#aa8f7e');
          this.army.line(
            [-0.035, 0, 0.001],
            [-0.035 + 0.07 * Math.max(0, unit.hp / unit.maxHp), 0, 0.001],
            0.003,
            TEAM_COLORS[unit.team]
          );
        }
        this.shadowMatrix.compose(
          new THREE.Vector3(x, 0.005, z),
          this.shadowQuaternion,
          new THREE.Vector3(0.045 * scale, 0.025 * scale, 1)
        );
        this.shadow.setMatrixAt(shadowCount++, this.shadowMatrix);
      }
      for (const p of state.projectiles) {
        if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) continue;
        this.army.model(
          (p.x / 1280 - 0.5) * TABLE.width,
          Math.max(0.035, ((600 - p.y) / 1280) * TABLE.width),
          TABLE.lane
        );
        this.army.sphere(
          [0, 0, 0],
          0.009,
          p.team === 1 ? '#378a99' : '#ce795b'
        );
      }
      for (const special of state.specials) {
        const x = (special.x / 1280 - 0.5) * TABLE.width,
          color = special.team === 1 ? '#68aead' : '#bd7565';
        this.army.model(x, 0.012, TABLE.lane);
        const radius = special.age === 4 ? 0.28 : 0.5;
        this.army.part('ring', [0, 0, 0], [radius, radius, 0.025], color, [
          Math.PI / 2,
          0,
          0
        ]);
        if (this.host.quality !== 'comfort')
          for (let i = 0; i < 8; i++) {
            const xx = Math.sin(i * 4.7) * radius,
              zz = Math.cos(i * 2.3) * 0.06,
              yy = 0.025 + ((this.time * 0.3 + i * 0.07) % 0.28);
            this.army.line(
              [xx, yy, zz],
              [xx - 0.025, yy + 0.04, zz],
              0.003,
              color
            );
          }
      }
    }
    this.army.end();
    this.shadow.count = shadowCount;
    this.shadow.instanceMatrix.needsUpdate = true;
    this.shadow.visible = this.host.quality !== 'comfort';
    this.held.begin();
    for (const item of heldItems) {
      const p = item.position,
        unit = item.offer.kind === 'unit';
      objectModel(this.held, item.offer, item.age || 0, {
        x: p.x - (unit ? 0.018 : 0),
        y: p.y - (unit ? 0.226 : 0.06),
        z: p.z,
        held: true,
        time: this.time
      });
    }
    this.held.end();
    this.mist.visible = this.host.quality === 'mist';
    this.mist.material.uniforms.time.value = this.time;
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
      textures: this.renderer.info.memory.textures
    };
  }
}
