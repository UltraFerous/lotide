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
    console.log(`✅✅✅ Arrays Are Equal: [${arrOne}] === [${arrTwo}]`);
    return;
  }
  console.log(`🛑🛑🛑 Arrays Are Not Equal: [${arrOne}] !== [${arrTwo}]`);
};


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, '3'], [1, 2, 3]); // => should FAIL
assertArraysEqual([], []); // => should TRUE
assertArraysEqual([1], [1, 2]); // => should FAIL
assertArraysEqual(["Test"], ["Test"]); // => should TRUE
