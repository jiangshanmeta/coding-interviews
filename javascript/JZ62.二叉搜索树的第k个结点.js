/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    const stack = [];
    while(pRoot){
        stack.push(pRoot);
        pRoot = pRoot.left;
    }
    
    while(stack.length){
        k--;
        pRoot = stack.pop();
        if(k === 0){
            return pRoot;
        }
        pRoot = pRoot.right;
        while(pRoot){
            stack.push(pRoot);
            pRoot = pRoot.left;
        }
    }
    
}