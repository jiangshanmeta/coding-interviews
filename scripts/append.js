const fs = require('fs');
const questionMap = require('./metaData.json').reduce((obj,item)=>{
    obj[item.index] = item;
    return obj;
},Object.create(null));

const index = process.argv[2];
const question = questionMap[index];
if(!question){
    console.log('无效序号');
    return;
}

const fileName = `${question.index}.${question.title}.js`;
const dir = `../javascript/${fileName}`;
if(fs.existsSync(dir)){
    console.log('文件已存在');
    return;
}

fs.writeFileSync(dir,'');