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
function createHeBingCode(codeFlag){
	if(!codeFlag){//表示未自动创建目录自动创建
		//先读取文件夹,再查看文件状态，后监听文件变化;
		var filename = './fileIndex';
		var fss = fs.readdirSync(filename);//同步读取
		fss.forEach( function(element, index) {
			fs.stas(filename,function(err,stats){
				//console.log()
			})
		});
		// fs.stat('./fileIndex',function(err,stats){
		// 	console.log(stats);
		// })
		// fs.watch('./fileIndex',function(err,fileName){
		// 	console.log(arguments);
		// })
	}
}