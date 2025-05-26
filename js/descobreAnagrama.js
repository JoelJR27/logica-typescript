"use strict";
// Desafio: Verificar se duas strings são anagramas
// const verificaSeEhAnagrama = (
//   primeiraPalavra: string,
//   segundaPalavra: string
// ): boolean => {
//   if (primeiraPalavra.length !== segundaPalavra.length) return false;
//   const letrasDaPalavra: string[] = [];
//   primeiraPalavra.split("").filter((letra) => {
//     if (segundaPalavra.includes(letra)) letrasDaPalavra.push(letra);
//   });
//   return letrasDaPalavra.join("") === primeiraPalavra ? true : false;
// };
// console.log(verificaSeEhAnagrama('amor', "laje"))
// Valeu a tentativa, mas ainda não está certo.
// Tentativa 2
const verificaSeEhAnagrama = (primeiraPalavra, segundaPalavra) => {
  const ordenaString = (string) =>
    string.toLowerCase().split("").sort().join("");
  return ordenaString(primeiraPalavra) === ordenaString(segundaPalavra);
};
console.log(verificaSeEhAnagrama("amor", "roma"));
