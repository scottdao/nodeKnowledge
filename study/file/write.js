/*
*
*
*fs.write(fd, buffer[, offset[, length[, position]]], callback)
*
**fd:打开文件
**buffer:写入的数据
**offset:输入数据的起始位置
**length:要写入buffer的数据长度
**position:fd中的起始位置
**callBack:回调
***三个参数
******/

/*var fs = require('fs');
var fd = fs.openSync('f1.js','r+');//r+表示读写方式
var bf1 = Buffer.from('wobuxuyao','utf-8')
fs.write(fd,bf1,0,9,2,function(err,len,buffe){
	console.log(arguments);
})*/

/*var fs = require('fs')

var fd = fs.openSync('f1.txt','r+');//r+表示读写方式

fs.write(fd,'mycode',3,function(){
	console.log(arguments)
})*/

/*
*
*fs.writeFile(file, data[, options], callback) 异步写入 options:字符编码
*给指定的文件中写入数据，如果文件不存在，则创建该文件；如果存在，新内容会覆盖原有的文件内容。
*
*fs.writeFileSync(file, data[, options])//同步添加,无返回值
*
*
*
*
*
*fs.appendFile(path, data[, options], callback) 异步添加
*
*fs.appendFileSync(filename,'空间上的花费多少','utf8') //同步添加
*
*
*
*
*
***********************/
var filename = 'f3.js';
var fs = require('fs')
/*fs.writeFile(filename,'谁是谁','utf8', function(err){
	console.log(arguments)
});*/
//var a = fs.writeFileSync(filename,'谁是数','utf8')

/*fs.appendFile(filename,'合肥市打火机','utf8', function(){
	console.log(arguments)
});
var a = fs.appendFileSync(filename,'空间上的花费多少','utf8')
console.log(a)*/
fs.stat(filename,function(err,stats){//判断是否存在该文件。
	if(!err){
		fs.appendFile(filename,'我说防守对方', 'utf8',function(err){
			console.log(arguments);
			if(!err){
				console.log('file add content')
			}
		});
	}else{
		
		fs.writeFile(filename,'特价房都是','utf8',function(err){
			console.log(arguments);
			if(!err){
				console.log('file create')
			}

		});
	}
})