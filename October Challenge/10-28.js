// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

/**
 * @param {number[]} nums
 * @return {string[]}
 */
// time: O(n)
// Space: o(n)
var summaryRanges = function(nums) {
  if(nums.length === 0) return nums
  let res = []
  let range = [nums[0]]
  let prev = nums[0]

  for(let i = 1; i < nums.length; i++) {
      if(nums[i]-prev === 1) {
          prev = nums[i]
      } else {
          range.push(prev)
          res.push(range)
          range = [nums[i]]
          prev = nums[i]
      }
  }
  range.push(prev)
  res.push(range)

  let final = []
  for(let i = 0; i < res.length; i++) {
      let [a,b] = res[i]
      if(a !== b) final.push(`${a}->${b}`)
      else final.push(`${a}`)
  }
  return final
};
