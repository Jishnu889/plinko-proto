const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;
//const Constraint = Matter.Constraint
//const Render = Matter.Render
var engine, world
var ground1
var division1=[]
var plinko1=[]

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  ground1= new Ground(0,775,1000,25);
  //Engine.run(engine);
  for(var x=0;x<801;x=x+60)
  {
    division1.push(new Divisions(x,525,20,250))
  }
  for(var z=75;z<801;z=z+60)
  {
    plinko1.push(new Plinko(z,75,20))
  }
}

function draw() {
  Engine.update(engine);
  background(0);  
  ground1.display();
  for(var x=0;x<=division1.length;x=x+1)
  {
    division1[x].display();
  }
  for(var z=0;z<=plinko1.length;z=z+1)
  {
    plinko1[z].display();
  }
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
}