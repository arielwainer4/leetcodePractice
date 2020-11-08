// Given the root of a binary tree, return the sum of every tree node's tilt.

// The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if there the node does not have a right child.

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
 * @return {number}
 */

//  time: O(N)
// space: O(N)
var findTilt = function(root) {
  if(!root) return 0
  let sum = 0

  function change(node) {
      if(!node) return 0
      let left = node.left ? change(node.left) : 0
      let right = node.right ? change(node.right) : 0
      sum += Math.abs(left-right)
      return left + right + node.val
  }
  change(root)
  return sum
};
