import * as THREE from 'three';
import { HANDLES } from './scene.js';
import { Interaction } from './interaction.js';
import { toLocal, toWorld, rotationOf } from './spatial.js';
import { landingHeight } from './defense-layout.js';
import { TouchTwist } from './touch-twist.js';

const xyz = (p) => ({ x: p.x, y: p.y, z: p.z });
// Protect the complete book, shop, rings and upright artwork, including empty
// parts of the page. Only gestures starting beyond this volume may orbit.
const PLAY_SPACE = new THREE.Box3(
  new THREE.Vector3(-1.46, -0.15, -0.8),
  new THREE.Vector3(1.46, 0.48, 1.56)
);
const HAND_BONES = [
  'thumb',
  'index-finger',
  'middle-finger',
  'ring-finger',
  'pinky-finger'
].map((name) =>
  name === 'thumb'
    ? [
        'thumb-metacarpal',
        'thumb-phalanx-proximal',
        'thumb-phalanx-distal',
        'thumb-tip'
      ]
    : [
        `${name}-metacarpal`,
        `${name}-phalanx-proximal`,
        `${name}-phalanx-intermediate`,
        `${name}-phalanx-distal`,
        `${name}-tip`
      ]
);

export class TabletopInput {
  constructor(view, host, { onCarry = () => {}, onPlace = () => false } = {}) {
    this.view = view;
    this.host = host;
    this.interaction = new Interaction(host, view.table, { onCarry: () => {
      view.autoFrame = false;
      onCarry();
    } });
    this.onPlace = onPlace;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.pointers = new Map();
    this.touchPointers = new Map();
    this.twist = new TouchTwist();
    this.touchNavigation = false;
    this.sources = new Map();
    this.nextId = 0;
    this.canvas = view.renderer.domElement;
    this.listeners = [];
    // Choose the gesture before OrbitControls sees pointerdown, then keep that
    // choice until release. Crossing the book during an orbit cannot grab it.
    this.canvas.addEventListener('pointerdown', (e) => {
      if (view.renderer.xr.isPresenting) return;
      if (e.pointerType === 'touch') {
        this.touchPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        this.twist.update([...this.touchPointers.values()]);
        if (this.touchPointers.size > 1) {
          this.touchNavigation = true;
          for (const owner of this.pointers.keys()) this.interaction.cancel(owner);
          this.pointers.clear();
          view.controls.enabled = true;
          // The remaining finger stays idle when the other finger lifts.
          view.controls.touches.ONE = null;
          return;
        }
      } else if (e.button !== 0) return;
      const ray = this.desktopRay(e);
      const orbit = !this.pointers.size && !this.touchNavigation &&
        !this.pick({ x: 1e5, y: 1e5, z: 1e5 }, ray) && this.outsidePlaySpace(ray);
      if (e.pointerType === 'touch')
        view.controls.touches.ONE = orbit ? THREE.TOUCH.ROTATE : null;
      else view.controls.mouseButtons.LEFT = orbit ? THREE.MOUSE.ROTATE : null;
    }, true);
    this.canvas.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch' && this.touchPointers.has(e.pointerId))
        this.touchPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }, true);
    for (const type of [
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointercancel',
      'lostpointercapture'
    ])
      this.canvas.addEventListener(type, (e) => this.desktop(type, e));
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    this.canvas.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.cancelAll();
        this.host.pauseForInterruption();
      }
    });
    this.handGroup = new THREE.Group();
    view.scene.add(this.handGroup);
    this.handVertices = new THREE.Float32BufferAttribute(
      new Float32Array(240),
      3
    );
    this.handVertices.setUsage(THREE.DynamicDrawUsage);
    this.handLines = new THREE.LineSegments(
      new THREE.BufferGeometry().setAttribute('position', this.handVertices),
      new THREE.LineBasicMaterial({
        color: '#6aa999',
        transparent: true,
        opacity: 0.75
      })
    );
    this.handGroup.add(this.handLines);
    this.handLines.frustumCulled = false;
  }
  candidates() {
    return [
      ...HANDLES,
      ...(this.view.troops || []),
      ...this.view.offers.map((o) => ({
        ...o,
        y: o.kind === 'unit' ? 0.15 : 0.07
      }))
    ];
  }
  pick(world, ray) {
    const local = toLocal(world, this.view.table);
    let chosen = null,
      distance = Infinity;
    for (const item of this.candidates()) {
      const d = Math.hypot(
        local.x - item.x,
        local.y - item.y,
        local.z - item.z
      );
      if (d < (item.id.startsWith('troop-') ? item.pickRadius : item.id.startsWith('handle-') ? 0.12 : 0.13) && d < distance) {
        chosen = item;
        distance = d;
      }
    }
    if (chosen) return { target: chosen.id, world };
    if (!ray) return null;
    let best = Infinity;
    for (const item of this.candidates()) {
      const center = new THREE.Vector3().copy(toWorld(item, this.view.table));
      const sphere = new THREE.Sphere(center, (item.pickRadius || 0.105) * this.view.table.scale);
      const hit = ray.intersectSphere(sphere, new THREE.Vector3());
      if (!hit) continue;
      const dist = ray.origin.distanceTo(hit);
      if (dist < best) {
        best = dist;
        chosen = item;
      }
    }
    return chosen
      ? {
          target: chosen.id,
          world: xyz(ray.at(best, new THREE.Vector3())),
          distance: best
        }
      : null;
  }
  desktopRay(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.set(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      (-(e.clientY - rect.top) / rect.height) * 2 + 1
    );
    this.raycaster.setFromCamera(this.pointer, this.view.camera);
    return this.raycaster.ray;
  }
  outsidePlaySpace(ray) {
    const origin = new THREE.Vector3().copy(toLocal(ray.origin, this.view.table));
    const direction = new THREE.Vector3().copy(
      toLocal(ray.at(1, new THREE.Vector3()), this.view.table)
    ).sub(origin).normalize();
    return !new THREE.Ray(origin, direction).intersectsBox(PLAY_SPACE);
  }
  planePoint(ray, y) {
    return ray.intersectPlane(
      new THREE.Plane().setFromNormalAndCoplanarPoint(
        new THREE.Vector3(0, 1, 0).applyQuaternion(rotationOf(this.view.table)),
        new THREE.Vector3().copy(toWorld({ x: 0, y, z: 0 }, this.view.table))),
      new THREE.Vector3()
    );
  }
  landingPoint(ray, offer) {
    const height = offer ? landingHeight(offer) : 0;
    return this.planePoint(ray, height);
  }
  turnView() {
    if (!this.touchNavigation || !this.view.controls.enabled || this.view.renderer.xr.isPresenting) return;
    const angle = this.twist.update([...this.touchPointers.values()]);
    // A clockwise finger twist turns the book clockwise on screen.
    if (angle) this.view.controls.rotateLeft(-angle);
  }
  update(dt) {
    // Sample the pair once per rendered frame so the two native pointer events
    // of a pan/pinch are considered together instead of as transient twists.
    this.turnView();
    this.interaction.update(dt);
  }
  desktop(type, e) {
    if (
      this.view.renderer.xr.isPresenting ||
      (e.button && type === 'pointerdown')
    )
      return;
    if (e.pointerType === 'touch') {
      const navigating = this.touchNavigation;
      if (['pointerup', 'pointercancel', 'lostpointercapture'].includes(type)) {
        if (type === 'pointerup' && this.touchPointers.has(e.pointerId)) {
          this.touchPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
          this.turnView();
        }
        this.touchPointers.delete(e.pointerId);
        this.twist.reset();
        this.twist.update([...this.touchPointers.values()]);
        if (!this.touchPointers.size) this.touchNavigation = false;
      }
      // Do not turn the last remaining finger back into a purchase mid-gesture.
      if (navigating) return;
    }
    const owner = `pointer-${e.pointerId}`,
      active = this.pointers.get(owner),
      ray = this.desktopRay(e);
    if (type === 'pointerdown') {
      const picked = this.pick({ x: 1e5, y: 1e5, z: 1e5 }, ray);
      if (!picked) return;
      if (
        this.interaction.begin(
          owner,
          picked.target,
          picked.world,
          e.timeStamp / 1000
        )
      ) {
        this.pointers.set(owner, {
          touch: e.pointerType === 'touch',
          height: picked.target.startsWith('handle-')
            ? toLocal(picked.world, this.view.table).y
            : 0.28
        });
        // Single-touch orbit is disabled for a piece grab. Leave pointer
        // tracking enabled so a later second finger starts at the current
        // first-finger position, not the original piece-grab position.
        this.view.controls.enabled = [...this.pointers.values()].every(p => p.touch);
        this.canvas.setPointerCapture(e.pointerId);
        this.canvas.focus();
        e.preventDefault();
      }
    } else if (type === 'pointermove') {
      if (active) {
        const p = this.planePoint(ray, active.height);
        if (p) {
          const offer = this.interaction.grabs.get(owner)?.token?.offer;
          const target = this.landingPoint(ray, offer);
          // The held preview floats above the page; highlight where the same
          // pointer will actually land when released on the raised surface.
          this.interaction.move(owner, xyz(p), e.timeStamp / 1000, xyz(target || p));
        }
      } else {
        const picked = this.pick({ x: 1e5, y: 1e5, z: 1e5 }, ray);
        this.canvas.style.cursor = picked ? 'grab' : 'default';
        if (picked) this.describe(picked.target);
      }
    } else if (active) {
      if (type === 'pointerup') {
        const offer = this.interaction.grabs.get(owner)?.token?.offer;
        const p = this.landingPoint(ray, offer);
        if (p && !this.interaction.grabs.get(owner)?.handle)
          this.interaction.move(owner, xyz(p), e.timeStamp / 1000);
        this.interaction.release(owner, { desktop: true });
      } else this.interaction.cancel(owner);
      this.pointers.delete(owner);
      this.view.controls.enabled = [...this.pointers.values()].every(p => p.touch);
      if (this.canvas.hasPointerCapture(e.pointerId))
        this.canvas.releasePointerCapture(e.pointerId);
    }
  }
  describe(id) {
    if (id.startsWith('handle-'))
      this.view.message(
        'Carry with one ring. Hold two rings to resize and turn.'
      );
    else {
      const offer = this.host.offer(id);
      if (offer) this.view.message(`${offer.label} · ${offer.detail}`);
    }
  }
  bind(session) {
    this.unbind();
    this.session = session;
    const add = (name, fn) => {
      session.addEventListener(name, fn);
      this.listeners.push([name, fn]);
    };
    for (const type of [
      'selectstart',
      'squeezestart',
      'selectend',
      'squeezeend'
    ])
      add(type, (event) => {
        if (session.visibilityState !== 'visible' || event.inputSource.hand)
          return;
        const source = this.sources.get(event.inputSource);
        if (!source?.valid) return;
        // Input events can precede this frame's animation callback. Read their pose
        // now, so a fast move-and-release never uses the previous frame's location.
        const ref = this.view.renderer.xr.getReferenceSpace();
        const grip = event.frame.getPose(
          event.inputSource.gripSpace || event.inputSource.targetRaySpace,
          ref
        );
        const target = event.frame.getPose(
          event.inputSource.targetRaySpace,
          ref
        );
        if (!grip || !target) {
          this.interaction.cancel(source.id);
          source.buttons.clear();
          return;
        }
        source.position = xyz(grip.transform.position);
        source.orientation = grip.transform.orientation;
        source.ray.origin.copy(target.transform.position);
        source.ray.direction
          .set(0, 0, -1)
          .applyQuaternion(target.transform.orientation);
        const button = type.startsWith('select') ? 'trigger' : 'grip';
        if (type.endsWith('start')) {
          if (this.onPlace(event.frame)) return;
          source.buttons.add(button);
          if (source.buttons.size === 1) this.startSource(source);
        } else {
          source.buttons.delete(button);
          if (!source.buttons.size) {
            const world = source.distance
              ? xyz(source.ray.at(source.distance, new THREE.Vector3()))
              : source.position;
            this.interaction.move(source.id, world, performance.now() / 1000, world, source.orientation);
            this.interaction.release(source.id);
          }
        }
      });
    add('inputsourceschange', (event) => {
      for (const source of event.removed) this.remove(source);
    });
  }
  unbind() {
    if (this.session)
      for (const [name, fn] of this.listeners)
        this.session.removeEventListener(name, fn);
    this.listeners = [];
    this.session = null;
    this.cancelAll();
    for (const input of [...this.sources.keys()]) this.remove(input);
  }
  remove(input) {
    const source = this.sources.get(input);
    if (!source) return;
    this.interaction.cancel(source.id);
    source.line.removeFromParent();
    source.line.geometry.dispose();
    source.line.material.dispose();
    this.sources.delete(input);
  }
  startSource(source) {
    const pick = this.pick(source.position, source.hand ? null : source.ray);
    if (!pick) return;
    this.describe(pick.target);
    source.distance = pick.distance || 0;
    if (
      this.interaction.begin(
        source.id,
        pick.target,
        pick.world,
        performance.now() / 1000,
        source.orientation
      )
    )
      this.feedback(source.id, true);
  }
  feedback(owner, ok) {
    for (const [input, source] of this.sources)
      if (source.id === owner)
        input.gamepad?.hapticActuators?.[0]
          ?.pulse(ok ? 0.25 : 0.1, ok ? 35 : 80)
          ?.catch(() => {});
  }
  xr(frame, reference) {
    if (!this.session || this.session.visibilityState !== 'visible') return;
    const bones = [],
      now = performance.now() / 1000;
    for (const input of this.session.inputSources) {
      let source = this.sources.get(input);
      if (!source) {
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(),
            new THREE.Vector3(0, 0, -1)
          ]),
          new THREE.LineBasicMaterial({
            color: '#6aa999',
            transparent: true,
            opacity: 0.5
          })
        );
        this.view.scene.add(line);
        source = {
          id: `xr-${++this.nextId}`,
          hand: !!input.hand,
          buttons: new Set(),
          pinched: false,
          armed: false,
          valid: false,
          ray: new THREE.Ray(),
          line
        };
        this.sources.set(input, source);
      }
      const grip = frame.getPose(
          input.gripSpace || input.targetRaySpace,
          reference
        ),
        target = frame.getPose(input.targetRaySpace, reference);
      let point, orientation = null,
        pinch = false;
      if (input.hand) {
        const joints = new Map();
        for (const [name, joint] of input.hand) {
          const pose = frame.getJointPose(joint, reference);
          if (pose) {
            joints.set(name, pose.transform.position);
            if (name === 'wrist') orientation = pose.transform.orientation;
          }
        }
        const thumb = joints.get('thumb-tip'),
          index = joints.get('index-finger-tip');
        if (thumb && index) {
          point = {
            x: (thumb.x + index.x) / 2,
            y: (thumb.y + index.y) / 2,
            z: (thumb.z + index.z) / 2
          };
          const distance = Math.hypot(
            thumb.x - index.x,
            thumb.y - index.y,
            thumb.z - index.z
          );
          pinch = distance < (source.pinched ? 0.04 : 0.025);
          for (const chain of HAND_BONES)
            for (let i = 1; i < chain.length; i++) {
              const a = joints.get(chain[i - 1]),
                b = joints.get(chain[i]);
              if (a && b) bones.push(a.x, a.y, a.z, b.x, b.y, b.z);
            }
        }
      } else if (grip && target) {
        point = xyz(grip.transform.position);
        orientation = grip.transform.orientation;
      }
      source.valid = !!point;
      if (!point) {
        this.interaction.cancel(source.id);
        source.buttons.clear();
        source.pinched = false;
        source.armed = false;
        source.line.visible = false;
        continue;
      }
      source.position = point;
      source.orientation = orientation;
      if (target) {
        source.ray.origin.copy(target.transform.position);
        source.ray.direction
          .set(0, 0, -1)
          .applyQuaternion(target.transform.orientation);
      }
      source.line.visible = !source.hand;
      if (!source.hand && target) {
        source.line.position.copy(target.transform.position);
        source.line.quaternion.copy(target.transform.orientation);
        source.line.scale.z = source.distance || 0.6;
      }
      const world =
        source.distance && !source.hand
          ? xyz(source.ray.at(source.distance, new THREE.Vector3()))
          : point;
      // Opening a pinch changes joint positions and sometimes the wrist pose.
      // A ring belongs to the last closed pinch; don't apply that release pose
      // as one final book rotation before handing control to the other hand.
      const releasingHandle = source.hand && source.pinched && !pinch &&
        this.interaction.grabs.get(source.id)?.handle;
      if (!releasingHandle)
        this.interaction.move(source.id, world, now, world, source.orientation);
      if (source.hand && !pinch) source.armed = true;
      if (source.hand && pinch !== source.pinched) {
        source.pinched = pinch;
        if (pinch) {
          if (source.armed && !this.onPlace(frame)) this.startSource(source);
        } else this.interaction.release(source.id);
      }
    }
    this.handVertices.array.set(bones.slice(0, this.handVertices.array.length));
    this.handVertices.needsUpdate = true;
    this.handLines.geometry.setDrawRange(
      0,
      Math.min(bones.length, this.handVertices.array.length) / 3
    );
    this.handLines.visible = bones.length > 0;
  }
  cancelAll() {
    this.interaction.cancelAll();
    // WebView/background interruptions may swallow the final pointer events.
    // Reset both our gesture state and OrbitControls' native pointer tracking.
    this.view.controls.disconnect();
    for (const id of new Set([...this.touchPointers.keys(),
      ...[...this.pointers.keys()].map(owner => Number(owner.slice(8)))])) {
      if (this.canvas.hasPointerCapture(id))
        this.canvas.releasePointerCapture(id);
    }
    this.pointers.clear();
    this.touchPointers.clear();
    this.touchNavigation = false;
    this.twist.reset();
    this.view.controls.touches.ONE = null;
    this.view.controls.mouseButtons.LEFT = null;
    this.view.controls.connect(this.canvas);
    this.view.controls.enabled = !this.view.renderer.xr.isPresenting;
    this.canvas.style.cursor = 'default';
    for (const source of this.sources.values()) {
      source.buttons.clear();
      source.pinched = false;
      source.armed = false;
      source.line.visible = false;
    }
    this.handLines.visible = false;
  }
}
