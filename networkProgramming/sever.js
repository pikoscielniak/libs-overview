var cp = require('child_process');
var net = require('net');
var server = net.createServer();
var child = cp.fork('./networkProgramming/child');

server.on('connection', function (socket) {
    socket.end("Handle by parent process");
});

server.listen(8000, function () {
    child.send('server', server);
});