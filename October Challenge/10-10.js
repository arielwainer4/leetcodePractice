// There are some spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter, and hence the x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.

// An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow once shot keeps traveling up infinitely.

// Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to burst all balloons.

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if(points.length === 0) return 0
  points.sort((a,b) => {
      if (a[0] < b[0]) return -1
      if (a[0] > b[0]) return 1
      if (a[1] < b[1]) return -1
      if (a[1] > b[1]) return 1
  })

  let map = [points[0]]

  for(let i = 1; i < points.length; i++) {
      let balloon = points[i]
      let last = map.pop()
      if(balloon[0] > last[1]) {
          map.push(last)
          map.push(balloon)
      } else if(balloon[1] < last[1]){
          map.push([balloon[0], balloon[1]])
      } else {
          map.push([balloon[0], last[1]])
      }
  }
  return map.length
};
