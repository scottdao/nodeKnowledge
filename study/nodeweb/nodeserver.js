var http = require('http');
var url = require('url');
var server = http.createServer();
server.on('error',function(err){
	console.log(err);
})
server.on('request',function(req,res){
	//console.log(req.url);
	function domEle(res,content){
	res.writeHead(200,'keep-alive',{//plain:纯文本；html:解析
			'Content-Type':'text/html;charset=utf-8'
		})
		
		res.end(content);
	}
	if(req.url !=='/favicon.ico'){
		var urlStr = url.parse(req.url);
		//console.log(urlStr);
		switch (urlStr.pathname) {
			case '/':
			
				domEle(res,'<h1>这是首页</h1>')
			break;
			case '/web':
				domEle(res,'<h1>这是web页</h1>')
			break;
			default:
				domEle(res,'<h1>你想要的页面走丢啦！</h1>')
			break;
		}
		//res.end()
		
	}
	
})
server.listen(8080,'127.0.0.1',function(){
	console.log('服务开启啦');
})