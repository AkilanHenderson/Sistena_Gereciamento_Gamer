const prompt = require("prompt-sync")();
let time = [];

function MostrarMenu() {
    console.log("................");
    console.log("Bem vindo ao sistema de cadastro de jogo");
    console.log("................");

    console.log("Escolha uma opção:");
    console.log("1. Cadastrar nome do jogador");
    console.log("2. Deletar jogador");
    console.log("3. Mostrar equipe");
    console.log("4. Mostrar Média Equipe");
    console.log("5. Atualizar Pontuação do Jogador");
    console.log("6. Sair");

}

function CadastrarJogador(){
    let nome = prompt("Digite o nome do jogador: ");
    let funcao = prompt("Digite a função do jogador: ");
    let pontuacaoInput = prompt("Digite a pontuação do jogador: ");
    let pontuacao = Number(pontuacaoInput);

    if(isNaN(pontuacao)) {
        console.log("Pontuação inválida. Tente novamente.");
        return;
    }

    let jogador = {
        nome: nome,
        funcao: funcao,
        pontuacao: pontuacao
    };

    time.push(jogador);
    console.log("Jogador Cadastrado");

}

function DeletarJogador(){

    if(time.length === 0) {
        console.log("Não há jogadores cadastrados.");
        return;
    }
       
    let nomeDeletado = (prompt("Digite o nome do jogador que deseja deletar: "));
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    } 

        time.splice(indexDeletado, 1);
        console.log("Jogador deletado com sucesso.");
    
}

function ProcurarJogador(nome) {
    console.log(`Procurando jogador....`);
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados.");
        return null;
    }
    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nome) {
            return time[i];
        }
    }
    return null;
}

function AtualizarPontos() {

    if (time.length === 0) {
        console.log("Não há jogadores cadastrados.");
        return;
    }
    
    let nome = prompt("Digite o nome do jogador que deseja atualizar a pontuação: ");
    let novosPontos = Number(prompt("Digite a nova pontuação do jogador: "));

    if (isNaN(novosPontos)) {
        console.log("Pontuação inválida. Tente novamente.");
        return;
    }
    let jogador = ProcurarJogador(nome);
    if (jogador === null) {
        console.log("Jogador não encontrado.");
        return;
    }
    jogador.pontuacao = novosPontos;
    console.log(`Pontuação do jogador ${nome} atualizada para ${jogador.pontuacao}.`);
}
function MostrarEquipe(){
    if(time.length === 0) {
        console.log("Não há jogadores cadastrados.");
    } else {
        console.log("Jogadores cadastrados:");
        for(let i = 0; i < time.length; i++) {     
            let jogador = time[i];  
            console.log(`${i + 1}. Nome do jogador: ${jogador.nome} - Função: ${jogador.funcao} - Pontuação: ${jogador.pontuacao}`);
    }
}
}

function CalcularMediaPontuacao() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados.");
        return;
    }

    let TotalPontos = 0;
    for (let i = 0; i < time.length; i++) {
        TotalPontos += time[i].pontuacao;
    }

    let mediaPontuacao = TotalPontos / time.length;
    console.log(`A média de pontuação da equipe é: ${mediaPontuacao}`);
}

let continueLoop = true;       
while(continueLoop) {

    MostrarMenu();
    switch (prompt("Digite a opção desejada: ")) {
        case "1":
            CadastrarJogador();
            break;
        case "2":
            DeletarJogador();
            break;
        case "3":
            MostrarEquipe();
            break;
        case "4":
            CalcularMediaPontuacao();
            break;
        case "5":
            AtualizarPontos();
            break;
        case "6":
            console.log("Saindo do sistema...");
            continueLoop = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
