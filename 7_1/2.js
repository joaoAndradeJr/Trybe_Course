// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") retorna 'aconteceu'

const maiorPalavra = (frase) => {
  const palavras = frase.split(' ');
  let maiorPalavra = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > maiorPalavra.length) {
      maiorPalavra = palavras[index];
    }
  }
  return maiorPalavra;
}
