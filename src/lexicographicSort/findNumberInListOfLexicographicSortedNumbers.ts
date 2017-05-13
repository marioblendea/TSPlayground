"use strict";

export class FindNumberInListOfLexicographicSortedNumbers {
  public static findElementAtPosition(k: number, n: number): number {
    let result = 0;
    for (let i = 0; i < 10; i++){
      if (result === 0 && i === 0) continue; // numbers don't start with 0
      let maxWithCurrentNumberAndDigit = FindNumberInListOfLexicographicSortedNumbers.getMaxForCurrentNumberAndDigit(result, i, n);
      let remainingAfterUsingCurrentDigit = k - maxWithCurrentNumberAndDigit;
      if (remainingAfterUsingCurrentDigit === 0) {
        result = result * 10 + i;
        return result;
      }
      else if (remainingAfterUsingCurrentDigit < 0) {
        // go deep
        k--; // substract 1 for current number
        result = result * 10 + i;
        i = -1; // -1 so the for makes it 0
      }
      else {
        // just skip ahead
        k -= maxWithCurrentNumberAndDigit;
      }
    }
    return result;
  }

  private static getMaxForCurrentNumberAndDigit(currentResult:number, currentDigit: number, n: number): number {
    let j = 1;
    let result = 0;
    // compose newNumber using currentDigit + 1; if it is still less than n, then all j numbers can be made
    while ((currentResult * 10 + currentDigit + 1) * j < n){
      result += j;
      j *= 10;
    }
    // if not all j numbers can be made, see if some of them can
    let newNumberBase = (currentResult * 10 + currentDigit) * j;
    if (newNumberBase < n) {
      result += n - newNumberBase + 1;
    }
    return result;
  }
}