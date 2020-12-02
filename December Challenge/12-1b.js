// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

function depth(node){
  if(!node) return 0
  let left = depth(node.left)
  let right = depth(node.right)
  return Math.max(left,right)+1
}

var maxDepth = function(root) {
  if(!root) return root
  if(!root.left && !root.right) return 1
  return depth(root)
};
