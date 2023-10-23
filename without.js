// FUNCTION IMPLEMENTATION
const without = function(arrOne, arrTwo) {
  let count = 0;
  let newArr = arrOne;
  for (let number of arrOne) {
    for (let remove of arrTwo) {
      if (number === remove) {
        newArr.splice(count, 1);
      }
    }
    count++;
  }
  return (arrOne);
};

// TEST CODE
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const wordsTwo = [1, 2, 3];
// without(wordsTwo, [2]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(wordsTwo, [1, 3]);

module.exports = without;

