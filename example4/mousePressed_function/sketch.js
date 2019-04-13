var on = false;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(0);
  if(on){
   background(233); 
  }
  stroke(255);
  strokeWeight(4);
  noFill();
  if(mouseX>150 && mouseX < 250 && mouseY>150 && mouseY<250){
   fill(120,0,200); 
  }
  rectMode(CENTER);
  rect(200,200,100,100);
  
}

function mousePressed(){
  if(mouseX>150 && mouseX < 250 && mouseY>150 && mouseY<250){
   on=!on;
  }
 
}
