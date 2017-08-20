
export class SubstringWithoutRepeatingChars {
  public get(s: string): number {
    if (!s) return 0;

    let max = 0;
    let start = 0;
    let end = 1;
    let foundCharToPosMap = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
      if (foundCharToPosMap.has(s[i])) {
        start = foundCharToPosMap.get(s[i]) + 1;

        foundCharToPosMap.forEach((val: number, key: string, map: Map<string, number>) => {
          if (val < start) map.delete(key);
        });
      }

      if (end - start > max) max = end - start;

      foundCharToPosMap.set(s[i], i);
      end++;
    }

    return max;
  }
}