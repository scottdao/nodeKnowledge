const path  = require('path');
const  fs = require('fs');
const PDFParser = require("pdf2json")
// 服务端----读取并创建文件
function createDir(fileDir_name){
    let path_url = path.join( __dirname, `../${fileDir_name}`);
    return new Promise((resolve,reject)=>{
            fs.readdir(path_url, (err,status)=>{
                console.log(err);
                if(err){
                    reject(err)
                }
                
                resolve(status)
            });
    }).then((s)=>{
        return Promise.resolve(s)
    }).catch(err=>{
        if(err){
            return new Promise((resolve,reject)=>{
                    fs.mkdir(path_url,(err, s)=>{
                        if(err){
                            reject(err)
                        }
                        resolve(s)
                    });
            })
        }
    })
   
}

// 写文件
async function writeFile(text, type, glob_fileDir_name){
    let data = null;
    let name = ''
    if(type === 'base64'){
        data = new Buffer(text.data.replace(/^data:[a-zA-Z0-9]+\/\w+;base64,/,""), type)
        name = text.name;
    }else if(type === 'binary'){
        data = new Buffer.from(text.data)
        name = text.name;
    }
    const su = await createDir(glob_fileDir_name);
    fs.writeFile(path.join( __dirname, `../${glob_fileDir_name}/${name}`),data,(error)=>{
        if (error) {
            console.warn(error)
            console.log('写入失败')
        } else {
            console.log('写入成功了')
        }
    })
}
/**
 * @ldy
 * pdf解析成json文件
 * newPath:导入文件路径
 * new_name:导入文件名
 * res:响应数据
 * glob_fileDir_name：json文件存放的文件夹的名
 * ****/ 
function parsePdf(newPath, new_name, res, glob_fileDir_name) {
   
    const pdfParser = new PDFParser(this, 1);
    pdfParser.on("pdfParser_dataError", errData => {
        res.status(500).json({
        code: 500,
        message: '导入解析失败',
        data: errData
        });
    });
    pdfParser.on("pdfParser_dataReady", pdfData => {
        let data = pdfParser.getRawTextContent()
        console.log(data);
        fs.writeFile(path.join( __dirname, `../${glob_fileDir_name}/${new_name}.json`), data, function (err) {
        if (err) {
            throw err;
        }
        });
        res.status(200).json({
        code: 200,
        message: '上传解析成功',
        data: {
            result: data
        },
        });
    });
    pdfParser.loadPDF(newPath);

}
module.exports = {
    createDir,
    writeFile,
    parsePdf
}