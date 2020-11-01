var monkey,monkey_running;
var banana,bananaImage,obstacle,obstacleImage;
var bananaGroup,obstacleGroup;
var ground;
var score;

function preload() {
  monkey_running =            loadAnimation("monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png","monkey_9.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}


function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(40,340,40,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,385,900,30);
  //ground.velocityX = -6;
  
  score = 0;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("gainsboro");
  
  
  
  //if (ground.x < 0) {
    //ground.x = ground.width / 2;
  //}
  
  monkey.collide(ground);
  obstacleGroup.collide(monkey);
  
  
  scoreboard();
  monkeyJump();
  spawnObstacle();
  spawnBanana();
  
  drawSprites();
}

function spawnObstacle() {
  if (frameCount % 300 == 0) {
    var obstacle = createSprite(400,340,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    if (obstacle.x == 0) {
      obstacle.destroy();
    }
    obstacleGroup.add(obstacle);
  }
  
}

function spawnBanana() {
  
  if (frameCount % 80 == 0) {
    var banana = createSprite(400,200,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -6;
    banana.y = Math.round(random(80,250));
    if (banana.x == 0) {
      banana.destroy();
    }
    bananaGroup.add(banana);
  }
}

function monkeyJump() {
  
  if (keyDown("Space") && monkey.y == 339.3) {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
}

function scoreboard() {
  
  text("Score = " + score,300,50);
  score = Math.round(frameCount / 10);
}