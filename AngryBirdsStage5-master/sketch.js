const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
//var platform;
var bird;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(100, 305, 300, 5);

    box1 = new Box(530,320,70,70);
    box2 = new Box(600,320,70,70);

    box3 = new Box(670,320,70,70);
    box4 = new Box(740,320,70,70);
    box5 = new Box(810,320,70,70);
    box6 = new Box(600,100,70,70);
    box7 = new Box(670,100,70,70);
    box8 = new Box(740,100,70,70);
    box9 = new Box(670,100,70,70);
    bird = new Bird(200,50);
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    bird.display();
    //platform.display();
    //log6.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}