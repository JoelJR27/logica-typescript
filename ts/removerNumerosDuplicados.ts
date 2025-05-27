// Remover elementos duplicados de um array
const removeDuplicados = (numeros: number[]): number[] => [...new Set(numeros)];
// Transforma o array de números em um Set para remover os duplicados
// E retorna o Set espalhado em um novo array.
console.log(removeDuplicados([1, 1, 1, 3, 4, 6, 2, 3]));
