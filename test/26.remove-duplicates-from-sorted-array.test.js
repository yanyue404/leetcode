'use strict';
require('mocha');
var expect = require('chai').expect;
import { removeDuplicates } from '../src/Array/26.remove-duplicates-from-sorted-array';

describe('removeDuplicates', function () {
  it('should return 2', function () {
    let nums = [1, 1, 2];
    let copy = [...nums];
    let length = removeDuplicates(nums);
    expect(length).to.equal(2);

    new Array(length).fill('1').forEach((v, i) => {
      expect(nums[i]).to.equal([...new Set(copy)][i]);
    });
  });

  it('should return 5', function () {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let copy = [...nums];
    let length = removeDuplicates(nums);
    expect(length).to.equal(5);

    new Array(length).fill('1').forEach((v, i) => {
      expect(nums[i]).to.equal([...new Set(copy)][i]);
    });
  });
});
