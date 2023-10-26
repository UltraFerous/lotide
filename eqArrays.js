// FUNCTION IMPLEMENTATION
const eqArrays = function(arrOne, arrTwo) {

  for (let value of arrOne) {
    if (Array.isArray(value)) {
      for (let num of value) {
        arrOne.push(num);
      }
      let index = arrOne.indexOf(value);
      arrOne.splice(index, 1);
      return eqArrays(arrOne, arrTwo);
    }
  }

  for (let value of arrTwo) {
    if (Array.isArray(value)) {
      for (let num of value) {
        arrTwo.push(num);
      }
      let index = arrTwo.indexOf(value);
      arrTwo.splice(index, 1);
      return eqArrays(arrOne, arrTwo);
    }
  }

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


module.exports = eqArrays;
