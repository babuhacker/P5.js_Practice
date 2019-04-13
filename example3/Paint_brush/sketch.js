var col={
  r:255,
  g:0,
  b:0
};
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  col.r=random(0,125);
  col.b=random(0,255);
  stroke(col.r,col.g,col.b);
  strokeWeight(2);
   noFill();
  if(mouseIsPressed){
  ellipse(mouseX,mouseY,40,40);
  }
}
