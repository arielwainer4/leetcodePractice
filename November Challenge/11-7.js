// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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

const reverse = (node, prev = null) => {
  if(!node) return prev
  let temp = node.next
  node.next = prev
  return reverse(temp, node)
}

var addTwoNumbers = function(l1, l2) {
  let rev1 = reverse(l1)
  let rev2 = reverse(l2)
  let dummyHead = new ListNode(0)
  let pointer = dummyHead

  let carry = 0
  while(rev1 || rev2 || carry > 0) {
      let a = rev1 ? rev1.val : 0
      let b = rev2 ? rev2.val : 0
      let sum = a+b+carry
      if(sum > 9) {
          carry = 1
          sum -= 10
      } else carry = 0
      let newNode = new ListNode(sum)
      pointer.next = newNode
      pointer = newNode
      rev1 = rev1 ? rev1.next : rev1
      rev2 = rev2 ? rev2.next : rev2
  }
  return reverse(dummyHead.next)
};

// ALT version without modifying original linked lists:
function listLength (node, len = 0) {
  if(!node) return len
  len += 1
  return listLength(node.next, len)
}

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0)
  let pointer = dummyHead

  let len1 = listLength(l1)
  let len2 = listLength(l2)
  let diff = Math.abs(len1-len2)

  let long = len1 >= len2 ? l1 : l2
  let short = len2 <= len1 ? l2 : l1

  while(long && short) {
      let sum = long.val
      if(diff <= 0) sum += short.val

      let newNode = new ListNode(sum)
      pointer.next = newNode
      pointer = newNode
      long = long.next
      short = diff <= 0 ? short.next : short
      diff -= 1
  }

  let rev = reverse(dummyHead.next)
  let rev2 = rev
  let carry = 0
  let prev = rev
  while(rev || carry > 0) {
      if(!rev && carry > 0) {
          let newNode = new ListNode(carry)
          carry = 0
          prev.next = newNode
          prev = newNode
          rev = newNode
      }
      else {
          rev.val += carry
          if(rev.val > 9) {
              carry = 1
              rev.val -= 10
          } else {
              carry = 0
          }
      }
      prev = rev
      rev = rev.next
  }
  return reverse(rev2)
};
