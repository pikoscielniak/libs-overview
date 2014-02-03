var async = require('async');

function task1(callback) {
    setTimeout(function () {
        console.log("Task 1");
        callback(null, 1);
    }, 300);
}

function task2(callback) {
    setTimeout(function () {
        console.log("Task 2");
        callback(null, 2);
    }, 200);
}

function task3(callback) {
    setTimeout(function () {
        console.log("Task 3");
        callback(null, 3);
    }, 100);
}

function finalCallback(error, result) {
    console.log(result);
}

var limit = 2;

async.parallelLimit({
    one: task1,
    two: task2,
    three: task3
}, limit, finalCallback);
