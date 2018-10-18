/*
*
*1.用户通过http请求到指定的主机
*2.服务器接收到请求，对请求分析和处理
*3.服务器器处理完成后，返回数据到对应的用户
*4.浏览器接受服务器的数据，并进行处理分析
*
*/
var http = require('http');
var fs = require('fs');
var pa = './nodeweb.html';
 fs.open(pa,'r+',function(err,isExist){
 	if(isExist){
 		//console.log('文件存在')
 		var wenjian = fs.readFileSync(pa,'utf8');
 		//console.log(wenjian.toString())
 		CreateServer(wenjian)
 	}else{
 		console.log('该文件不存在')
 	}

});
function CreateServer(wenjian){
	var server = http.createServer();
	server.on('error',function(err){
		console.log(err);
	})
	server.on('request',function(req,res){
		console.log('请求到啦！');
		//console.log(req);
		//res.setHeader('Content-Type', '*/plain;utf8');
		res.writeHead(200,'keep-alive',{//plain:纯文本；html:解析
			'Content-Type':'text/html;charset=utf-8'
		})
		res.write(wenjian)
		res.end();
	})
	server.listen(8080,'127.0.0.1',function(){
		console.log('服务开启啦');
	})
}


//process.exit();