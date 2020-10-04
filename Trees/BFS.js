/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  if (!root) {
      return [];
  }
  // create a stack starting with the root node
  const stack = [root];
  // initial array for final result
  const result = [];
  while (stack.length > 0) {
    // while there are items in the stack, determine the size of the row
      const size = stack.length;
      const temp = [];
      for (let i = 0; i < size; i++) {
        // loop through each item in the stack one at a time, shifting it off the front, saving it to temporary, and the adding any children to the stack
          const node = stack.shift();
          temp.push(node.val);
          if (node.left) {
              stack.push(node.left);
          }
          if (node.right) {
              stack.push(node.right);
          }
      }
      // when loop is done running the lenght of the stack for the row, push temp to the result to keep the row grouped together
      result.push(temp);
  }
  return result;
};
