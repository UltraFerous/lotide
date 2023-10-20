// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// TEST CODE
const check = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

const check2 = findKey({
  "Blue Hill": { stars: 'a' },
  "Akaleri": { stars: 'b' },
  "noma": { stars: 'c' },
  "elBulli": { stars: 'd' }
}, x => x.stars === 'b'); // => "Akaleri"

assertEqual(check, "noma");
assertEqual(check2, "Akaleri");



