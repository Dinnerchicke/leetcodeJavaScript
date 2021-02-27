/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  // 解法一：是否为4的倍数
  if(n==0)return false
  while(!(n%4)){
    n>>=2
  }
  return n==1 ? true : false
};
// @lc code=end

