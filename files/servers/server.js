const servers = require('express');
const bodyParser = require('body-parser');
const  fs = require('fs');
const multer  = require('multer');
const path  = require('path');
const app = servers()
const port = 3000
app.use(bodyParser.json())
const {  
    writeFile,
    parsePdf,
    createDir
} = require('../utils/serverHandle')
// 配置文件夹名；
const glob_fileDir_name = 'file';
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
app.post('/upload', (req, res) =>{
    try {
        res.header('Content-Type', 'application/json;charset=utf-8');
        res.header('Content-Length', 400000);
        const { file } = req.body
        file.map(item=>{
          writeFile(item, 'base64', glob_fileDir_name)
        }) 
        res.json({ success:true,code:0, message:'success'})
    } catch (error) {
        console.log(error)
    }
 
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        createDir(glob_fileDir_name).then(res=>{
            cb(null, path.join(__dirname, `../${glob_fileDir_name}`));    // 保存的路径，备注：需要自己创建
        })
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now());  
    }
});

const upload = multer({ storage: storage });
app.post('/uploadObject', upload.single('file'),(req, res)=>{
    let oldPath = path.join( __dirname, `../${glob_fileDir_name}/${req.file.filename}`);
    let newPath = path.join( __dirname, `../${glob_fileDir_name}/${req.file.originalname}`);
    const new_name = req.file.originalname.replace(/\.pdf/g, '');
    fs.renameSync(oldPath, newPath);
    if(/\.pdf/g.test(req.file.originalname)){
        parsePdf(newPath,new_name, res, glob_fileDir_name);
    }else{
        res.status(200).json({
            code: 200,
            message: '上传解析成功',
            data: {
                result: req.file
            },
        })
   }
})
const BigFile = require('./bigFile');
BigFile(app);
app.listen(port, () => console.log(`file upload app listening on port ${port}!`))