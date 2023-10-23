const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, '3'], [1, 2, 3]); // => should FAIL
assertArraysEqual([], []); // => should TRUE
assertArraysEqual([1], [1, 2]); // => should FAIL
assertArraysEqual(["Test"], ["Test"]); // => should TRUE