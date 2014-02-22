var http = require('http');
var connect = require('connect');
var app = connect();

app.use(connect.cookieParser());
app.use(connect.query());
app.use(connect.bodyParser());

app.use(function(request, response, next) {
    var cookies = request.cookies;
    var count = parseInt(cookies.count, 10);
    var setCookie = "count=" + (count + 1);

    response.setHeader("Set-Cookie", setCookie);
    return next();
});


app.use(function (request, response, next) {
    var query = request.query;
    for (q in query) {
        console.log(q + ' = ' + query[q]);
    }
    return next();
});

app.use(function (request, response, next) {
    var body = request.body;
    for (b in body) {
        response.write(b + ' = ' + body[b] + "\n");
    }
    return next();
});

app.use(function (request, response, next) {
    response.setHeader("Content-Type", "text/html");
    response.end("Hello <strong>HTTP</strong>");
});

http.createServer(app).listen(8000);