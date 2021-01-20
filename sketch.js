var jerry,tom;

function preload() {
 
    bgImg=loadImage("images/garden.png")
    tomImg1=loadAnimation("images/tomOne.png")
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3=loadAnimation("images/tomFour.png")

    jerryImg1=loadAnimation("images/jerryOne.png")
    jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png")
}


function setup(){
    createCanvas(1000,800);
     tom =createSprite(850,600)
    tom.addAnimation("tom_sleeping",tomImg1);
    tom.scale=0.20 
    jerry =createSprite(200,600)
    jerry.addAnimation("jerry_standing",jerryImg1);
    jerry.scale=0.15

}

function draw() {

    background(bgImg);
    
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){

        tom.velocityX=0;
        tom.addAnimation("tom",tomImg3);
        tom.changeAnimation("tom"); 
        tom.x=300;
        jerry.addAnimation("jerry", jerryImg3);
        jerry.changeAnimation("jerry"); 

    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){

       tom.velocityX = -5; 
        tom.addAnimation("tom_running", tomImg2);
        tom.changeAnimation("tom_running"); 
       
        jerry.addAnimation("jerry_running", jerryImg2);
        jerry.changeAnimation("jerry_running"); 
       
        
    }
    


}
