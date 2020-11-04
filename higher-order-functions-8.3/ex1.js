// Dada uma matriz de matrizes, transforme em uma única matriz

const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const newArray = arrays.reduce((previousValue, currentValue) => {
    return previousValue[currentValue];
  }, []);
  return newArray;
}

console.log(flatten(arrays));

// assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
