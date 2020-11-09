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

//  time: O(N) hit every node once
// space: O(N) call stack is at most the height of the tree (at best logN)
var maxAncestorDiff = function(root) {
  if(!root) return 0

  function DFS(node, max = -Infinity, min = Infinity) {
      if(!node) return max - min
      let curr = node.val
      if(curr > max) max = curr
      if(curr < min) min = curr
      return Math.max(DFS(node.left, max, min), DFS(node.right, max, min))
  }

  return DFS(root)
};

