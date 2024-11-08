let mover;

function setup() {
  createCanvas(640, 240);
  mover = new mover();
}

function draw() {
  background(225);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  mover.update();
  mover.display();
  mover.checkEdges();
}