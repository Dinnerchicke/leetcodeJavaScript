/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 解法一,垃圾解法
  // for(var i=0;i<nums.length;i++){
  //   for(var j=i+1;j<nums.length;j++){
  //     if(nums[i]+nums[j]==target){
  //       return [i,j]
  //     }
  //   }
  // }

  // 解法二,hashMap
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i]
    let targetNum = target - curNum
    let targetIndex = hashMap[targetNum]
    if (targetIndex !== undefined) {
      return [targetIndex, i]
    } else {
      hashMap[curNum] = i
    }
  }
};
// @lc code=end