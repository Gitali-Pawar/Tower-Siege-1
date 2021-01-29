const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint;
var engine,world;

var holder,ground,ball;
var stand1,stand2;
var ball;
var slingShot;
var polygoneImage;

function preload(){

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(100,450);
    ground = new Ground();
    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(750,20,200,10);

    //first level
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(490,275,30,40);

 //second level
    block9 = new Block(310,230,30,40);
    block10 = new Block(340,230,30,40);
    block11 = new Block(370,230,30,40);
    block12 = new Block(400,230,30,40);
    block13 = new Block(430,230,30,40);
    block14 = new Block(460,230,30,40);

 //third level
    block15 = new Block(340,195,30,40);
    block16 = new Block(370,195,30,40);
    block17 = new Block(400,195,30,40);
    block18 = new Block(430,195,30,40);

 //forth level
    block19 = new Block(370,155,30,40);
    block20 = new Block(400,155,30,40);

// fifth level
    block21 = new Block(380,155,30,40);

    //another tower
    //first level
    blocks1 = new Block(640,175,30,40);
    blocks1 = new Block(670,175,30,40);
    blocks1 = new Block(700,175,30,40);
    blocks1 = new Block(730,175,30,40);
    blocks1 = new Block(760,175,30,40);

 // second level
    blocks1 = new Block(670,135,30,40);
    blocks1 = new Block(700,135,30,40);
    blocks1 = new Block(730,135,30,40);

 // top
    blocks1 = new Block(700,95,30,40);

     ball = Bodies.circle(50,200,20);
     World.add(world,ball);

     slingShot = new Slingshot(this.ball,{x:200,y:200});
}

function draw(){
background("brown");
Engine.update(engine);

strokeWeight(2);
stroke(10);

stand1.display();
stand2.display();

//tower 1
stroke(10);
fill(0)
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();

stroke(10);
fill("pink")
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

stroke(10);
fill("lightblue")
block15.display();
block16.display();
block17.display();
block18.display();


stroke(10);
fill("yellow")
block19.display();
block20.display();

stroke(10);
fill("lightgreen")
block21.display();

//tower2

stroke(10);
fill("pink")
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();

stroke(10);
fill("lightgreen")
blocks6.display();
blocks7=display();
blocks8.display();

stroke(10);
fill("lightblue")
blocks9.display();

text("Drag the Hexagonal Stone and Release it ,to launch it towards the blocks",600,200);


//ecllipseMode(RADIUS);
ecllipse(ball.position.x,ball.position.y,20);
slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    slingShot.fly();
}