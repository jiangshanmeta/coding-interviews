const stack1 = [];
const stack2 = [];

function push(node){
    stack1.push(node);
}
function pop(){
    adjust();
    return stack2.pop();
}

function adjust(){
    if(stack2.length === 0){
        while(stack1.length){
            stack2.push(stack1.pop());
        }
    }
}