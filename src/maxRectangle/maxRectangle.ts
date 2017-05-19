"use strict";

interface Min{
  value: number;
  index: number;
}

export class MaxRectangle {
  private static _input: number [];

  static getMaxRectangle(input: number[]): number {
    this._input = input;
    let max: number = -1;

    max = MaxRectangle.getMax(0, input.length - 1, max);
    return max;
  }

  private static getMax(start: number, end: number, max: number): number {
    if (start > end) {
      return -1;
    }
    if (start === end) {
      return this._input[start];
    }
    let min: Min = MaxRectangle.findMin(start, end);
    const maxLeft = MaxRectangle.getMax(start, min.index - 1, max);
    const maxRight = MaxRectangle.getMax(min.index + 1, end, max);
    return Math.max(maxLeft, maxRight, min.value * (end - start + 1));
  }

  private static findMin(start: number, end: number): Min {
    let min = {
      value: Number.MAX_SAFE_INTEGER,
      index: -1
    };
    for(let i: number = start; i <= end; i++) {
      if (this._input[i] < min.value) {
        min.value = this._input[i];
        min.index = i;
      }
    }
    return min;
  }
}