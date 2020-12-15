// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.



// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function(nums) {
  nums.sort((a,b) => Math.abs(a)-Math.abs(b))
  return nums.map(num => num**2)
};


//alt solution with N runtime

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let neg = -1
  while(nums[neg+1] < 0) neg++
  let pos = neg+1

  let res = []
  while(neg >=0 || pos < nums.length){
      let left = neg >= 0 ? nums[neg] : Infinity
      let right = pos < nums.length ? nums[pos] : Infinity

      if(Math.abs(left) < Math.abs(right)) {
          res.push(left**2)
          neg--
      }else {
          res.push(right**2)
          pos++
      }
  }
  return res
};
