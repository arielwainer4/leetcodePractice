// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head) return null
  let memo = new Set()
  let pointer = head

  while(pointer) {
      if(memo.has(pointer)) return pointer
      memo.add(pointer);
      pointer = pointer.next
  }
  return null
};


// Challenge: Attempt in O(1) space
// Point of intersection with slow/fast pointers is equidistant from the entrance to the cycle as the head node is

var detectCycle = function(head) {
  if(!head) return null

  let intersect = findIntersect(head)
  if(!intersect) return intersect

  while(head !== intersect) {
      head = head.next
      intersect = intersect.next
  }
  return head
}

function findIntersect(node) {
  let slow = node
  let fast = node
  while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if(slow === fast) return fast
  }
  return null
}
