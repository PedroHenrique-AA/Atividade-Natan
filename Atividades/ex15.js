//1️⃣5️⃣ — Potência Personalizada
//Crie potencia(base,expoente) sem usar **, apenas multiplicações sucessivas.

// Função que cria a potencia de um número.
function potencia(base,expoente) {
  if (expoente === 0) return 1;
  let resultado = 1;
  if (expoente > 0) {
    for (let i = 0; i < expoente; i++) {
      resultado *= base;
    }
    return resultado;
  }
  for (let i = 0; i > expoente; i--) {
    resultado *= base;
  }
  return 1 / resultado;
}

//Chamando a função.
console.log(potencia(2,3));