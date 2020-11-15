// Given a sorted list of disjoint intervals, each interval intervals[i] = [a, b] represents the set of real numbers x such that a <= x < b.

// We remove the intersections between any interval in intervals and the interval toBeRemoved.

// Return a sorted list of intervals after all such removals.

/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
  let res = []
  let [start,end] = toBeRemoved
  for(let i = 0; i < intervals.length; i++) {
      let [a, b] = intervals[i]
      if(b < start || a > end) res.push(intervals[i]);
      else if(a < start && b <= end) res.push([a,start])
      else if(a >= start && b > end) res.push([end,b])
      else if(a < start && b > end) {
          res.push([a,start])
          res.push([end,b])
      }
  }
  return res
};
