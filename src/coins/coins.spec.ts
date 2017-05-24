import { expect } from 'chai';
import { Coins } from './coins';

describe("Coins", () => {
  before(() => {

  });

  it("should return 0 on invalid data", () => {
    expect(Coins.GetCoinsBacktracking(5, [])).to.be.equal(0);
    expect(Coins.GetCoinsBacktracking(-1, [1, 2, 3])).to.be.equal(0);
    expect(Coins.GetCoinsBacktracking(5, [3, 2, -1])).to.be.equal(0);
  });

  it("Should work when there is only one coin", () => {
    const coins: number = Coins.GetCoinsBacktracking(5, [5]);
    expect(coins).to.be.equal(1);
  });

  it("Should return the number of ways a sum can be payed with coins of given denominations ", () => {
    expect(Coins.GetCoinsBacktracking(5, [3, 2, 1])).to.be.equal(5);
    expect(Coins.GetCoinsBacktracking(5, [5, 2, 1])).to.be.equal(4);
    expect(Coins.GetCoinsBacktracking(3, [2])).to.be.equal(0);
  });

  it("Should return the number of ways a sum can be payed with coins of given denominations using DP ", () => {
    expect(Coins.getCoinsDP(1, [1])).to.be.equal(1);
    expect(Coins.getCoinsDP(2, [1])).to.be.equal(1);
    expect(Coins.getCoinsDP(5, [1, 2, 3])).to.be.equal(5);
    expect(Coins.getCoinsDP(5, [1, 2, 5])).to.be.equal(4);
    expect(Coins.getCoinsDP(3, [2])).to.be.equal(0);
  });

});