alert("Bem-vindo ao jogo secreto!");

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 50) + 1; // número entre 1 e 50
}

let numeroSecreto = gerarNumeroSecreto();
let numeroEscolhido = Number(prompt("Escolha um número entre 1 e 50"));

// enquanto x condição não acontecer continuar repetindo
while (numeroEscolhido !== numeroSecreto) {
    
    if (numeroSecreto > numeroEscolhido) {
        alert(`O número secreto é maior que ${numeroEscolhido}`);
    } else {
        alert(`O número secreto é menor que ${numeroEscolhido}`);
    }

    // pedir novamente
    numeroEscolhido = Number(prompt("Escolha outro número entre 1 e 50"));
}

alert(`Você acertou o numero secreto :) ${numeroSecreto}`)

// caso quiser descrever em quantas tentativas o jogador acertou o numero 
// let tentativas (em cima)
// tentativa++ (significa que teve a tentativa inicial + 1 a cada rodada/ tentativa = tentativa + 1 )



