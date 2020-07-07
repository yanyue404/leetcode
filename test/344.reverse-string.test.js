'use strict';
require('mocha');
var expect = require('chai').expect;
const {
  reverseString,
  reverseString2,
} = require('../src/String/344.reverse-string');

describe('reverseString', function () {
  it("should return ['o', 'l', 'l', 'e', 'h']", function () {
    let s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
    expect(s).to.deep.equal(['o', 'l', 'l', 'e', 'h']);
  });
  it('should return ["h","a","n","n","a","H"]', function () {
    let s = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(s);
    expect(s).to.deep.equal(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});

describe('reverseString2', function () {
  it("should return ['o', 'l', 'l', 'e', 'h']", function () {
    let s = ['h', 'e', 'l', 'l', 'o'];
    reverseString2(s);
    expect(s).to.deep.equal(['o', 'l', 'l', 'e', 'h']);
  });
  it('should return ["h","a","n","n","a","H"]', function () {
    let s = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString2(s);
    expect(s).to.deep.equal(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
