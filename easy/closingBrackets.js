// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// O(n) time because you have to loop through every element in the string
// O(n) space because we could end up storing all elements on the stack
var isValid = function(s) {
  let stack = []
  let dict = {"{":"}", "[":"]", "(":")"}


  while(s.length > 0) {
      let current = s[0]
//if it closes the top of the stack, pop the value off the stack
      if(stack.length && dict[stack[stack.length-1]] === current) {
          stack = stack.slice(0, stack.length-1)
      }
// else if its an open bracket add to the stack
      else if(dict[current]) {
          stack.push(current)
      }
//  else it must be a closed bracket which means its false
      else {
          return false
      }
      s = s.slice(1)
  }
//     if the loop finishes and theres still items in the stack, the answe is false because they werent closed
  if(stack.length) return false
  return true
};
