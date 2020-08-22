/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    let slow = head;
    let fast = head;
    while(k-- && fast){
        fast = fast.next;
    }
    if(!fast){
        return null
    }
    while(fast){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}