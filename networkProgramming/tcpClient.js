var net = require('net');
//var clientSocket = net.connect({
//    port: 8000,
//    host: "localhost"
//});
var clientSocket = net.connect(8000, function() {
    console.log("Local endpoint " + clientSocket.localAddress + ":" +
        clientSocket.localPort);
    console.log("is connected to");
    console.log("Remote endpoint " + clientSocket.remoteAddress + ":" +
        clientSocket.remotePort);
});

clientSocket.setEncoding('utf8');

clientSocket.on("data", function (data) {
    process.stdout.write(data);
})
