  // base64
let formData = []
function upFile(e){
    let files = Array.prototype.slice.call(e.files);
    files.map (item=>{
        readFiles(item).then(res=>{
            formData.push({
                data:res,
                name:item.name,
                size:item.size,
                type:item.type
            });
        })
        
    })
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