var events = require('events')

var emitter = new events.EventEmitter();

var userName = "colin";
var password = "password";

emitter.on('userAdded', function (userName, password) {
    console.log("added user " + userName);
});

emitter.emit('userAdded', userName, password);