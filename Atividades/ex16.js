//1️⃣6️⃣ — Fatorial
//Crie fatorial(b) que calcule o fatorial de um número. Ex: fatorial(5) → 120.

// Função que cria a fatorial de um número.
function fatorial(b){
    let resultado = 1;
    for(let i = 1; i <= b; i++){
        resultado *= i;
    }
    return resultado;
}

//Chamando a função.
console.log(fatorial(5));