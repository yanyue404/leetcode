/** eg:  ["h","e","l","l","o"] => ["o","l","l","e","h"]
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 双指针
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

var reverseString2 = function (s) {
  let length = s.length;
  for (let i = 0; i < length / 2; i++) {
    [s[i], s[length - i - 1]] = [s[length - i - 1], s[i]];
  }
};
