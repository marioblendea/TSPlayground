export class ReversePairsFind {
  public static FindReversePairsCount(arr: number[]): number {
    if (!arr || arr.length - 1 <= 0) return 0;
    return this.findReverseSubPairs(arr, 0, arr.length - 1);
  }

  private static findReverseSubPairs(arr: number[], left: number, right: number): number {
    if (left === right) return 0;

    const mid: number = left + ((right - left) >> 1);
    let res = this.findReverseSubPairs(arr, left, mid);
    res += this.findReverseSubPairs(arr, mid + 1, right);
    res += this.combine(arr, left, mid, right);
    return res;
  }

  private static combine(arr: number[], left: number, mid: number, right: number): number {
    let itLeft: number = left;
    let itRight: number = mid + 1;
    let merged: number[] = new Array(right - left + 1);
    let itMerged: number = 0;
    let res = 0;
    let prevRes = 0;
    let itRight2 = mid + 1;
    while (itLeft <= mid) {
      // iterate over all items that are less than half the size of arr[itLeft]
      while (itRight2 <= right && arr[itLeft] >= arr[itRight2] * 2) {
        itRight2++;
      }
      res += itRight2 - (mid + 1); // add the number of elements from the begining of the array to where we stopped

      // merge the array
      while (itRight <= right && arr[itLeft] > arr[itRight]) {
        merged[itMerged ++] = arr[itRight ++];
      }
      merged[itMerged ++] = arr[itLeft ++];
    }
    // copy what's left from right
    while (itRight <= right) {
      merged[itMerged ++] = arr[itRight ++];
    }

    this.copyMergedIntoArr(merged, arr, left);
    return res;
  }

  private static copyMergedIntoArr(merged: number[], arr: number[], start: number) {
    for(let i = 0; i < merged.length; i++) {
      arr[start + i] = merged[i];
    }
  }
}