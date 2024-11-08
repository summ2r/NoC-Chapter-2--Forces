function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(200, 200, 20);

  if(mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
    mover.update(); {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }
  }




}