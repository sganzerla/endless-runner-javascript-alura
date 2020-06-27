function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');

  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial()
  jogo = new Jogo()
  cenas = {
    telaInicial,
    jogo
  }
  jogo.setup()
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)

  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  // if(cenaAtual === 'jogo') {
  //   jogo.draw()
  // }
  cenas[cenaAtual].draw()
}