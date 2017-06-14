"use strict";

import {expect} from 'chai';
import {CitySkyline} from "./citySkyline";
import {MaxHeap} from "./citySkyline";

describe("max heap", () => {
  it("should work", () => {
    const mh = new MaxHeap();
    mh.insert(5);
    expect(mh.getMax()).to.be.eq(5);
    mh.insert(7);
    expect(mh.getMax()).to.be.eq(7);
    mh.insert(6);
    expect(mh.getMax()).to.be.eq(7);
    mh.remove(7);
    expect(mh.getMax()).to.be.eq(6);
    mh.remove(5);
    expect(mh.getMax()).to.be.eq(6);
  });
});

describe("Given a set of buildings (leftX, height, rightX), sorted by x on the left side" , () => {
  it("should print the city skyline (the points on which a horizontal segment starts)", () => {
    expect(CitySkyline.get([{leftX:1, height:5, rightX:2}])).to.be.deep.eq([{x: 1, y: 5}]);
    expect(CitySkyline.get([{leftX:1, height:5, rightX:6}, {leftX:2, height:4, rightX:8}])).to.be.deep.eq([{x: 1, y: 5}, {x: 6, y: 4}]);
    expect(CitySkyline.get([
      {leftX:1, height:5, rightX:3},
      {leftX:2, height:4, rightX:5},
      {leftX:4, height:6, rightX:6}]))
      .to.be.deep.eq([{x: 1, y: 5}, {x: 3, y: 4}, {x: 4, y:6}]);
    expect(CitySkyline.get([
      {leftX:1, height:5, rightX:3},
      {leftX:4, height:6, rightX:6}]))
      .to.be.deep.eq([{x: 1, y: 5}, {x: 3, y: 0}, {x: 4, y:6}]);
  });
});