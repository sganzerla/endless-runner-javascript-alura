class Inimigo extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.variacaoY = variacaoY;
    this.velocidade = 8;
  }

  move() {
    this.x = this.x - this.velocidade;

    if (this.x < -this.largura) {
      this.x = width;
    }
  }
}