// 滑动窗口法/两根手指法
const lengthOfLongestSubstring = (str) => {
  if (str.length <= 1) {
    return str.length;
  }
  let max = 0;
  let f1 = 0;
  let f2 = 1;
  while (f2 < str.length) {
    let sameIndex = -1;
    for (let i = f1; i < f2; i++) {
      if (str[i] === str[f2]) {
        sameIndex = i;
        break;
      }
    }
    let tempMax;
    if (sameIndex >= 0) {
      tempMax = f2 - f1;
      f1 = sameIndex + 1; // 左手向前移动
    } else {
      tempMax = f2 - f1 + 1;
    }
    if (tempMax > max) {
      max = tempMax;
    }
    f2 += 1;
  }
  return max;
};
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
