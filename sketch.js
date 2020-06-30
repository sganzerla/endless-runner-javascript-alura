function preload() {
  imagemCenario = loadImage('imagens/cenario/praia.png');
  imagemTelaInicial = loadImage('imagens/assets/tela-inicial.jpg');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/dora-walk1.png');
  imagemInimigoBoi = loadImage('imagens/inimigos/boi.png');
  imagemInimigoHomemDinamite = loadImage('imagens/inimigos/homem-dinamite.png');
  imagemInimigoLadrao = loadImage('imagens/inimigos/ladrao.png');
  imagemVida = loadImage('imagens/assets/heart.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');
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
  botao = new BotaoGerenciador('Iniciar', width / 2, height / 2)

  frameRate(40)
  somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressed(key)
}


function touchStarted() {
  personagem.pula();
  somDoPulo.play();
}

function draw() {
  // if(cenaAtual === 'jogo') {
  //   jogo.draw()
  // }
  cenas[cenaAtual].draw()
}
