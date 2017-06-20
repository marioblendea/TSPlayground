"use strict";

import {expect} from 'chai';
import {MHT} from "./mht";

describe("Minimum height tree", () => {
  it("should return the nodes that are the roots of all minimum height trees in a graph", () => {
    const mht = new MHT();
    expect(mht.getRoots(3, [[0,2], [0,1]])).to.be.deep.eq([0]);
    expect(mht.getRoots(4, [[0,2], [0,1], [2,3]])).to.be.deep.eq([0, 2]);
    expect(mht.getRoots(4, [[1, 0], [1, 2], [1, 3]])).to.be.deep.eq([1]);
    expect(mht.getRoots(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]])).to.be.deep.eq([3, 4]);
  });
});