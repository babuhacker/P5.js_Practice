var speed1=1;
var speed2=1;
var x=0;
var y=100;
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  strokeWeight(2);

  ellipse(x,y,20,20);
if(x==width){
  speed1=-1;
}
  if(y==height){
  speed2=-1;
}
  if(y==0){
  speed2=1;
}
if(x==0){
    speed1=1;
  }
  x = x+speed1;
  y = y+speed2;
}
