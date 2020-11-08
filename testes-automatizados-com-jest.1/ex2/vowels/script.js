// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const size = str.length;
  const lcstr = str.toLowerCase();
  let vowels = 0;
  for (let index = 0; index < size; index += 1) {
    if (lcstr[index] === 'a' || lcstr[index] === 'e' || lcstr[index] === 'i' || lcstr[index] === 'o' || lcstr[index] === 'u') {
      vowels += 1;
    }
  }
  return vowels;
}

module.exports = vowels;