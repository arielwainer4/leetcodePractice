// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// with interior helper function modifying global sum
var rangeSumBST = function(root, low, high) {
  let sum = 0
  if(!root) return sum

  function DFS(node) {
      if(!node) return;
      if(node.val >= low && node.val <= high)  sum += node.val

      if(node.val > low && node.val < high) {
          DFS(node.left)
          DFS(node.right)
      }
      else if (node.val >= high) {
          DFS(node.left)
      }
      else if(node.val <= low) {
          DFS(node.right)
      }
  }
  DFS(root)
  return sum
};

// recursive DFS hitting every node

var rangeSumBST = function(root, low, high) {
  if(!root) return 0
  let left = root.left ? rangeSumBST(root.left,low,high) : 0
  let right = root.right ? rangeSumBST(root.right,low,high) : 0
  let self = root.val >= low && root.val <= high ? root.val : 0

  return left + right + self
};

// recursive DFS only hitting relative nodes
var rangeSumBST = function(root, low, high) {
  if(!root) return 0
  if(root.val > low && root.val < high) return rangeSumBST(root.left,low,high) + rangeSumBST(root.right,low,high) + root.val

  else if(root.val === low) return rangeSumBST(root.right,low,high) + root.val
  else if(root.val === high) return rangeSumBST(root.left,low,high) + root.val
  else if(root.val < low) return rangeSumBST(root.right,low,high)
  else if(root.val > high) return rangeSumBST(root.left,low,high)
  else return 0
};
