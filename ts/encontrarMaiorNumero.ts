// Desafio: Encontrar o menor e o maior número de um array(sem usar Math.min/Math.max)
const encontraMaiorNumero = (array: number[]) => {
  const numerosOrdenados = array.sort((a, b) => b - a); // Ordena o array de forma decrescente.
  return `Maior ${numerosOrdenados[0]}, menor ${
    numerosOrdenados[numerosOrdenados.length - 1]
  }`; // Retorna o maior e o menor número do array.
};
console.log(encontraMaiorNumero([9, 1, 3, 98, 1032]));

/* Melhoria:
    Não modificar o array original:
    const numerosOrdenados = [...array].sort((a, b) => b - a);
*/
