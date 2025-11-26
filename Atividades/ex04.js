//4️⃣ — Divisão com Verificação
//Crie dividir(a, b) que retorne a divisão, mas se o divisor for zero, exiba “Erro: divisão por zero”.

// Função para dividir dois número e retornar eles, e caso dividendo seja zero, mostrar erro.
function dividir(a, b){
    if(b == 0){
        console.log("Erro: divisão por zero.");
    }else{
        return a / b;
    }
}

//Chamando a função.
console.log(dividir(10,5));