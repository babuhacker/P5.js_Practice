
class Star{
	
	
	constructor(x,y,z){
		this.x= x;
		this.y= y;
		this.z = z;
		
	}
	update(){
		this.z=this.z-speed;
		
		if(this.z<1){
			this.x = random(-width,width);
			this.y = random(-height,height);
			this.z = width;
		}
	}
	show(){
		var sx = map(this.x/this.z,0,1,0,width);
		var sy = map(this.y/this.z,0,1,0,height);
		var r = random(map(this.z,0,width,26,0));
		ellipse(sx,sy,r,r);
	}
	
}
