export class Coins {
  public static GetCoinsBacktracking(sum: number, coins: number[]): number {
    // coins is expected to be sorted big to small
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
    let stack: ILevelData[] = new Array<ILevelData>();
    let currentCoinIdx: number = 0;

    while (currentCoinIdx < coins.length) {
      let top = stack.length > 0 ? stack[stack.length - 1] : { sumAtLevel: 0, coinIndex: 0};
      do {
        stack.push({
          sumAtLevel: top.sumAtLevel + coins[currentCoinIdx],
          coinIndex: currentCoinIdx
        });
        top = stack[stack.length - 1];
      }while(top.sumAtLevel < sum);

      if (top.sumAtLevel === sum)
        resultVal ++;

      let pop: ILevelData;
      while ((pop = stack.pop()).coinIndex === coins.length - 1 && stack.length > 0) {}

      currentCoinIdx = pop.coinIndex + 1;
    }
    return resultVal;
  }

  public static getCoinsDP(sum: number, coins: number[]): number
  {
    // coins is expected to be sorted small to big
    // dp[i][j] -  how many ways you can make sum i using coins up to [0..j-1]
    let dp: number[][] = new Array(sum + 1);
    for (let i = 0; i <= sum; i++) {
      dp[i] = new Array(coins.length + 1);
      dp[i][0] = 0; // there are no ways to make any sum with no coins 
      dp[i][1] = i % coins[0] === 0 ? 1 : 0; // if sum is divisible by the value of the first coin, there is 1 way to make the sum using just that coin; if not there are no ways
    }

    // sum 0 can be made with any coin in just 1 way; this is a sentinel to simplify logic in the main loop
    for(let j=0;j<=coins.length;j++) {
      dp[0][j] = 1;
    }

    for (let i = 1; i <= sum; i++) {
      for (let j = 2; j <=  coins.length; j++) {
        // to make sum i using coins from 0 to j, is the sum of how many ways you can make i using coins from 0 to j-1 + how many ways you can make the sum i-value of the j coin using coins from 0 to j
        dp[i][j] = dp[i][j-1] + (i - coins[j-1] >= 0 ? dp[i-coins[j-1]][j] : 0);
      }
    }
    return dp[sum][coins.length];
  }
}

interface ILevelData {
  sumAtLevel: number;
  coinIndex: number;
}