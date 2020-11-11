// Given the coordinates of four points in 2D space, return whether the four points could construct a square.

// The coordinate (x,y) of a point is represented by an integer array with two integers.

// Example:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: True


// Note:

// All the input integers are in the range [-10000, 10000].
// A valid square has four equal sides with positive length and four equal angles (90-degree angles).
// Input points have no order.

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

//  Time: O(1), sorting is nlogn but since there are always 4 values to sort there is a constant time
// Space: O(1)
function dist(a,b) {
  let [ax,ay] = a
  let [bx,by] = b
  let x = Math.abs(ax-bx)
  let y = Math.abs(ay-by)
  return Math.sqrt(x*x + y*y)
}

var validSquare = function(p1, p2, p3, p4) {
  let points = [p1,p2,p3,p4].sort((a,b) => {
      if(a[0] < b[0]) return -1
      if(a[0] > b[0]) return 1
      if(a[1] < b[1]) return -1
      if(a[1] > b[1]) return 1
  })
  let one = dist(points[0], points[1])
  let two = dist(points[0], points[2])
  let three = dist(points[3], points[2])
  let four = dist(points[3], points[1])

  let diagnols = dist(points[0], points[3]) === dist(points[1], points[2]) && dist(points[1], points[2]) !== 0
  return one === two && two === three && three === four && diagnols
};
