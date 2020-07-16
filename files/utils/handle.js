  // 读取二进制文件；
  function readBinary(text){
    var data = new ArrayBuffer(text.length);
    var ui8a = new Uint8Array(data, 0);
    for (var i = 0; i < text.length; i++){ 
        ui8a[i] = (text.charCodeAt(i) & 0xff);
    }
    return ui8a;
}
// 文件读取
function readFiles(item, type='base64'){
    const typeSelect = {
        base64(reader){ // base64
            reader.readAsDataURL(item)
        },
        binary(reader){ //二进制
            reader.readAsBinaryString(item)
        }
    }
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        reader.onload = function(){
            let dataFile = this.result;
            if(type ==='binary'){
                dataFile = readBinary(this.result);
            }
            resolve(dataFile);
        }
        reader.onerror = function(){
            reject(this.error)
        }
        typeSelect[type] && typeSelect[type].call(null, reader);
    })
}