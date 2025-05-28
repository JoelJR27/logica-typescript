// Desafio: Inverter String
const inverteString = (string: string): string =>
  string.split("").reverse().join("");

console.log(inverteString("banana"));

/* Melhoria opcional:
    Para garantir que funcione bem com emojis 
    ou caracteres complexos (como acentos compostos), pode usar:
        [...string].reverse().join("")
*/
