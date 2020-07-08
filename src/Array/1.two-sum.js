const twoSum = (nums, target) => {
  const prevNums = {}; // 存放出现过的数字，和对应的索引
  for (let i = 0; i < nums.length; i++) {
    // 遍历每一项
    const curNum = nums[i]; // 当前项
    const targetNum = target - curNum; // 希望从过去的数字中找到的呼应项
    const targetNumIndex = prevNums[targetNum]; // 在prevNums中找targetNum的索引
    if (targetNumIndex !== undefined) {
      // 如果能找到
      return [targetNumIndex, i]; // 直接返回targetNumIndex和当前的i
    } // 如果找不到，说明之前没出现过targetNum
    prevNums[curNum] = i; // 往prevNums存当前curNum和对应的i
  }
};

/* var twoSum = function (nums, target) {
  let map = {}; //key数字 value下标
  let loop = 0; //循环次数
  let dis; //目标与当前值的差
  while (loop < nums.length) {
    dis = target - nums[loop];
    if (map[dis] != undefined) {
      return [map[dis], loop];
    }
    map[nums[loop]] = loop;
    loop++;
  }
  return;
}; */

var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i];
    let copyNums = nums.slice(i + 1);
    let rightIndex = copyNums.indexOf(target - left);

    if (rightIndex !== -1) {
      return [i, rightIndex + i + 1];
    }
  }
};

var twoSum3 = function (nums, target) {
  var _result;
  nums.some(function (item, index) {
    var _index = nums.indexOf(target - item);
    if (_index !== -1 && index !== _index) {
      _result = [index, _index];
      return true;
    }
  });
  return _result;
};

export { twoSum, twoSum2, twoSum3 };
