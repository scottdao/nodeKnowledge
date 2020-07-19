//  new format-data
let newFormat = new FormData();
function upFileObject(e){
    console.log(e.files)
    newFormat.append('file', e.files[0])
}
function clickUpLoadObject(){
    fetch('http://127.0.0.1:3000/uploadObject',{
        method: 'POST',
        body:newFormat,
    }).then(res=>res.json()).then(res=>{
        console.log(res)
    })
}