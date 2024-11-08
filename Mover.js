class Mover {
  constructor() {
    this.position = createVector();
    this.velocity = createVector();
    this.acceleration = createVector();
    this.velocity.add(this.accelration);
  }
}

applyForce(force) {
  this.acceleration = force;
}