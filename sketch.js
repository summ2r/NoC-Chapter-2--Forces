let mover;

function setup() {
  createCanvas(400, 400);

  mover = new Mover();
}

function draw() {
  background(220);

  if(mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
  }

  mover.update();
  mover.show();

}