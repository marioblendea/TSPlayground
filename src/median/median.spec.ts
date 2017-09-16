"use strict";

import {expect} from 'chai';
import {Median} from "./median";

describe("Given 2 sorted arrays", () => {
  it ("should find the median in O(log(nm))", () => {
    const m = new Median();
    expect(m.get([1, 3], [2, 4])).to.be.eq(2.5);
    expect(m.get([1, 3, 5], [2, 4, 6])).to.be.eq(3.5);
    // TODO: handle odd length
    // expect(m.get([1, 3, 5], [2, 4])).to.be.eq(3);
  });
});