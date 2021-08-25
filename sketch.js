var seaImg;
var shipImg1;
var sea;
var ship;

function preload(){
 seaImg = loadImage("sea.png");  
 shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(800,800);
 sea = createSprite(100,300);
 sea.addImage(seaImg)
 sea.velocityX = -5
 ship = createSprite(100,300);
 ship.addAnimation("sail",shipImg1)
}



function draw() {
 background("blue");
 drawSprites();
  if (sea.x < 0){
   sea.x = sea.width/2;
  }
}