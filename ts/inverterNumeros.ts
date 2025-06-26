// Desafio: Crie uma função que inverta os dígitos de um número.
// 1- Receber como parâmetros um número n qualquer;
// 2- Fazer o split do número passado como parâmetro e armazená-lo;
// 3- Inverter o número através do método reverse();
// 4- Concatenar o número e retornar o número invertido;

function inverteNumeros (numero : number): string{
    const numeroInvertido = numero.toString().split('').reverse().join('');
    return numeroInvertido
}
console.log(inverteNumeros(100))