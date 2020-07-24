const fs = require("fs");
const https = require("https");

function getOnePage(page){
    return new Promise((resolve)=>{
        https.get(`https://www.nowcoder.com/activity/oj/questions?topicId=13&order=questionNo&asc=true&page=${page}`,(res)=>{
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { 
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error(`出现错误: ${e.message}`);
        });
    });
}

function getQuestions(){
    return Promise.all([
        getOnePage(1),
        getOnePage(2),
        getOnePage(3),
        getOnePage(4),
    ]).then((list)=>{
        return [
            ...list[0].data.questions,
            ...list[1].data.questions,
            ...list[2].data.questions,
            ...list[3].data.questions,
        ];
    });
}

getQuestions().then((questions)=>{
    const data = questions.map((item)=>{
        return {
            index:item.questionNo,
            title:item.questionTitle.replace(/\s/g,''),
            difficulty:item.difficulty,
        };
    });

    fs.writeFile('./metaData.json', JSON.stringify(data,null,4), 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });

});