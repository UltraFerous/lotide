const map = function(array, callback) {
  const results = [];

  for (let index of array) {
    results.push(callback(index));
  }
  return results;
};

// TEST CODE
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);

// const actualResults = words.map(word => word[0]);
// assertArraysEqual(results1, actualResults);

module.exports = map;
