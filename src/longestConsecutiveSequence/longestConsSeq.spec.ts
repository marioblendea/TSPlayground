"use strict";

import {expect} from 'chai';
import {LongestConsecutiveSequence} from "./longestConsSeq";

describe("Longest consecutive sequence", () => {
  it("should return the count of elements that form a consecutive sequence in an array that is not sorted in O(n)", () => {
    const lcs = new LongestConsecutiveSequence();
    expect(lcs.get([100, 4, 200, 3, 1, 2])).to.be.equal(4);
    expect(lcs.get([100, 4, 200, 3, 1, 2, 3, 1])).to.be.equal(4);
    expect(lcs.get([100, 4, 200, 3, 202, 202, 204, 1, 2, 205, 203, 199, 3, 1, 201])).to.be.equal(7);
    expect(lcs.get([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).to.be.equal(9);
  });
});