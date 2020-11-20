// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if(nums.length < 3) {
      if(nums[0] === target) return true
      if(nums[1] && nums[1] === target) return true
      return false
  }
  let s = 0
  let e = nums.length-1
  let m = Math.floor((s+e)/2)

  while(s < e) {
      if(nums[s] === target || nums[e] === target || nums[m] === target) return true

      if(nums[m] > nums[s]){
          if(target > nums[s] && target < nums[m]) {
              e = m-1
          } else {
              s = m+1
          }
      } else if(nums[e] > nums[m]){
          if(target > nums[m] && target < nums[e]) {
              s = m+1
          } else {
              e = m-1
          }
      }else {
          e -= 1
          s +=1
      }
      m = Math.floor((s+e)/2)
  }
  return false
};


// alt recursive solution
var search = function(nums, target) {
  if(nums.length === 0) return false
  if(nums.length === 1){
      if(nums[0] === target) return true
      else return false
  }
  if(nums.length === 2){
      if(nums[0] === target || nums[1] === target) return true
      else return false
  }

  let mid = Math.floor(nums.length/2)
  let left = search(nums.slice(0,mid), target)
  let right = search(nums.slice(mid), target)
  return left || right
};
