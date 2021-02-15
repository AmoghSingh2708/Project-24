
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var hammer;
var stone;
var rubber;
var iron;
var sand


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,698,800,10); 
	hammer = new Hammer(200,200);
	stone = new Stone(100,200,50,50);
  rubber = new Rubber(400,400,50);
  sand1 = new Sand(300,100,12);
  sand2 = new Sand(320,100,12);
  sand3 = new Sand(340,100,12);
  sand4 = new Sand(360,100,12);
  sand5 = new Sand(380,100,12);
  iron = new Iron(600,400,70,40);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron.display();

  
 
  
  drawSprites();
 
}



