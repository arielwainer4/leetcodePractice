// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

/**
 * @param {string} s
 * @return {string[][]}
 */

function isPal(str){
  if(str.length === 1) return true
  if(str.length === 2 && str[0] === str[1]) return true
  let s = 0
  let e = str.length-1
  while(s < e){
      if(str[s] === str[e]){
          s++
          e--
      } else return false
  }
  return true
}

function compile(str, idx, res, pals = []){
  if(idx >= str.length) {
      res.push([...pals])
  }
  else{
      let sub = []
      while(idx < str.length){
          sub.push(str[idx])
          if(isPal(sub)) {
              pals.push(sub.join(''))
              compile(str, idx+1, res, pals)
              pals.pop()
          }
          idx += 1
      }
  }
}
var partition = function(s) {
  let res = []
  compile(s,0,res)
  return res
};
