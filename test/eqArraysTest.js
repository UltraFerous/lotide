const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([], []), true); // => should TRUE
assertEqual(eqArrays([1], [1, 2]), false); // => should FAIL
assertEqual(eqArrays(["Test"], ["Test"]), true); // => should TRUE
