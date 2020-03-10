var express = require("express");

var app = express();

var swig = require("swig");

var mongoose = require("mongoose");

//静态文件, 静态文件进入路由的资源
app.use("/public", express.static(__dirname + "/public"));
/**
 *
 *模版引擎；
 *第一个参数为文件名后缀
 *第二个参，解析模版内容的方法
 ***/
app.engine("html", swig.renderFile);

/**
 *@第1个参数：必须views，第二个参数是目录
 *
 **/
app.set("views", "./views");

/*
 *@第一个参数：必须是view engine,第二个参数必须是app.engine中第一个参数定义的模版文件后缀名，两者一致。
 *
 **/
app.set("view engine", "html");

/*
 *设置取消缓存
 *
 */
swig.setDefaults({ cache: false });

/*
 * 根据不同功能，进行模块化开发
 **/
app.use("/admin", require("./routers/admin"));
app.use("/api", require("./routers/api"));
app.use("/", require("./routers/main"));

//链接数据库
mongoose.connect("mongodb://127.0.0.1:27018/blog", function(e) {
  if (e) {
    console.log("数据连接失败");
  } else {
    console.log("数据库连接成功。。。");
    app.listen(8081, () => {
      console.log("启动服务...");
    });
  }
});
