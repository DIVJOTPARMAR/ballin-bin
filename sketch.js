
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,ball,rightSide,leftSide,ground,world,ball


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ballOptions={
		iStatic:false,
		restitution:0.8,
		friction:0,
		
		density:1
	}

	//Create the Bodies Here.
	ground=new Ground(400,650,20,800)
	leftSide=new Ground(500,585,120,20)
	rightSide=new Ground(700,585,120,20)
	ball=Bodies.circle(100, 200, 20, ballOptions)
	
	World.add(world,ball)
	
	
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);

  ground.show()
  leftSide.show()
  rightSide.show()
  ellipse(ball.position.x,ball.position.y,20)
  moveTheBall()
  
 
  
  drawSprites();
  
 
}
function moveTheBall(){  
	if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.8,y:-.9});
	}
}



