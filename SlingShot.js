class SlingShot {
    constructor(bodyA,bodyB){
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            length:10,
            stiffness:0.04
        }
        this.SlingShot=Constraint.create(options);
        World.add(world,this.SlingShot);
    }
    display(){
        var pointA=this.SlingShot.bodyA.position;
        var pointB=this.SlingShot.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    }
}