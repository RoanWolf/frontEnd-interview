/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function (head) {
  if (head == null || head.next == null) return false;
  let current = head;
  let count = 0;
  const MAX_NODES = 10005;

  while (current !== null && count <= MAX_NODES) {
    current = current.next;
    count++;
  }

  // 如果遍历次数超过了最大节点数，说明有环
  if (count > MAX_NODES) {
    return true;
  }

  return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function (head) {
  if (head == null || head.next == null) return false;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
