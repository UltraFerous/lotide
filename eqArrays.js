// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// FUNCTION IMPLEMENTATION
const head = function(arr) {
  return arr[0];
};

// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  let newArr = [];

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// FUNCTION IMPLEMENTATION
const eqArrays = function(arrOne, arrTwo) {
  let equalsCheck = false;
  let equalsCount = 0;

  arrOne.sort();
  arrTwo.sort()

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      equalsCount++;
    }
  }

  if (equalsCount === arrOne.length && arrTwo.length === arrOne.length) {
    equalsCheck = true;
  }

  return equalsCheck;
};

// TEST CODE


