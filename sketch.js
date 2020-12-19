// 4,5,3,13,12,9
var boy2,boy2Image;
var boy, boyImage;
var background,bgg;
var bubble1,bubble1Image;
var bubble2,bubble2Image;
var bubble3,bubble3Image;
var bubble4,bubble4Image;
var bubble5,bubble5Image;
var bubble6,bubble6Image;
var bubble7,bubble7Image;
var bubble8,bubble8Image;
var bubble9,bubble9Image;
var bubble10,bubble10Image;
var bubble11,bubble11Image;
var bubble12,bubble12Image;
var bubble13,bubble13Image;
var bubble14,bubble14Image;
var al1,al1Image;
var al2,al2Image;
var al3,al3Image;
var al4,al4Image;
var redbg,redbgImage;
var Text1,Text1Image;
var kogaI,im1;
var mess,messImage;
var Text2,Text2Image;
var togaI,im2;
var fogaI,im3;
var Text3,Text3Image;
var skip,skipImage;
var skip1,skip1Image;
var logaI,im4;
var Text4,Text4Image;
var start1,start1Image;
var back,backImage;
var gunUp,gunDown,gunRight,gunLeft,gun;
var AlienGroup,al12;
var image1,image2;
var image3,image4;

function preload(){
//It Is Use to loadImages For Characters.
background1=loadImage("bg.jpg");
boy2Image=loadImage("Scienstist.png");
boyImage=loadImage("boy.png");
bubble1Image=loadImage("bubble.png");
bubble2Image=loadImage("bubble2.png");
bubble3Image=loadImage("bubble3.png");
bubble4Image=loadImage("bubble4.png");
bubble5Image=loadImage("bubble5.png");
bubble6Image=loadImage("bubble6.png");
bubble7Image=loadImage("bubble7.png");
bubble8Image=loadImage("bubble8.png");
bubble9Image=loadImage("box1.png");
bubble10Image=loadImage("box2.png");
bubble11Image=loadImage("box3.png");
bubble12Image=loadImage("box4.png");
bubble13Image=loadImage("box5.png")
al1Image=loadImage("mons1.png");
al2Image=loadImage("mons2.png");
al3Image=loadImage("mons.png");
al4Image=loadImage("mons3.png");
redbgImage=loadImage("white.png");
Text1Image=loadImage("koga.png");
im1=loadImage("kogaI.png");
messImage=loadImage("mess.png");
Text2Image=loadImage("togaI.png");
im2=loadImage("toga.png");
skipImage=loadImage("skip.png");
im3=loadImage("foga.png");
Text3Image=loadImage("FogaI.png");
skip1Image=loadImage("skip1.png");
Text4Image=loadImage("logaI.png");
im4=loadImage("loga.png");
start1Image=loadImage("Start1.png");
backImage=loadImage("back.jpg")
gunUp=loadImage("gunU.png");
gunDown=loadImage("gunD.png");
gunLeft=loadImage("gunL.png");
gunRight=loadImage("gunR.png")
image1=loadImage("mons.png");
image2=loadImage("mons3.png");
image3=loadImage("mons1.png");
image4=loadImage("mons2.png");

}

