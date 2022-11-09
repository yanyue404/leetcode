'use strict';
require('mocha');
import chai from 'chai';
let expect = chai.expect;
import { twoSum1, twoSum2 } from '../src/Array/1.two-sum';

describe('twoSum', function () {
  it('should return [0,1]', function () {
    expect(twoSum1([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSum2([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });

  it('should return [1,2]', function () {
    expect(twoSum1([3, 2, 4], 6)).to.deep.equal([1, 2]);
    expect(twoSum1([3, 2, 4], 6)).to.deep.equal([1, 2]);
  });

  it('should return [0,1]', function () {
    expect(twoSum1([3, 3], 6)).to.deep.equal([0, 1]);
    expect(twoSum2([3, 3], 6)).to.deep.equal([0, 1]);
  });
});
