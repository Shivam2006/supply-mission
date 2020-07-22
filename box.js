class Box{
    constructor(x,y){
    var options={
    restitution:1.0
    }
        
    this.body=Bodies.rectangle(x,y,50,50,options)
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    this.image=loadImage("package.png");
    }
    display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    
    
    }
    
    }