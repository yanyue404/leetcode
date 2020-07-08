/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k == 0) return [];
  if (shorter == longer) return [k * shorter];
  const res = [];
  for (let i = 0; i <= k; i++) {
    res.push(i * longer + (k - i) * shorter);
  }
  return res;
};

module.exports = divingBoard;
