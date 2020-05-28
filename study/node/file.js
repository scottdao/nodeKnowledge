const  fs = require('fs');
// console.log(fs) fs.open 异步打开文件。
// fs.openSync 同步打开文件。
// fs.open('./file/events.js', 'r', (err, values)=>{
//     if(err){
//         console.log('fail')
//     }
// })
// fs.read异步读取文件
// fs.write写文件
// fs.writeFile
// fs.exists检测文件是否存在
// fs.appendFile 
// fs.readdir 读取文件目录
// fs.stat 读取文件状态， 33206表示文件，16822文件夹
/*
fs.readdir('../file',(err, filesList)=>{
   //  console.log(err, filesList)
    filesList.forEach(element => {
        // console.log(element)
        fs.stat(`../file/${element}`, (err, v)=>{
            console.log(v.mode)
        })
    });

})*/

// fs.watch 监听文件变化
/*fs.watch('../file', function(err, v){
    console.log(err, v)
})*/