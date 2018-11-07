/*
*fs.read(fd, buffer, offset, length, position, callback);
*
*fd:通过open方法成功打开一个文件返回的编号
*buffer:buffer对象
*offset:
*length:
*position:
*callBack:
*** err
*** len
*** newBuff
********/
var fs = require('fs')
var fd = fs.openSync('f1.js','r+');
var bf1 = Buffer.alloc(10);
console.log(bf1);
fs.read(fd,bf1,0,4,null,function(err,len,newBuff){
	// console.log(arguments);
	console.log(err);
	console.log(len)
	console.log(newBuff)
})