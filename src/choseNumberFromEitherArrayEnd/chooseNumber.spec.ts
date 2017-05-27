"use strict";

import { ChooseNumber } from "./chooseNumber";
import { expect } from "chai";

describe("Given an array of numbers, and two players, on each turn a player can choose a number from either end of the array. The player with larger sum wins", () => {
  it("should retun true if the first user can win and false otherwise", () => {
    expect(ChooseNumber.canFirstPlayerWin([1,5,3,7])).to.be.eq(true);
    expect(ChooseNumber.canFirstPlayerWin([1,10,5])).to.be.eq(false);
    expect(ChooseNumber.canFirstPlayerWin([1,5,9,3,7,2,6])).to.be.eq(false);
  });

});