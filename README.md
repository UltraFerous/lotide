# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ultraferous/lotide`

**Require it:**

`const _ = require('@ultraferous/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Outputs text showing if two arrays are equal or not.
* `assertEqual`: Outputs text showing if two values are equal or not.
* `assertObjectsEqual`: Outputs text showing if two objects are equal or not.
* `countLetters`: Returns an object with a count of each letter and symbol in a string.
* `countOnly`: Returns an object with a count of given symbols or letters in a string.
* `eqArrays`: Returns if two arrays are equal or not.
* `eqObjects`: Returns if two objects are equal or not.
* `findKey`: Returns a key based on a given value from an inputted object using a callback.
* `findKeyByValue`: Returns a key based on a given value.
* `flatten`: Removes any imbedded arrays in an array, returing one array.
* `head`: Returns the first value of an array.
* `letterPositions`: Returns an object containing arrays of the locations of all letters in a string.
* `map`: Returns a new transformed array based on an inputted function.
* `middle`: Returns the middle index value of an array, as a value in odd length array or the middle two as an array in an even length array.
* `tail`: Returns a new array without the first value of the array.
* `takeUntil`: Returns an array until a given callback condition is met.
* `without`: Returns a new array without a given input value.

