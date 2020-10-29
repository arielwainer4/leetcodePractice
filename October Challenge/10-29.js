// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

// There is at least one empty seat, and at least one person sitting.

// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.

// Return that maximum distance to the closest person.

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let max = seats.length
  let left = []
  let right = []
  let dist = max

  for(let i = 0; i < seats.length; i++) {
      if(seats[i] === 1) {
          dist = 0
          continue;
      } else {
          dist += 1
          left.push(dist)
      }
  }
  dist = max
  for(let j = seats.length-1; j >= 0; j--) {
      if(seats[j] === 1) {
          dist = 0
          continue
      } else {
          if(dist !== max) dist += 1
          right.unshift(dist)
      }
  }

  let maxSpace = 0
  for(let k = 0; k < left.length; k++) {
      let minDist = Math.min(left[k], right[k])
      maxSpace = Math.max(maxSpace, minDist)
  }
  return maxSpace
};
