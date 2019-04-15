function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  strokeWeight(2);
  for(var x=0 ; x<=mouseX ;x=x+50){
    for(var y=0; y<=height ; y=y+50){
   fill(random(255),0,random(255));
    ellipse(x,y,20,20);
  }}
}
