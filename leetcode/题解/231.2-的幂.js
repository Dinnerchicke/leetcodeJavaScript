/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // 解法一：暴力解
  // let str2 = n.toString(2)
  // if(str2==0) return false
  // let arr2 = str2.split('')
  // for(let i=1;i<arr2.length;i++){
  //   if(arr2[i]!=0){
  //     return false
  //   }
  // }
  // return true

  // 解法二：右移>>1
  // if(n==0)return false
  // while(!(n%2)){
  //   n>>=1
  // }
  // return n==1? true :false

  // 解法三：
  return n>0 && (n&(n-1))===0
};
// @lc code=end

