/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    if(!pRootOfTree){
        return pRootOfTree;
    }
    if(pRootOfTree.right){
        const right = Convert(pRootOfTree.right);
        pRootOfTree.right = right;
        right.left = pRootOfTree;
    }
    if(pRootOfTree.left){
        const left = Convert(pRootOfTree.left);
        let last = left;
        while(last.right){
            last = last.right;
        }
        last.right = pRootOfTree;
        pRootOfTree.left = last;
        pRootOfTree = left;
    }
    return pRootOfTree;
}