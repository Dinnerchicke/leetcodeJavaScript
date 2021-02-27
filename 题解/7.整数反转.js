/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 解法一
  // let str = x.toString()
  // if(str.substr(0,1) !== '-'){ // 正数
  //   var num = parseInt(str.split('').reverse().join(''))
  // }else { // 负数
  //   let strNow = str.substr(1)
  //   var num = (parseInt(strNow.split('').reverse().join(''))*-1)
  // }
  // if (num>2147483647 || num<-2147483648) {
  //   return 0
  // }else{
  //   return num
  // }

  // 改进解法一
  // const border = 2**31
  // const max = border - 1
  // const min = -border
  // var str = x.toString()
  // var num = (str.substr(0,1) != '-' ? (parseInt(str.split('').reverse().join(''))) : (str=str.substr(1),parseInt(str.split('').reverse().join(''))*-1))
  // return (max>num && num>min) ? num : 0

  // 解法二:方法很炫但是运行起来很拉
  // 将x的末尾拆解，再装回结果上
  // let result = 0
  // while(x!=0){
  //   result = result*10+x%10
  //   x=parseInt(x/10)
  // }
  // return (result | 0)===result ? result : 0

  // 解法二进阶
  let old = Math.abs(x)
  let now = 0
  while(old>0){
    now = now*10 + old%10
    old = Math.floor(old/10)
  }

};
// @lc code=end

