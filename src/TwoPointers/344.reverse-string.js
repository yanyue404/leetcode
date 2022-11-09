// 双指针
// 时间复杂度：O(N)，其中 NN 为字符数组的长度。一共执行了 N/2 次的交换。
// 空间复杂度：O(1)。只使用了常数空间来存放若干变量。

var reverseString1 = function (s) {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};

var reverseString2 = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

var reverseString3 = function (s) {
  let length = s.length;
  for (let i = 0; i < length / 2; i++) {
    [s[i], s[length - i - 1]] = [s[length - i - 1], s[i]];
  }
};

export { reverseString1, reverseString2, reverseString3 };
