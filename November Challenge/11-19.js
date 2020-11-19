// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let tempNum = ""
  let nums = []

  let tempStr = ""
  let strings = []

  for(let ch of s) {
      if(ch === '[') {
          nums.push(+tempNum)
          tempNum = ""
          strings.push(tempStr)
          tempStr = ""
      }
      else if(ch === ']') {
          let newStr = new Array(nums.pop()).fill(tempStr).join('')
          tempStr = strings.pop()+newStr
      }
      else if(ch >= 0 || ch <= 9) {
          tempNum += ch
      } else {
          tempStr += ch
      }
  }
  return tempStr
};
