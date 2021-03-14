//creating the variables
var bowImg;
var skyImg;
var BBimg;
var RBimg;
var GBimg;
var PBimg;
var arrowImg;
var score=0;
var rbgroup;
var bbgroup;
var gbgroup;
var pbgroup;
var arrow_G;


function preload(){
  
  //loading images
  
  bowImg=loadImage("bow0.png");
  
  skyImg=loadImage("background0.png");
  
  BBimg=loadImage("blue_balloon0.png");
  
  RBimg=loadImage("red_balloon0.png");
  
  GBimg=loadImage("green_balloon0.png");
  
  PBimg=loadImage("pink_balloon0.png");
  
  arrowImg=loadImage("arrow0.png");
}

function setup() {
  createCanvas(400, 700);
   
  //creating the sky
  sky = createSprite(200,305,10,10);
  sky.addImage("background",skyImg);
  sky.scale=2;
 
  //creating the bow
  bow = createSprite(350,10,20,50);
  bow.addImage("bow",bowImg);
  
  
  
  //creating groups
  arrow_G = new Group();
  rbgroup = new Group();
  bbgroup = new Group();
  gbgroup = new Group();
  pbgroup = new Group();
   
}

function draw() {
  
  //making the bow move
  bow.y=mouseY; 
  
  //shooting the arrow
  if(keyWentDown("space")){
   createarrow();
   }
  
  //moving the sky move
  sky.velocityX=-3;
  //rebuilding the ground
  if(sky.x<0){
    sky.x=sky.width/2;
  }
  
  //when the arrow touches any balloon then the score increases
  //the arrow and the balloon disappear
  
  if(arrow_G.isTouching(rbgroup)){
    rbgroup.destroyEach();
    arrow_G.destroyEach();                     
    score=score+3; 
  }
  
   if(arrow_G.isTouching(gbgroup)){
    gbgroup.destroyEach();
    arrow_G.destroyEach();
    score=score+2;
  }
  
   if(arrow_G.isTouching(bbgroup)){
    bbgroup.destroyEach();
    arrow_G.destroyEach();
    score=score+1; 
  }
  
   if(arrow_G.isTouching(pbgroup)){
    pbgroup.destroyEach();
    arrow_G.destroyEach();
    score=score+4;
  }
  
 
 //calling all the functions
  var rand=Math.round(random(1,4));
 
  switch(rand){
      
    case 1: blueballoon(); 
            break;
    
    case 2: redballoon();
            break;
    
    case 3: greenballoon();
            break;
      
    case 4: pinkballoon();
            break;
  }
  
 drawSprites(); 

 //creating the score 
 fill ("yellow"); 
 textSize(20);
 text("Score:"+score,250,30);
  
}

function createarrow(){
  var arrow;
  //creating the arrow
  arrow = createSprite(360,mouseY,30,30);
  arrow.addImage("arrow_1",arrowImg);  
  arrow.velocityX=-4;
  arrow.scale=0.25;
  arrow.lifetime=100;
  
  //adding the arrow to a group
  arrow_G .add(arrow);
}


function blueballoon(){ 
  
  //creating the blue balloons
  
  
  var blueb 
  
  if(frameCount%20==0){
    blueb= createSprite(0,Math.round(random(12,360)),20,20);
    blueb.addImage("balloon1",BBimg);
    blueb.scale=0.1;
    blueb.velocityX=3;
    blueb.lifetime=150;
    //adding the balloon to a group
    bbgroup.add(blueb);
  }
}

function redballoon(){ 
  
  
  //creating the red balloons
  
  
  var redb 
  
  if(frameCount%50==0){
    redb= createSprite(0,Math.round(random(12,360)),20,20);
    redb.addImage("balloon2",RBimg);
    redb.scale=0.1;
    redb.velocityX=3;
    redb.lifetime=150;
    //adding the balloon to a group
    rbgroup.add(redb);
  }
}

function greenballoon(){
  
  
  //creating the green balloons
  
  
  var greenb 
  
  if(frameCount%40==0){
    greenb= createSprite(0,Math.round(random(12,360)),20,20);
    greenb.addImage("balloon3",GBimg);
    greenb.scale=0.1;
    greenb.velocityX=3;
    greenb.lifetime=150;
    //adding the balloon to a group
    gbgroup.add(greenb);
  } 
}

function pinkballoon(){
  
  
  //creating the pink balloons
  
  
  var pinkb;
  
  if(frameCount%30==0){
    pinkb= createSprite(0,Math.round(random(12,360)),20,20);
    pinkb.addImage("balloon4",PBimg);
    pinkb.scale=0.1;
    pinkb.velocityX=3;
    pinkb.lifetime=150;
    pinkb.scale=1.5;
    //adding the balloon to a group
    pbgroup.add(pinkb);
  } 
    
}
 

