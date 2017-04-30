"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coins {
    static GetCoins(sum, coins) {
        if (sum <= 0) {
            return 0;
        }
        if (!coins.length) {
            return 0;
        }
        for (const coin of coins) {
            if (coin <= 0)
                return 0;
        }
        let resultVal = 0;
        let stack = new Array();
        let currentCoinIdx = 0;
        while (currentCoinIdx < coins.length) {
            let top = stack.length > 0 ? stack[stack.length - 1] : { sumAtLevel: 0, coinIndex: 0 };
            do {
                stack.push({
                    sumAtLevel: top.sumAtLevel + coins[currentCoinIdx],
                    coinIndex: currentCoinIdx
                });
                top = stack[stack.length - 1];
            } while (top.sumAtLevel < sum);
            if (top.sumAtLevel === sum)
                resultVal++;
            let pop;
            while ((pop = stack.pop()).coinIndex === coins.length - 1 && stack.length > 0) { }
            currentCoinIdx = pop.coinIndex + 1;
        }
        return resultVal;
    }
}
exports.Coins = Coins;
//# sourceMappingURL=coins.js.map