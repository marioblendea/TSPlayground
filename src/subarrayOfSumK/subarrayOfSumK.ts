export class SubarrayOfSumK {
  static get(num: number[], k: number): number {
    let result: number = 0;
    let seenSumMap: Map<number, number> = new Map(); // key is the sum, and value is how many times it has been seen
    let sumFromIdx0ToIdxI = 0;

    seenSumMap[0] = 1; // sum 0 has been seen 1 (if we take no items from the array)

    for (let i = 0; i < num.length; i++) {
      sumFromIdx0ToIdxI += num[i];

      const keyToFind = sumFromIdx0ToIdxI - k;
      if (seenSumMap[keyToFind]) {
        result += seenSumMap[keyToFind];
      }

      seenSumMap[sumFromIdx0ToIdxI] = (seenSumMap[sumFromIdx0ToIdxI] || 0) + 1;
    }

    return result;
  }
}