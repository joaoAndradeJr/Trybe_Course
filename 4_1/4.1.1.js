/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição
Subtracão
Multiplicação
Divisão
Módulo */

const a = 12;
const b = 3;

// Adição

console.log("A soma de " + a + " + " + b + " é: " + (a+b));

// Subtração

console.log("A subtração de " + a + " - " + b + " é: " + (a-b));

// Multiplicação

console.log("A multiplicação de " + a + " x " + b + " é: " + (a*b));

// Divisão

if(b > 0){
    console.log("A divisão de " + a + " / " + b + " é: " + (a/b).toFixed(2));
}else{
    console.log("Divisor inválido!");
}

// Módulo (Resto da divisão)

if(b > 0){
    console.log("O resto da divisão de " + a + " / " + b + " é: " + (a%b));
}else{
    console.log("Divisor inválido!");
}