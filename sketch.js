let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
   translate(-25,-20)
      scale(0.20);
      noStroke();
  
  
  
	fill(28,28,28)
	ellipse(630, 150, 4, 95);
	
	fill(28,28,28)
	ellipse(670, 150, 4, 95);
	
	fill(28,28,28)
	ellipse(648, 380, 4, 95);
  
	fill(28,28,28)
	circle(650, 200, 100)
	
	fill(255,255,0)
	circle(650, 275, 100)
	
	fill(28,28,28)
	circle(650, 350, 100);
	  
	strokeWeight(0.5);
	
	stroke(255,255,255);
	
	fill (255,255,255);
	circle(623, 190, 25);
  
	strokeWeight(0.5);
	stroke(255,255,255);
  
	fill (255,255,255);
	circle(675, 190, 25);
  
      pop();
    }
  }
}
