// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function wordInverter(str) {
  const sizeOfString = str.length;
  let invertedStringArray = [];
  for (let index = sizeOfString; index > 0; index -= 1) {
    invertedStringArray.push(str[index-1]);
  }
  const result = invertedStringArray.join('');
  return result;
}

function palindrome(str) {
  const result = wordInverter(str);
  return (str === result);
}

module.exports = palindrome;