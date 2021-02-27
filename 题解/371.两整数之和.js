/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  // 解法一 ：暴力解
  // let num1 = a.toString(2).padStart(32,0).split('')
  // let num2 = b.toString(2).padStart(32,0).split('')
  // let result = []
  // let tmp = 0 // 借位
  // for(let i=31;i>=0;i--){
  //   // 位运算：本位异或+进位
  //   if (num1[i]==1 && num2[i]==1 && tmp==0) {
  //     // 假如num1和num2均为1且tmp为0
  //     result[i]=0
  //     tmp++
  //   } else if(num1[i]^num2[i]==1 && tmp==1){
  //     // 假如num1和num2一个为1一个为0且tmp为1
  //     // 此位归0,tmp保持1
  //     result[i]=0
  //   } else if((num1[i]|num2[i])==0 && tmp==1){
  //     // 假如num1和num2均为0且tmp为1
  //     result[i]=1
  //     tmp--
  //   } else if(num1[i]==1 && num2[i]==1 && tmp==1) {
  //     result[i]=1
  //   } else{
  //     // 其余的正常进位
  //     result[i]=num1[i]^num2[i]
  //   }
  // }
  // return parseInt(result.join(''),2)

  // 解法二：位运算
  while(b) sum=a^b,b=(a&b)<<1,a=sum
  return sum
};
// @lc code=end

