function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  drawFlower(200, 200, 0.4);
  drawFlower(50, 100, 0.5);
  drawFlower(175, 70, 0.5);
  drawFlower(100, 250, 0.5);
  drawFlower(300, 250, 0.5);
  drawFlower(250, 350, 0.3);
  drawFlower(350, 150, 0.5);
}

function drawFlower(x, y, size) {
  push(); // save the current transformation matrix
  translate(x, y);
  scale(size);

  fill("black"); //flower center
  ellipse(0, 0, 100, 100);

  fill("green"); // flower steam
  rect(-10, 80, 30, 600);

  noStroke(); // so all of the petals blend together
  fill("red"); //I like red flowers
  for (let petalsDrawn = 0; petalsDrawn < 36; petalsDrawn++) {
    rotate(10);
    ellipse(50, 50, 100, 45);
  }

  pop(); // restore the previous transformation matrix
}
