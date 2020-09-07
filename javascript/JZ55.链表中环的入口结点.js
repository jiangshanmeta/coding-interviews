/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    if(!pHead){
        return null;
    }
    let slow = pHead;
    let fast = slow.next;
    while(fast && fast.next && fast !== slow){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast === null){
        return null;
    }
    let count = 1;
    slow = slow.next;
    while(slow !== fast){
        slow = slow.next;
        count++
    }
    slow = pHead;
    fast = pHead;
    while(count--){
        fast = fast.next;
    }
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    
    
    return slow;
}