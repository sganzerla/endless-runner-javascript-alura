let imagemCenario;
let imagemPersonagem;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(imagemCenario); 
  
  image(imagemPersonagem, 0, height - 135, 110, 135, 0, 0, 220, 270);
}