let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let imagemVida;

let fonteTelaInicial;
let somDoPulo;

let jogo;

let cenario;
let somDoJogo;
let personagem;
let inimigoCarangueijo;
let inimigoGrande;
let inimigoSwiper;
let pontuacao;
let vida;
let fita;
let cenaAtual = 'telaInicial';
let cenas;
let botao;

const matrizInimigoCarangueijo = [
  [0, 0],
  [98.222222222, 0],
  [196.444444444, 0],
  [294.666666666, 0],
  [392.888888888, 0],
  [491.11111111, 0],
  [589.333333332, 0],
  [687.555555554, 0],
  [785.777777776, 0]
];

const matrizPersonagem = [
  [426.125, 0],
  [365.25, 0],
  [304.375, 0],
  [243.5, 0],
  [182.625, 0],
  [121.75, 0],
  [60.875, 0],
  [0, 0],
];
const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoSwiper = [
  [0, 0],
  [201, 0],
  [401, 0],
  [601, 0],

];

const inimigos = [];
