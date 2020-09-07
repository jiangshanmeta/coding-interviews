/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    if(!pRoot){
        return true;
    }
    return isSymmetricalHelper(pRoot.left,pRoot.right)
}

function isSymmetricalHelper(root1,root2){
    if(root1 && root2){
        return root1.val === root2.val && isSymmetricalHelper(root1.left,root2.right) && isSymmetricalHelper(root1.right,root2.left);
    }else if(!root1 && !root2){
        return true;
    }
    return false;
}