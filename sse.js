var http = require("http");

http.createServer(function (req, res) {
  var fileName = "." + req.url;
console.log(req.url);
  if (fileName === "./stream") {
    res.writeHead(200, {
      "Content-Type":"text/event-stream;utf8",
      "Cache-Control":"no-cache",
      "Connection":"keep-alive",
      "Access-Control-Allow-Origin": '*',
     // Access-Control-Allow-Origin
    });
     res.write("data: " + (new Date())+ 'my self is job view' + "\n\n");
    interval = setInterval(function () {
      res.write("data: " + (new Date())+ 'my self is job view' + "\n\n");
    }, 1000);
    req.connection.addListener("close", function () {
      clearInterval(interval);
    }, false);

  }
   //res.end('我是1234');
}).listen(8844, "127.0.0.1");
