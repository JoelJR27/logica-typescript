"use strict";
// Desafio: Conte quantas letras existem em uma string, ignorando espaços e pontuação.
// 1- Receber como parâmetro uma string;
// 2- Criar um regEx que identifique apenas letras e exclua pontuações e espaços.
// 3- Através do regEx separar apenas as letras da string.
// 4- Retornar o length das letras separadas das pontuações
function contarLetras(frase) {
    var _a;
    const regEx = /\p{L}/gu;
    return (_a = frase.match(regEx)) === null || _a === void 0 ? void 0 : _a.length;
}
console.log(contarLetras("Olá, mundo!"));
