// Given a non-negative integer represented as a linked list of digits, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function traverse(head){
  if(head.next) head.next = traverse(head.next)
  else head.val += 1

  if(head.next && head.next.val > 9){
      head.next.val -= 10
      head.val += 1
  }
  return head
}
var plusOne = function(head) {
  let list = traverse(head)
  if(list.val > 9){
      let newHead = new ListNode(1)
      list.val -= 10
      newHead.next = list
      return newHead
  }
  return list
};
