/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // 第一次：快慢指针找到相遇点
    // 第二次：从头节点和相遇点同时出发，以相同速度移动，相遇点就是环的入口
    if (slow === fast) {
      let entry = head;
      while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }
      return entry;
    }
  }
  return null;
};
