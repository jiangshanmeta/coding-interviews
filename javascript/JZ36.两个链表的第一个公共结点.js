/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    let count1 = 0;
    let node = pHead1;
    while(node){
        count1++;
        node = node.next;
    }
    let count2 = 0;
    node = pHead2;
    while(node){
        count2++;
        node = node.next;
    }
    while(count1>count2){
        count1--;
        pHead1 = pHead1.next;
    }
    while(count2>count1){
        count2--;
        pHead2 = pHead2.next;
    }
    while(pHead1 !== pHead2){
        pHead1 = pHead1.next;
        pHead2 = pHead2.next;
    }
    return pHead1;
}