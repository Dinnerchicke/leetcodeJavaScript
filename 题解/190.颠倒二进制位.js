/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // 解法一：暴力解
    // return parseInt(n.toString(2).padStart(32,0).split('').reverse().join(''),2)

    // 解法二：简单位运算
    let result = 0
    for(let i=0;i<32;i++){
      // result左移并加上n的最低位
      result = (result<<1)+(n&1)
      // n右移用于获取最低位
      n>>=1
    }
    // 无符号右移0保证result为数字类型&&为正整数&&在有效范围内&&无意义情况下缺省值为0
    return result>>>0
};
// @lc code=end

