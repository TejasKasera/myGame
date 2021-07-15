function nonscroll(){
	window.scrollTo(0,0);
  }
  
window.addEventListener("scroll",nonscroll);
  
var man1;
var man2;
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var tappu;
var groundIMG, ground;
var backIMG, backg;
var g;
var time;
var obstacle1;
var obstacle2;
var tappuIMG, tappu;
var time = 0;
var plate1;

function preload()
{
    backIMG = loadImage("images/background.jpg");
	tappuIMG = loadImage("images/mario1.png");
	tappu1IMG = loadImage("images/mario2.png");
	tappu2IMG = loadImage("images/leftM.png");
	tappu3IMG = loadImage("images/mm.png");
	obst1IMG = loadImage("images/smallobstacle.png");
	obst2IMG = loadImage("images/obstacle2.png");
	block1IMG = loadImage("images/block1.png");
	block2IMG = loadImage("images/block2.png");
	tappu4IMG = loadImage("images/underM.png")
	coin1IMG = loadImage("images/coin1.png")
}

function setup() {
	createCanvas(1400,700);


	engine = Engine.create();
	world = engine.world;

	

	

	
	backg = createSprite(650,310,500,150);
	backg.addImage(backIMG);
	backg.scale = 1.9;

	g = new Ground(400,630,2000,150);

	plate1 = new Platform(400,580,500,100); 


	Engine.run(engine);

  man1 = createSprite(100,20,20,20);
  man1.shapeColor = "black"
  man1.velocityX = 10;
  man1.visible = false;

  man2 = createSprite(105,20,20,20);
  man2.shapeColor = "black"
  man2.visible = false;

  tappu = createSprite(100,570,30,30);
  tappu.addImage(tappuIMG);
  tappu.scale = 2;

  p = createSprite(150,660,3050,10);
  p.visible = false;

  block1 = createSprite(500,400,80,50);
  block1.addImage(block1IMG);
  block1.scale = 0.18;


  block2 = createSprite(560,400,10,20);
  block2.addImage(block2IMG);
  block2.scale = 0.15;


  block3 = createSprite(620,400,10,20);
  block3.addImage(block1IMG);
  block3.scale = 0.18;


  block4 = createSprite(680,400,10,20);
  block4.addImage(block2IMG);
  block4.scale = 0.15;

  block5 = createSprite(740,400,10,20);
  block5.addImage(block1IMG);
  block5.scale = 0.18;

    coin = createSprite(560,340,30,30);
	coin.addImage(coin1IMG); 
	coin.scale = 0.2;
	coin.visible = false;
  
}


function draw() {
	background("purple")
	Engine.update(engine);
    g.display();	
	plate1.display();

	if(tappu.isTouching(p)){
		tappu.velocityY = -1; 
	}

	if(tappu.isTouching(block1)){
		block1.visible = false;
	}

	

	if(tappu.isTouching(block2)){
		coin.visible = true
	}

	if(tappu.isTouching(coin)){
		coin.visible = false;
	}

	if(tappu.isTouching(block3)){
		block3.visible = false;
	}

	if(tappu.isTouching(block5)){
		block5.visible = false;
	}


	if(man1.isTouching(man2)){
		man1.velocityX = 0;
		textSize(30);
		fill("white");
		text("Time : 300", 1000,40);
		text("Score : 000000", 100,40);
		text("Coin x 00", 600,40);
	}

	if(keyWentDown(RIGHT_ARROW)){
		tappu.addImage(tappu1IMG);
		tappu.scale = 2;
		tappu.velocityX = 5;
		backg.velocityX = -5;
	  }
  
	  if(keyWentUp(RIGHT_ARROW)){
		tappu.addImage(tappuIMG);
		tappu.scale = 2;
		tappu.velocityX = 0;
		backg.velocityX = 0;
	  }

	  if(keyWentDown(LEFT_ARROW)){
		tappu.addImage(tappu3IMG);
		tappu.scale = 2;
		tappu.velocityX = -5;
		backg.velocityX = 5;
	  }


	  if(keyWentUp(LEFT_ARROW)){
		tappu.addImage(tappu2IMG);
         tappu.velocityX = 0;
		 tappu.scale = 2;
		 backg.velocityX = 0;
     }





	 if(keyWentDown(DOWN_ARROW)){
		tappu.addImage(tappu4IMG);
		tappu.scale = 2;
	  }


	  if(keyWentUp(DOWN_ARROW)){
		tappu.addImage(tappuIMG);
		 tappu.scale = 2;
     }



	  
		tappu.velocityY = tappu.velocityY + 0.8;

	  //jump when the space key is pressed
	  if(keyDown("space")&& tappu.y >=  560) {
        tappu.velocityY = -21;
	  }       

	   

		

  drawSprites();
 
}


function collide(block,sprite){
     if(block1!= null){
		 var d = distance(block1.position.x,block2.position.y,sprite.position.x,sprite.position.y);
	     if(d=>50){
            world.remove(engine.world,block1);
			block1 = null;
			return true;
		 }else{
			return false;
		 }
		}

		
}



