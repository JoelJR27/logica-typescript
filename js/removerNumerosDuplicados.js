"use strict";
// Remover elementos duplicados de um array
const removeDuplicados = (numeros) => [...new Set(numeros)];
console.log(removeDuplicados([1, 1, 1, 3, 4, 6, 2, 3]));
