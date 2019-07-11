let verticalline = 0.0;

function setup() {
  createCanvas(1920, 1080);
  noiseSeed(50);
  stroke(0, 8);
  stroke(255, 204, 100);
}

function draw() {
  verticalline = verticalline + .02;
  let n = noise(verticalline) * width;
  line(n, 0, n, height);
}