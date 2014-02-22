var fs = require("fs");
var https = require('https');
var server = https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}, function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"});
    response.end("Hello <strong>HTTP</strong>!");
});

server.listen(8000);