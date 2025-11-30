//1️⃣8️⃣ — Contagem Regressiva
//Crie contagemRegressiva(b) que exiba todos os números de n até 0 no console.

// Função que faz contagem regressiva do número escolhido ate 0.
function contagemRegressiva(b){
    for(let i = b; i >= 0; i--){
        console.log(i);
    }
}

//Chamando a função.
console.log(contagemRegressiva(10));