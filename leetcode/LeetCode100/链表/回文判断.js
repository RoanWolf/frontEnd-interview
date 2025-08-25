/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function (head) {
  let res = [];
  let node = head;
  while (node) {
    res.push(node.val);
    node = node.next;
  }
  const len = Math.floor(res.length / 2);
  for (let i = 0; i < len; i++) {
    if (res[i] !== res[res.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome2 = function (head) {
  // 还不如1
  function copyList(head) {
    if (!head) return null;
    let newHead = new ListNode(head.val);
    let newCurrent = newHead;
    let current = head.next;

    while (current) {
      newCurrent.next = new ListNode(current.val);
      newCurrent = newCurrent.next;
      current = current.next;
    }

    return newHead;
  }

  let tail = reverseList(copyList(head));
  while (tail) {
    if (head.val !== tail.val) {
      return false;
    }
    head = head.next;
    tail = tail.next;
  }
  return true;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let tail = reverseList(slow);
  while (tail && head) {
    if (head.val !== tail.val) {
      return false;
    }
    head = head.next;
    tail = tail.next;
  }
  return true;
};

function reverseList(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
