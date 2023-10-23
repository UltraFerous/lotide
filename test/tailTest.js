// const head = require('../head');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns Lighthouse when ([Hello, Lighthouse, Labs])[0] is passed", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
  it("returns Labs when ([Hello, Lighthouse, Labs])[1] is passed", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
  it("returns undefined when tail([0]) is passed", () => {
    assert.deepEqual(tail([0]), []);
  });
  it("returns '[]' for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns an array with a length of 2 when [Yo Yo, Lighthouse, Labs] is passed", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
});