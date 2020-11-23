
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var ground1,ground2,ground3;
var poly;
var constrain;

function setup() {
  createCanvas(1100,600);
  engine = Engine.create();
	world = engine.world;
  // stroke(255)
  push();
  fill("black");
  ground1 = new Ground(555,580,1100,20);
  pop();

  push();
  fill("brown");
  ground2 = new Ground(510,420,200,15);
  ground3 = new Ground(900,230,200,15);
  pop();
// stack1 blocks
  // layer1

   fill("red");
   block1 = new Box(228,195,35,45);
   block2 = new Box(247,195,35,45);
   block3 = new Box(266,195,35,45);
   block4 = new Box(285,195,35,45);
  
  //  layer2

   fill("blue");
   block5 = new Box(237,172,35,45);
   block6 = new Box(256,172,35,45);
   block7 = new Box(275,172,35,45);

//  layer3
   
   fill("pink");
   block8 = new Box(246,149,35,45)
   block9 = new Box(265,149,35,45);
  
   //  layer4
   push();
   fill("yellow");
   block10 = new Box(255,125,35,45);
   pop();

  // stack2 blocks
  //  layer1
  push();
   fill("red");
   block11 = new Box(420,100,35,45);  
   block12 = new Box(440,100,35,45);
   block13 = new Box(460,100,35,45);
   block14 = new Box(480,100,35,45);
   pop();
  //  layer2
  push();
   fill("blue");
   block15 = new Box(430,77,35,45);
   block16 = new Box(450,77,35,45);
   block17 = new Box(470,77,35,45);
   pop();
  //  layer3
  push();
   fill("pink");
  block18 = new Box(440,54,35,45);
  block19 = new Box(460,54,35,45);
  pop();
  // layer4
  push();
  fill("yellow");
  block20 = new Box(450,31,35,45);
  pop();

  poly = new Hexa(20,200,15);

  constrain = new Const(poly.body,{x:40,y:250});
  Engine.run(engine);

}

function draw() {
 background(0);  
 ground1.display();
 ground2.display();
 ground3.display();

//  block1.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();

 poly.display();
 
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}
  function mouseReleased(){
    constrain.fly()
}