// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true

  function isMirror(node1, node2) {
    // if both nodes are null, its symmetric
      if(node1 === null && node2 === null) return true
      // if only one is null, not symmetric
      if(node1 === null || node2 === null) return false
      // since neither are null, check is values are symmetric
      if(node1.val !== node2.val) return false

    // if here, then current nodes are symmetric and can enter next row of chilren into recursive function
      return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
  }

  return isMirror(root.left, root.right)
};
