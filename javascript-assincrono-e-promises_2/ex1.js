/* Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array. */

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => {
      const piada = Object.values(data);
      document.getElementById('jokeContainer').innerHTML = piada[1];
    });
};

const promise = new Promise((resolve, reject) => {
  const numbers = [1, 7, 25, 38, 49, 33, 42, 11, 5, 37];
  const numbersExp = numbers.map((number => number * number));
  const sum = numbersExp.reduce((previous, current) => previous + current);
  const divNumbers = [2, 3, 5, 10];
  let divResult = [];
  divNumbers.forEach(element => divResult.push((sum / element).toFixed(2)));
  
  if (sum < 8000) {
    resolve(divResult);
  } else {
    reject(sum);
  }
})
  .then((resolve) => console.log(resolve))
  .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));

window.onload = () => fetchJoke();