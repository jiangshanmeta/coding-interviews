/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    let dummyHead = new ListNode(0);
    dummyHead.next = pHead;
    let prev = dummyHead;
    while(pHead){
        const val = pHead.val;
        let duplicateFlag = false;
        pHead = pHead.next;
        while(pHead && pHead.val === val){
            duplicateFlag = true;
            pHead = pHead.next;
        }
        if(duplicateFlag){
            prev.next = pHead;
        }else{
            prev = prev.next;
        }
        
    }
    
    return dummyHead.next;
}