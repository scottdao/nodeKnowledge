/*
*
*1.用户发一个http请求至对应主机
*
*2.服务器接受请求，对请求进行分析处理
*
*3.服务器响应处理成功，返回数据到对应的用户机器
*
*4.浏览器接受服务器的返回的数据，并根据数据进行分析和处理。
*
*
*
*function(req,res){
	res.statusCode =200;
	res.setHeader('Content-Type', 'text/plain;utf-8');
  	res.end('Hello World!\n');
}
*
*客户端 服务端
*由客户端发送一个http请求---->服务端响应,success------>客户端接受数据，处理并解析。
*
*
*/

var http = require('http');//加载http模块；
var fs = require('fs');
var serve =  http.createServer()//回调函数，监听request请求的一个回调，可有可无。
//console.log(fs)
//fs.readSync(fd, buffer)

var wenjian = fs.readFileSync(__dirname+'/index.html');
var jx = wenjian.toString();
serve.on('error',function(err){
	//console.log(arguments)
	console.log(err)
})
serve.on('request',function(req,res){
	console.log('客户端请求！')
	//res.setHeader('Content-Type', 'text/plain;utf-8');
	//console.log(res)
	 req.setEncoding('utf8');
	 res.write(jx)
	 res.end()
})
serve.listen(8090,'127.0.0.1',function(){
	console.log('启动...')
})
