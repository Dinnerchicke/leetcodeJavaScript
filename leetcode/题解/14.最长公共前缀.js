/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var str = ''
    if(strs.length ==0 || strs[0].length ==0) return ''
    var tmpStr = strs[0].substr(0,1)
    for(let i=0;i<strs.length;i++){
      if(i==strs.length-1){
        str+=tmpStr
        tmpStr = strs[0].substr(0,1)
        i=0
      } else if(tmpStr == strs[i].substr(0,1)) {
        strs[i]=strs[i].substr(1)
        continue
      } else{
        break
      }
    }
  return str
};
// @lc code=end

