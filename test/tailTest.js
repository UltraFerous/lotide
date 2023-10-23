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
  it("returns undefined when head([0]) is passed", () => {
    assert.strictEqual(tail([0])[0], undefined);
  });
  it("returns '[]' for []", () => {
    assert.strictEqual(tail([])[0], undefined);
  });
  it("returns an array with a length of 2 when [Yo Yo, Lighthouse, Labs] is passed", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
});