"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const coins_1 = require("./coins");
describe("Coins", () => {
    before(() => {
    });
    it("should return 0 on invalid data", () => {
        chai_1.expect(coins_1.Coins.GetCoins(5, [])).to.be.equal(0);
        chai_1.expect(coins_1.Coins.GetCoins(-1, [1, 2, 3])).to.be.equal(0);
        chai_1.expect(coins_1.Coins.GetCoins(5, [3, 2, -1])).to.be.equal(0);
    });
    it("Should work when there is only one coin", () => {
        const coins = coins_1.Coins.GetCoins(5, [5]);
        chai_1.expect(coins).to.be.equal(1);
    });
    it("Should work ", () => {
        chai_1.expect(coins_1.Coins.GetCoins(5, [3, 2, 1])).to.be.equal(5);
        chai_1.expect(coins_1.Coins.GetCoins(5, [5, 2, 1])).to.be.equal(4);
        chai_1.expect(coins_1.Coins.GetCoins(3, [2])).to.be.equal(0);
    });
});
//# sourceMappingURL=coins.spec.js.map