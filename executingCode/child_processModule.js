var cp = require('child_process');

cp.exec("ls -l /", {
    cwd: '/'
}, function (error, stdout, stderr) {
    if (error) {
        console.error(error.toString());
    } else if (stderr !== "") {
        console.error(stderr);
    } else {
        console.log(stdout);
    }
});


cp.execFile("ls", ["-l"], {
    cwd: '/'
}, function (error, stdout, stderr) {
    if (error) {
        console.error(error.toString());
    } else if (stderr !== "") {
        console.error(stderr);
    } else {
        console.log(stdout);
    }
});

var child = cp.spawn("ls", ["-l", "/"]);

child.stdout.on("data", function (data) {
    process.stdout.write(data.toString());
});

child.on("error", function (error) {
    console.error(error.toString());
});

child.on("exit", function (code, signal) {
    console.log("exit code: " + code);
    console.log("exit signal: " + signal);
});
child.on("close", function (code, signal) {
    console.log("exit code: " + code);
    console.log("exit signal: " + signal);
});
console.log("PID " + child.pid);

child.kill("SIGTERM");


var forkChild = cp.fork(__dirname + "/child", ["-foo"], {
    cwd: '/',
    env: {
        bar: "baz"
    }
});