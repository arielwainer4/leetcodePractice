// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//  time = O(n*m) n = rows   m = columns
// space = O(1)
function traverseRow(row, target) {
  for(let i = 0; i < row.length; i++) {
      let el = row[i]
      if(el === target) return true
      else if (el > target) return false;
  }
}

var searchMatrix = function(matrix, target) {
  for(let i = 0; i < matrix.length; i++) {
      let row = matrix[i]
      let first = row[0]
      let last = row[row.length-1]

      if(target === first || target === last) return true
      else if(target < last && target > first) {
          return traverseRow(row, target)
      }
      else continue;
  }
  return false
};
