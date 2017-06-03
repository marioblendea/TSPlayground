import { expect } from "chai";
import { ReversePairsFind } from "./findNumbersThatFollowMeAndAreHalfOrLess";

describe("Given an array of integers", () => {

  it("should print the count of pairs where i < j and arr[i] >= arr[j]*2", () => {
    expect(ReversePairsFind.FindReversePairsCount([10])).to.be.eq(0);
    expect(ReversePairsFind.FindReversePairsCount([5, 10])).to.be.eq(0);
    expect(ReversePairsFind.FindReversePairsCount([10, 5])).to.be.eq(1);
    expect(ReversePairsFind.FindReversePairsCount([8, 4, 2, 6, 3, 9])).to.be.eq(5);
    expect(ReversePairsFind.FindReversePairsCount([8, 4, 1, 1])).to.be.eq(5);
    expect(ReversePairsFind.FindReversePairsCount([8, 4, 2, 6, 3, 9, 1, 1])).to.be.eq(17);
  });
});