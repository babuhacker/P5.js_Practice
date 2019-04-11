function setup() {
  createCanvas(1352,590);
}

function draw() {
  background('#621e81');
  noStroke();
  fill('#257aa6');
  triangle(0,0,1354,0,0,529);
  fill('#00bdaa');
  ellipse(677,264,400,400);
  rectMode(CENTER);
  noFill();
  stroke('white');
  strokeWeight(3);
  rect(677,264,350,80);
  noFill();
  stroke('white');
  rect(677,264,340,70);
  for(i=0;i<1000;i++){
   fill('white');
    ellipse(random(1354),random(590),random(5),random(5));
    
  }
}
