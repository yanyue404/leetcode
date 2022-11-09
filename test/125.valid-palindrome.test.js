'use strict';
require('mocha');
import chai from 'chai';
let expect = chai.expect;

import { isPalindrome } from '../src/TwoPointers/125.valid-palindrome';

describe('isPalindrome', function () {
  it('should return true', function () {
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true);
  });
  it('should return false', function () {
    expect(isPalindrome('race a cara')).to.not.equal(true);
  });
});
