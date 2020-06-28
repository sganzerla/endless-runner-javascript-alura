class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;


  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    //constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 60.875, 104);
    const inimigoCarangueijo = new Inimigo(matrizInimigoCarangueijo, imagemInimigoCarangueijo, width - 98.222222222, 30, 98.222222222, 66, 98.222222222, 66, 10);
    const inimigoSwiper = new Inimigo(matrizInimigoSwiper, imagemInimigoSwiper, width, 30, 155, 150, 200, 200, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

    inimigos.push(inimigoCarangueijo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoSwiper);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }

  draw() {


    cenario.exibe();
    cenario.move();
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
      }
    }
  }
}
