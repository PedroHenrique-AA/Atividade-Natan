//7️⃣ — Verificar se é Par
//Crie ehPar(numero) que retorne true se for par e false caso contrário.

// Função para descobrir se o número é par ou impar e retornar ele.
function ehPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//Chamando a função.
console.log(ehPar(7));