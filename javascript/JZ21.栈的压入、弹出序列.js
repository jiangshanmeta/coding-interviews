const stack1 = [];
const stack2 = [];

function push(node)
{
    stack1.push(node);
    if(stack2.length === 0 || node<=stack2[stack2.length-1]){
        stack2.push(node)
    }
}
function pop()
{
    const node = stack1.pop();
    if(node === stack2[stack2.length-1]){
        stack2.pop();
    }
    return node;
}
function top()
{
    return stack1[stack1.length-1];
}
function min()
{
    return stack2[stack2.length-1];
}