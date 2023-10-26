// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countable = [];
  let count = {};

  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      countable.push(item);
    }
  }

  for (let index of allItems) {
    for (let valid of countable) { // Array Find, Map
      if (index === valid) {
        if (count[index] === undefined) {
          count[index] = 1;
        } else {
          count[index]++;
        }
        break;
      }
    }
  }
  return count;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// console(result1["Jason"]);
// assertEqual(result1["Karima"], undefined);
console.log(result1["Fang"]);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
