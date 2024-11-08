class Mover {
  constructor() {
    this.position = createVector(width/2, height/2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.velocity.add(this.acceleration);
  }
  applyForce(force) {
  this.acceleration = force;
  this.acceleration.add(force);
  }

 update() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);

  this.acceleration.mult(0);
  }

 show() {
  circle(200, 200, 20);
  }
}



