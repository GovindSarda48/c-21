var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(100,300,50,50);
  gameObj1.shapeColor="blue";

  gameObj2 = createSprite(100,350,50,50);
  gameObj2.shapeColor="blue";



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);

  gameObj1.y = mouseY;
  gameObj1.x = mouseX;
  
  bounceOff(movingRect,fixedRect);

  if(isTouching(gameObj1,gameObj2)){
    gameObj1.shapeColor = "yellow";
    gameObj2.shapeColor= "red";

  }
else{
  gameObj1.shapeColor="blue";
  gameObj2.shapeColor="blue";


}

  drawSprites();
}



