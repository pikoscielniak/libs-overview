var net = require('net');
var server = net.createServer(function (socket) {
    socket.end("Hello and Goodbye!\n");
});

server.on('listening', function () {
    console.log(server.address());
});

server.on("error", function(error) {
    if (error.code === "EADDRINUSE") {
        console.error("Port is already in use");
    }
});

server.listen(8000, "127.0.0.1");