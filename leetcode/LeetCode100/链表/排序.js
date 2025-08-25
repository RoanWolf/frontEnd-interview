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
var sortList = function(head) {
    const arr = [];
    let cur = head;
    while(cur){
        arr.push(cur.val);
        cur = cur.next;
    }
    arr.sort((a,b)=>a-b);
    cur = head;
    for(let i = 0; i < arr.length; i++){
        cur.val = arr[i];
        cur = cur.next;
    }
    return head;
};