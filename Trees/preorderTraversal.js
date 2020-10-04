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
var preorderTraversal = function(root, vals = []) {
  // if root is null, return empty
  if(root === null) return []
  let stack = []
  while(root) {
      vals.push(root.val)
      // if left and right exist, save right and traverse left
      if(root.left && root.right) {
          stack.push(root.right)
          root = root.left
          // if only left exists, traverse left
      } else if (root.left) {
          root = root.left
          // if only right exists, traverse right
      } else if (root.right) {
          root = root.right
          // if there are no more child nodes, check if anything is waiting in the stack, if so use it
      } else if(stack.length > 0) {
          let redirect = stack.pop()
          root = redirect
          // if theres nothing left in the tree and nothing in the stack youre done traversing
      } else {
          return vals;
      }
  }
};
