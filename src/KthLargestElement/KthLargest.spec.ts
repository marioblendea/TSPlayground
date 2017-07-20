"use strict";

import {expect} from 'chai';
import {KthLargest} from "./KthLargest";

describe("Kth Largest", () => {
  it("Find the k-th largest element in an unsorted array using partiniong", () => {
    const kthLargest = new KthLargest();
    expect(kthLargest.get([3, 7, 4, 1, 6, 2, 8, 5], 2)).to.be.eq(7);
  });
});
