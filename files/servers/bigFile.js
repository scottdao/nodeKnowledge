const uploadFile = (app)=>{
    app.post('/upload_big_file',(req, res) => {
        res.send('Hello World!')
    })
}
module.exports = uploadFile