// Sort a linked list using insertion sort.


// A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
// With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list

// Algorithm of Insertion Sort:

// Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// It repeats until no input elements remain.

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
var insertionSortList = function(head) {
  if(!head) return null
  let newHead = head //1-2-4

  head = head.next //2
  newHead.next = null

  while(head) { //3
      let temp = head.next //null
      let newList = newHead //1
      let prev = newList //1
      if(head.val < newList.val) {
          head.next = newList
          newHead = head
      } else {
          while(newList && head.val >= newList.val) {
          prev = newList //2-4
          newList = newList.next //4
          }
          prev.next = head
          head.next = newList
      }
      head = temp
  }
  return newHead
};
