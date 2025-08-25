/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode1 = function (headA, headB) {
  const set = new Set();
  let nodeA = headA;
  while (nodeA !== null) {
    set.add(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB = headB;
  while (nodeB !== null) {
    if (set.has(nodeB)) {
      return nodeB;
    }
    nodeB = nodeB.next;
  }
  return null;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  //   链表A的非公共部分长度为 m
  //   链表B的非公共部分长度为 n
  //   公共部分长度为 p
  // nodeA 走过的路径：m + p + n 步后到达公共节点 c1
  // nodeB 走过的路径：n + p + m 步后到达公共节点 c1
  // 由于 m + p + n = n + p + m，两个指针会在 c1 处相遇。
  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next;
    nodeB = nodeB === null ? headA : nodeB.next;
  }
  return nodeA;
};
