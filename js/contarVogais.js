"use strict";
const contaVogaisNaString = (string) => string
    .split("") // Transforma a string em um array das letras dessa string
    .filter((letra) => letra.match(/[aeiouáéíóúâêîôûàèìòùãõäëïöü]/gi)).length;
// Filtra o array com base no regEx que identifica apenas as vogais.
console.log(contaVogaisNaString("Joel"));
/* Sugestão de melhoria:
    const contaVogaisNaString = (texto: string) =>
  (texto.match(/[aeiouáéíóúâêîôûàèìòùãõäëïöü]/gi) || []).length;
*/ 
