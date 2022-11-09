'use strict';
require('mocha');
import chai from 'chai';
let expect = chai.expect;

import {
  reverseString1,
  reverseString2,
  reverseString3,
} from '../src/TwoPointers/344.reverse-string';

describe('reverseString: reverseString1', function () {
  it("should return ['o', 'l', 'l', 'e', 'h']", function () {
    let s = ['h', 'e', 'l', 'l', 'o'];
    reverseString1(s);
    expect(s).to.deep.equal(['o', 'l', 'l', 'e', 'h']);
  });
  it('should return ["h","a","n","n","a","H"]', function () {
    let s = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString1(s);
    expect(s).to.deep.equal(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});

describe('reverseString: reverseString2', function () {
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

describe('reverseString: reverseString3', function () {
  it("should return ['o', 'l', 'l', 'e', 'h']", function () {
    let s = ['h', 'e', 'l', 'l', 'o'];
    reverseString3(s);
    expect(s).to.deep.equal(['o', 'l', 'l', 'e', 'h']);
  });
  it('should return ["h","a","n","n","a","H"]', function () {
    let s = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString3(s);
    expect(s).to.deep.equal(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
