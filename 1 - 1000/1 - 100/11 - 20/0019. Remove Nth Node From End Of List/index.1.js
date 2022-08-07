/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let tail, stack = new Array(n+1).fill(null)
    stack.push(head)
    while(true){
        tail = stack[stack.length - 1].next
        if(!tail){
            if(stack[1] === null) return head.next
            if(stack[0] === null && stack[1] === null){
                head.next = null
                return head
            }
            stack[1].next = stack[3] || null
            return head
        }else {
            stack.push(tail)
            stack.shift()
        }
    }
};