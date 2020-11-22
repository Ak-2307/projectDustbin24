
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
//var dustbin1,dustbin2,dustbin3;
var dustbin;
var paperBall;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(100,500,30);
    ground = new Ground(600,600,1200,20);
	dustbin = new Dustbin();
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(137,207,240);

  paperBall.display();
  ground.display();
  dustbin.display();
  

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position, {x:30, y:-30});
	}
}



