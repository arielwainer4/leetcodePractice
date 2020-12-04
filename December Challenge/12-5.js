// Given two positive integers n and k.

// A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.



// Example 1:

// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let f1 = new Map()

  for(let i = 1; i <= n; i++) {
      if(n%i === 0 && !f1.has(n/i)) {
          f1.set(i, n/i)
      } else if(f1.has(n/i)) break;
  }
  let iterator = k
  for(let [a,b] of f1) {
      if(iterator === 1) return a
      iterator -= 1
  }

  for(let [a,b] of Array.from(f1.entries()).reverse()) {
      if(a === b) continue;
      if(iterator === 1) return b
      iterator -= 1
  }
  return -1
};
