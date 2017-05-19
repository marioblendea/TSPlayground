import { expect } from 'chai';
import { SubarrayOfSumK } from './subarrayOfSumK';

describe("Continuous subarray of sum K", () => {
  it("should calculate the count of all continous subarrays of sum K in the given array", () => {
    expect(SubarrayOfSumK.get([], 0)).to.be.equal(0);
    expect(SubarrayOfSumK.get([1,1,1], 2)).to.be.equal(2);
    expect(SubarrayOfSumK.get([1,5,7,-1,3,3,6,0,6], 6)).to.be.equal(7);
  });
});