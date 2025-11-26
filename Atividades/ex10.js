//🔟 — Menor Número
//Crie menor(a, b) que retorne o menor número entre os dois.

// Função para retornar o menor entre dois números escolhidos.
function menor(a, b){
    if(a < b){
        return a;
    }else{
        return b;
    }
}

//Chamando a função.
console.log(menor(1,7));