const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var bolinha
var ballimage
var ballgroup
var arco
var arcoimage
var flecha
var grupoflecha

function preload() {
  backgroundImg = loadImage("./assets/floresta.jpg");
  ballimage= loadImage("./assets/bola.png")
  arcoimage= loadImage("./assets/arco.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  arco= createSprite(200,500, 40,40)
  arco.addImage(arcoimage)
  arco.scale= 0.4
  ballgroup= new Group()
  grupoflecha= new Group()
}
function draw() {
  background(backgroundImg);
  obstaculo()
  arco.y = mouseY
  if (keyWentDown("space")) {
    flecha= createSprite(arco.x +50, arco.y -28, 70,10)
    flecha.velocityX= 20
    grupoflecha.add(flecha)
  }
  if (ballgroup.isTouching(grupoflecha)) {
    for (var i = 0; i < ballgroup.length; i++) {
     if (ballgroup[i].isTouching(grupoflecha)) {
      ballgroup[i].destroy()
      grupoflecha.destroyEach()
     }
    }
  }

  drawSprites()
  Engine.update(engine);
}

function obstaculo(){
if (frameCount%25==0) {
  bolinha= createSprite(random(500, 1100), random(100, 500), 40,40)
  bolinha.addImage(ballimage)
  bolinha.scale= 0.5
  bolinha.velocityX= random(-8, 8)
  ballgroup.add(bolinha)
}

}
