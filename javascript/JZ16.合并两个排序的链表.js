/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    const dummyHead = new ListNode(0);
    let last = dummyHead;
    while(pHead1 && pHead2){
        if(pHead1.val<pHead2.val){
            last.next = pHead1;
            pHead1 = pHead1.next;
        }else{
            last.next = pHead2;
            pHead2 = pHead2.next;
        }
        last = last.next;
    }
    if(pHead1){
        last.next = pHead1;
    }else if(pHead2){
        last.next = pHead2;
    }
    
    return dummyHead.next;
}