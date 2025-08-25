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
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
/** 
初始状态:
pre = null
cur = 1 → 2 → 3 → null

第1次迭代:
next = 2 → 3 → null
1.next = null (1成为新链表尾部)
pre = 1 → null (pre指向已反转部分的头节点)
cur = 2 → 3 → null

第2次迭代:
next = 3 → null
2.next = 1 → null
pre = 2 → 1 → null (pre始终指向已反转部分的头节点)
cur = 3 → null

第3次迭代:
next = null
3.next = 2 → 1 → null
pre = 3 → 2 → 1 → null
cur = null

循环结束:
cur = null，退出循环
pre = 3 → 2 → 1 → null (这就是反转后的链表头节点)
*/
