//1️⃣1️⃣ — Número Positivo, Negativo ou Zero
//Crie verificarNumero(b) que retorne “positivo”, “negativo” ou “zero”.

// Função para verificar se o número é positivo, negativo ou zero e retornar ele.
function verificarNumero(b){
    if(b > 0){
        return "positivo";
    }else if(b == 0){
        return "zero";
    }else{
        return "negativo";
    }
}

//Chamando a função.
console.log(verificarNumero(0));