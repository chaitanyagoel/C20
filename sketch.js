
var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);

  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(300, 200, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
console.log((fixedRect.width/2)+(movingRect.width /2));
  
if(movingRect.x - fixedRect.x < (fixedRect.width/2)+(movingRect.width /2)
&& fixedRect.x - movingRect.x < (fixedRect.width/2)+(movingRect.width /2)
&& movingRect.y - fixedRect.y < (fixedRect.height /2)+(movingRect.height /2)
&& fixedRect.y - movingRect.y < (fixedRect.height/2)+(movingRect.height /2)
){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  
}
  else {
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  
  }

  

  drawSprites();
}