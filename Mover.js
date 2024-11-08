class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = 10;
  }

  applyForce(force) {
    let f = froce.copy();
    f.div(this.mass);
    this.acceleration.add(f);
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



