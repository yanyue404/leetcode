'use strict';
require('mocha');
import chai from 'chai';
let expect = chai.expect;
import { twoSum, twoSum2, twoSum3 } from '../src/Array/1.two-sum';

describe('twoSum', function () {
  it('should return [0,1]', function () {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });
});

describe('twoSum2', function () {
  it('should return [0,1]', function () {
    expect(twoSum2([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });
});

describe('twoSum3', function () {
  it('should return [0,1]', function () {
    expect(twoSum3([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });
});
