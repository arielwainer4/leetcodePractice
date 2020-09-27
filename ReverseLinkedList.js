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

//  put linked list into a stack
// make dummy head of new list
// pull from top of the stack and add new node to the new reversed list
var reverseList = function(head) {
  let list = []
  while(head) {
      list.push(head)
      head = head.next
  }

  let reverse = new ListNode(0)
  let pointer = reverse

  // with for loop
  for(i = list.length-1; i >= 0; i--) {
      pointer.next = new ListNode(list[i].val)
      pointer = pointer.next
  }

  // with while loop
  while(list.length > 0) {
    let newNode = list.pop()
    pointer.next = new ListNode(newNode.val)
    pointer = pointer.next
  }

  return reverse.next
};


// returning in place solution
var reverseList = function(head) {
  let prev = null
  let current = head
  while(current !== null) {
      let temp = current.next
      current.next = prev
      prev = current
      current = temp
  }

  return prev
};

// recursive solution
var reverseList = function(head, prev = null) {
  if(head) {
      let newHead = head.next
      head.next = prev
      return reverseList(newHead, head)
  } else {
      return prev
  }
};
