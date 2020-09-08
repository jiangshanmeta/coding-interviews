/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    if(!pRoot){
        return [];
    }
    const result = [];
    let lastLevel = [pRoot];
    while(lastLevel.length){
        const vals = [];
        const nextLevel = [];
        for(let i=0;i<lastLevel.length;i++){
            vals.push(lastLevel[i].val);
            lastLevel[i].left && nextLevel.push(lastLevel[i].left);
            lastLevel[i].right && nextLevel.push(lastLevel[i].right);
        }
        lastLevel = nextLevel;
        if(result.length % 2 === 1){
            vals.reverse();
        }
        result.push(vals);
    }
    return result;
}