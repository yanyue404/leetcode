'use strict';
require('mocha');
import chai from 'chai';
let expect = chai.expect;

import {
  firstUniqChar1,
  firstUniqChar2,
} from '../src/String/387.first-unique-character-in-a-string';

describe('firstUniqChar', function () {
  it('should return 0', function () {
    expect(firstUniqChar1('leetcode')).to.equal(0);
    expect(firstUniqChar2('leetcode')).to.equal(0);
  });
  it('should return 2', function () {
    expect(firstUniqChar1('loveleetcode')).to.equal(2);
    expect(firstUniqChar2('loveleetcode')).to.equal(2);
  });
  it('should return -1', function () {
    expect(firstUniqChar1('')).to.equal(-1);
    expect(firstUniqChar2('')).to.equal(-1);
  });
});
