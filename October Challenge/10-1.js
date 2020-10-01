// Given m arrays, and each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a-b|. Your task is to find the maximum distance.

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let min = [Infinity, Infinity]
  let minBackup = [Infinity, Infinity]
  let max = [-Infinity, -Infinity]
  let maxBackup = [-Infinity, -Infinity]

  for(let i = 0; i < arrays.length; i++) {
      let subArr = arrays[i]
      if(subArr[0] < min[0]) {
          minBackup = min
          min = [subArr[0], i]
      } else if(subArr[0] >= min[0] && subArr[0] < minBackup[0]) {
          minBackup = [subArr[0], i]
      }

      if(subArr[subArr.length-1] > max[0]) {
          maxBackup = max
          max = [subArr[subArr.length-1], i]
      } else if(subArr[subArr.length-1] <= max[0] && subArr[subArr.length-1] > maxBackup[0]) {
          maxBackup = [subArr[subArr.length-1], i]
      }
  }

  if(min[1] !== max[1]) return max[0]-min[0]
  else {
      let v1 = max[0] - minBackup[0]
      let v2 = maxBackup[0] - min[0]
      if(v1 > v2) {return v1}
      else {return v2}
  }
};
