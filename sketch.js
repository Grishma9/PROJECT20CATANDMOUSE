  var gardenImage,cat,mouse,catImage,mouseImage1,catImage2,catImage3;
  var catImage4,mouseImage2,mouseImage3,mouseImage4;
  function preload() {
  catImage=loadAnimation("cat1.png");
  catImage2=loadAnimation("cat2.png");
  catImage3=loadAnimation("cat3.png");
  catImage4=loadAnimation("cat4.png");
  gardenImage=loadImage("garden.png");
  mouseImage1=loadAnimation("mouse1.png");
  mouseImage2=loadAnimation("mouse2.png");
  mouseImage3=loadAnimation("mouse3.png");
  mouseImage4=loadAnimation("mouse4.png");
  }

  function setup(){
      createCanvas(700,600);
      
  cat = createSprite(600,500,20,20);
  cat.addAnimation("cat1.png",catImage);
  cat.scale=0.1;
  mouse = createSprite(200,500,20,20);
  mouse.addAnimation("mouse1.png",mouseImage1);
  mouse.scale=0.1;
  }

  function draw() {
    
    background(gardenImage);
      if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("cat4.png",catImage4);
        cat.changeAnimation("cat4.png");
      mouse.addAnimation("mouse4.png",mouseImage4);
        mouse.changeAnimation("mouse4.png");
      }
    
      drawSprites();
  }


  function keyPressed(){
    if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("cat2.png",catImage2);
      cat.changeAnimation("cat2.png");
      
    mouse.addAnimation("mouse3.png",mouseImage3);
      
      mouse.changeAnimation("mouse3.png");
      mouse.frameDelay=25;
    }
    


}
