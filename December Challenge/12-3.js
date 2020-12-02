// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

// Follow up:
// What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function() {
     let i = 2;
     let cur = this.head.next;
     let val = this.head.val;
     while(cur) {
            const ratio = 1/i
            let rando = Math.random()
            console.log(cur, val, rando)
            if(rando <= ratio ) val = cur.val;
            i++;
            cur = cur.next;
     }
     return val;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/
