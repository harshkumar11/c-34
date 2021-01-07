
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var holder;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	holder = new holder(700,800,600,20);
	bob1 = new Bob(100,320,70,70);
	bob2 = new Bob(200,320,70,70);
	bob3 = new Bob(300,320,70,70);
	bob4 = new Bob(400,320,70,70);
	bob5 = new Bob(500,320,70,70);
	world = engine.world;

	chain = new Chain(holder.body,bob1.body);
	chain = new Chain(holder.body,bob2.body);
	chain = new Chain(holder.body,bob3.body);
	chain = new Chain(holder.body,bob4.body);
	chain = new Chain(holder.body,bob5.body);

  
}


function draw() {
  rectMode(CENTER);
  background(black);
  
  holder.display();
  chain.display();   
 
}



