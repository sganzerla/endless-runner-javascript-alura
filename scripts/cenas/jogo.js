class Jogo {

    constructor() {
        this.inimigoAtual = 0;
    }


    setup() {
        cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(
            matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(
            matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
        const inimigoVoador = new Inimigo(
            matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);
        const inimigoGrande = new Inimigo
            (matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15, 100);

        pontuacao = new Pontuacao();

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
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

        pontuacao.exibe();
        pontuacao.adicionarPonto();
        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = parseInt(inimigo.x) - 20 < - parseInt(inimigo.largura);


        inimigo.exibe();
        inimigo.move();
        console.log(inimigoVisivel, ' = x:', inimigo.x, ' < largura:', - inimigo.largura);

        if (inimigoVisivel) {

            this.inimigoAtual = parseInt(random(0, 3));
            inimigo.velocidade = parseInt(random(10, 25));
        }


        if (personagem.estaColidindo(inimigo)) {
            image(imagemGameOver, width / 2 - 200, height / 3);
            noLoop();
        }
    }

}