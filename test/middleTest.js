const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns empty when ([1]) is passed", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty when ([1, 2]) is passed", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns 2 when ([1, 2, 3]) is passed", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2,3] when ([1, 2, 3, 4]) is passed", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3,4] when ([1, 2, 3, 4, 5, 6]) is passed", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns 2 when ([1, 2, 3, 4, 5]) is passed", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});