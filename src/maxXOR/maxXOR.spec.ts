"use strict";

import {expect} from "chai";
import {MaxXOR} from "./maxXOR";

describe("Given an array of integers", () => {
  it("should find the max XOR between any 2 numbers", () => {
    const maxXOR = new MaxXOR();
    expect(maxXOR.get([3,5])).to.be.equal(3 ^ 5);
    expect(maxXOR.get([3, 10, 5, 25, 2, 8])).to.be.equal(28);
  });
});