/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin){
    return buildTree(pre,vin,0,pre.length-1,0,vin);
}

function buildTree(pre,vin,preStart,preEnd,inStart,inEnd){
    if(preStart>preEnd){
        return null;
    }
    const root = new TreeNode(pre[preStart]);
    let rootIndexInInorder;
    for(let i=inStart;i<inEnd+1;i++){
        if(vin[i] === pre[preStart]){
            rootIndexInInorder = i;
            break;
        }
    }
    // x-(preStart+1) = rootIndexInOrdrde - 1-instart
    root.left = buildTree(
        pre,
        vin,
        preStart+1,
        rootIndexInInorder-inStart+preStart,
        inStart,
        rootIndexInInorder-1
    );
    // x-preEnd = rootInorder+1-inEnd
    root.right = buildTree(
        pre,
        vin,
        rootIndexInInorder+1-inEnd+preEnd,
        preEnd,
        rootIndexInInorder+1,
        inEnd
    );

    return root;
}