/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    const result = []
    if(!pRoot){
        return result;
    }
    let lastLevel = [pRoot];
    while(lastLevel.length){
        const lastLevelVals = [];
        const nextLevel = [];
        for(let i=0;i<lastLevel.length;i++){
            lastLevelVals.push(lastLevel[i].val);
            lastLevel[i].left && nextLevel.push(lastLevel[i].left);
            lastLevel[i].right && nextLevel.push(lastLevel[i].right);
        }
        result.push(lastLevelVals);
        lastLevel = nextLevel;
    }
    return result;
}