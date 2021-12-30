const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,log1,pig1,ground,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,height,1200,20)
    box1=new Box(700,300,70,70)
    pig1=new Pig(800,350)
    log1= new Log(800,180,300,PI/2)
    bird=new Bird(100,100)  

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    pig1.display();
    log1.display();
    bird.display();
    ground.display();
}