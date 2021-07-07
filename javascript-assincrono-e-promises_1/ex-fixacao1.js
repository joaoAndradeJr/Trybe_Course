// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepEqual(numbers, [1, 2, 3]);

// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepEqual(numbers, [1, 2, 3]); // essa validação falha

// const assert = require('assert');

// const pushNumber = (list, number) => {
//   list.push(number);
//   console.log(list);
// };

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => assert.deepEqual(numbers, [2, 3, 1]), 3000);

// let salarioBruto = 3000;
// let salarioLiquido;
// getSalario(salarioBruto, (resultado) => {
//     salarioLiquido = resultado;
//     console.log(`O salário liquido é ${salarioLiquido}`);
// });
// function getSalario(salarioBruto, callback)
// {
//     let liquido = 0;
//     const inss = salarioBruto * 0.11;
//     const vr = salarioBruto * 0.05;
//     const vt = salarioBruto * 0.06;
//     const fgts = salarioBruto * 0.15;
//     const descontos = inss + vr + vt + fgts;
//     liquido = salarioBruto - descontos;
    
//     return callback(liquido);
// }

/* A função getCountry abaixo tem aproximadamente 50% de chance de obter com sucesso um país, tendo um callback para poder ser feita qualquer operação sobre o país retornado. Adicione um outro callback para getCountry, de forma que trate a mensagem de erro retornada.*/

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    }
    else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);
