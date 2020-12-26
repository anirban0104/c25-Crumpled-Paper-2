class Paper {  
    constructor(x, y, radius){
        var options = {
            restitution:0,
            friction:0,
            density:1.2,
            isStatic : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       this.image = loadImage("paper3.png")
        this.image.scale=0.01
   }
   display(){
       var pos = this.body.position
    fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    imageMode(CENTER)
    image(this.image,pos.x,pos.y);
   }
}
