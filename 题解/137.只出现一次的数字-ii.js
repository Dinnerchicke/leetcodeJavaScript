/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 解法一：使用set集
  // let arr = [...new Set(nums)]
  // return (((arr.reduce((pre,cur)=>pre+cur)*3)-(nums.reduce((pre,cur)=>pre+cur)))/2)

  // 解法二：暴力解
  // for(let i=0;i<nums.length;i++){
  //   if(nums.lastIndexOf(nums[i])===nums.indexOf(nums[i])){
  //     return nums[i]
  //   }
  // }

  // 解法三：位运算
  let once=0,twice=0
  for(let i of nums){
    once = (once^i)&(~twice)
    twice = (twice^i)&(~once)
  }
  return once
};
// @lc code=end

