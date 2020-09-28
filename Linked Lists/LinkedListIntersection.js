// Write a program to find the node at which the intersection of two singly linked lists begins.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//  Move pointers through each list, when you hit the end of a list point to the head of another. On the 2nd pass through, if the lists are linked, they'll be equal at the intersection
// if the lists are not linked, they'll be equal at the tail (null) which is the return value for no intersection
// O(n+m) time because you have to go through the length of each list
// O{1} space because always 2 pointers

var getIntersectionNode = function (headA, headB) {
  let first = headA;
  let second = headB;

  while (first && second) {
      if (first === second) {
          return first;
      }
      if (first.next === null && second.next !== null) {
          first = headB;
          second = second.next;
      }
      else if (first.next !== null && second.next === null) {
          second = headA;
          first = first.next;
      }
      else {
          first = first.next;
          second = second.next;
      }
  }
  return null;
};

// alt solution with ternaries
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let first = headA;
    let second = headB;
    while (first != second) {

        first = first === null ? headB : first.next;
        second = second === null ? headA : second.next;
    }
    return curA;
};

