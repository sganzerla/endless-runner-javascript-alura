class TelaInicial {

    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);

    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(center);
        textSize(50);
        text('As aventuras de ', width / 2, height / 3);
        textSize(150);
        text('Hipsta', width / 2, height / 5 * 3);
    }

}