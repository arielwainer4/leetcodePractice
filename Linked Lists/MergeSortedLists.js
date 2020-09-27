/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  iterative solution using existing nodes
// time complexity is O(n+m) where n is the length of l1 and m is the length of l2 because you have to go through each list one node at a time
// space complexity O(1) regardless of the size of each list, you use the same amount of storage because the variables just change where they point rather than adding more variables
var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(0)
  let prev = dummyHead
  while(l1 !== null && l2 !== null) {
      if(l1.val < l2.val) {
          prev.next = l1
          l1 = l1.next
      } else {
          prev.next = l2
          l2 = l2.next
      }
      prev = prev.next
  }
  if(l2 === null) {
      prev.next = l1
  } else {
      prev.next = l2
  }
  return dummyHead.next
};

// iterative solution with all new nodes
var mergeTwoLists = function(l1, l2) {
  let list = new ListNode()
  let head = list
  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          list.next = new ListNode(l1.val)
          l1 = l1.next
      } else {
          list.next = new ListNode(l2.val)
          l2 = l2.next
      }
      list = list.next
  }
  if (l1 !== null)
      list.next = l1
  if (l2 !== null)
      list.next = l2
  return head.next
};


// recursive solution
// time complexity is O(n+m) where n is the length of l1 and m is the length of l2 because you have to go through each list one node at a time
// space complexity O(n+m) because you could call the recursive function max for each node in both lists
var mergeTwoLists = function(l1, l2, newList = null, start = null) {
  if(newList === null) {
    newList = new ListNode(0)
      start = newList
  }

  if(l1 && l2) {
      if(l1.val < l2.val) {
          newList.next = l1
          return mergeTwoLists(l1.next, l2, newList.next, start)
      } else {
          newList.next = l2
          return mergeTwoLists(l1, l2.next, newList.next, start)
      }
  } else {
      if (l1 === null) {
          newList.next = l2
      } else {
          newList.next = l1
       }
      return start.next
  }
};
