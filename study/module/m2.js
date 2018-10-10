//global.a = 3;
var b=  4;	
module.exports = {b}		
/*
*
*__filename模块作用下属性，不是全局，解析后返回值为该文件的绝对路径;
*
*__dirname模块作用下属性，不是全局，解析后返回值为该文件所在文件夹的绝对路径；
*/
console.log(__filename)	//D:\gitScott\nodeKnowledge\study\module\m2.js
console.log(__dirname) //D:\gitScott\nodeKnowledge\study\module