const ehPalindromo = (numero: number) =>
  numero.toString().split("").reverse().join("") == numero.toString();
// Transforma o número em uma string e verifica se ele é igual ao inverso da string.
console.log(ehPalindromo(121));

/* Melhoria opcional:
    Fazer uma verificação extra para saber se o número
    é positivo.
*/
