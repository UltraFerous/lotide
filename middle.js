// FUNCTION IMPLEMENTATION
const middle = function(arr) {
  const arrLength = arr.length;
  if (arrLength <= 2) {
    return [];
  } else if (arrLength % 2 === 1) {
    return [arr[Math.round(arrLength / 2) - 1]];
  } else if (arrLength % 2 === 0) {
    return [arr[arrLength / 2 - 1], arr[arrLength / 2]];
  }
};

module.exports = middle;