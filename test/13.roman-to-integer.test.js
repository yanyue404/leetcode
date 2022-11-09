'use strict';
require('mocha');
import chai from 'chai';
let expect = chai.expect;

import { romanToInt1, romanToInt2 } from '../src/String/13.roman-to-integer';

describe('romanToInt', function () {
  it('III should return 3', function () {
    expect(romanToInt1('III')).to.equal(3);
    expect(romanToInt2('III')).to.equal(3);
  });
  it('IV should return 4', function () {
    expect(romanToInt1('IV')).to.equal(4);
    expect(romanToInt2('IV')).to.equal(4);
  });
  it('IX should return 9', function () {
    expect(romanToInt1('IX')).to.equal(9);
    expect(romanToInt2('IX')).to.equal(9);
  });
  it('LVIII should return 58', function () {
    expect(romanToInt1('LVIII')).to.equal(58);
    expect(romanToInt2('LVIII')).to.equal(58);
  });
  it('MCMXCIV should return 1994', function () {
    expect(romanToInt1('MCMXCIV')).to.equal(1994);
    expect(romanToInt2('MCMXCIV')).to.equal(1994);
  });
});
