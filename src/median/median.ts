export class Median {
  constructor() {

  }

  get(a: number[], b: number[]): number {
    let aLow = 0, aHigh = a.length - 1;
    let bLow = 0, bHigh = b.length - 1;

    while (true) {
      let i = Math.ceil((aLow + aHigh) / 2) ;
      let j = Math.floor((a.length + b.length) / 2) - i;
      // console.log(`i=${i}; j=${j}`);
      if (i === 0 || a[i - 1] > b[j]) {
        aHigh = i - 1;
      }
      else if (j === 0 || a[i] < b[j - 1]) {
        aLow = i + 1;
      }
      else {
        // console.log(`i=${i}; j=${j}`);
        return (Math.max(a[i - 1], b[j - 1]) + Math.min(a[i], b[j])) / 2;
      }
    }
  }
}