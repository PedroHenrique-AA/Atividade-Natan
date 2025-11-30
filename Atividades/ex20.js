//2️⃣0️⃣ — Número Perfeito
//Crie ehPerfeito(b) que verifique se um número é perfeito. Ex: 6 → true.

// Função que checa se o número é perfeito. (Ex: 6 que é divisivel por 3, 2 ,1 que somados dão 6)
function ehPerfeito(b){
    let soma = 0;
    for(let i = 1; i < b; i++){
        if(b % i === 0){
            soma += i;
        }
    }
    if(soma === b){
        console.log(true);
    } else {
        console.log(false);
    }
}

//Chamando a função.
console.log(ehPerfeito(6));