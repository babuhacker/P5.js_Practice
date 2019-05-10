
let blocks;
let blocks1;
let b=[];
let x=20;
let y= 20;
let w=20;
let h=20;

function windowResized(){
 
	resizeCanvas(windowWidth, windowHeight);

}

function setup() {
	
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  angleMode(DEGREES);
  for(i=0;i<width;i++){
		b[i]=[];
		for(j=0;j<height;j++){
			b[i][j]= new block(x,y,w,h,3);
			y=y+20;
			
		}
		y=20;
		
		x=x+20;
	}
 
}

function draw(){
	background(0);
	for(i=0;i<width;i++){
		for(j=0;j<4;j++){
	push();
	b[i][j].move();
	b[i][j].show();
	pop();
}
	
}
}
function mousePressed(){
	for(i=0;i<width;i++){
		for(j=0;j<4;j++){
		b[i][j].click();
	}}
}


