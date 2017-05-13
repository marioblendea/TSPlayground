"use strict";

export class LexicographicOrder {
  static getAll(n: number): number[] {
    let result: number[] = [];
    if (n < 1) return result;

    let current: number = 1;
    let done: boolean = false;
    while(current <= n && !done) {
      result.push(current);
      if (current * 10 <= n) {
        current *= 10;
      } else {
        current++;
        while (current % 10 === 0) {
          current = Math.floor(current / 10);
          if (current <= 1) return result;
        }
        if (current > n) {
          current = Math.floor(current / 10) + 1;
          if (current <= 1) return result;
        }
      }
    }
    return result;
  }
}