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
var preorderTraversal = function(root, vals = []) {
    if(root === null) return []
    vals.push(root.val)
    if(root.left){
        preorderTraversal(root.left, vals)
    }
    if(root.right) {
        preorderTraversal(root.right, vals)
    }
    return vals
};

// iterative
var preorderTraversal = function(root) {
  if (root == null) return [];
  // start with root on stack
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    // pop top of stack and push node to the result
      let node = stack.pop();
      result.push(node.val);
      // check right side first bc we want left at end of stack (last in first out)
      if (node.right) {
          stack.push(node.right);
      }
      if (node.left) {
          stack.push(node.left);
      }
  }
  return result;
};
