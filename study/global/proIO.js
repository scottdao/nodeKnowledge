/*
*process.
**stdin stdout标准输入输出流（IO）。
***标准输入设备：https://baike.baidu.com/item/%E8%BE%93%E5%85%A5%E8%AE%BE%E5%A4%87/10823368
***标 准输出设备：https://baike.baidu.com/item/%E8%BE%93%E5%87%BA%E8%AE%BE%E5%A4%87
*
*
*stdin 提供操作输入数据的方法 stdout提供操作输出数据的方法，通称IO。
*
***********/

//console.log(process.stdout);
//process.stdout.write('hello')



/*process.stdin.setEncoding('utf8');
process.stdin.resume();
process.stdin.on('data',function(chunk){

	//console.log('用户输入：'+chunk)
	process.stdout.write(`data: ${chunk}`);
})*/
var num1, num2;
process.stdout.write('请输入num1的值：');

process.stdin.on('data',function(chunk){
    if (!num1) {
        num1 = Number(chunk);
        
        process.stdout.write('请输入num2的值:');
    } else {
        num2 = Number(chunk);
        process.stdout.write('结果是：' + (num1 + num2));

    }
});
//process.exit()