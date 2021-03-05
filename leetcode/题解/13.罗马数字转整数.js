/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I : 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  var result = 0
  // substr()和substring()
  // substr(start,length)返回从start位置开始length长度
  // substring(start,end)返回从start开始到end位置的字串
  for(let i=0;i<s.length;){
    if(i+1 < s.length && map[s.substring(i,i+2)]){
      result+=map[s.substring(i,i+2)]
      i+=2
    }else{
      result+=map[s.substring(i,i+1)]
      i++
    }
  }
  return result
};
// @lc code=end

