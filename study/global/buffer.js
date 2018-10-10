/*
*
*buffer类 二进制数据流
*
*元素16进制。new buffer()被废弃。
*
*1.buf.length:表示字节长度。中文字符1字符长度=3字节长度
*
*2.创建buffer类参数sting,array;Buffer.from; 
*
*3.限定buffer长度，Buffer.alloc(之前new Buffer())//不包含敏感数据   Buffer.allocUnsafe()//包含敏感数据
*
*4.copy  buf.copy(bf)  bf父 buf需要填充的内容，将buf填充到bf内 buf.copy(bf1,1);//1=表示从第二位插入
*
*5. write  buf.write();
*
*6.  Buffer.byteLength 计算buffer长度。
*
*7.  Buffer.isBuffer 判断是否是buffer
***********
*/

/*var buf  = Buffer.alloc(10);
buf.write('我是谁r',0)
console.log(buf)*/

/*var buf  = Buffer.alloc(10);
console.log(Buffer.byteLength('我示范第三方'))*/



/*var buf = Buffer.from('woshi');
var bf1 = Buffer.alloc(10);
console.log(bf1)
buf.copy(bf1);//1=表示从第二位插入
console.log(bf1)
console.log(Buffer.alloc(10));
console.log(Buffer.from('fsdhfj'))*/
//console.log(buf)

//console.log(buf.toString('utf-8',1,3))//os

//console.log(buf.toJSON())//{ type: 'Buffer', data: [ 119, 111, 115, 104, 105 ] }
//console.log(buf.toString().length);



/*var buf  = Buffer.alloc(10);
console.log(Buffer.isEncoding('utf-8'))
console.log(Buffer.isBuffer(buf))
console.log(Buffer.isBuffer([1,1,2,2,3]))*/


process.stdout.write('请输入所需要的的值：');

process.stdin.resume();

process.stdin.on('data',function(chunk){
  process.stdout.write(chunk)

});
//process.exit()