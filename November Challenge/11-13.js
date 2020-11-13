// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.


// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) return null
  let queue = [root]

  while(queue.length) {
      let nextLevel = []
      for(let i = 0; i < queue.length; i++) {
          let node = queue[i]
          if(i !== queue.length-1) {
              node.next = queue[i+1]
          }
          if(node.left && node.right){
              nextLevel.push(node.left)
              nextLevel.push(node.right)
          }
      }
      queue = nextLevel
  }
  return root
};

// alt with constant space
// connect child level while iterating parent level so you can iterate through like you would a linked list
function connect(root) {
  if(!root) return null
  let leftMost = root

  while(leftMost.left !== null) {
      let head = leftMost
      while(head) {
          head.left.next = head.right
          if(head.next) {
              head.right.next = head.next.left
          }
          head = head.next
      }
      leftMost = leftMost.left
  }
  return root
}
