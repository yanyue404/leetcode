'use strict';
require('mocha');
var expect = require('chai').expect;
const isPalindrome = require('../src/String/125.valid-palindrome');

describe('isPalindrome', function () {
  it('should return true', function () {
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true);
  });
  it('should return false', function () {
    expect(isPalindrome('race a cara')).to.not.equal(true);
  });
});
