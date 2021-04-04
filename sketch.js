var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var snow;
  var backGroundImage;

  function preload(){
    backGroundImage = loadImage("snow3.jpg");
  }

function setup() {
  createCanvas(1000, 400);
  engine = Engine.create();
  World = engine.World;

  snow = new snow()
}

function draw() {
  background(backGroundImage);
  textSize(20)
  text("PRESS SPACE FOR SNOWFALL",20,30);

  if(keyPressed === "space"){

  }
  Engine.update(engine);
  
  drawSprites();
}