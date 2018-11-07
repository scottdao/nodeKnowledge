/*
*process: 
*
*1. process.argv 数组两个元素
***** process.argv[0] process.execPath  node环境的安装路径
***** process.argv[1] 当前文件的路径
*
*
* 2. process.env 系统环境信息
*
* 3. process.version  node版本信息
*
* 4. process.versions node依赖包版本信息
*
* 5. process.pid
*
* 6. process.title
*
* 7. process.exit
* 
* 8. process.platform 操作平台
*/
/*console.log(process.argv)
console.log(process.execPath)*/

////console.log(process.env)
//console.log(process)
// console.log(process.version)
//console.log(process.versions)

/*console.log(process.pid)

console.log(process.title)
console.log(process.platform)*/

setInterval(function(){
	process.exit()
},3000);