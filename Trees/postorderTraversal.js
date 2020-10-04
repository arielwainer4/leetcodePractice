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
 * @return {number[]}
 */
// recursive
var postorderTraversal = function(root, val = []) {
  if(root === null) return []
  if(root.left) {
      postorderTraversal(root.left, val)
  }
  if(root.right) {
      postorderTraversal(root.right, val)
  }
  val.push(root.val)
  return val
};

// iterative
var postorderTraversal = function(root) {
  if (root == null) return [];
  // start with the root on the stack, the loop case is based on having a non-0 stack
  let stack = [root];
  let result = [];
  // while stack exists, pop elements off the end of stack one at a time
  while (stack.length !== 0) {
      let pointer = stack.pop();
      // since the elements are beings added to the stack from the top of the tree but we want to list bottom up, we unshift each element to the from of the result array so they end up in reversed order of execution
      result.unshift(pointer.val);
      // if it has a left add it to the stack
      if (pointer.left) {
          stack.push(pointer.left);
      }
      // if it has a right add it to the stack
      if (pointer.right) {
          stack.push(pointer.right);
      }
  }
  return result;
};
