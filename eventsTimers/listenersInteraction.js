var events = require('events');

var EventEmitter = events.EventEmitter;

var emitter = new EventEmitter();

emitter.on("foo", function () {
    console.log("In foo handler 1");
});

emitter.on("foo", function () {
    console.log("In foo handler 2");
});

console.log(EventEmitter.listenerCount(emitter, "foo"));

emitter.listeners("foo").forEach(function (handler) {
    handler();
});