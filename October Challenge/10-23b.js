// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.

// Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?


/**
 * @param {number[]} nums
 * @return {boolean}
 */

// time: O(n^3) brute force
// space: O(1)
var find132pattern = function(nums) {
  if(nums.length < 3) return false
  for(let i = 0; i < nums.length-2; i++) {
      for(let j = i+1; j < nums.length-1; j++) {
          for(let k = j+1; k < nums.length; k++) {
              if(nums[i] < nums[k] && nums[j] > nums[k]) return true
          }
      }
  }
  return false
};

// time: O(n)
// space = O(n)
var find132pattern = function(nums) {
  var stack=[],
  min = -Infinity;
  for(var i=nums.length-1; i>=0; i--){
    if(nums[i] < min)
        return true;
    else{
        while(stack.length>0 && nums[i]> stack[stack.length-1]){
        min = stack.pop();
        }
        stack.push(nums[i]);
    }
}
return false;

};
