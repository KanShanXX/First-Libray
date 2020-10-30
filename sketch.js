var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(1000, 300, 50, 50);
  obj1.shapeColor = "yellow"
  obj1.debug = true;
  obj2 = createSprite(200, 300, 50, 50);
  obj2.shapeColor = "white";
  obj2.debug = true;

  obj1.velocityX = -5;
  obj2.velocityX = 5;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  //arguement
  bounceOff(obj1, obj2);
  drawSprites();
}

function bounceOff(fixedRect, movingRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}