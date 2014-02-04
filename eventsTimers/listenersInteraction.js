var events = require('events');

var EventEmitter = events.EventEmitter;

var emitter = new EventEmitter();

function showListenerCount(eventName) {
    console.log(EventEmitter.listenerCount(emitter, eventName));
}

function listenerCount() {
    console.log('listenerCount');
    emitter.on('newListener', function (eventName, listener) {
        console.log("Added listener for " + eventName + " events");
    });

    emitter.on("foo", function () {
        console.log("In foo handler 1");
    });

    emitter.on("foo", function () {
        console.log("In foo handler 2");
    });
    showListenerCount("foo");
}

function listenerArray() {
    console.log('listenerArray');
    emitter.listeners("foo").forEach(function (handler) {
        handler();
    });
}

function handler() {
    console.log("Named handler");
}

function removeAllListeners() {
    console.log('removeAllListeners');
    showListenerCount("foo");
    emitter.removeAllListeners();
    showListenerCount("foo");
}

function removeAllWithEventName() {
    console.log('removeAllWithEventName');
    emitter.on('foo', handler);
    emitter.on('buzz', handler);

    showListenerCount("foo");
    showListenerCount("buzz");

    emitter.removeAllListeners('foo');
    showListenerCount("foo");
    showListenerCount("buzz");
}

listenerCount();
listenerArray();
removeAllListeners();
removeAllWithEventName();