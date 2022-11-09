const lengthOfLongestSubstring1 = (s) => {
  let max = 0;
  let begin = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (map.hasOwnProperty(element)) {
      // 重复了，得出最大值，滑动左边界
      max = Math.max(max, i - begin);
      begin = map[element] < begin ? begin : map[element] + 1;
      map[element] = i;
    } else {
      // 无重复，继续滑动
      map[element] = i;
    }
  }
  max = Math.max(max, s.length - begin);
  return max;
};

var lengthOfLongestSubstring2 = function (s) {
  if (!s) {
    return 0;
  }
  let result = 0;
  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    const index = tmp.indexOf(s[i]);
    if (index === -1) {
      tmp += s[i];
      if (tmp.length > result) {
        result = tmp.length;
      }
    } else {
      tmp = tmp.substring(index + 1) + s[i];
    }
  }
  return result;
};

// 我称之为「两根手指法」。
var lengthOfLongestSubstring3 = function (s) {
  if (s.length <= 1) return s.length;
  let max = 0;
  let p1 = 0;
  let p2 = 1;
  while (p2 < s.length) {
    let sameIndex = -1;
    for (let i = p1; i < p2; i++) {
      if (s[i] === s[p2]) {
        sameIndex = i;
        break;
      }
    }
    let tempMax;
    if (sameIndex >= 0) {
      tempMax = p2 - p1;
      p1 = sameIndex + 1;
    } else {
      tempMax = p2 - p1 + 1;
    }
    if (tempMax > max) {
      max = tempMax;
    }
    p2 += 1;
  }

  return max;
};

export {
  lengthOfLongestSubstring1,
  lengthOfLongestSubstring2,
  lengthOfLongestSubstring3,
};
