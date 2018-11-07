//var io = require('socket.io')(80);
//console.log(io);
//process.exit();

var WebSocketServer = require('websocket').server;
var http = require('http');
var server = http.createServer(function(request, response) {
    //console.log((new Date()) + ' Received request for ' + request.url);
    //console.log(request.url);
    // response.writeHead(404);

    response.end('我是javascript');
});
server.listen(8080,'127.0.0.1', function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});
function originIsAllowed(origin) {
  
  return true;
}
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {//接受客户端的信息
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(JSON.stringify({message:message.utf8Data,error:null}));
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {//断开连接
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});