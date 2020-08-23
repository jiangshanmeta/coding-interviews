/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    if(!pRoot1 || !pRoot2){
        return false;
    }
    if(pRoot1.val === pRoot2.val){
        return compare(pRoot1,pRoot2) || HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2);
    }
    
}

function compare(root1,root2){
    if(!root2){
        return true;
    }
    if(!root1){
        return false;
    }
    
    return root1.val === root2.val && compare(root1.left,root2.left) && compare(root1.right,root2.right);
}