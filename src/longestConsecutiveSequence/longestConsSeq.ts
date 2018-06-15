export class LongestConsecutiveSequence {
  get(arr: number[]): number {
    let max = -1;

    // Map between each element in the array and the length of the consecutive sequence that can be formed including it
    // - duplicated iteams in the arry are ignored
    let map = new Map<number, number>();

    // For each element in the array, see if you can add it to an existing consecutive sequence, 
    // by checking to see if itself - 1 and/or itself + 1 is in the map already
    for(let i of arr) {
      if (map[i] !== undefined) continue; // dupe - igonore
      let rightLen = map[i + 1] || 0; // the length of the consecutive sequence that starts right after this element
      let leftLen = map[i - 1] || 0; // the length of the consecutive sequence that ends right before this element
      let maxCurr = rightLen + leftLen + 1; // the length of the sequence on the left + current element + the length of the sequence on the right
      max = maxCurr > max ? maxCurr : max; // update max if needed
      map[i - leftLen] = maxCurr; // fix the length for the sequence on the left
      map[i + rightLen] = maxCurr; // fix the length for the sequence on the right
      if (leftLen > 0 && rightLen > 0) map[i] = maxCurr; // if leftLen and rightLen are > 0, map[i] is not updated on the prev 2 lines, so update it now
    }
    return max;
  }
}