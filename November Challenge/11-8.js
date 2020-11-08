// Given an array A of integers and integer K, return the maximum S such that there exists i < j with A[i] + A[j] = S and S < K. If no i, j exist satisfying this equation, return -1.

// Example 1:

// Input: A = [34,23,1,24,75,33,54,8], K = 60
// Output: 58
// Explanation: We can use 34 and 24 to sum 58 which is less than 60.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

//  time: O(nlogn)
// space: O(1)
var twoSumLessThanK = function(A, K) {
  A.sort((a,b) => a-b)
  let i = 0
  let j = A.length-1
  let closestDif = Infinity
  // console.log(A)
  while(i < j) {
      if(A[i] + A[j] < K) {
          let diff = K - (A[i] + A[j])
          if(diff < closestDif) closestDif = diff
          i++
      }
      else {
          j--
      }
  }
  // console.log(closestDif)
  return closestDif === Infinity ? -1 : K - closestDif
};
