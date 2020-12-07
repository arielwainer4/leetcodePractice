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
  if(!root) return root
  let curr = root

  while(curr) {
      let leftmost = null
      let prev = null

      while(curr) {
          if(!leftmost) {
              if(curr.left) leftmost = curr.left
              else if(curr.right) leftmost = curr.right
              prev = leftmost
          }

          if(prev) {
              if(curr.left && curr.left !== prev) {
                  prev.next = curr.left
                  prev = prev.next
              }
              if(curr.right && curr.right !== prev) {
                  prev.next = curr.right
                  prev = prev.next
              }
          }
          curr = curr.next
      }
      curr = leftmost
  }
  return root
};
