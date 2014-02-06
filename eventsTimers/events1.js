var events = require('events')

var emitter = new events.EventEmitter();

var userName = "colin";
var password = "password";

emitter.on("newListener", function(eventName, listener) {
    console.log("Added listener for " + eventName + " events");
});


emitter.on('userAdded', function (userName, password) {
    console.log("added user " + userName);
});

emitter.once("userAdded", function () {
    console.log("In once event handler");
});

emitter.emit('userAdded', userName, password);