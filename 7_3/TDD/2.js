// Escreva a função wordLengths para passar nos testes já implementados

const assert = require('assert');

const wordLengths = (param) => {
  let novoArray = [];
  let num = 0;
  for (let index = 0; index < param.length; index += 1) {
    const contador = param[index].split('');
    for (let index2 = 1; index2 <= contador.length; index2 += 1) {
      num += 1;
    }
    novoArray[index] = num;
    num = 0;
  }
  return novoArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
