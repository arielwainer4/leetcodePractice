// Given a list of intervals, remove all intervals that are covered by another interval in the list.

// Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

// After doing so, return the number of remaining intervals.

// Input: intervals = [[1,4],[3,6],[2,8]]
// Output: 2
// Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  // sort interval list in ascending order based on start number, if start numbers are ===, put interveral with larger end number first.
      intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

      const stack = [];
  //     grab the first interval from the front of the list and put on the stack
      stack.push(intervals.shift());

  // while stack has intervals
      while (intervals.length > 0) {

  // prev is pulling from the stack
  // curr is pulling from the intervals list

          const [prevStart, prevEnd] = stack[stack.length - 1];
          const [currStart, currEnd] = intervals.shift();
  // you know that currStart < prevEnd puts you inside the interval to start bc the first numbers are sorted
  // if the second number is also inside the interval, just continue
          if (currStart < prevEnd && currEnd <= prevEnd) {
              continue;
          }
  // this means the current interval is not inside the prev interval. So we push it to the stack where it is then used at the next "prev" interval
          else {
              stack.push([currStart, currEnd]);
          }
      }

      return stack.length;
  };
