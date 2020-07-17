const servers = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
const app = servers()
const port = 3000
app.use(bodyParser.json())
function writeFile(text, type){
    let data = null;
    if(type === 'base64'){
        data = new Buffer(text.data.replace(/^data:[a-zA-Z0-9]+\/\w+;base64,/,""), type)
    }else if(type === 'binary'){
        data = new Buffer.from(text.data)
    }else{
        data = text.data;
    }
    fs.writeFile(`./file/${text.name}`,data,(error)=>{
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
        console.log(errors)
    }
 
})
app.post('/uploadObject',(req, res)=>{
    res.header('Content-Type', 'multipart/form-data');
    // console.log(req.file);
    req.on('data', (buffer) => {
       console.log(buffer.toString())
       let str = buffer.toString()
    })
    res.json({ success:true,code:0, message:'success'})
})
app.listen(port, () => console.log(`file upload app listening on port ${port}!`))