class Ground{
    constructor(){
    var options={
    isStatic:true
    }
        
    this.body=Bodies.rectangle(400,690,1000,10,options)
    this.width=1000;
    this.height=10;
    World.add(world,this.body);
    }
    display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,1000,10)
    
    
    }
    
    }