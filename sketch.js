function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function touchStarted() {
  personagem.pula();
  somDoPulo.play();
}

function draw() {
  cenas[cenaAtual].draw();
}