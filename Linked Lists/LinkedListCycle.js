// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 // O(1) space
// if theres a cycle and one pointer moves faster than the other, eventually the pointers will be equal
// O{n) time simplified from O(N+K) where N is nodes before the cycle and K is the distance between the pointers in the cycle, It will take the slow pointer N to reach the cycle. At that point the fast pointer is there and it will take a max of K time for them to catch up, where K is the distance between the two pointers
var hasCycle = function(head) {
  if(head === null || head.next === null) {
      return false
  }

  let node1 = head
  let node2 = head.next

  while(node1 !== node2) {
      if(!node1 || !node2 || !node2.next ) {
          return false
      } else {
          node1 = node1.next
          node2 = node2.next.next
      }
  }
  return true
}


var hasCycle = function(head) {
  const set = new Set();
  let node = head;
  while (node !== null) {
      if (set.has(node)) {
          return true;
      }
      set.add(node);
      node = node.next
  }
  return false;
};





