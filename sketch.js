const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;

var dustbinimage,paperimage,paper1,bin;
var left,right, down;


function preload(){

paperimage = loadImage("paper2.png")
paperimage.scale=0.2
dustbinimage = loadImage("dustbingreen.png")
}



function setup() {
  createCanvas(1500, 750);
  rectMode(CENTER);

  bin = createSprite(1250,500,100,100)
  bin.addImage(dustbinimage)

  

  gameState = "play";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  dustbin = new DustBin(1800, 390, 100, 10);
 
  paper = new Paper(100, 300,50);



left = new Dustbin2(1125,500,10,333)
  right = new Dustbin2(1375,500,10,333)
down=new Dustbin2(1250,660,270,10)




  ground = Bodies.rectangle(750, 500, 1500, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  background("orange")
  drawSprites();
  rectMode(CENTER)

  paper.display();
  dustbin.display();
 
  left.display();
  right.display();
  down.display();

  
 

  
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 600,
      y: -600
    });
 }
 if (keyCode === DOWN_ARROW && gameState === "play") {
  Matter.Body.applyForce(paper.body, paper.body.position, {
    x: -600,
    y: -600
  });


 }
}