//1️⃣7️⃣ — Potência com For
//Crie potencia(base,expoente) usando laço for. Ex: potencia(2,3) → 8.

// Função que cria a potencia utilizando laço. (obs: fiz o mesmo no ex15)
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