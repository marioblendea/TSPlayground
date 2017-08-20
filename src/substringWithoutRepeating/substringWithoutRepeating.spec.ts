import { expect } from "chai";
import { SubstringWithoutRepeatingChars } from "./substringWithoutRepeating";

describe("Given a string", () => {
  it("should find the length of longest substring without repeating characters", () => {
    let s = new SubstringWithoutRepeatingChars();
    expect(s.get("")).to.be.eq(0);
    expect(s.get("abc")).to.be.eq(3);
    expect(s.get("abca")).to.be.eq(3);
    expect(s.get("abcad")).to.be.eq(4);
  });
});