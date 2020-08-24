/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    if(!root){
        return [];
    }
    const result = [];
    const queue = [root];
    while(queue.length){
        const node = queue.shift();
        result.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}