class block{
	
	constructor(x,y,w,h,rot){
		this.x=x;
		this.y=y;
		this.h = h;
		this.w = w;
		this.rot = rot;
	}
	show(){

	
	fill(35);
	
	rect(0,0,this.w,this.h);
	
	

	}
	move(){
		angleMode(DEGREES);
		translate(this.x,this.y);
		rectMode(CENTER);
		rotate(this.rot);
		this.rot=this.rot+10;
	}
	scale2(){
		scale(5);
		
	}
	click(){
		var d = dist(mouseX,mouseY,this.x,this.y);
		if(d<20){
			
		this.h=this.h+20;
		this.w=this.w+20;
	}}
}
