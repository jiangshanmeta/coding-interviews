function replaceSpace(str){
    const list = str.split('');
    for(let i=0;i<list.length;i++){
        if(list[i] === ' '){
            list[i] = '%20';
        }
    }
    return list.join('');
}