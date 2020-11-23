// Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.
// Input: "eceba"
// Output: 3
// Explanation: t is "ece" which its length is 3.

/**
 * @param {string} s
 * @return {number}
 */

//[a, b]

var lengthOfLongestSubstringTwoDistinct = function(s) {
  if(s.length < 3) return s.length
  let start = 0
  let letters = [s[0]]

  let curr = 0
  while(s[curr] === s[0]) {
      curr += 1
  }
  if(curr === s.length) return s.length
  letters.push(s[curr])

  let len = curr + 1
  let maxLen = len

  for(let i = curr+1; i < s.length; i++) {
      if(s[i] === letters[0] || s[i] === letters[1]) {
          len += 1
          maxLen = Math.max(len, maxLen)
      } else {
          letters = [s[i-1], s[i]]
          start = i-1
          while(s[start-1] === letters[0] || s[start-1] === letters[1]) {
              start -= 1
          }
          len = i-start+1
          maxLen = Math.max(len, maxLen)
      }
  }
  return maxLen
};
