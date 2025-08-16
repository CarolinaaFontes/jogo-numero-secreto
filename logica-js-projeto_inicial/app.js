alert("Bem-vindo ao jogo secreto!");

//"parseInt" = diz que quer apenas numero inteiros
// math.random = faz o sistema escolher um nummero aleatorio
// "*50" = ele vai até o numero 50 mas colo ele desconsidera o ultimo numero colocamos "+1"
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroEscolhido = Number(prompt(`Escolha um numero de 1 a ${numeroMaximo}`));

// enquanto x condição não acontecer continuar repetindo
while (numeroEscolhido !== numeroSecreto) {
    
    if (numeroSecreto > numeroEscolhido) {
        alert(`O número secreto é maior que ${numeroEscolhido}`);
    } else {
        alert(`O número secreto é menor que ${numeroEscolhido}`);
    }

    // pedir novamente
    numeroEscolhido = Number(prompt("Escolha outro número entre 1 e 100"));
}

alert(`Você acertou o numero secreto :) ${numeroSecreto}`)

// caso quiser descrever em quantas tentativas o jogador acertou o numero 
// let tentativas (em cima)
// tentativa++ (significa que teve a tentativa inicial + 1 a cada rodada/ tentativa = tentativa + 1 )



