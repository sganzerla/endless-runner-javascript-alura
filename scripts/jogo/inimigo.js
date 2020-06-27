class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.velocidade = velocidade;
    this.x = width;
  }

  move() {
    this.x = this.x - this.velocidade
  }

  aparece() {
    this.x = width;
  }

  alteraVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade;
  }
}
