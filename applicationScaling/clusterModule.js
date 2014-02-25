var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
    cluster.on("disconnect", function(worker) {
        console.log("Worker " + worker.id + " disconnected");
    });
    cluster.on("fork", function(worker) {
        console.log("Attempting to fork worker");
    });
    cluster.on("online", function(worker) {
        console.log("Successfully forked worker");
    });
    cluster.setupMaster({
        exec: __filename,
        args: process.argv.slice(2),
        silent: false
    });
    cluster.on("exit", function(worker, code, signal) {
        var exitCode = worker.process.exitCode;

        console.log("Worker " + worker.id + " exited with code " + exitCode);
    });
    for (var i = 0; i < numCPUs; i++) {
        console.log("Forking child");
        cluster.fork();
    }
//    for (var id in cluster.workers) {
//        console.log("Killing " + id);
//        cluster.workers[id].kill();
//    }

//    cluster.disconnect();
} else {
    //cluster.isWorker

    http.createServer(function (request, response) {
        console.log(process.pid + ": request for " + request.url);
        response.writeHead(200);
        response.end("Hello World!");
    }).listen(8000);
}
