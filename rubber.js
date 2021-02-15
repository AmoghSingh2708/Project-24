class Rubber{
    constructor(x,y,radius){
        var options = {
            'restitution':1.0,
            'friction':5,
            'density':1 
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 50;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        circle(0,0,this.radius);
        pop();
        
    }
}