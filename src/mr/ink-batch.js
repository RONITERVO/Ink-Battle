import * as THREE from "three";
import { pencilGeometries } from "./pencil-geometry.js";
import { PENCIL } from "./pencil-palette.js";

const COLORS = new Map();
const colorValue = (value) => {
  if (!COLORS.has(value)) {
    COLORS.set(value, new THREE.Color(value));
  }
  return COLORS.get(value);
};

/** Bounded, instanced pencil paths. No skin, face fill, or inverted hull. */
export class InkBatch {
  constructor(parent, { capacity = 12000 } = {}) {
    this.material = new THREE.MeshBasicMaterial({ vertexColors: true });
    // Maintain pencil width when a primitive is stretched into a wall or barrel.
    // Width follows model/table scale, not the dimensions of an individual part.
    this.material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        "#include <common>\nattribute vec3 pencilCenter;\nattribute vec3 pencilOffset;\nattribute vec3 pencilRadius;",
      );
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        "vec3 transformed = pencilCenter + pencilOffset * pencilRadius;",
      );
    };
    this.material.customProgramCacheKey = () => "spatial-pencil-width-v1";
    this.meshes = {};
    this.counts = {};
    this.overflow = 0;
    this.triangles = 0;
    for (const [name, geometry] of Object.entries(pencilGeometries())) {
      geometry.setAttribute(
        "pencilRadius",
        new THREE.InstancedBufferAttribute(
          new Float32Array(capacity * 3),
          3,
        ).setUsage(THREE.DynamicDrawUsage),
      );
      const mesh = new THREE.InstancedMesh(geometry, this.material, capacity);
      mesh.name = `pencil-${name}`;
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
  write(shape, p, s, color, q, width = 0.0015 * this.context.scale) {
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
    mesh.geometry.attributes.pencilRadius.setXYZ(
      index,
      ...s.map((v) => width / Math.max(Math.abs(v), 1e-8)),
    );
    this.counts[shape]++;
  }
  part(shape, p, size, color = PENCIL.graphite, rotation = [0, 0, 0]) {
    const scale = this.context.scale;
    this.q.setFromEuler(this.euler.set(...rotation));
    this.write(
      shape,
      this.point(p),
      size.map((v) => v * scale),
      color,
      this.q,
    );
  }
  line(a, b, radius = 0.004, color = "#342d2b") {
    const p = this.point(a),
      end = this.point(b);
    this.direction.set(end[0] - p[0], end[1] - p[1], end[2] - p[2]);
    const len = this.direction.length();
    if (len < 1e-6) return;
    this.q.setFromUnitVectors(this.up, this.direction.multiplyScalar(1 / len));
    const width = Math.min(radius, 0.006) * 0.82 * this.context.scale;
    this.write(
      "stroke",
      p.map((v, i) => (v + end[i]) / 2),
      [width, len, width],
      color,
      this.q,
      width * 0.75,
    );
  }
  path(points, radius = 0.004, color = "#342d2b") {
    for (let i = 1; i < points.length; i++)
      this.line(points[i - 1], points[i], radius, color);
  }
  ellipse(center, radii, plane = "xy", color = "#342d2b", steps = 16) {
    this.path(
      Array.from({ length: steps + 1 }, (_, i) => {
        const t = (i / steps) * Math.PI * 2;
        const a = Math.cos(t) * radii[0],
          b = Math.sin(t) * radii[1];
        const p =
          plane === "xz" ? [a, 0, b] : plane === "yz" ? [0, a, b] : [a, b, 0];
        return p.map((v, axis) => v + center[axis]);
      }),
      0.003,
      color,
    );
  }
  sphere(p, radius, color) {
    this.part("sphere", p, [radius, radius, radius], color);
  }
  outlineBall(p, radius, color = PENCIL.graphite) {
    this.sphere(p, radius, color);
  }
  box(p, size, color = PENCIL.graphite) {
    this.part("box", p, size, color);
  }
  end() {
    this.triangles = 0;
    for (const [name, mesh] of Object.entries(this.meshes)) {
      mesh.count = this.counts[name];
      mesh.instanceMatrix.needsUpdate = true;
      mesh.geometry.attributes.pencilRadius.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      this.triangles +=
        (mesh.count * mesh.geometry.attributes.position.count) / 3;
    }
  }
  dispose() {
    for (const mesh of Object.values(this.meshes)) {
      mesh.removeFromParent();
      mesh.geometry.dispose();
    }
    this.material.dispose();
  }
}
