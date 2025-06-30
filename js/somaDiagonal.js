"use strict";
// Desafio: Dada uma matriz quadrada NxN, calcule a soma da diagonal principal.
// A matriz principal é dada como: a soma dos elementos de cada array, começando na posição 0 e incrementando seus índices até n-1;
// 1- Receber como parâmetro um array contendo uma matriz;
// 2- Criar um array que represente a diagonal principal;
// 3- Iterar sobre o array recebido;
// 4- Durante o loop, fazer o push de cada elemento da diagonal principal;
// 5- Retornar a soma da diagonal principal, usando o método reduce();
function somarDigonalPrincipal(matriz) {
    let soma = 0;
    for (let indice = 0; indice < matriz.length; indice++) {
        soma += matriz[indice][indice];
    }
    return soma;
}
console.log(somarDigonalPrincipal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]));
