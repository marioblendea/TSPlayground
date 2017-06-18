"use strict";

export class MaxXOR {
  get(arr: number[]): number {
    let max = 0;
    let mask = 0;
    for(let i = 31; i >= 0; i--) {
      mask = mask | 1 << i;
      let set = new Set<number>();
      arr.forEach(val => {
        set.add(val & mask);
      });

      const tmp = max | 1 << i;
      set.forEach(val => {
        if (set.has(val ^ tmp)) {
          max = tmp;
          return;
        }
      });
    }
    return max;
  }

}
