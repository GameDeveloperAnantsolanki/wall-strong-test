var bullet,wall; 
var speed,weight,thickness;
var Lbullet,Lwall;

function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 10);


 wall = createSprite(1200,200,thickness,height/2);

 speed = random(223,325);
 weight = random(30,52);
 thickness = random(22,83);

}



function draw() {
  background("black");  
  bullet.velocityX = speed;
  hascollided(bullet,wall);
  
  
  drawSprites();

hello();

}


function hascollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;


  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
    return false;

}

function hello(){
  if (hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10) {
    wall.shapeColor = color(255,0,0);
  }

 if (damage<10) {
   wall.shapeColor = color(0,255,0);
 }

}}