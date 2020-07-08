'use strict';
require('mocha');
var expect = require('chai').expect;
const {
  firstUniqChar,
  firstUniqChar2,
} = require('../src/String/387.first-unique-character-in-a-string');

describe('firstUniqChar', function () {
  it('should return 0', function () {
    expect(firstUniqChar('leetcode')).to.equal(0);
  });
  it('should return 2', function () {
    expect(firstUniqChar('loveleetcode')).to.equal(2);
  });
  it('should return -1', function () {
    expect(firstUniqChar('')).to.equal(-1);
  });
});

describe('firstUniqChar2', function () {
  it('should return 0', function () {
    expect(firstUniqChar2('leetcode')).to.equal(0);
  });
  it('should return 2', function () {
    expect(firstUniqChar2('loveleetcode')).to.equal(2);
  });
  it('should return -1', function () {
    expect(firstUniqChar2('')).to.equal(-1);
  });
});
