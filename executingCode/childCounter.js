process.on('message', function (message) {
    console.log("child received: " + message.count);

    if (process.connected) {
        message.count++;
        process.send(message);
    }
});
process.on("disconnect", function () {
    console.log("Goodbye from the child process");
});
