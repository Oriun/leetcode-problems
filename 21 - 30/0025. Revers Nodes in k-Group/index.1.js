/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k === 1) return head
    let retenue = new ListNode(0, head),
        start = new ListNode(0, head),
        i = 0,
        g = start,
        prime = null,
        mid = null,
        tail = null,
        next = null,
        previous = null
    while (retenue) {
        if (i === k) {
            i = 0
            next = retenue.next
            previous = start.next
            prime = start.next
            mid = prime.next
            tail = mid.next
            prime.next = next
            mid.next = prime
            while (tail && tail !== next) {
                prime = mid
                mid = tail
                tail = tail.next
                mid.next = prime
            }
            start.next.next = next
            start.next = mid
            start = previous
            retenue = previous
        } else {
            retenue = retenue.next
            i++
        }
    }
    return g.next
};