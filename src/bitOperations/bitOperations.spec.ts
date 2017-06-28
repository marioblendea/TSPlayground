"use strict";

import {expect} from 'chai';
import {BitOperations} from './bitOperations';

describe("Bit Operations", () => {
  let bitOper: BitOperations;
  before(()=>{
    bitOper = new BitOperations();
  });

  it("should set a bit", () => {
    expect(bitOper.setBit(10, 2)).to.be.eq(14);
    expect(bitOper.setBit(731, 5)).to.be.eq(763);
  });

  it('should reset a bit', () => {
    expect(bitOper.resetBit(10,1)).to.be.eq(8);
  });

  it('should toggle a bit', () => {
    expect(bitOper.toggleBit(10,1)).to.be.eq(8);
    expect(bitOper.toggleBit(10,2)).to.be.eq(14);
  });

  it('should return true if bit is set', () => {
    expect(bitOper.checkBit(10,1)).to.be.eq(true);
    expect(bitOper.checkBit(10,2)).to.be.eq(false);
  });

  it('should invert all bits', () => {
    expect(bitOper.invert(10)).to.be.eq(-11);
  });

  it("should return the 2's complement", () => {
    expect(bitOper.twosComplement(10)).to.be.eq(-10);
  });

  it("should strip the lowest set bit", () => {
    expect(bitOper.stripLowestSetBit(10)).to.be.eq(8);
    expect(bitOper.stripLowestSetBit(11)).to.be.eq(10);
  });

  it("should get the lowest set bit", () => {
    expect(bitOper.getLowestSetBit(10)).to.be.eq(2);
  });
  
  it("should return the 2's complement", () => {
    expect(bitOper.twosComplement(10)).to.be.eq(-10);
  });
  
});