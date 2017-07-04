import {expect} from "chai";
import {MaxGap} from "./maxGap";

describe("MaxGap - given an unsorted array", () => {
  it("it should return the maximum gap between any 2 elements in sorted order in O(n)", () => {
    const maxGap = new MaxGap();
    expect(maxGap.get([0, 5, 60, 3, 1, 7, 6, 80])).to.be.eq(53);
  });
});