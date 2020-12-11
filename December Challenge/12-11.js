// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer, but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

// Internally you can think of this:

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let change = 1
  let use = 1
  let seen = 1
  while(use < nums.length){
      if(nums[use] !== nums[use-1]) seen = 1
      if(nums[use] === nums[use-1])seen += 1

      if(seen > 2) use += 1
      else {
          nums[change] = nums[use]
          change+=1
          use+= 1
      }


  }
  return change
};