function setup() {
  createCanvas(900,900);

  //Creates the Background
  bgg=createSprite(450,450,900,900);
  bgg.addImage("back",background1)
  bgg.scale=5.8

  //Creates the boy player.
  boy=createSprite(150, 500, 50, 50);
  boy.scale=0.9;
  boy.addImage("boy1",boyImage)
 
  //Creates the engineer
  boy2=createSprite(650,500,20,20)
  boy2.addImage("science",boy2Image)

  //Creates the Speech Bubble.
 bubble1=createSprite(500,400,4,0)
bubble1.addImage("bubble",bubble1Image)
bubble1.scale=1.2;

bubble2=createSprite(300,400,4,0)
bubble2.addImage("bubble2",bubble2Image)
bubble2.scale=1.2
bubble2.visible=false;

bubble3=createSprite(500,400,040,40);
bubble3.addImage("bubble3",bubble3Image)
bubble3.visible=false;
bubble3.scale=1.2;

bubble4=createSprite(300,400,40,40)
bubble4.addImage("bubble4",bubble4Image)
bubble4.visible=false
bubble4.scale=1.2;

bubble5=createSprite(500,400,6,6)
bubble5.addImage("bubble5",bubble5Image)
bubble5.visible=false;
bubble5.scale=1.2;


bubble6=createSprite(300,400,6,6)
bubble6.addImage("bubble6",bubble6Image)
bubble6.visible=false;
bubble6.scale=1.2;

bubble7=createSprite(500,400,6,6)
bubble7.addImage("bubble7",bubble7Image)
bubble7.visible=false;
bubble7.scale=1.2;

bubble8=createSprite(500,400,6,6)
bubble8.addImage("bubble8",bubble8Image)
bubble8.visible=false;
bubble8.scale=1.2;

bubble9=createSprite(400,100,6,6)
bubble9.addImage("bubble9",bubble9Image)
bubble9.visible=false;
bubble9.scale=1.2;


bubble10=createSprite(600,700,6,6)
bubble10.addImage("bubble10",bubble10Image)
bubble10.visible=false;
bubble10.scale=0.8;


bubble11=createSprite(200,700,6,6)
bubble11.addImage("bubble11",bubble11Image)
bubble11.visible=false;
bubble11.scale=0.8;


bubble12=createSprite(600,200,6,6)
bubble12.addImage("bubble12",bubble12Image)
bubble12.visible=false;
bubble12.scale=0.8;


bubble13=createSprite(200,200,6,6)
bubble13.addImage("bubble13",bubble13Image)
bubble13.visible=false;
bubble13.scale=1.2

mess=createSprite(300,500,5,5);
mess.addImage("mess1",messImage)
mess.visible=false;

skip=createSprite(300,500,5,5);
skip.addImage("skip1",skipImage)
skip.visible=false;

skip1=createSprite(300,400,7,7);
skip1.addImage("skip2",skip1Image)
skip1.visible=false;

start1=createSprite(500,580,5,5);
start1.addImage("Start1",start1Image);
start1.visible=false;

AlienGroup= createGroup();

gun=createSprite(boy.x,boy.y+50,6,6);
gun.addImage("Right",gunRight);
gun.addImage("Left",gunLeft);
gun.addImage("Up",gunUp);
gun.addImage("Down",gunDown);
gun.scale=0.4;

//Variables Used By The Scientist To Explain About the Different Aliens.
al1=createSprite(200,200,20,20);
al1.addImage("al1I",al1Image)
al1.visible=false;

Text1=createSprite(600,200,4,4);
Text1.addImage("text1",Text1Image)
Text1.visible=false;

kogaI=createSprite(550,400,4,4)
kogaI.addImage("koga1",im1)
kogaI.scale=1.8;
kogaI.visible=false;

togaI=createSprite(550,200,4,4);
togaI.addImage("toga1",im2)
togaI.scale=1.0;
togaI.visible=false;

al2=createSprite(200,200,20,20)
al2.addImage("al2I",al2Image)
al2.visible=false;

Text2=createSprite(650,400,4,5)
Text2.addImage("text2",Text2Image);
Text2.visible=false;

al3=createSprite(200,200,3,3)
al3.addImage("al3I",al3Image)
al3.visible=false;

fogaI=createSprite(550,200,4,4)
fogaI.addImage("foga1",im3)
fogaI.visible=false;

Text3=createSprite(650,400,4,4);
Text3.addImage("text3",Text3Image);
Text3.visible=false;

al4=createSprite(200,200,3,3)
  al4.addImage("al4I",al4Image)
  al4.visible=false;

  Text4=createSprite(650,400,3,3)
Text4.addImage("text4",Text4Image)
Text4.visible=false

logaI=createSprite(550,200,3,3)
logaI.addImage("loga1",im4);
logaI.visible=false;
  
}


