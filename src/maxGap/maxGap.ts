export class MaxGap {

  get(arr: number[]): number {
    // find min and max
    let min = Number.MAX_VALUE;
    let max = -Number.MIN_VALUE;
    for(let n of arr) {
      min = Math.min(min, n);
      max = Math.max(max, n);
    }
    // console.log("min:" + min + " max:" + max);

    // calculate # of buckets
    const bucketCount = Math.floor((max - min) / arr.length) + 1;

    // put elements into buckets
    const buckets = new Array<IBucketValue>(bucketCount);
    for(let n of arr) {
      const bucketIdx = Math.floor((n - min) / bucketCount);
      if (!buckets[bucketIdx]) 
        buckets[bucketIdx] = {
          max: -Number.MIN_VALUE,
          min: Number.MAX_VALUE
        }; 
      const bucket = buckets[bucketIdx];
      bucket.max = Math.max(bucket.max, n);
      bucket.min = Math.min(bucket.min, n);
      // console.log(n + "goes into bucket: " + bucketIdx + "with min: "+ bucket.min + " and max:" + bucket.max);
    }

    // find biggest gap
    let maxGap = -Number.MIN_VALUE;
    for(let i=0; i < buckets.length - 1; i++) {
      if (!buckets[i]) continue;
      for(let j = i + 1; j < buckets.length; j++) {
        if (!buckets[j]) continue;
        maxGap = Math.max(maxGap, buckets[j].min - buckets[i].max);
        i = j - 1;
        break;
      }
    }
    return maxGap;
  }

}

interface IBucketValue{
  min: number;
  max: number;
}