// Design a data structure that accepts integers of a stream, and checks if it has a pair of integers that sum up to a particular value.

// Implement a TwoSum class:

// TwoSum() Initializes the TwoSum object, with an empty array initially.
// void add(int number) Adds number to the data structure.
// boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.arr = []
};

/**
* Add the number to an internal data structure..
* @param {number} number
* @return {void}
*/
TwoSum.prototype.add = function(number) {
  this.arr.push(number)
};

/**
* Find if there exists any pair of numbers which sum is equal to the value.
* @param {number} value
* @return {boolean}
*/
TwoSum.prototype.find = function(value) {
  if(this.arr.length < 2) return false
  let check = {}
  for(let i = 0; i < this.arr.length; i++) {
      let current = this.arr[i]
      let diff = value - current
      if(check[diff] === diff) {
          return true
      } else {
          check[current] = current
      }
  }
  return false
};

/**
* Your TwoSum object will be instantiated and called as such:
* var obj = new TwoSum()
* obj.add(number)
* var param_2 = obj.find(value)
*/
