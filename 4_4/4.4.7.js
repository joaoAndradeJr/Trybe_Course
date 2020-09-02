/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

let array = [2, 3, 6, 7, 10, 1];
let maior = null;
let indice = null;

for(let i = 0; i < array.length; i += 1){
    if(array[i] > maior){
        maior = array[i];
    }
}

for(let i = 0; i < array.length; i += 1){
    if(array[i] === maior){
        indice = i;
    } 
}

console.log(indice);