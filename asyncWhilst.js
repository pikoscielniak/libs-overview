var async = require('async');

var i = 0;

function truthTest() {
    return i < 5;
}

function loopBody(callback) {
    setTimeout(function () {
        console.log("i = " + i);
        i++;
        var error = null;
        callback(error);
    }, 1000);
}

function finalCallback() {
    console.log('Done!');
}


async.whilst(truthTest, loopBody, finalCallback);