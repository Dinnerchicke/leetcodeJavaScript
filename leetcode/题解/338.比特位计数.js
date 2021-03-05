/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  // 解法一：暴力正则
  // let result = []
  // let count = 0
  // while (count<=num) {
  //   result.push((count.toString(2).match(/1/g) || []).length)
  //   count++
  // }
  // return result

  // 解法二
  let arr = new Array(num+1).fill(0)
  for(let i=1;i<=num;i++){
    arr[i]=arr[i&(i-1)]+1
  }
  return arr
};
// @lc code=end

