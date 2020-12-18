function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground=new Ground(480,30,1200,50)
  division=new Division()
}
var partices=[];
var plinkos=[];
var division[];
var divisionHeight=300;
var ground
function draw() {
  background(255,255,255);  
  drawSprites();

  for(var k=0;>=width;k=k+80){
division.push(new Division(k,height-divisionheight/2,10,divisionheight));

  }
  for(var j=40;j<=width,j=j+50){

    plinkos.push(new plinkos(j,75))
  }

for(var j=15<=width-10;j=j+50){

plinkos.push(new plinkos(j,175))

}






  ground.display()
  division.display()

}
