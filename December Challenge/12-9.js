// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

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
 */
var BSTIterator = function(root) {
  this.tree = root
  this.inorder = []
  this.idx = -1

  function order(node, arr){
      if(!node) return
      order(node.left, arr)
      arr.push(node.val)
      order(node.right,arr)
  }
  order(this.tree, this.inorder)
};

/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
  this.idx += 1
  return this.inorder[this.idx]
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  if(this.idx < this.inorder.length-1) return true
  else return false
};

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
