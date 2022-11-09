'use strict';
require('mocha');
import chai from 'chai';
let expect = chai.expect;
import {
  lengthOfLongestSubstring1,
  lengthOfLongestSubstring2,
  lengthOfLongestSubstring3,
} from '../src/TwoPointers/3.longest-substring-without-repeating-characters';

describe('lengthOfLongestSubstring', function () {
  it('should return 3', function () {
    expect(lengthOfLongestSubstring1('abcabcbb')).to.equal(3);
    expect(lengthOfLongestSubstring2('abcabcbb')).to.equal(3);
    expect(lengthOfLongestSubstring3('abcabcbb')).to.equal(3);
  });

  it('should return 1', function () {
    expect(lengthOfLongestSubstring1('bbbbb')).to.equal(1);
    expect(lengthOfLongestSubstring2('bbbbb')).to.equal(1);
    expect(lengthOfLongestSubstring3('bbbbb')).to.equal(1);
  });

  it('should return 3', function () {
    expect(lengthOfLongestSubstring1('pwwkew')).to.equal(3);
    expect(lengthOfLongestSubstring2('pwwkew')).to.equal(3);
    expect(lengthOfLongestSubstring3('pwwkew')).to.equal(3);
  });
});
