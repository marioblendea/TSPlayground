import { expect } from 'chai';
import { Coins } from './coins';

describe("Coins", () => {
  before(() => {

  });

  it("should return 0 on invalid data", () => {
    expect(Coins.GetCoins(5, [])).to.be.equal(0);
    expect(Coins.GetCoins(-1, [1, 2, 3])).to.be.equal(0);
    expect(Coins.GetCoins(5, [3, 2, -1])).to.be.equal(0);
  });

  it("Should work when there is only one coin", () => {
    const coins: number = Coins.GetCoins(5, [5]);
    expect(coins).to.be.equal(1);
  });

  it("Should work ", () => {
    expect(Coins.GetCoins(5, [3, 2, 1])).to.be.equal(5);
    expect(Coins.GetCoins(5, [5, 2, 1])).to.be.equal(4);
    expect(Coins.GetCoins(3, [2])).to.be.equal(0);
  });

});