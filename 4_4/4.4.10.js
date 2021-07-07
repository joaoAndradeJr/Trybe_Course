/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. */

let array = [2, 3, 2, 5, 8, 2, 3];

let contador = 0;
let contadorAnterior = 0;
let maisRepetido = null;
let numeroAtual = null;

for(let i = 0; i < array.length; i += 1){
    numeroAtual = array[i];
    for(let j = 0; j < array.length; j += 1){
        if(array[j] == numeroAtual){
            contador += 1;
        }
    }
    if(contadorAnterior == 0){
        contadorAnterior = contador;
        maisRepetido = numeroAtual;
    }
    if(contador > contadorAnterior){
        maisRepetido = numeroAtual;
    }
    contador = 0;
}

console.log(maisRepetido);