// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.



/**
 * @param {string} s
 * @return {number}
 */
//time: o(n)
//space: o(1)
var maxPower = function(s) {
  let max = 1
  for(let i = 0; i < s.length; i++) {
      let ch = s[i]
      let next = i+1
      let currMax = 1
      while(ch === s[next]){
          currMax += 1
          next += 1
      }
      max = Math.max(max, currMax)
  }
  return max
};
