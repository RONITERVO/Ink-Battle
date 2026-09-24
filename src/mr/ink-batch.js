import * as THREE from 'three';

const COLORS = new Map();
const colorValue = (value) => {
  if (!COLORS.has(value)) COLORS.set(value, new THREE.Color(value));
  return COLORS.get(value);
};

/** Shared geometry and instance buffers keep a full army to a few draw calls. */
export class InkBatch {
  constructor(parent, { capacity = 12000, unlit = false } = {}) {
    this.material = unlit
      ? new THREE.MeshBasicMaterial()
      : new THREE.MeshStandardMaterial({ roughness: 0.92, metalness: 0.02 });
    const geometries = {
      sphere: new THREE.SphereGeometry(1, 10, 8),
      rod: new THREE.CylinderGeometry(1, 1, 1, 6),
      box: new THREE.BoxGeometry(1, 1, 1),
      cone: new THREE.ConeGeometry(1, 1, 8),
      ring: new THREE.TorusGeometry(1, 0.1, 4, 12)
    };
    this.outlineMaterial = new THREE.MeshBasicMaterial({
      color: '#342d2b',
      side: THREE.BackSide
    });
    geometries.sphereOutline = geometries.sphere.clone();
    geometries.boxOutline = geometries.box.clone();
    this.meshes = {};
    this.counts = {};
    this.overflow = 0;
    this.triangles = 0;
    for (const [name, geometry] of Object.entries(geometries)) {
      const mesh = new THREE.InstancedMesh(
        geometry,
        name.endsWith('Outline') ? this.outlineMaterial : this.material,
        capacity
      );
      mesh.name = `ink-${name}`;
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.count = 0;
      parent.add(mesh);
      this.meshes[name] = mesh;
    }
    this.m = new THREE.Matrix4();
    this.p = new THREE.Vector3();
    this.s = new THREE.Vector3();
    this.q = new THREE.Quaternion();
    this.euler = new THREE.Euler();
    this.direction = new THREE.Vector3();
    this.up = new THREE.Vector3(0, 1, 0);
    this.context = { x: 0, y: 0, z: 0, scale: 1, face: 1 };
    this.begin();
  }
  begin() {
    for (const name of Object.keys(this.meshes)) this.counts[name] = 0;
    this.overflow = 0;
  }
  model(x, y, z, scale = 1, face = 1) {
    this.context = { x, y, z, scale, face };
  }
  point([x, y, z = 0]) {
    const c = this.context;
    return [c.x + x * c.scale * c.face, c.y + y * c.scale, c.z + z * c.scale];
  }
  write(shape, p, s, color, q) {
    const mesh = this.meshes[shape],
      index = this.counts[shape];
    if (index >= mesh.instanceMatrix.count) {
      this.overflow++;
      return;
    }
    this.p.set(...p);
    this.s.set(...s);
    this.m.compose(this.p, q, this.s);
    mesh.setMatrixAt(index, this.m);
    mesh.setColorAt(index, colorValue(color));
    this.counts[shape]++;
  }
  part(shape, p, size, color, rotation = [0, 0, 0]) {
    const scale = this.context.scale;
    this.q.setFromEuler(this.euler.set(...rotation));
    this.write(
      shape,
      this.point(p),
      size.map((v) => v * scale),
      color,
      this.q
    );
  }
  line(a, b, radius = 0.004, color = '#342d2b') {
    const p = this.point(a),
      end = this.point(b);
    this.direction.set(end[0] - p[0], end[1] - p[1], end[2] - p[2]);
    const len = this.direction.length();
    if (len < 1e-6) return;
    this.q.setFromUnitVectors(this.up, this.direction.multiplyScalar(1 / len));
    this.write(
      'rod',
      p.map((v, i) => (v + end[i]) / 2),
      [radius * this.context.scale, len, radius * this.context.scale],
      color,
      this.q
    );
  }
  sphere(p, radius, color) {
    this.part('sphere', p, [radius, radius, radius], color);
  }
  outlineBall(p, radius, color = '#fff5dc') {
    this.part(
      'sphereOutline',
      p,
      [radius + 0.0015, radius + 0.0015, radius + 0.0015],
      '#ffffff'
    );
    this.sphere(p, radius, color);
  }
  box(p, size, color = '#e8d6ac') {
    this.part(
      'boxOutline',
      p,
      size.map((v) => v + 0.0025),
      '#ffffff'
    );
    this.part('box', p, size, color);
  }
  end() {
    this.triangles = 0;
    for (const [name, mesh] of Object.entries(this.meshes)) {
      mesh.count = this.counts[name];
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      this.triangles +=
        (mesh.count *
          (mesh.geometry.index?.count ||
            mesh.geometry.attributes.position.count)) /
        3;
    }
  }
  dispose() {
    for (const mesh of Object.values(this.meshes)) {
      mesh.removeFromParent();
      mesh.geometry.dispose();
    }
    this.material.dispose();
    this.outlineMaterial.dispose();
  }
}
