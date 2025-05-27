"use strict";
const multiplicaTodoOArray = (array) => array.reduce((valorAtual, acumulador) => valorAtual * acumulador, 1);
// Itera por todo o array e multiplica valor atual pelo acumulador, que é iniciado em 1.
console.log(multiplicaTodoOArray([1, 2, 3, 4, 5]));
