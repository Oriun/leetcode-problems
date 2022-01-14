/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let l1 = list1, l2 = list2, head, current;
    while(l1 || l2){
        let min
        if(l2 && !(l2?.val > l1?.val)){
            min = l2
            l2 = l2.next
        }else {
            min  = l1
            l1 = l1.next
        }
        if(head) current = current.next = min
        else current = head = min
    }
    return head || list1
};