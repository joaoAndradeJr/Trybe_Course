// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes

const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let results = [];
  let n = 0;

  for (let index in characters) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      n += 1;
      results.push(n);
    } else {
      results.push(characters[index]);
    }
  }
  results = results.join('');
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
