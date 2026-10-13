const prompt = require("prompt-sync")();

let nome_jogador;
let pontuacao_jogador;
let numero_secreto = 8;

nome_jogador = prompt("Dgite o seu nome:");

console.log(`...Bem vindo ${nome_jogador} ao jogo do numero secreto...`);
console.log("...Tente adivinhar o numero secreto entre 1 e 10...");
pontuacao_jogador = parseInt(prompt("Digite um número: "));

if(numero_secreto === pontuacao_jogador){
    console.log("Você acertou o número secreto! Parabéns!");
} else {
    console.log("Você errou o número secreto! Tente novamente.");
}