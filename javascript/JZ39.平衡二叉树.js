/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    return getBalanceAndHeight(pRoot)[0]
}

function getBalanceAndHeight(pRoot){
    if(!pRoot){
        return [true,0];
    }
    const [leftBalance,leftHeight] = getBalanceAndHeight(pRoot.left);
    if(!leftBalance){
        return [false,0];
    }
    const [rightBalance,rightHeight] = getBalanceAndHeight(pRoot.right);
    if(!rightBalance){
        return [false,0];
    }
    return [
        Math.abs(leftHeight-rightHeight)<2,
        Math.max(leftHeight,rightHeight)+1
    ];
}