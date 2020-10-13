// Given the head of a linked list, return the list after sorting it in ascending order.

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

function merge(left, right) {
  let dummyHead = new ListNode(0)
  let pointer = dummyHead
  while(left && right) {
      if(left.val < right.val) {
          pointer.next = left
          left = left.next
      } else {
          pointer.next = right
          right = right.next
      }
      pointer = pointer.next
  }
  if(left && !right) pointer.next = left
  if(right && !left) pointer.next = right
  return dummyHead.next

}
var sortList = function(head) {
  if(head && head.next) {
      let slow = head
      let fast = head.next
      let step = 0

      while(fast) {
          if(step%2 !== 0) {
              slow = slow.next
          }
          fast = fast.next
          step += 1
      }
      let left = head
      let right = slow.next
      slow.next = null
      // console.log('l', left, right)
      let leftSorted = sortList(left)
      let rightSorted = sortList(right)

      return merge(leftSorted, rightSorted)
  } else {
      return head
  }
};
