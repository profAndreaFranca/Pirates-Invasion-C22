const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world,ground;

var bgimg;
var ground,tower,towerImg;


function preload() {
  bgimg = loadImage("./assets/background.gif");

  towerImg = loadImage("./assets/tower.png")

}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }

  //criando o solo
  ground = Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);

  //criando a torre
  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);
  
  
}

function draw() {
  background(189);
  image(bgimg,0,0,1200,600);
 
  Engine.update(engine);
  
  //exbindo o solo na tela
  rect(ground.position.x,ground.position.y,width*2,1);

  push(); //inicia uma nova configuração
  //exibindo a torre na tela
  imageMode(CENTER);
  //rect(tower.position.x,tower.position.y,160,310);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop(); //finaliza a nova configuração
   
}
