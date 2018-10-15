# nodeKnowledge
# [api](http://nodejs.cn/api/fs.html#fs_fs_readfilesync_path_options)

## node与javascript的异同：

   1. 相同点，ECMAScript,数据类型，语法，内置对象，方法；

   2. 差异点，顶层对象不同：javasctipt-----window;   node-----global,不存在window;	  		

## node中module模块； [module文件](./study/module/module.js);

   1.  一个文件就是一个模块，每个模块都有自己的作用域，用var 定义的不是全局。

   2. global对象

   3. 模块加载机制，通过require进行加载。一般采用相对路径。

   4.  文件查找机制，加载机制，文件名---->.js----->.json------->.node----->throw Error

   5.  导入和导出，module.exports 和 exports关系。 require导入。

##  global对象；[global文件](./study/global/global.js);

   1.  内置对象（date,Array），定时器；

   2.  process对象，全局对象 ，进程。[process](./study/global/process.js)

       2.2  process.argv 

       2.3  process.execPath  node环境的安装路径

       2.4  process.env 系统环境信息

       2.5  标准io流；stdin stdout

   3.  buffer类；二进制数据流[buffer](./study/global/buffer.js) 

     	3.3  Buffer.from

     	3.4  Buffer.alloc

     	3.5   buf.copy(bf)  


##  fs文件流

  1.  fs模块，node核心模块

  2.  fs.open(path,flags,[mode],callback)方法,异步    fs.openSync(path, flags[, mode])同步

  3.  [fs.read(fd, buffer, offset, length, position, callback)](./study/file/fs.js);

  4.  [write](./study/file/write.js)  fs.writeFile(写入文件) writeFileSync(无返回值，同步写入) fs.appendFile(异步写入)

  5.  [readFile](./study/file/readfs.js) 读取 删除 重命名 状态 监听 创建文件夹(mkdir) 删除（rmdir） 读取


  ###  [webscoket api](https://github.com/theturtle32/WebSocket-Node);
  ###  [sse api](http://javascript.ruanyifeng.com/htmlapi/eventsource.html);