

let bubbles=[];
function windowResized(){
 
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	var can = createCanvas(windowWidth,windowHeight);
	
	can.style('display','block');
	can.style('z-index','-1');
	can.position(0,0);

	
}
function mouseDragged(){
	
		let r = random(10,40);
		bubbles[i] = new bubble(mouseX,mouseY,r);
}

function draw() {
	
	background(0);
	for(i=0 ; i<bubbles.length ;i++){
		bubbles[i].show();
	bubbles[i].move();
	}
	
  }
  
