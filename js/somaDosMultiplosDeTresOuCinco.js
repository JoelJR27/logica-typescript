"use strict";
// Desafio: Crie uma função que some todos os números de 1 até n que sejam múltiplos de 3 ou 5.
// 1- Receber como parâmetro um número n;
// 2- Separar todos os números que sejam múltiplos de 3 || 5;
// 3- Retornar a soma de todos os múltiplos;
function somaMultiplos(numero) {
    const multiplos = [];
    for (let index = 1; index < numero; index++) {
        if (index % 3 === 0 || index % 5 === 0)
            multiplos.push(index);
    }
    return multiplos.reduce((anterior, acumulador) => anterior + acumulador, 0);
}
console.log(somaMultiplos(10));
