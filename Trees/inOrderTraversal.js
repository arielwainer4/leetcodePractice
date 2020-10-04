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
var inorderTraversal = function(root, val = []) {
  if(root === null) return []
  if(root.left) {
      inorderTraversal(root.left, val)
  }
  val.push(root.val)
  if(root.right) {
      inorderTraversal(root.right, val)
  }
  return val
};

// iterative
var inorderTraversal = function(root) {
  if (root == null) return [];
  let result = [];
  let stack = [];
  let current = root;
  // while theres nodes in the stack and the current node isnt null, run the while loop
  while (stack.length !== 0 || current !== null) {
    // if the current node exists, add it to the stack and traverse left
      if (current !== null) {
          stack.push(current);
          current = current.left;
    // if the current node doesnt exist, pop the last value from the stack, save the valm and traverse right
      } else {
          current = stack.pop();
          result.push(current.val);
          current = current.right;
      }
  }
  return result;
}

