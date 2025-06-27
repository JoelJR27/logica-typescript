// Desafio: Conte quantas letras existem em uma string, ignorando espaços e pontuação.
// 1- Receber como parâmetro uma string;
// 2- Criar um regEx que identifique apenas letras e exclua pontuações e espaços.
// 3- Através do regEx separar apenas as letras da string.
// 4- Retornar o length das letras separadas das pontuações

function contarLetras(frase: string): number | undefined {
  const regEx = /\p{L}/gu;
  return frase.match(regEx)?.length;
}

console.log(contarLetras("Olá, mundo!"));
