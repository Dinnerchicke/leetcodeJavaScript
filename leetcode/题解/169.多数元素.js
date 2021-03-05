/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 方法一:Map
  // var result = undefined
  // let map = new Map()
  // nums.forEach(item=>{
  //   if(map.has(item)==false){
  //     map.set(item,1)
  //   } else{
  //     let tmp = map.get(item)
  //     tmp++
  //     map.set(item,tmp)
  //   }
  // })
  // map.forEach((value,key)=>{
  //   if(value>=y){
  //     result = key
  //   }
  // })
  // return result

  // 方法二：排序
  // nums.sort((first,second)=>first-second)
  // return nums[Math.floor(nums.length/2)]

  // 方法三：最优解法
  let tmp=0
  let count=0
  for(let i of nums){
    if(count===0) tmp=i
    count+=(tmp===i ? 1 : -1)
  }
  return tmp
};
// @lc code=end

