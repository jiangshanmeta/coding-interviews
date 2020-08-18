/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head){
    const stack = [];
    while(head){
        stack.push(head.val);
        head = head.next;
    }
    return stack.reverse()
}