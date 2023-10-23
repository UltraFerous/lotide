const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[1], "Labs");
assertEqual(tail([0])[0], undefined);
assertEqual(tail([])[0], undefined);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!