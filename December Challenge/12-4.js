// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
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
 * @return {TreeNode}
 */



var increasingBST = function(root) {
  let newTree = new TreeNode(0)
  let dummyHead = newTree

  function slant(node) {
      if(node.left) slant(node.left)
      newTree.right = new TreeNode(node.val)
      newTree = newTree.right
      if(node.right) slant(node.right)
  }
  slant(root)
  return dummyHead.right
};
