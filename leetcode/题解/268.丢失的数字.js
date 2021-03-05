/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // 解法一：暴力解
  let set = new Set(nums)
  for( let i=0 ; i<nums.length+1 ; i++){
    if(!set.has(i)) {return i}
  }
};
// @lc code=end

