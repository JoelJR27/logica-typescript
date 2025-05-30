"use strict";
// Desafio: Gerar Fatorial
const geraFatorial = (numero) => {
    if (numero === 1 || numero === 0)
        return 1;
    return numero * geraFatorial(numero - 1);
};
console.log(geraFatorial(3));
