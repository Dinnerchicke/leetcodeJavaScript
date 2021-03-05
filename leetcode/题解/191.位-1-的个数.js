/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // 解法一:暴力解
    // let str = n.toString(2)
    // let arr = str.split('')
    // let result = 0
    // arr.forEach(item=>{
    //   if(item==1) result++
    // })
    // return result

    // 解法二：更暴力,正则
    // return n.toString(2).replace(/0/g,'').length

    // 解法三：最优位运算
    let result = 0
    while(n){
      result++
      n&=(n-1)
    }
    return result
};
// @lc code=end

