"use strict";
// Desafio: Escreva uma função que conte quantas palavras existem em uma frase.
// 1- Receber como parâmetro uma palavra qualquer;
// 2- Separar cada palavra da frase;
// 3- Retornar o número de palavras na frase;
function contaPalavras(palavra) {
    const regEx = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    let palavraSemPontuaçao = "";
    for (let index = 0; index < palavra.length; index++) {
        if (!palavra[index].match(regEx))
            palavraSemPontuaçao += palavra[index];
    }
    return palavraSemPontuaçao.split(" ").filter((caractere) => caractere)
        .length;
}
console.log(contaPalavras("Oi, meu nome é Joel; Estou estudando lógica,''"));
