  // base64
let formData = []
function upFile(e){
   //  let files = Array.prototype.slice.call(e.files);
  
    // files.map (item=>{
        readFiles(e.files[0]).then(res=>{
            formData = [{
                    data:res,
                    name:e.files[0].name,
                    size:e.files[0].size,
                    type:e.files[0].type
            }]
        })
        
    // })
}
function clickUpLoad(){
    fetch('http://127.0.0.1:3000/upload',{
        method: 'POST',
        body: JSON.stringify({file:formData}),
        headers:{
            'Content-Type':"application/json"
        }
    }).then(res=>res.json()).then(res=>{
        console.log(res)
    })
}