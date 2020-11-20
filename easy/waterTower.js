/*

1. Do interviewbit.com first to get exposure to enough topics (breadth)
2. Do 300-400 problems on Leetcode (25% easy, 50% medium, 25% hard). Focus on 2 things:
Sharpen your intuition for identifying the algorithm/data structure suitable to solve the problem
3. Code the common routines (BFS, DFS, etc.) enough times that you can code them in 5 mins or less.


Given a m*n matrix of positive ints, each point representing the height. Given two villages in the matrix, find the highest point to build a “Water supply tower” so that water can flow to both of the villages. Water can only flow from high to low.

10  1  1  8
1   6 [7] 4
1   5  1  3
1  (4) 3 (2)

*/
function isValid(matrix, position){
  let [r,c] = position
  if(r < 0 || c < 0 || r >= matrix.length || c >= matrix[r].length) return false
  else return true
}

function pathFinder(matrix, currLoc, path, prev= -1){
  if(!isValid(matrix, currLoc)) return

  let [x,y] = currLoc
  if(matrix[x][y] <= prev) return
  if(path.has(x+","+y)) return

  path.add(x+","+y)
  pathFinder(matrix, [x-1, y], path, matrix[x][y])
  pathFinder(matrix, [x+1, y], path, matrix[x][y])
  pathFinder(matrix, [x, y-1], path, matrix[x][y])
  pathFinder(matrix, [x, y+1], path, matrix[x][y])
  return
}

function waterTower(matrix, t1, t2){
  let towers1 = new Set()
  pathFinder(matrix, t1, towers1)

  let towers2 = new Set()
  pathFinder(matrix, t2, towers2)

  let towerOptions = []
  let max = -Infinity
  for(let loc of towers1) {
    let coords = loc.split(',')
    if(towers2.has(loc) && matrix[coords[0]][coords[1]] > max) {
      max = matrix[coords[0]][coords[1]]
      towerOptions = coords
    }
  }
  return towerOptions
}


  let map = [[10,1,1,8], [1,6,7,4], [1,5,1,3], [1,4,3,2]]
  let v1 = [3,1]
  let v2 = [3,3]

  let res = waterTower(map, v1, v2)
  console.log(res)

