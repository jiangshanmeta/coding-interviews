/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    if(!pNode){
        return pNode;
    }
    if(pNode.right){
        pNode = pNode.right;
        while(pNode.left){
            pNode = pNode.left;
        }
        return pNode;
    }
    if(pNode.next && pNode.next.left === pNode){
        return pNode.next;
    }
    while(pNode.next && pNode.next.left !== pNode){
        pNode = pNode.next;
    }
    return pNode.next;
}