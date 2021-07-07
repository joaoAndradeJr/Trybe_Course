/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const a = 11;
const b = 33;
const c = 20;

let verdadeiro = (a % 2 === 0 || b % 2 === 0 || c % 2 === 0);

console.log(verdadeiro);