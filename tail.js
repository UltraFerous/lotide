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

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([0]), 0);
assertEqual(head([]), undefined);
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[1], "Labs");
assertEqual(tail([0])[0], undefined);
assertEqual(tail([])[0], undefined);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!



