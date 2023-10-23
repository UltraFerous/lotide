// FUNCTION IMPLEMENTATION
const flatten = function(arr) {
  let flatArr = [];
  for (let value of arr) {
    if (Array.isArray(value) === true) {
      for (let point of value) {
        flatArr.push(point);
      }
    } else {
      flatArr.push(value);
    }

  }
  return flatArr;
};

module.exports = flatten;

// TEST CODE
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
