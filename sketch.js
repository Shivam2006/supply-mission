

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	engine = Engine.create();
	world = engine.world;



	//Create a Ground
	
	 helicopter=new Helicopter(400,200);
	 ground=new Ground();
	 box=new Box(400,260);
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  helicopter.display();
  ground.display();
  box.display();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//Matter.Body.setStatic(box.display(),false);
	
    
  }
}



