class TelaInicial {
  constructor() {
    this.x = width / 2;
    this.y = height
  }

  draw() {
    this._fundo()
    this._texto()
    this._botao()
  }

  _fundo() {
      image(imagemTelaInicial, 0, 0, width, height)
  }

  _texto() {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(120);
    textFont(fonteTelaInicial);
    text('San Setriders', width / 2, height / 3);
    textSize(150);
    text('II', width / 2, height / 5 * 3);
    textFont('Georgia')
  }

  _botao() {
    botao.y = height / 7 * 5
    botao.draw()
  }
}
