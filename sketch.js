var car
var wall,thickness
var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  wall-createSprite(1200,200,thickness,height/2)
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}