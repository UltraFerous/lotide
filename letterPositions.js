// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;

  for (let letter of sentence) {
    if (letter === " ") {
      index++;
    } else if (results[letter] === undefined) {
      results[letter] = [index];
      index++;
    } else {
      results[letter].push(index);
      index++;
    }
  }
  return results;
};

// TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
module.exports = letterPositions;
