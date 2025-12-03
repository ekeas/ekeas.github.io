size = 30;

let palette = ["#9dae11", "#cad988", "#b7c675", "#80a867", "#6e8b3d"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeWeight(3);
  drawArt();
}

function drawArt() {
  
let bg = color(random(palette));
background(lerpColor(bg, color(255), 0.4));

 for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      let c = random(palette);
      fill(c);
      noStroke();

      let circleSize = random(size * 0.3, size); 
      ellipse(x + size / 2, y + size / 2, circleSize, circleSize);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawArt();
}


