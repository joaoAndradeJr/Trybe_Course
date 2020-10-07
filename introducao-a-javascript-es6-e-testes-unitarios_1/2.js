/* Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu' */

const maiorPalavra = (frase) => {
  const fraseSeparada = frase.split(' ');
  let maior = '';
  for (let index = 0; index < fraseSeparada.length; index += 1) {
    const atual = fraseSeparada[index];
    if(atual.length > maior.length) {
      maior = atual;
    }
  }
  return maior;
};
