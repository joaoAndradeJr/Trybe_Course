// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

const a = 31;
const b = 11;
const c = 20;

if(a > b && a > c){
    console.log("O maior número entre " + a + ", " + b + ", " + c + " é: " + a);
}else if(b > a && b > c){
    console.log("O maior número entre " + a + ", " + b + ", " + c + " é: " + b);
}else{
    console.log("O maior número entre " + a + ", " + b + ", " + c + " é: " + c);
}