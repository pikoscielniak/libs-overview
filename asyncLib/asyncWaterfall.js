var async = require('async');

function step1(callback) {
    callback(null, Math.random(), Math.random());
}

function step2(a, b, callback) {
    callback(null, a * a + b * b);
}

function step3(cc, callback) {
    callback(null, Math.sqrt(cc));
}

function finalCallback(error, c) {
    console.log(c);
}

async.waterfall([
    step1,
    step2,
    step3
],finalCallback)