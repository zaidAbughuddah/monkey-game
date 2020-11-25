
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;
var backgroundImage,backgroundLoad

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundLoad = loadImage(".png");
 
}



function setup() {
  createCanvas(600,400);
  
  backgroundImage = createSprite(600,400);
  backgroundImage.addImage(backgroundLoad)
  backgroundImage.scale = 2
  
  monkey = createSprite(30,330,20,50);
  ground = createSprite(300,380,600,20);  

  ground.velocityX = -4
  
  
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  
  
}


function draw() {
background(255);
   World.frameRate = 60
  
  
  
  text(mouseX + "," + mouseY, mouseX,mouseY)
  
  //use for the other project

  /*stroke("white");
  //textSize(20);
  //fill("black");
  text("score" + score, 500, 50);*/
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival time:" + survivalTime,100,50)
  
  
  
  
  
  
  
  
  
  monkey.addAnimation("monkeyRun",monkey_running);
  monkey.scale = 0.1
  
  
  
  if(keyDown("space") && monkey.y > 100){
    
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
    
  }
  
  obstacles();
  food();
  
  drawSprites();
  
}

function food(){
  if(World.frameCount%80===0){
    var banana=createSprite(600,200,20,20);
    banana.scale = 0.1
    banana.velocityX = -4;
    banana.addImage("moving",bananaImage);
    banana.y=Math.round(random(120, 200));
    banana.setlifetime = 100;
    
    foodGroup.add(banana); 
  }
}
  
  function obstacles(){
    if(World.frameCount%300===0){
    var obstacle = createSprite(600,329,20,20)
    obstacle.velocityX = -4;
    obstacle.scale = 0.2
    obstacle.addImage("obstacleI",obstacleImage);
    obstacle.setlifetime = 100; 
      
      obstacleGroup.add(obstacle);
    }
    
  }

  







