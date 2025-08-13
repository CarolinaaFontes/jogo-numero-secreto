alert("Bem-vindo ao jogo secreto!");

let numeroSecreto = 15;
console.log(numeroSecreto);
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





