let bubble1;
let bubble2;

function setup(){
	createCanvas(400,400);
	color1="white";
	color2 = "red";
	bubble1 = new Bubble1();
	
	bubble2 = new Bubble2();
}

function draw(){
	background(0);
	
	if(mouseX>= 75 && mouseX <= 134 && mouseY >= 76  && mouseY <= 133){
		color1 = color2;
	}
	
	
	bubble2.show2();
	bubble2.color2();
	
	
	bubble1.show1();
	bubble1.color1();

}

class Bubble1{
	constructor(){
		this.x = random(0,300);
		this.y =random(0,300);
	}
	color1(){
		fill(color1);
	}
	show1(){
		
		ellipse(this.x,this.y,40,40);
	}
}
class Bubble2{
	color2(){
		fill(color2);
	}
	show2(){
		
		ellipse(mouseX,mouseY,30,30);
	}
}