function draw() {
  boy.velocityX=0;
  boy.velocityY=0;

  gun.velocityX=0;
  gun.velocityY=0

  //Use to Destroy The Speech Bubble
if(frameCount===60){
  bubble1.destroy();
}
boy.depth=boy.depth+1;
boy2.depth=boy2.depth+1;
al1.depth=al1.depth+1;
Text1.depth=Text1.depth+1;
kogaI.depth=kogaI.depth+1;
mess.depth=mess.depth+1;
al2.depth=al2.depth+1;
Text2.depth=Text2.depth+1;
togaI.depth=togaI.depth+1;
skip.depth=skip.depth+1;
al3.depth=al3.depth+1;
Text3.depth=Text3.depth+1;
fogaI.depth=fogaI.depth+1;
skip1.depth=skip1.depth+1;
al4.depth=al4.depth+1;
logaI.depth=logaI.depth+1;
Text4.depth=Text4.depth+1;
start1.depth=start1.depth+1;
 gun.depth=gun.depth+1;


if(frameCount===65){
  bubble2.visible=true
}

if(frameCount===130){
  bubble2.destroy();
}

if(frameCount==135){
  bubble3.visible=true;
}

if(frameCount===190){
  bubble3.destroy();
}

if (frameCount===200){
  bubble4.visible=true;
}

if(frameCount===260){
  bubble4.destroy();
}

if(frameCount===265){
  bubble5.visible=true;
  }

  if(frameCount===320){
    bubble5.destroy();
  }

  if(frameCount===325){
bubble6.visible=true;
  }

  if(frameCount===390){
    bubble6.destroy();
  }

  if(frameCount===395){
    bubble7.visible=true;
}

if(frameCount===480){
  bubble7.destroy();
}

if(frameCount===490){
bubble8.visible=true;
}

if(frameCount===520){
  bubble8.destroy();
}

if(frameCount===530){
  boy2.velocityX=4
}

if(frameCount===535){
  bubble9.visible=true
}

if(frameCount===540){
  bubble10.visible=true
}

if(frameCount===541){
  bubble11.visible=true
}

if(frameCount===542){
  bubble12.visible=true
}

if(frameCount===543){
  bubble13.visible=true
}

if(boy.x>900){
  bubble13.destroy() 
}

if(boy.x>900){
  bubble12.destroy() 
}

if(boy.x>900){
  bubble11.destroy() 
}

if(boy.x>900){
  bubble10.destroy() 
}

if(boy.x>900){
  bubble9.destroy() 
}

if(keyDown("Enter")){
  kogaI.destroy();
  al1.destroy();
  Text1.destroy();
  mess.destroy();
  al2.visible=true;
  Text2.visible=true;
  togaI.visible=true;
  skip.visible=true;
 
}

if(mousePressedOver(skip)){
  al2.destroy();
  Text2.destroy();
  togaI.destroy();
  al3.visible=true;
  fogaI.visible=true;
  Text3.visible=true;
  skip1.visible=true;
 skip.destroy();
  }

if(mousePressedOver(skip1)){
  al3.destroy();
  Text3.destroy();
  fogaI.destroy();
  al4.visible=true;
  logaI.visible=true;
  Text4.visible=true;
  skip1.destroy();
  start1.visible=true;
}

if(mousePressedOver(start1)){
  boy2.destroy();
  logaI.destroy();
  Text4.destroy();
  al4.destroy();
  redbg.destroy();
start1.destroy();

bgg.destroy();
back=createSprite(450,450,900,900)
back.addImage("back1",backImage)
back.scale=5.0;
boy.scale=0.8;
}


if(boy.x>900){
  al1.visible=true;
}

if(boy.x>900){
redbg=createSprite(450,450,900,900)
redbg.addImage("redbg",redbgImage);
redbg.scale=4.0

}
if(boy.x>900)
{
  boy.x=150
  boy.y=700
  boy2.velocityX=0;
  boy2.x=800;
  boy2.y=500;
  gun.x=boy.x
  gun.y=boy.y+30

  Text1.visible=true;
  kogaI.visible=true;
  mess.visible=true;
}
if(boy.scale===0.8){
  SpawnAliens();
  SpawnAliens1();
}



background(0);  
if (keyDown("w")) {
  boy.velocityY=-10;
  boy.velocityX=0;
}
if (keyDown("s")) {
boy.velocityY=10;
boy.velocityX=0;
}

if (keyDown("a")) {
 boy.velocityX=-10;
boy.velocityY=0;
}
if (keyDown("d")){
 boy.velocityX=10;
 boy.velocityY=0;
}

if (keyDown("w")) {
  gun.velocityY=-10;
  gun.velocityX=0;
}
if (keyDown("s")) {
gun.velocityY=10;
gun.velocityX=0;
}

if (keyDown("a")) {
 gun.velocityX=-10;
gun.velocityY=0;
}
if (keyDown("d")){
 gun.velocityX=10;
 gun.velocityY=0;
}

  drawSprites();
}

function SpawnAliens(){
  //Call This In mousePresssedOver(start1)
  if(frameCount % 60===0){
     al12=createSprite(900,Math.round(random(50,850)),50,5)
   al12.depth=al12.depth+2;
     al12.scale=0.6;
    al12.velocityX=-5;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: al12.addImage(image1);
              break;
      case 2: al12.addImage(image2);
              break;
    
      default: break;
  }
  }
// AlienGroup.add(al12)
}

function SpawnAliens1(){
  //Call This In mousePresssedOver(start1)
  if(frameCount % 90===0){
     al34=createSprite(-1,Math.round(random(50,850)),50,5)
   al34.depth=al34.depth+2;
     al34.scale=0.8;
    al34.velocityX=5;
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: al34.addImage(image3);
              break;
      case 2: al34.addImage(image4);
              break;
    
      default: break;
  }
  }
// AlienGroup.add(al34)
}
