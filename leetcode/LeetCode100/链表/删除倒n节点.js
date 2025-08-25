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
var removeNthFromEnd1 = function (head, n) {
  head = reverseList(head);
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;

  let cnt = 0;
  while (cur.next) {
    cnt++;
    if (cnt === n) {
      cur.next = cur.next.next;
      break;
    }
    cur = cur.next;
  }

  return reverseList(dummy.next);
};

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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  // fast 指针比 slow 先走了 n 步，
  // 因此当 fast 到达末尾时，slow 必定会停在倒数第 n 个节点的前一个节点。
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
