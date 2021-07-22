var astronaut,edges;

function preload(){
 bgimg=loadImage("iss.png")
 bathimg=loadAnimation("bath1.png","bath2.png")
 drinkimg=loadAnimation("drink1.png","drink2.png")
 brushImg=loadImage("brush.png")
 eatImg=loadAnimation("eat1.png","eat2.png")
 gymimg=loadAnimation("gym1.png","gym2.png")
 gymimg2=loadAnimation("gym11.png","gym12.png")
 moveImg = loadAnimation("move.png","move1.png")
 sleepImg = loadImage("sleep.png")
}

function setup() {
  createCanvas(400, 400);
  bg=createSprite(200,200,20,20)
  bg.addImage(bgimg)
  bg.scale=0.15
 astronaut = createSprite(200,200,20,20)
 astronaut.addImage(sleepImg)
 astronaut.scale=0.065
 edges = createEdgeSprites();
 
}

function draw() {
  background(220);
astronaut.collide(edges)
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gymimg2)
  astronaut.changeAnimation("gymming")
  astronaut.y=300
  astronaut.x=200
  astronaut.velocityY=0
  astronaut.velocityX=0
  
}
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brushImg)
  astronaut.changeAnimation("brushing")
  astronaut.y=100
  astronaut.x=200
  astronaut.velocityY=0
  astronaut.velocityX=0
  
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bathimg)
  astronaut.changeAnimation("bathing")
  astronaut.x=100
  astronaut.y=200
  astronaut.velocityY=0
  astronaut.velocityX=0
  
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eatImg)
  astronaut.changeAnimation("eating")
  astronaut.y=300
  astronaut.x=200
  astronaut.velocityY=2
  astronaut.velocityX=2
  
}

  drawSprites();
}