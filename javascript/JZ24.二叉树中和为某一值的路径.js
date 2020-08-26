/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    const result = [];
    dfs(root,expectNumber,[],result);
    result.sort((a,b)=>b.length-a.length);
    return result;
}

function dfs(root,rest,sequence,result){
    if(!root){
        return;
    }
    sequence.push(node.val);
    if(!root.left && !root.right){
        if(root.val === rest){
            result.push(sequence.slice(0));
        }
        sequence.pop();
        return;
    }
    root.left && dfs(root.left,rest-root.val,sequence,result);
    root.right && dfs(root.right,rest-root.val,sequence,result);
    sequence.pop();
}