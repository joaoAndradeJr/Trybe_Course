/* Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string. Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe". */

const letraX = (palavra) => {
  let frase = 'Tryber x aqui!';
  frase.split(' ');
  fraseNova = frase.split(' ');
  for (let index = 0; index < fraseNova.length; index += 1) {
    if (fraseNova[index] === 'x') {
      fraseNova[index] = palavra;
    }
  }
  return fraseNova.join(' ');
}

/* Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.

Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe".*/

const skills = ['HTML', 'CSS', 'JavaScript', 'POO', 'Java'];

const concatenar = (param) => {
  return `${param} Minhas cinco principais habilidades são: ${skills.sort()}`;
}
