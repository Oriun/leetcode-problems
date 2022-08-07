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
var addTwoNumbers = function (l1, l2) {
    var j = l1, k = l2, l3 = [], m = 0;
    while (true) {
        let r = j.val + k.val + m
        m = 0
        if (r >= 10) {
            m++
            r -= 10
        }
        l3.push(r)
        if (j.next === null && k.next === null) break
        j = j.next ?? new ListNode()
        k = k.next ?? new ListNode()
    }
    if (m) l3.push(m)
    return l3.reduceRight((l, r) => {
        return new ListNode(r, l)
    }, null)
};