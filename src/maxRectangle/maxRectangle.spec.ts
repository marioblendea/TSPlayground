"use strict";

import { expect } from 'chai';
import { MaxRectangle } from './maxRectangle';

// given an array of numbers representing the height at each point, find out the maximum size rectangle that can be formed in that structure. For example, 2,1, 3 means something like this:
//
//
// 3    |-|
// 2|-| | |
// 1| |-| |
// 0-----------
describe("Maximum size rectangle", () => {
  it("should return the max size", () => {
    expect(MaxRectangle.getMaxRectangle([10])).to.be.equal(10);
    expect(MaxRectangle.getMaxRectangle([2,1,5,6,2,3])).to.be.equal(10);
    expect(MaxRectangle.getMaxRectangle([5,7,9,7,8,4,6,10,11,2])).to.be.equal(36);
  });
});