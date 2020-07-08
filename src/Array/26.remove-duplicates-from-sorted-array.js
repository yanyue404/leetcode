/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0, len = nums.length; j < len; j++) {
    if (nums[j] != nums[j + 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

export { removeDuplicates };
