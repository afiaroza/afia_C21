var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,200,50,50);
  car.shapeColor="blue";
  car.velocityX=4;
  wall=createSprite(1000,200,20,100);
  wall.shapeColor="yellow";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
    
  BounceOff(car,wall);
  drawSprites();
}


function IsTouching(a,b) {
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
 return true;

}
else {
  return false;
}
}

function BounceOff(a,b) {
if (a.x - b.x < b.width/2 + a.width/2
  && b.x - a.x < b.width/2 + a.width/2){
    a.velocityX=(-1)*a.velocityX;    
  }
  else if(a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2){
      a.velocityY=(-1)*a.velocityY;
    }
}
