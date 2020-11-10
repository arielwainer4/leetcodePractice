// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// time: O(r*c)
// space: O(r*c)
var flipAndInvertImage = function(A) {
  let res = []
  for(let row = 0; row < A.length; row++) {
      let newRow = []
      for(let col = A[row].length-1; col >= 0; col--) {
          if(A[row][col] === 0) newRow.push(1)
          else newRow.push(0)
      }
      res.push(newRow)
  }
  return res
};


// In place solution
// time: O(r*c)
// space: O(1)
var flipAndInvertImage = function(A) {
  for(let row = 0; row < A.length; row++) {
      let s = 0
      let e = A[row].length-1
      while(s<=e) {
          if(s === e) {
              A[row][s] = A[row][s] === 0 ? 1 : 0
          }else {
              let temp = A[row][s] === 0 ? 1 : 0
              A[row][s] = A[row][e] === 0 ? 1 : 0
              A[row][e] = temp
          }
          s += 1
          e -= 1
      }
  }
  return A
};
