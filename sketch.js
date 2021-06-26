var s1img,s2img;
var gameState=1;
var play;
var hunterimg,hunter;
var bulletimg,bullet,BulletGroup;
var NpcGroup,lionimg,lion,bearimg,tigerimg,tribeimg;
var smokeimg,smoke;
var invisibleground;
var edges;
function preload(){
  s1img = loadImage("images/s1.jpg")
  s2img = loadImage("images/s2.jpg")
  hunterimg = loadAnimation("images/h4.png","images/h6.png","images/h3.png","images/h2.png")
  bulletimg = loadImage("images/bullet.png")
  smokeimg = loadImage("images/smoke1.png")
  lionimg = loadImage("images/a2.png")
  tigerimg = loadImage("images/a1.png")
  bearimg = loadImage("images/a3.png")
  tribeimg = loadImage("images/t1.png")
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-200);
  play=createButton("Next");
  hunter=createSprite(100,displayHeight-400,50,50) 
  hunter.addAnimation("a",hunterimg)
  hunter.visible=false 
  //hunter.debug=true;
  invisibleground=createSprite(displayWidth/2,displayHeight-270,displayWidth,30);
  invisibleground.visible = true ;
  edges=createEdgeSprites();
  BulletGroup= new Group ()
  NpcGroup= new Group()
 // score=0;
}

function draw() {
  if(gameState===1){
    background(s1img);
    fill("yellow")
    textSize(20)  
    text("You are Shikari Shambu ,who is a tresure hunter,who as found the most of the tresure in the world.Now he has found some evidence, ",100,100);
    text("that tells that there is a tresure in an alein planet outside the world.",100,130)
    text("The controls for the game is :",100,170)
    text("1: Press 'W key' for forward move",200,200)
    text("2: Press 'Space key'for shooting bullets",200,240)
    play.position(displayWidth-200,displayHeight-300);
    play.mousePressed(()=>{
      play.hide();
      gameState=2
    
    })
  }
  if(gameState===2){
    background(s2img);  
    //create player
    hunter.visible=true
    //call spawn obstacles function
    spawnNpc();
    if(keyDown("W")){
      hunter.x+=20
    }
    if(keyWentDown("Space")){
      spawnBullets();
    }
    text("Score=",50,50)
   // if(BulletGroup.isTouching(NpcGroup)){
     // NpcGroup.destroyEach();
     //BulletGroup.destroyEach();
     //score+=20
    //}
    drawSprites();
  }
 
}
function spawnBullets(){
  bullet=createSprite(hunter.x+120,hunter.y,50,50);
      bullet.addImage(bulletimg)
      bullet.scale=0.1;
      bullet.velocityX=10;
      bullet.lifetime=displayWidth/10;
BulletGroup.add(bullet);
 smoke=createSprite(hunter.x+90,hunter.y-10,50,50);
 smoke.addImage(smokeimg);
 smoke.scale=0.1
}

function spawnNpc(){
  if (frameCount % 100 === 0){
    var tig=createSprite(displayWidth-100,0,50,50);
    tig.scale=0.4
    var lion=createSprite(displayWidth-100,0,50,50);
    lion.scale=0.2
    var bear=createSprite(displayWidth-100,0,50,50);
    bear.scale=0.3
    var tri=createSprite(displayWidth-100,0,50,50);
    tri.scale=0.6
    tig.addImage(tigerimg)
    lion.addImage(lionimg)
    bear.addImage(bearimg)
    tri.addImage(tribeimg)
    tig.visible=false
    lion.visible=false
    bear.visible=false
    tri.visible=false
    
    //Npc.velocityY=4;
    //Npc.debug=true;
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1:tig.visible=true;
      tig.velocityY=4;
      tig.velocityX=-2;
      break;
      case 2:lion.visible=true;
      lion.velocityY=4;
      break;
      case 3:bear.visible=true;
      bear.velocityY=4;
      break;
      case 4:tri.visible=true;
      tri.velocityY=4;
      break;
    }
   // tig.bounceOff(edges[3])
    //lion.bounceOff(edges[3])
    
    //tig.collide(edges[3])
   if(tig.isTouching(invisibleground)){
      tig.velocityY=0;
      tig.velocityX=-3;
    }
    /*switch(rand){
      case 1:Npc.addImage(lionimg);
            Npc.scale=0.2;
             break;
      case 2:Npc.addImage(bearimg);
            Npc.scale=0.3;
             break;
      case 3:Npc.addImage(tigerimg);
              Npc.scale=0.4
             break;
      case 4:Npc.addImage(tribeimg);
              Npc.scale=0.6;
             break;
      default: break;                     
    }*/
    /*NpcGroup.add(Npc)
   if(invisibleground.isTouching(NpcGroup)){
      //Npc.velocityY=0;
      //Npc.velocityX=-3;
      NpcGroup.setVelocityXEach=-3;
      NpcGroup.setVelocityYEach=0;
    }*/
    //Npc.bounceOff(invisibleground)
    
   
    
    }
  }