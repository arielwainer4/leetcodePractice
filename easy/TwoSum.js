// easy leetcode problems

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// start with brute force, 2 for loops to check if 2 numbers equal target
// optimize in round 2 with pointers

// brute force
// O(N^2) time and O(1) space
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length-1; i++) {
      for(let j = i+1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};

// O(N) time and O(N) space
var twoSum = function(nums, target) {
  let dict = {}
  for(let i = 0; i < nums.length-1; i++) {
      let currentNum = nums[i]
      let targetDif = target -  nums[i]
      if(dict[targetDif] >= 0) {
          return [i, dict[targetDif]]
      }
      dict[currentNum] = i
  }
};
