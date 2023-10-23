// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countLetters = function(str) {
  let count = {};

  for (let letter of str) {
    if (count[letter] === undefined) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }
  return count;
};

// TEST CODE
// console.log(countLetters("LHL"));

module.exports = countLetters;
