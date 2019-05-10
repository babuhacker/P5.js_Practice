class bubble{

	constructor(x,y,r){
		this.x=x;
		this.y=y;
		this.r=r;
	}
	
	move(){
		
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
		
	}
	show(){
		
		noStroke();
		
		fill(255,30);
		ellipse(this.x, this.y, this.r*2);
		
	}
	
}
