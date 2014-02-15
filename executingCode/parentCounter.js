var cp = require("child_process");
var child = cp.fork(__dirname + "/childCounter");

child.on("message", function (message) {
    console.log("parent received: " + message.count);

    if (child.connected) {
        message.count++;
        if (message.count > 100) {
            child.disconnect();
        } else {
            child.send(message);
        }
    }
});

child.on("SIGINT", function () {
    child.kill();
    process.exit();
});

child.on("disconnect", function () {
    console.log("Goodbye from the parent process");
});


child.send({
    count: 0
});

