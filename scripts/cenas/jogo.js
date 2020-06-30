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
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 200, 250, 102.4, 87);
    const inimigoBoi = new Inimigo(matrizInimigoBoi, imagemInimigoBoi, width - 98.222222222, 30, 250, 160, 136.5, 75, 10);
    const inimigoLadrao = new Inimigo(matrizInimigoHomemDinamite, imagemInimigoHomemDinamite, width, 30, 155, 150, 42.6, 49., 10);
    const inimigoHomemDinamite = new Inimigo(matrizInimigoLadrao, imagemInimigoLadrao, width, 30, 150, 150, 39.2, 51, 10);

    inimigos.push(inimigoBoi);
    inimigos.push(inimigoHomemDinamite);
    inimigos.push(inimigoLadrao);
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
