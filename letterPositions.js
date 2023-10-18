// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// FUNCTION IMPLEMENTATION
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: [${arrOne}] === [${arrTwo}]`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: [${arrOne}] !== [${arrTwo}]`);
};

// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;

  for (let letter of sentence) {
    if (results[letter] === undefined) {
      results[letter] = [index];
      index++;
    } else {
      results[letter].push(index);
      index++;
    }
  }
  return results;
};

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);