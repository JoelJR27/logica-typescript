"use strict";
// Desafio: Verificar se a sequência é crescente
const ehCrescente = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array[index + 1])
            return false;
    }
    return true;
};
console.log(ehCrescente([3, 2, 1]));
