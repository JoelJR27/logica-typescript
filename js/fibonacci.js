"use strict";
// Desafio: Gere um array com os n primeiros números da sequência de Fibonacci.
// 1- Receber como argumento um número n;
// 2- Verificar se o número é menor que 2, caso seja, retornar [0, 1, 1]
// 3- Criar um laço que incremente "index" enquanto "index" < numero;
function fibonacci(numero) {
    const numeroArredondado = Math.round(numero);
    if (numero <= 0)
        return [];
    if (numero === 1)
        return [0];
    if (numero === 2)
        return [0, 1];
    const sequenciaDeFibonacci = [0, 1];
    for (let index = 2; index < numeroArredondado; index++) {
        sequenciaDeFibonacci.push(sequenciaDeFibonacci[index - 1] + sequenciaDeFibonacci[index - 2]);
    }
    return sequenciaDeFibonacci;
}
console.log(fibonacci(15));
