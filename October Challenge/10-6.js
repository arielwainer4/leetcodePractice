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
 * @param {number} val
 * @return {TreeNode}
 */

//  recursive
var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val)
    // if prev val was a leaf, (or starting root was null) return new Node
    if(root === null) return newNode
    // set left or right = recrusive call which will put the newNode on the proper leaf
    if(val > root.val) {
        root.right = insertIntoBST(root.right, val)
    }
    else{
        root.left = insertIntoBST(root.left, val)
    }
    return root
};

// iterative
var insertIntoBST = function(root, val) {
  let node = root
  let prev = root
  let newNode = new TreeNode(val)
  if(root === null) return newNode
  // traverse tree looking for most relevant leaf
  while(node) {
      prev = node
      if(val < node.val) {
          node = node.left
      } else {

          node = node.right
      }
  }
  // know you've hit a leaf when you break out of a while look
  // compare prev node(leaf) to val, to determine if new node goes on right or left
  if(prev.val > val) {
      prev.left = newNode
  } else {
      prev.right = newNode
  }
  return root

};
