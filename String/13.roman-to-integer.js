/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var hashNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var result = 0;
  for (let i = 0; i < s.length; i++) {
    hashNum[s[i]] < hashNum[s[i + 1]]
      ? (result -= hashNum[s[i]])
      : (result += hashNum[s[i]]);
  }
  return result;
};

var romanToInt999 = function (s) {
  const toN = (roman) => {
    const obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    return obj[roman];
  };

  const rules = (start, next) => {
    const obj = {
      "1.5": 4,
      "1.10": 9,
      "10.50": 40,
      "10.100": 90,
      "100.500": 400,
      "100.1000": 900,
    };
    let key = start + "." + next;
    return obj[key];
  };
  var arr = s.split("");
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    let current = toN(arr[i]);
    temp.push(current);
  }
  let result = [];
  for (let i = 0; i < temp.length; i++) {
    result.push(temp[i]);
    if (i > 0) {
      let last = temp[i - 1];
      let current = temp[i];

      if (rules(last, current) < temp[i]) {
        result.splice(i - 1, 1, 0);
        result.splice(i, 1, rules(last, current));
      }
      // console.log(i, last, current, rules(last, current));
      // console.log("result", result);
    }
  }
  const getSum = (arr) => {
    var arrSum = 0;
    for (var i = 0; i < arr.length; i++) {
      arrSum += arr[i];
    }
    return arrSum;
  };
  return getSum(result);
};
