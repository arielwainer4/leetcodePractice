// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.


// Time: O(nlogn)
// Space: O(1)
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  if(intervals.length <= 1) return true
  intervals.sort((a,b) => {
      if(a[0] < b[0]) return -1
      if(a[0] >= b[0]) return 1
      if(a[1] < b[1]) return -1
      if(a[1] >= b[1]) return 1
  })
  let [prevStart, prevEnd] = intervals[0]
  for(let i = 1; i < intervals.length; i++) {

      let [start, end] = intervals[i]
      if(start < prevEnd) return false
      else {
          prevStart = start
          prevEnd = end
      }
  }
  return true
};
