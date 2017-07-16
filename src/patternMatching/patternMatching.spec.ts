"use strict";

import {expect} from 'chai';
import {PatternMatching} from "./patternMatching";

describe("Pattern matching", () => {
  it("Recursive should return true if the string matching the regex expression (. - any char; * - 0 or more of the previous char)", () => {
    const patternMatching = new PatternMatching();
    expect(patternMatching.isMatchRecursive("abv", "abv")).to.be.eq(true);
    expect(patternMatching.isMatchRecursive("abv", "abc")).to.be.eq(false);
    expect(patternMatching.isMatchRecursive("abc", "a.c")).to.be.eq(true);
    expect(patternMatching.isMatchRecursive("abc", "a..")).to.be.eq(true);
    expect(patternMatching.isMatchRecursive("abc", "a.x")).to.be.eq(false);
    expect(patternMatching.isMatchRecursive("aaa", "a*")).to.be.eq(true);
    expect(patternMatching.isMatchRecursive("aaa", "a*b")).to.be.eq(false);
    expect(patternMatching.isMatchRecursive("aaab", "a*b")).to.be.eq(true);
    expect(patternMatching.isMatchRecursive("aaab", "x*a*b")).to.be.eq(true);
    expect(patternMatching.isMatchRecursive("xxxxxaaab", "x*a*b")).to.be.eq(true);
    expect(patternMatching.isMatchRecursive("abcxxxxxaaab", ".*a*b")).to.be.eq(true);
    try {
      patternMatching.isMatchRecursive("abcxxxxxaaab", ".*a**b");
    }catch(err) {
      expect(err).to.be.eq("invalid regex");
    }
  });

  it("DP - should return true if the string matching the regex expression (. - any char; * - 0 or more of the previous char)", () => {
    const patternMatching = new PatternMatching();
    expect(patternMatching.isMatchDP("abv", "abv")).to.be.eq(true);
    expect(patternMatching.isMatchDP("abv", "abc")).to.be.eq(false);
    expect(patternMatching.isMatchDP("abc", "a.c")).to.be.eq(true);
    expect(patternMatching.isMatchDP("abc", "a..")).to.be.eq(true);
    expect(patternMatching.isMatchDP("abc", "a.x")).to.be.eq(false);
    expect(patternMatching.isMatchDP("aaa", "a*")).to.be.eq(true);
    expect(patternMatching.isMatchDP("aaa", "a*b")).to.be.eq(false);
    expect(patternMatching.isMatchDP("aaab", "a*b")).to.be.eq(true);
    // expect(patternMatching.isMatchDP("aaab", "x*a*b")).to.be.eq(true);
    expect(patternMatching.isMatchDP("xxxxxaaab", "x*a*b")).to.be.eq(true);
    expect(patternMatching.isMatchDP("abcxxxxxaaab", ".*a*b")).to.be.eq(true);
    // try {
    //   patternMatching.isMatchRecursive("abcxxxxxaaab", ".*a**b");
    // }catch(err) {
    //   expect(err).to.be.eq("invalid regex");
    // }
  });

});