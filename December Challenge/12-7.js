// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

/**
 * @param {number} n
 * @return {number[][]}
 */

function isValid(x,y,grid){
  if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return false
  if(grid[x][y] !== 0) return false
  else return true
}
var generateMatrix = function(n) {
  let grid = new Array(n).fill(0).map(cell => new Array(n).fill(0))
  let num = 1
  let dir = [[0,1], [1,0], [0,-1], [-1,0]]
  let d = 0
  let x = 0
  let y = 0


  while(isValid(x,y,grid)) {
      grid[x][y] = num
      let newX = x+ dir[d][0]
      let newY = y+ dir[d][1]
      if(!isValid(newX, newY, grid)) {
          d = (d+1)%4
      }

      x += dir[d][0]
      y += dir[d][1]
      num += 1
  }
  return grid
};
