let moverA = new Mover();
let moverB = new Mover();

let wind = createVector(1, 0);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  moverA.applyForce(wind);
  moverB.appplyForce(wind);

  mover.update();
  mover.show();

}