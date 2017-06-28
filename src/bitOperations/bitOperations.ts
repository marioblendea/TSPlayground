export class BitOperations {
  public setBit(n: number, k: number): number {
    return n | (1 << k);
  }

  public resetBit(n: number, k: number): number {
    return n & (~(1 << k));
  }

  public toggleBit(n: number, k: number): number {
    return n ^ ( 1<< k);
  }

  public checkBit(n: number, k: number): boolean {
    return (n & ( 1<< k)) !== 0;
  }

  public invert(n: number): number {
    return ~n;
  }

  public twosComplement(n: number): number{
    return ~n + 1;
  }

  public stripLowestSetBit(n: number): number {
    return n & (n - 1); // n-1 will revert all bits until the lowest set bit (inclusive) and leave the others unchanged.
    // & between those two numbers will 0 out everything up to the lowest set bit (inclusive)
  }

  public getLowestSetBit(n: number): number {
    return n & -n;
    // same as:
    // return n & (~this.stripLowestSetBit(n));
  }
}