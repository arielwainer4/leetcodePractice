// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// break down into basic robber problem, if you rob house 0, can rob last house
// so compare from 0 - length-2, vs 1 = length-1

var rob = function(houses) {
  if(houses.length === 0) return 0
  if(houses.length === 1) return houses[0]
  if(houses.length === 2) return houses[0] > houses[1] ? houses[0] : houses[1]

  let startFirst = robber(houses.slice(1,houses.length))
  let startSecond = robber(houses.slice(0,houses.length-1))
  return Math.max(startFirst,startSecond)
};

function robber (nums) {
  let res = [nums[0]]

  if(nums[0] < nums[1]) res.push(nums[1])
  else res.push(nums[0])

  for(let i = 2; i < nums.length; i++) {
      let use = res[i-2] + nums[i]
      let dontUse = res[i-1]
      if(use > dontUse) res.push(use)
      else res.push(dontUse)
      console.log(res)
  }
  return res.pop()
}
