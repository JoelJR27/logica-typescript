// Desafio: Criar uma função que verifica se uma frase é um palíndromo, ou seja, lê igual de frente para trás, ignorando:
// Espaços; Acentos; Pontuação; Diferença entre maiúsculas e minúsculas;
// 1- Receber como parâmetro uma frase;
// 2-

function fraseEhPalindroma(frase: string) {
  const caracteresValidos = frase
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .match(/[\w]/g);
  const fraseFormatada = caracteresValidos?.join("").toLowerCase();
  const fraseInvertida = caracteresValidos?.reverse().join("").toLowerCase();
  return fraseFormatada === fraseInvertida
}

console.log(fraseEhPalindroma("Isso não é um palíndromo"));
