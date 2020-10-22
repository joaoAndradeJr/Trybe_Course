// Escreva a função addAllnumbers para passar nos testes já implementados

const assert = require('assert');

const addAllnumbers = (arr) => {
  let soma = 0;
  for (let index in arr) {
    soma += arr[index];
  }
  return soma;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
