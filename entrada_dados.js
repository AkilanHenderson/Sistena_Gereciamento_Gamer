const prompt = require('prompt-sync')();
let nova_pontuacao;
let nomeJogador;

console.log(".......Bem vindo o jogo deo recruta.......");

nomeJogador = prompt('Digite o nome do jogador : ');

nova_pontuacao = (parseInt(prompt('Digite a pontuação do jogador: ')));

console.log(`Nome do jogador: ${nomeJogador}, Pontuação: ${nova_pontuacao}`)

