/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    if(!pHead){
        return null;
    }
    let node = pHead;
    while(node){
        const cloneNode = new RandomListNode(node.label);
        cloneNode.next = node.next;
        node.next = cloneNode;
        node = cloneNode.next;
    }
    
    node = pHead;
    while(node){
        if(node.random){
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }
    
    let cloneHead = pHead.next;
    pHead.next = cloneHead.next;
    pHead = pHead.next;
    let prev = cloneHead;
    while(pHead){
        prev.next = pHead.next;
        prev = prev.next;
        pHead.next = pHead.next.next;
        pHead = pHead.next;
    }
    return cloneHead;
}