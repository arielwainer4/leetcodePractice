// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


var numIslands = function(grid) {
  let islands = 0;
  for(let i = 0; i < grid.length; i++) {
      let row = grid[i]
      for(let j = 0; j < row.length; j++) {
          let cell = row[j]
          if(cell === '1') {
              islands++
              landMapper(i, j, grid)
          }
      }
  }
  return islands
};

const landMapper = (row, column, grid) => {
  if(grid[row] === undefined || grid[column] === undefined || grid[row][column] === '0') return;

  grid[row][column] = '0'

  landMapper(row-1, column, grid)
  landMapper(row+1, column, grid)
  landMapper(row, column-1, grid)
  landMapper(row, column+1, grid)
}
