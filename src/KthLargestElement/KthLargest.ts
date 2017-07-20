export class KthLargest{
  get(arr: number[], k: number): number {
    k = k - 1;
    let loIdx = 0;
    let hiIdx = arr.length - 1;
    while (loIdx < hiIdx) {
      let p = this.partition(arr, loIdx, hiIdx);
      if (k < p) {
        hiIdx = p - 1;
      } else if (k > p) {
        loIdx = p + 1;
      } else {
        break;
      }
    }

    return arr[k];
  }

  private partition(arr: number[], loIdx: number, hiIdx: number): number {
    let i = loIdx + 1;
    let j = hiIdx;
    let pivot = arr[loIdx];
    while (true) {
      while (pivot < arr[i] && i < hiIdx) { i++; }
      while (pivot > arr[j] && j > loIdx) { j--; }
      if (i >= j) {
        this.swap(arr, loIdx, j);
        break;
      }

      this.swap(arr, i, j);
    }

    return j;
  }

  private swap(arr: number[], i: number, j: number) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}