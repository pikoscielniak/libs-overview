var WebSocket = require('ws');
var ws = new WebSocket("ws://localhost:8000");

ws.on('opne', function () {
    ws.send('Hello!');
});

ws.on("message", function (data, flags) {
    console.log('Server says:')
    console.log(data);
    ws.close();
});