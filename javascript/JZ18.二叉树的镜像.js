/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(!root){
        return root;
    }
    const tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    Mirror(root.left);
    Mirror(root.right);
    return root;
}