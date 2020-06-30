let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoLadrao;
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
let inimigoBoi;
let inimigoHomemDinamite;
let inimigoLadrao;
let pontuacao;
let vida;
let fita;
let cenaAtual = 'telaInicial';
let cenas;
let botao;

const matrizInimigoBoi = [
  [0, 0],
  [136.5, 0],
  [273, 0],
  [409.5, 0]
];

const matrizPersonagem = [
  [0, 0],
  [102.4, 0],
  [204.8, 0],
  [307.2, 0],
  [409.6, 0],
];
const matrizInimigoLadrao = [
  [0, 0],
  [39.2, 0],
  [78.4, 0],
  [117.6, 0],
  [156.8, 0],

];
const matrizInimigoHomemDinamite = [
  [0, 0],
  [42.6, 0],
  [85.2, 0],
  [127.8, 0],
  [170.4, 0],
  [213, 0],

];

const inimigos = [];
