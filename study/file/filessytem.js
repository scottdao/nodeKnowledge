
//console.log(fs);

/*
*
* fs.open(path,flags,[mode],callback)(http://nodejs.cn/api/fs.html#fs_fs_open_path_flags_mode_callback)//异步打开
*
*path :打开文件的路径；
*
*flags:打开文件的方式 读/写
*
*mode:设置文件的模式，读/写/执行 4/2/1
*
*callback :回调；
*
***err:文件打开失败的错误保存在err里面，如果成功，err为null；
***fd:被打开文件的标识；
*
*
*
*
*/

/*fs.open('f1.js','r+',function(err,fd){
	//console.log(err)
	//console.log(fd)
})*/
//console.log(111)
/*
*
*
*fs.openSync(path, flags[, mode])同步打开
*
*
*/
var fs = require('fs')
var w = fs.openSync('f1.js','r+');
console.log(w)