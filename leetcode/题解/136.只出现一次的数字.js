/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 解法一：异或
  // let ans = 0
  // for(let num of nums){
  //   ans^=num
  // }
  // return ans

  // 解法二：简洁异或,但是运行速度没解法一快
  return nums.reduce((pre,cur)=>pre^cur)
};
// @lc code=end

