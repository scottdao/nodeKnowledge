var express = require('express');

var app = express();

var swig = require('swig'); 

//静态文件
app.use('/public', express.static(__dirname+'/public'));
/**
*
*模版引擎；
*第一个参数为文件名后缀
*第二个参，解析模版内容的方法
***/
app.engine('html',swig.renderFile);

/**
*@第1个参数：必须views，第二个参数是目录
*
**/
app.set('views','./views');

/*
*@第一个参数：必须是view engine,第二个参数必须是app.engine中第一个参数定义的模版文件后缀名，两者一致。
*
**/
app.set('view engine','html');

/*
*设置取消缓存
*
*/
swig.setDefaults({cache:false});

/*
*req:request对象
* res:response对象
* next函数
**/
app.get('/',function(req, res, next){
	//res.send('hello world!');//next,
	//res.setHeader('content-type', 'text/css');
	res.render('index');
});

app.listen(8080,()=>{
	console.log('启动服务...');
})