const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var polygon1, slingShot;
var ground1, ground2; 
//ground 1 blocks
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
// ground 2 blocks 
var block11, block12, block13, block14, block15, block16 ;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   polygon1 = new Polygon(200, 50);
   
   ground1 = new Ground(850, 210, 250, 2) 
   ground2 = new Ground(550, 350, 250, 2) 
// level 4 blocks for ground 2 
   block1 = new box(550,355,30,40)
   block2 = new box(560,355,30,40)
   block3 = new box(570,355,30,40)
   block4 = new box(580,355,30,40)
// Level 3 blocks for ground 2
   block5 = new box(555,365,30,40)
   block6 = new box(562,365,30,40)
   block7 = new box(569,365,30,40)
// Level 2 blocks for ground 2
   block8 = new box(55,375,30,40)
   block9 = new box(560,375,30,40)
// Level 1 blocks for ground 2
   block10 = new box(565,385,30,40)

 //  Level 3 for ground 1 
   block11 = new box(850,215,30,40)
   block12 = new box(860,215,30,40)
   block13 = new box(870,215,30,40)
// Level 2 blocks for ground 1
   block14 = new box(855,225,30,40)
   block15= new box(865,225,30,40)
// Level 1 blocks for ground 1
   block16 = new box(860,235,30,40)

    
    slingShot = new SlingShot(polygon1.body,{x:200, y:50});
}

function draw(){
        background("rgb(147,255,162)");
        Engine.update(engine);
        strokeWeight(4);
        polygon1.display();
        slingShot.display();
        ground1.display();
        ground2.display();
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
    

    }

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();

}

