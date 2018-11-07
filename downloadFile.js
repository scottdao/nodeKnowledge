var http = require('http');
var https = require('https');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{
		"Content-Type":'text/html;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		"Access-Control-Allow-Credentials":"true",
		'Access-Control-Allow-Headers':'X-Requested-With',
		"Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
	})
	
	var ht = fs.readFileSync('./downloadFile.html','utf8');
	
	var pd = 'https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/index.html';
	//var pdfdoc = ''
	function getPdf( callBack){
	https.get(pd,function(re){
		//console.log(res)
		// console.log('statusCode:', res.statusCode);
		// console.log('headers:', res.headers);
		re.on('data', (d) => {
			//process.stdout.write(d);
			//res.end(d)
			callBack && callBack(d)
		});
		
	})
	}
	if(req.url !=='/favicon.ico'){
		var urlStr = url.parse(req.url);
		switch (urlStr.pathname) {
			case '/':
				//console.log(urlStr.pathname);
				res.end(ht)
			break;
			case '/download':
				
			https.get(pd,function(re){
				//console.log(res)
				// console.log('statusCode:', res.statusCode);
				// console.log('headers:', res.headers);
				re.on('data', (d) => {
					//process.stdout.write(d);
					//res.end(d)
					//console.log(d)
					res.write(d)
					res.end();
				});
				
			})
			
			break;
		}
	}
	//res.end(ht)
})

server.listen(8080,'127.0.0.1',function(){
	console.log('下载服务开启...')
})