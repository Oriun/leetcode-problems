/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    var head = new ListNode(), tail = head
    while(lists.find(a=>a !== null)) {
        let min, index
        for(let i = 0; i < lists.length; i++)
            if(lists[i] && (!min || lists[i].val < min.val)){
                min = lists[i]
                index = i
            }
        tail = tail.next = min
        lists[index] = lists[index].next
    }
    return head.next
};