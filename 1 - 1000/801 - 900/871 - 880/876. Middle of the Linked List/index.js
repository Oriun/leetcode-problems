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
var middleNode = function (head) {
  let node = head;
  const acc = [];
  while (node) {
    acc.push(node);
    node = node.next;
  }
  return acc[Math.floor(acc.length * 0.5)];
};
