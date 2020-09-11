/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot)
{
    const result = [];
    serializeHelper(root,result);
    return result.join(',');
}
function serializeHelper(root,result){
    if(!root){
        result.push('$');
        return;
    }
    result.push(root.val);
    serializeHelper(root.left,result);
    serializeHelper(root.right,result);
}

function Deserialize(s)
{
    const sequence = s.split(',');
    let index = 0;
    function deserializeHelper(){
        if(index === sequence.length){
            return ;
        }
        if(sequence[index] === '$'){
            index++;
            return null;
        }
        const root = new TreeNode(+sequence[index++]);
        root.left = deserializeHelper();
        root.right = deserializeHelper();
        return root;
    }
    
    return deserializeHelper()
}

