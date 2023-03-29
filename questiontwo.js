//Assignment 4.2
//Evan Soucy
//The biggest change other than the pattern is the removal of the stems. 
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // nested loops to draw flowers in a grid
  for (let i = 0; i < 5; i++) { // vertical repetition
    for (let j = 0; j < 5; j++) { // horizontal repetition
      let flowerX = 50 + j * 100;
      let flowerY = 50 + i * 100;
      drawFlower(flowerX, flowerY, 0.4);
    }
  }
}

function drawFlower(x, y, size) {
  push(); // save the current transformation matrix
  translate(x, y);
  scale(size);

  fill("black"); //flower center
  ellipse(0, 0, 100, 100);
  noStroke(); // so all of the petals blend together
  fill("red"); //I like red flowers
  for (let petalsDrawn = 0; petalsDrawn < 36; petalsDrawn++) {
    rotate(10);
    ellipse(50, 50, 100, 45);
  }

  pop(); // restore the previous transformation matrix
}
