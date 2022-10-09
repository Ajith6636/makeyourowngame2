
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImage
function preload()
{
	backgroundImage = loadImage("./assets/universe.jpg");
cometImage = loadImage("./assets/comet1.gif");
ufotImage = loadImage("./assets/ufo.jpg");
spacecraftImage = loadImage("./assets/spacecraft.png");


}

function setup() {
	
createCanvas(800,700);


engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  
  drawSprites();
 
}



