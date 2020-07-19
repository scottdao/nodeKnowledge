const servers = require('express');
const bodyParser = require('body-parser');
const  fs = require('fs');
const multer  = require('multer');
const path  = require('path');
const PDFParser = require("pdf2json")
const app = servers()
const port = 3000
app.use(bodyParser.json())
// 配置文件夹名；
const glob_fileDir_name = 'file';
// app.use(servers.bodyParser({uploadDir:'./uploads'}));
function writeFile(text, type){
    let data = null;
    let name = ''
    if(type === 'base64'){
        data = new Buffer(text.data.replace(/^data:[a-zA-Z0-9]+\/\w+;base64,/,""), type)
        name = text.name;
    }else if(type === 'binary'){
        data = new Buffer.from(text.data)
        name = text.name;
    }
    // else if(type = 'formatData'){
    //    data = text;
       //  name = text.match(/filename/g);
   // }
   
    fs.writeFile(path.join( __dirname, `../${glob_fileDir_name}/${name}`),data,(error)=>{
        if (error) {
            console.warn(error)
            console.log('写入失败')
        } else {
            console.log('写入成功了')
        }
    })
}
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/upload', (req, res) =>{
    try {
        res.header('Content-Type', 'application/json;charset=utf-8');
        const { file } = req.body
        file.map(item=>{
          writeFile(item, 'base64')
        }) 
        res.json({ success:true,code:0, message:'success'})
    } catch (error) {
        console.log(error)
    }
 
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join( __dirname, `../${glob_fileDir_name}`));    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now());  
    }
});
const upload = multer({ storage: storage });
// 解析成json文件
function parsePdf(newPath, new_name,res) {
        var pdfParser = new PDFParser(this, 1);
        pdfParser.loadPDF(newPath);
        pdfParser.on("pdfParser_dataError", errData => {
            res.status(500).json({
            code: 500,
            message: '导入解析失败',
            data: errData
            });
        });
        pdfParser.on("pdfParser_dataReady", pdfData => {
            let data = pdfParser.getRawTextContent()
            // console.log(pdfParser);
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
}
   
app.post('/uploadObject', upload.single('file'),(req, res)=>{
    console.log(req.file)
    let oldPath = path.join( __dirname, `../${glob_fileDir_name}/${req.file.filename}`);
    let newPath = path.join( __dirname, `../${glob_fileDir_name}/${req.file.originalname}`);
    const new_name = req.file.originalname.replace(/\.pdf/g, '');
    fs.renameSync(oldPath, newPath);
    parsePdf(newPath,new_name, res);
})
const BigFile = require('./bigFile');
BigFile(app);
app.listen(port, () => console.log(`file upload app listening on port ${port}!`))