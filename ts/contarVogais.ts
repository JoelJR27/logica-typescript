const contaVogaisNaString = (string: string) =>
  string
    .split("")
    .filter((letra) => letra.match(/[aeiouáéíóúâêîôûàèìòùãõäëïöü]/gi)).length;

console.log(contaVogaisNaString("Joel"));

/* Sugestão de melhoria:
    const contaVogaisNaString = (texto: string) =>
  (texto.match(/[aeiouáéíóúâêîôûàèìòùãõäëïöü]/gi) || []).length;
*/