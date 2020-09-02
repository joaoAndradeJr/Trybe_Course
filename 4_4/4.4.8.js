/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6. */

let array = [2, 4, 6, 7, 10, 0, -3];

function indiceDoMenorValor(){
    let menor = null;
    let indice = null;

    for(let i = 0; i < array.length; i += 1){
        if(array[i] < menor){
            menor = array[i];
        }
    }

    for(let i = 0; i < array.length; i += 1){
        if(array[i] === menor){
            indice = i;
        } 
    }
    return indice;
}

console.log(indiceDoMenorValor(array));