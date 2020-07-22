class Helicopter{
constructor(x,y){
var options={
isStatic:true
}
    
this.body=Bodies.rectangle(x,y,200,100,options)
this.width=200;
this.height=100;
World.add(world,this.body);
this.image=loadImage("helicopter.png");
}
display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,200,100)


}

}