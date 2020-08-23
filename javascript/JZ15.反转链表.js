/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    const dummyHead = new ListNode(0);
    while(pHead){
        const next = pHead.next;
        pHead.next = dummyHead.next;
        dummyHead.next = pHead;
        pHead = next;
    }
    return dummyHead.next;
}