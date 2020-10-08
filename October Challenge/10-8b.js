
// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


var search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while(left <= right) {
      const mid = Math.floor((left + right) / 2)
      if(nums[mid] === target) {
          return mid
      } else if(nums[mid] < target) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
  return -1
};
