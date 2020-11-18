// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => {
      if(a[0] < b[0]) return -1
      if(b[0] < a[0]) return 1
      if(a[1] < b[1]) return -1
      else return 1
  })
  let res = [intervals[0]]
  for(let i = 1; i < intervals.length; i++) {
      if(intervals[i][0] > res[res.length-1][1]) res.push(intervals[i])
      if(intervals[i][1] <= res[res.length-1][1]) continue;
      if(intervals[i][0] <= res[res.length-1][1]) res[res.length-1][1] = intervals[i][1]
  }
  return res
};
