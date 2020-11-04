/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const a = 10;
const b = 30;
const c = 21;

let falso = (a % 2 != 0 || b % 2 != 0 || c % 2 != 0);

console.log(falso);