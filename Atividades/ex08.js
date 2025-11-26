//8️⃣ — Verificar Múltiplo
//Crie ehMultiplo(a, b) que retorne true se a for múltiplo de b.

// Função para descobrir se 'a' é múltiplo de 'b' e retornar a resposta.
function ehMultiplo(a, b){
    if(a % b === 0){
        return true;
    }else{
        return false;
    }
}

//Chamando a função.
console.log(ehMultiplo(11,5));