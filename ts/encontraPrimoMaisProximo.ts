// Desafio: Crie uma função que receba um número e retorne o próximo número primo maior que ele.
// Número primo: todo número que tem como únicos divisores 1 e ele mesmo
// 1- Receber um número como parâmetro;
// 2- Verificar se o número recebido é primo, caso sim, retorná-lo com a mensagem: esse número já é primo;
// 3- While o número ainda não for primo, incrementá-lo;

function primoMaisProximo(numero: number) {
  function ehPrimo(numeroTestado: number): boolean {
    if (numeroTestado < 1) return false;
    for (let index = 2; index <= Math.sqrt(numeroTestado); index++) {
      if (numeroTestado % index === 0) return false;
    }
    return true;
  }
  if (ehPrimo(numero)) return `O número ${numero} já é um número primo!`;
  let atual = numero;
  while (!ehPrimo(atual)) atual++;
  return `O número ${atual} é o primo mais próximo de ${numero}!`;
}

const primoMaisProximoDe = primoMaisProximo(1);
console.log(primoMaisProximoDe)
