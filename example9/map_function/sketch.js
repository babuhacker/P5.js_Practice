var col=0;

function setup() {
  
  createCanvas(500, 400);
  
}

function draw() {
  r = map(mouseX,0,500,0,255);
  g = map(mouseY,0,400,0,255);
  b = map(mouseX,0,500,0,255);
    background(r,g,b);
   fill(200,0,r);
  ellipse(mouseX,mouseY,50,50);
  
}
