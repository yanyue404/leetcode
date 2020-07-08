'use strict';
require('mocha');
var expect = require('chai').expect;
import { removeDuplicates } from '../src/Array/26.remove-duplicates-from-sorted-array';

describe('removeDuplicates', function () {
  it('should return 2', function () {
    let nums = [1, 1, 2];
    expect(removeDuplicates(nums)).to.equal(2);
  });
});
