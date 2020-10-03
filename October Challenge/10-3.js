// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// a <= b
// b - a == k

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.

// runtime O(n) because you only loop once
// space O(n) because you store every index in the map
var findPairs = function(nums, k) {
  if(nums.length === 0) return 0

  let map = new Map()
  let pairs = new Set()

  for(let i = 0; i < nums.length; i++) {
      let num = nums[i]
      let up = num+k
      let down = num-k

      if(map.has(up)) {
          let lower = num < up ? num : up
          if(!pairs.has(lower)) {
              pairs.add(lower)
          }
      }
      if(map.has(down)) {
          let lower = num < down ? num : down
          if(!pairs.has(lower)) {
              pairs.add(lower)
          }
      }
      map.set(num)

  }
  return pairs.size
};
