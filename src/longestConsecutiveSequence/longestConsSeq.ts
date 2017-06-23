export class LongestConsecutiveSequence {
  get(arr: number[]): number {
    let max = -1;
    let map = new Map<number, number>();
    for(let i of arr) {
      if (map[i] !== undefined) continue; // dupe
      let rightLen = map[i + 1] || 0;
      let leftLen = map[i - 1] || 0;
      let sum = rightLen + leftLen + 1;
      max = sum > max ? sum : max;
      map[i - leftLen] = sum;
      map[i + leftLen] = sum;
      if (leftLen > 0 && rightLen > 0) map[i] = sum;
    }
    return max;
  }
}