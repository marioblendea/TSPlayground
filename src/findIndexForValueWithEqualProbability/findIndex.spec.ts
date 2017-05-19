"use strict";
import { expect } from "chai";
import {FindIndexWithEqualProbability} from "./findIndex"

describe("Given an array with integers (including duplicates) and a given integer V", () => {
    it("should return an index for which arr[index] = V, with equal probability", () => {
        expect(FindIndexWithEqualProbability.get([], 0)).to.be.equal(-1);
        expect(FindIndexWithEqualProbability.get([1,2,2,2], 1)).to.be.equal(0);
        expect(FindIndexWithEqualProbability.get([1,2,2,2], 2)).to.be.within(1,3);
        expect(FindIndexWithEqualProbability.get([1,2,2,2,3,3,3,3], 2)).to.be.within(1,3);
    });
});