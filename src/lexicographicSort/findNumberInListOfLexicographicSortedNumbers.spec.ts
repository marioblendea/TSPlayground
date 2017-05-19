"use strict";
import { expect } from "chai";
import { FindNumberInListOfLexicographicSortedNumbers } from "./findNumberInListOfLexicographicSortedNumbers";
import { LexicographicOrder } from "./listNumbersInLexicographicOrder";


describe("Lexicographic order", () => {
  it("should find K-th element in a list of numbers less than N", () => {
    let result: number[] = LexicographicOrder.getAll(9);
    expect(FindNumberInListOfLexicographicSortedNumbers.findElementAtPosition(5,9)).to.be.equal(result[5 - 1]); // -1 is for 0 based index
    result = LexicographicOrder.getAll(15);
    expect(FindNumberInListOfLexicographicSortedNumbers.findElementAtPosition(3,15)).to.be.equal(result[3 - 1]); // -1 is for 0 based index
    result = LexicographicOrder.getAll(15);
    expect(FindNumberInListOfLexicographicSortedNumbers.findElementAtPosition(14,15)).to.be.equal(result[14 - 1]); // -1 is for 0 based index
    result = LexicographicOrder.getAll(20);
    expect(FindNumberInListOfLexicographicSortedNumbers.findElementAtPosition(14,20)).to.be.equal(result[14 - 1]); // -1 is for 0 based index
    result = LexicographicOrder.getAll(270);
    expect(FindNumberInListOfLexicographicSortedNumbers.findElementAtPosition(231,270)).to.be.equal(result[231 - 1]); // -1 is for 0 based index
    result = LexicographicOrder.getAll(2700);
    expect(FindNumberInListOfLexicographicSortedNumbers.findElementAtPosition(231,2700)).to.be.equal(result[231 - 1]); // -1 is for 0 based index
  });
});
