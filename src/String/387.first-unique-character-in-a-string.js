/** "leetcode" => 0
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (i == s.indexOf(s[i]) && i == s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

var firstUniqChar2 = function (s) {
  if (s.length === 1) {
    return 0;
  }
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  return s.split('').findIndex((v) => obj[v] === 1);
};

module.exports = {
  firstUniqChar,
  firstUniqChar2,
};
