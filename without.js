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
const without = function(arrOne, arrTwo){
  let count = 0;
  for(let number of arrOne){
    for(let remove of arrTwo){
      if(number === remove){
        arrOne.splice(count,1);
      }
    }
    count++;
  }
  return console.log(arrOne);
};

// TEST CODE
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without([false, false, true], [false]); 
