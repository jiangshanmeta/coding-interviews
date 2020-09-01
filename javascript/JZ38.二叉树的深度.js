/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    if(!pRoot){
        return 0;
    }
    return Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right))+1;
}