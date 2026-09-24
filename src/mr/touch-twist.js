// Pan uses the midpoint and zoom uses finger separation. Twist is the remaining
// independent motion, so all three can work without changing gesture modes.
export class TouchTwist {
  constructor() {
    this.reset();
  }
  reset() {
    this.angle = null;
  }
  update(points) {
    if (points.length !== 2) {
      this.reset();
      return 0;
    }
    const dx = points[1].x - points[0].x, dy = points[1].y - points[0].y;
    // Nearly touching/crossing fingers have an unstable angle. Rebase instead
    // of turning a small pinch into a half-turn of the camera.
    if (Math.hypot(dx, dy) < 24) {
      this.reset();
      return 0;
    }
    const angle = Math.atan2(dy, dx), previous = this.angle;
    this.angle = angle;
    if (previous === null) return 0;
    const delta = angle - previous;
    // 35% response keeps deliberate turns gentle. No deadband is accumulated:
    // a pan/pinch or a twist that returns to its starting angle leaves no drift.
    return Math.atan2(Math.sin(delta), Math.cos(delta)) * .35;
  }
}
