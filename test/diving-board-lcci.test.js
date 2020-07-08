'use strict';
require('mocha');
var expect = require('chai').expect;
const divingBoard = require('../src/String/diving-board-lcci');

describe('divingBoard', function () {
  it('should return {3,4,5,6}', function () {
    expect(divingBoard(1, 2, 3)).to.deep.equal([3, 4, 5, 6]);
  });
  it('should return {}', function () {
    expect(divingBoard(1, 1, 0)).to.deep.equal([]);
  });
  it('should return {6}', function () {
    expect(divingBoard(2, 2, 3)).to.deep.equal([6]);
  });
});
