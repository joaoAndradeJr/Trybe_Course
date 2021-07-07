/* Agora inverta o lado do triângulo. Por exemplo:
n = 5
    *
   **
  ***
 ****
*****
*/

let n = 5;
let linha;
let coluna;
let simbolo = '*';
let espaco = '';
let posicaoAtual = n;

for (linha = 0; linha < n; linha += 1) {
  for (coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < posicaoAtual) {
      espaco += ' ';
    } else {
      espaco += simbolo;
    }
  }
  console.log(espaco);
  espaco = '';
  posicaoAtual -= 1;
}