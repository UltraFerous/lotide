const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(str) {
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

console.log(countOnly("LHL"));