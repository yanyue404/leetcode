const twoSum1 = (nums, target) => {
  const prevNums = {}; // 存放出现过的数字，和对应的索引
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const targetNum = target - curNum;
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中找targetNum的索引
    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i];
    }
    prevNums[curNum] = i;
  }
};

var twoSum2 = function (nums, target) {
  var _result;
  nums.some(function (item, index) {
    var _index = nums.indexOf(target - item);
    if (_index !== -1 && index !== _index) {
      _result = index > _index ? [_index, index] : [index, _index];
      return true;
    }
  });
  return _result;
};

export { twoSum1, twoSum2 };
