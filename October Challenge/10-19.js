// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the ith domino, so that A[i] and B[i] swap values.

// Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

// If it cannot be done, return -1.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

function check(arrA, arrB, target) {
  let flipsA = 0
  let flipsB = 0
  for(let i = 0; i < arrA.length; i++) {
      if(arrA[i] === target && arrB[i] === target) continue;

      if(arrA[i] === target) flipsB +=1
      else if (arrB[i] === target) flipsA += 1
      else return -1
  }
  return Math.min(flipsA, flipsB)
}


var minDominoRotations = function(A, B) {
  let top = check(A,B,A[0])
  let bottom = check(A,B,B[0])
  console.log(top, bottom)
  if(top === -1 && bottom === -1) return -1

  let flips = top === -1 ? bottom : top

  return Math.min(flips, A.length-flips)
};
