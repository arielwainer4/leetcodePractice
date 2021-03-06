// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// time: O(n*k) where n is length of the arr
// space: o(1)
var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
        let prev = nums[nums.length-1]
        for(let j = 0; j < nums.length; j++) {
            let temp = nums[j]
            nums[j] = prev
            prev = temp
        }
    }
    return nums
};

// time: O(n)
// space: O(n)
var rotate = function(nums, k) {
  let alt = []
  let n = nums.length
  for(let i = 0; i < nums.length; i++) {
      let newIdx = (i+k)%n
      alt[newIdx] = nums[i]
  }
  nums = alt
  return nums
}

// time: O(k*n) unshift for every roation
// space: O(1)
var rotate = function(nums, k) {
  for(let i = 0; i < k; i++) { //O(n)
      let front = nums.pop() //O(1)
      nums.unshift(front) //O(n)
  }
  return nums
};
