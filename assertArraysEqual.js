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
const assertArraysEqual = function(arrOne, arrTwo, expected) {
  if (eqArrays(arrOne, arrTwo) === expected) {
    console.log(`✅✅✅ Assertion Passed: [${arrOne}] === [${arrTwo}] === [${expected}]`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: [${arrOne}] !== [${arrTwo}] === [${expected}]`);
};


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([1, 2, '3'], [1, 2, 3], false); // => should FAIL
assertArraysEqual([], [], true); // => should TRUE
assertArraysEqual([1], [1, 2], false); // => should FAIL
assertArraysEqual(["Test"], ["Test"], true); // => should TRUE
