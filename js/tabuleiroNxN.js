"use strict";
// Desafio: Crie uma função que gere uma matriz NxN com valores alternando entre "X" e "O".
// 1- Receber como parâmetro um número que determine o tamanhoDoTabuleiro;
// 2- Criar um array que represente uma matriz;
// 3- Criar um loop que crie novos arrays enquanto o tamanho da matriz for < que o tamanhoDoTabuleiro;
// 4- Criar dentro do loop anterior, um novo loop que preencha os arrays da matriz com "X" ou "O";
function criarTabuleiro(tamanhoDoTabuleiro) {
    const matrizNxN = [];
    let index = 0;
    while (index < tamanhoDoTabuleiro) {
        let linha = criarLinhasDoTabuleiro(tamanhoDoTabuleiro);
        if (matrizNxN.length >= 1 && matrizNxN[index - 1][0] === linha[0]) {
            while (matrizNxN.length >= 1 && matrizNxN[index - 1][0] === linha[0]) {
                linha = criarLinhasDoTabuleiro(tamanhoDoTabuleiro);
            }
        }
        matrizNxN.push(linha);
        index++;
    }
    console.table(matrizNxN);
}
function criarLinhasDoTabuleiro(tamanhoDaLinha) {
    const linhaDaMatriz = [];
    let index = 0;
    while (linhaDaMatriz.length < tamanhoDaLinha) {
        if (linhaDaMatriz.length < 1) {
            const valores = ["X", "O"];
            const valorAleatorio = valores[Math.round(Math.random())];
            linhaDaMatriz.push(valorAleatorio);
        }
        if (linhaDaMatriz[index - 1] === "X") {
            linhaDaMatriz.push("O");
        }
        else if (linhaDaMatriz[index - 1] === "O") {
            linhaDaMatriz.push("X");
        }
        index++;
    }
    return linhaDaMatriz;
}
criarTabuleiro(20);
