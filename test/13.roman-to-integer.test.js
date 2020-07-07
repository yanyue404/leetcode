'use strict';
require('mocha');
var expect = require('chai').expect;
const {
  romanToInt,
  romanToInt999,
} = require('../src/String/13.roman-to-integer');

describe('romanToInt', function () {
  it('III should return 3', function () {
    expect(romanToInt('III')).to.equal(3);
  });
  it('IV should return 4', function () {
    expect(romanToInt('IV')).to.equal(4);
  });
  it('IX should return 9', function () {
    expect(romanToInt('IX')).to.equal(9);
  });
  it('LVIII should return 58', function () {
    expect(romanToInt('LVIII')).to.equal(58);
  });
  it('MCMXCIV should return 1994', function () {
    expect(romanToInt('MCMXCIV')).to.equal(1994);
  });
});

describe('romanToInt999', function () {
  it('III should return 3', function () {
    expect(romanToInt999('III')).to.equal(3);
  });
  it('IV should return 4', function () {
    expect(romanToInt999('IV')).to.equal(4);
  });
  it('IX should return 9', function () {
    expect(romanToInt999('IX')).to.equal(9);
  });
  it('LVIII should return 58', function () {
    expect(romanToInt999('LVIII')).to.equal(58);
  });
  it('MCMXCIV should return 1994', function () {
    expect(romanToInt999('MCMXCIV')).to.equal(1994);
  });
});
