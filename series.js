var async = require('async');

function task1(callback) {
    setTimeout(function () {
        console.log("Task 1");
        throw new Error();
        callback(new Error("Problem"), 1);
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
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
}

async.series([
    task1, task2, task3
], finalCallback);