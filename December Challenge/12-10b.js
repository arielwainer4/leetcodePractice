// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let memo = {}
  let pairs = 0
  for(let len of time){
      let rem = len%60
      if(memo[60-rem] && rem !== 0) pairs += memo[60-rem]
      if(rem === 0 && memo['0']) pairs += memo['0']
      if(!memo[rem]) memo[rem] = 0
      memo[rem] += 1
  }
  return pairs
};
