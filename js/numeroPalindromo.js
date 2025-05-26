"use strict";
const ehPalindromo = (numero) => numero.toString().split("").reverse().join("") == numero.toString();
console.log(ehPalindromo(121));
/* Melhoria opcional:
    Fazer uma verificação extra para saber se o número
    é positivo.
*/ 
