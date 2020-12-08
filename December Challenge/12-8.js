// You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

// Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  if(nums.length === 0 && lower === upper) return [`${lower}`]
  if(nums.length === 0) return [`${lower}->${upper}`]
  let res = []
  if(nums[0]-lower === 1) res.push(`${lower}`)
  else if(nums[0]-lower > 1) res.push(`${lower}->${nums[0]-1}`)

  for(let i = 0; i < nums.length-1; i++) {
      let a = nums[i]
      let b = nums[i+1]
      if(b-a !== 1) {
          let s = a+1
          let e = b-1
          if(s !== e) res.push(`${s}->${e}`)
          else res.push(`${s}`)
      }
  }

  if(upper-nums[nums.length-1] === 1) res.push(`${upper}`)
  else if(upper-nums[nums.length-1] > 1) res.push(`${nums[nums.length-1]+1}->${upper}`)
  return res
};
