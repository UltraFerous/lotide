const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arrOne = Object.keys(object1);
  let arrTwo = Object.keys(object2);

  for(let value of arrOne){
    if(typeof object1[value] === 'object' &&! Array.isArray(object1[value])){
      for (let innerKey in object1[value]){
        object1[innerKey] = object1[value][innerKey];
      }
      delete object1[value];
      eqObjects(object1, object2)
    }
  }

  for(let value of arrTwo){
    if(typeof object2[value] === 'object' &&! Array.isArray(object2[value])){
      for (let innerKey in object2[value]){
        object2[innerKey] = object2[value][innerKey];
      }
      delete object2[value];
      eqObjects(object1, object2)
    }
  }

  arrOne = Object.keys(object1);
  arrTwo = Object.keys(object2);

  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let key of arrOne) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// // TEST CODE
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false

