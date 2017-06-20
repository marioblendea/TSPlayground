"use strict";

import {expect} from 'chai';
import {MHT} from "./mht";

describe("Minimum height tree", () => {
  it("should return the nodes that are the roots of all minimum height trees in a graph", () => {
    const mht = new MHT();
    // expect(mht.getRoots(3, [[0,2], [0,1]])).to.be.deep.eq([0]);
    expect(mht.getRoots(4, [[0,2], [0,1], [2,3]])).to.be.deep.eq([0, 2]);
  });
});