/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummyhead = new ListNode();
    dummyhead.next = head;
    let cur = dummyhead;

    while(cur.next != null){
        if(cur.next.val === val){
            cur.next = cur.next.next;
        }else{
            cur= cur.next;
        }
    }
    return dummyhead.next;
};