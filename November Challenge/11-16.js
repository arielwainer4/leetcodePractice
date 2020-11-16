// Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

// B.length >= 3
// There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// (Note that B could be any subarray of A, including the entire array A.)

// Given an array A of integers, return the length of the longest mountain.

// Return 0 if there is no mountain.

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  if(A.length < 2) return 0
  let len = 1
  let maxLen = 0
  let up = true
  for(let i = 1; i < A.length; i++) {
      let curr = A[i]
      let prev = A[i-1]
      if(curr === prev) {
         up = true
          len = 1
      }
      else if(up) {
          if(curr > prev) {
              len += 1
          }
          else if(curr < prev && len !== 1) {
              up = !up
              len += 1
              maxLen = Math.max(maxLen, len)
          }
      } else {
          if (curr < prev) {
              len += 1
              maxLen = Math.max(maxLen, len)
          }
          else if(curr > prev) {
              len = 2
              up = !up
          }
      }
  }
  return maxLen
};
