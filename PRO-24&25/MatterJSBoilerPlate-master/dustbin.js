class dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }
      
      
          this.image=loadImage("sprites/dustbin.png");
    
      
        World.add(world,this.body )
    }
    dispaly(){
        var pos=this.body.position;
        var angle=this.angle;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image);
        pop ();
    }
}