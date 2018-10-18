var projectData = {
	name:'autoFile',
	fileData:[
		{
			name:'css',
			type:'dir'
		},
		{
			name:'js',
			type:'dir'
		},
		{
			name:'images',
			type:'dir'
		},
		{
			name:'index.html',
			type:'file',
			content:'<html>\n\t<head>\n\t<title>mfeolf</title>\n\t</head>\n\t<body><h1>yrte</h1>\n\t</body>\n\t</html>'
		},
	]
}
var fs = require('fs');

if(projectData.name){
	fs.mkdir(projectData.name,function(err){
		createfile && createfile(err)
	});

}
function createfile(err){
	if(!err){
		if(projectData.fileData && projectData.fileData.forEach){
			projectData.fileData.forEach(function(ele,index){
				 ele.path = projectData.name + '/' + ele.name
				switch (ele.type) {
					case 'file':
						fs.writeFileSync(ele.path,ele.content);
						break;
					case 'dir'://创建文件目录
					//console.log(ele.type);
					
					 fs.mkdirSync(ele.path);
					break;
					default:
						
						break;
				}
			})
			createHeBingCode && createHeBingCode(false)
		}
	}else{
		console.log('该文件目录已创建');
		createHeBingCode && createHeBingCode(true)
	}
}
/*
*1.自动创建目录
*
*2.监听合并代码。监听fileIndex文件夹中的文件变化
*
*/
var path = require('path')

function createHeBingCode(codeFlag){
	if(!codeFlag){//表示未自动创建目录自动创建
		//先监听文件
		var filename = './fileIndex';
		var createObj = {};
		var a = 0 ;
		fs.watch(filename, function(changestatus,changefile){
			//console.log(arguments)
			a++;
			switch (changestatus) {
				case 'change':
				if(a==2){
					a=0;
					
					var cf = filename + '/' +changefile;
					var content = fs.readFileSync(cf);//读取到的内容
					//console.log(content.toString());
					var pa = projectData.name + '/js/one.js';
					//console.log(a)
					console.log(content.toString())
					fs.appendFileSync(pa,content.toString());
					break;
				}
				case 'rename':
					
					break;
				default:
					// statements_def
					break;
			}
		});
		//process.exit()
		// fs.stat('./fileIndex',function(err,stats){
		// 	console.log(stats);
		// })
		// fs.watch('./fileIndex',function(err,fileName){
		// 	console.log(arguments);
		// })
	}
}

function readFile(){
	var filename = './fileIndex';
		var fss = fs.readdirSync(filename);//同步读取
		fss.forEach( function(element, index) {
			//console.log(element)
			var p = filename + '/' +element
			fs.stat(p,function(err,stats){
				//console.log(err)
				if(!err){
					console.log(stats);
					switch(stats.mode){
						case 16822:
						break;
						case 37084:
						break;
					}
				}else{
					console.warn('信息查看失败');
				}
			})
		});
}