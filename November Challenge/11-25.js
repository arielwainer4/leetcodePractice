// Given a positive integer K, you need to find the length of the smallest positive integer N such that N is divisible by K, and N only contains the digit 1.

// Return the length of N. If there is no such N, return -1.

// Note: N may not fit in a 64-bit signed integer.

/**
 * @param {number} K
 * @return {number}
 */
// var smallestRepunitDivByK = function(K) {
//     let remainder = 1%K
//     let len = 1
//     let seen = new Set()
//     console.log('start', remainder)
//     while(remainder%K !== 0) {

//         let n = remainder*10 + 1
//         console.log(remainder, len, n)
//         remainder = n%K
//         len += 1
//         if(seen.has(remainder)) return -1
//         else seen.add(remainder)
//     }
//     return len
// };

var smallestRepunitDivByK = function(K) {
  let num = 1
  let len = 1

  while(len <= K) {
      if(num%K === 0) return len

      num *=10
      num += 1
      len += 1
  }
  return -1
};
