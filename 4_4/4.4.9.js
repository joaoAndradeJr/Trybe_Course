/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(){
    let contador = 0;
    let maiorNome = '';

    for(let i = 0; i < array.length; i += 1){
        contador = array[i].length;
        if(contador > maiorNome.length){
            maiorNome = array[i];
        }
    }
    return maiorNome;
}

console.log(maiorNome(array));