var connect = require("connect");
var http = require("http");
var socketio = require('socket.io');
var app = connect();

var server;
var io;

app.use(connect.static("public"));
server = http.createServer(app);
io = socketio.listen(server);

io.on("connection", function (socket) {
    console.log("Got connection");
    socket.on("message", function (data) {
        socket.emit("echo", data);
    });
});

server.listen(8000);