
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trashimg
function preload()
{
trashimgimage = loadImage("dustbingreen.png")
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	ground = new Ground(400,600,1200,20)
	ball = new ball(200,520,70)
	bottom = new trash(600,550,100,10);
	side1 = new trash(550,550,10, 100)
	side1 = new trash(650,550,10, 100)
	trashimg = createSprite(600, 550, 100, 100);
	trashimg.add(trashimgimage);

}


function draw() {
  rectMode(CENTER);
  background("white")
  ground.display();
  ball.display();
  bottom.display();
  side1.display();
  side2.display();
 drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:650,y:-650} );
	}
}



