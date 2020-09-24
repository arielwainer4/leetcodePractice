// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

// reminder notes about Lists:
// capitalize List / node class name
// head is whatever node youre working on / looking at
// L1 and L2 inputs the heads of their individual lists

// ask if lists are the same length
// can a list be empty?


var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while(l1!==null||l2!==null||sum>0){

      if(l1!==null){
          sum = sum + l1.val;
          l1 = l1.next;
      }
      if(l2!==null){
          sum = sum + l2.val;
          l2 = l2.next;
      }
      if(sum>=10){
          carry = 1;
          sum = sum - 10;
      }

      head.next = new ListNode(sum);
      head = head.next;

      sum = carry;
      carry = 0;

  }

  return List.next;
};
