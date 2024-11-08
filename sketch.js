function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  mover.appplyForce(wind);
  mover.applyForce(gravity);
  mover.update();

}