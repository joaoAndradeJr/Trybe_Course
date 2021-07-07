// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function invertInt(int) {
  const stringNumber = int.toString();
  const size = stringNumber.length;
  let invertedNumber = [];
  if (int >= 0) {
    for (let index = size; index >= 1; index -=1) {
      invertedNumber.push(stringNumber[index-1]);
    }
    const saida = Number(invertedNumber.join(''));
    return saida;
  } 
  for (let index = size; index >= 2; index -=1) {
    invertedNumber.push(stringNumber[index-1]);
  }
  const saida = `-${(invertedNumber.join(''))}`;
  return Number(saida);
}

function reverseInt(n) {
  const result = invertInt(n);
  return result;
}

module.exports = reverseInt;
