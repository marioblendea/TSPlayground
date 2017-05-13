import { expect } from "chai";
import { LexicographicOrder } from "./listNumbersInLexicographicOrder";

"use strict";

describe("Lexicographic order", () => {
  it("should list all numbers", () => {
    expect(LexicographicOrder.getAll(0)).to.be.deep.equal([]);
    expect(LexicographicOrder.getAll(5)).to.be.deep.equal([1,2,3,4,5]);
    expect(LexicographicOrder.getAll(10)).to.be.deep.equal([1,10,2,3,4,5,6,7,8,9]);
    expect(LexicographicOrder.getAll(25)).to.be.deep.equal([1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,24,25,3,4,5,6,7,8,9]);
  })
});