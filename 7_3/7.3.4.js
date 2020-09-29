// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, '5'), 'error');
