var arr=[];
var n =1500;
let x;
let y;
let z;
var speed;
function windowResized(){
 
	resizeCanvas(windowWidth, windowHeight);
}
function setup() {
	var can = createCanvas(windowWidth,windowHeight);
	
	can.style('display','block');
	can.style('z-index','-1');
	can.position(0,0);
  for(var i=0 ;i<n;i++){
		x = random(-width,width);
		y = random(-height,height);
		z = random(width);
	  arr[i] = new Star(x,y,z);
  }
}

function draw() {
  background(0);
	translate(width/2,height/2);
	speed = map(mouseX,0,width,0,20);
  for(var i=0 ;i<n;i++){
		arr[i].update();
		arr[i].show();
  }
}
