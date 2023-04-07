let flowers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; // Array of flower positions

let life = ["birth", "growth", "bloom", "decay", "death"];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  // Set the fill color based on the life parameter
  if (life == "birth") {
    fill("yellow");
  } else if (life == "growth") {
    fill("green");
  } else if (life == "bloom") {
    fill("red");
  } else if (life == "decay") {
    fill("tan");
  } else if (life == "death") {
    fill("brown");
  }
  
  // Loop through the array and draw the flowers at their positions
  for (let i = 0; i < flowers.length; i++) {
    let flowerX = flowers[i] % 5 * 80 + 40; // Calculate the X position of the flower
    let flowerY = floor(flowers[i] / 5) * 80 + 40; // Calculate the Y position of the flower
    drawFlower(flowerX, flowerY, 0.3, life[i % life.length]); // Draw the flower with the current life parameter
  }
}

function drawFlower (x, y, size, life) {
  push(); // save the current transformation matrix
  translate(x, y);
  scale(size);

  fill("black"); //flower center
  ellipse(0, 0, 100, 100);
  noStroke(); // so all of the petals blend together
  // Set the color of the petals based on the life parameter
  if (life == "birth") {
    fill("gold");
  } else if (life == "growth") {
    fill("seagreen");
  } else if (life == "bloom") {
    fill("red");
  } else if (life == "decay") {
    fill("tan");
  } else if (life == "death") {
    fill("olive");
  }
  for (let petalsDrawn = 0; petalsDrawn < 40; petalsDrawn++) {
    rotate(30);
    ellipse(50, 50, 100, 45);
  }

  pop(); // restore the previous transformation matrix
}
