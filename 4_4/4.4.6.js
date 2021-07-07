/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false */

let palavra = "arara";
let palindromo = false;
let arrayLetras = palavra.split("");
for(let i in arrayLetras){
    if(arrayLetras[i] == palavra[(palavra.length)] - i){
        palindromo = true;
    }
}

console.log(palindromo);