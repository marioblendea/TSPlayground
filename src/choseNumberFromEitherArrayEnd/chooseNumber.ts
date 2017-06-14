"use strict";


export class ChooseNumber{
  static canFirstPlayerWin(arr: number[]): boolean {
    const dp: number[][] = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      dp[i] = new Array(arr.length);
      dp[i][i] = arr[i];
      // console.log(`dp[${i}][${i}] = ${dp[i][i]}`);
    }

    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        dp[j][j + i] = Math.max(arr[j] - dp[j + 1][j + i], arr[j + i] - dp[j][j + i - 1]);
        // console.log(`dp[${j}][${j + i}] = ${dp[j][j + i]}`);
      }
    }
    return dp[0][arr.length - 1] >= 0;
  }
}