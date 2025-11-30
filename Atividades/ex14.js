//1️⃣4️⃣ — Verificar se é Primo
//Crie ehPrimo(b) que retorne true se o número for primo.

// Função que retorna se o número é primo ou não.
function ehPrimo(b){
    if(b <= 1) return false;//1 ou menor não são primos.
    if(b === 2) return true;//2 é primo.
    if(b % 2 === 0) return false;//números divisiveis por 2 não são primos.
    for(let i = 3; i <= b / 2; i +=2){
        if(b % i === 0) return false;
    }
    return true;
}

//Chamando a função.
console.log(ehPrimo(5153));