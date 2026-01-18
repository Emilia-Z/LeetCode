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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0 ;
    while(l1 != null || l2 != null || carry !== 0){
        const x = l1? l1.val : 0;
        const y = l2? l2.val : 0;
        const sum = x + y + carry;

        carry = Math.floor(sum / 10);
        const digit = sum % 10 ;

        if(l1)  l1 = l1.next;
        if(l2)  l2 = l2.next;

        curr.next = new ListNode(digit);
        curr = curr.next;
    }

    return dummy.next;


    
};