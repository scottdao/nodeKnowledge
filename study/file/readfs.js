/*
*
*
*fs.readFile(path[, options], callback)//异步读取
*
*fs.unlink(path,callback)//删除
*
*fs.rename(newpath,oldpath,callback)//重命名
*
*fs.stat(path[, options], callback)//读取文件的状态信息；
*
*fs.watch(filename[, options][, listener])//中有文件发生改变时的执行
*
*
*
*


var fs = require('fs');
var filename = 'f2.txt';

fs.watch(filename,function(ev,fileN){
	console.log(arguments)
});
fs.stat(filename,function(err,stats){
	console.log(arguments);
})
fs.rename(filename, 'f2.txt',function(err){
	console.log(err)
});

fs.unlink(filename, function(err){
	console.log(arguments)
});

fs.readFile(filename,function(err,content){
	// console.log(arguments);
	if(!err)console.log(content.toString());

	else  console.log('读取失败')
	
});

*/

/*
*
*fs.mkdir(path[, mode], callback)创建文件夹
*
*fs.rmdir() 删除文件夹；
*
*fs.readdir() 读取文件夹
*
**********/
var fs = require('fs')
//var f = fs.mkdirSync('./read');
fs.readdir('../file',function(err,fileList){//mode 代表是文件，还是文件夹；
	//console.log(arguments)
	fileList.forEach( function(element, index) {
		//console.log(element)
		fs.stat(element,function(err,stats){
			//console.log(stats)
			switch (stats.mode) {
				case 33206:
					console.log('文件--'+element)
					break;
				case 16822:
					console.log('文件夹--'+element)
				    break;
				default:
				break;
			}
		})
	});
});
// fs.mkdir('./read',function(err){
// 	console.log(arguments)
// 	if(!err){
// 		setTimeout(function(){
// 			fs.rmdir('./read', function(){
// 				console.log(arguments)
// 			});
// 		},3000);
// 	}
// });