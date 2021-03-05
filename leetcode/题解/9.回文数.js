/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 解法一
  // if (x<0) return false
  // let str = x.toString()
  // let list = str.split('')
  // for(var i =0;i<Math.floor(list.length);i++){
  //   if(list[i]!=list[list.length-i-1]){
  //     return false
  //   }
  // }
  // return true

  // 解法二：一行
  return Number(`${Math.abs(x)}`.split('').reverse().join(''))==x
};
// @lc code=end

