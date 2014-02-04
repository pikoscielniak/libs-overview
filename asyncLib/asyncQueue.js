var async = require('async');

function taskHandler(task, callback) {
    //process the task argument
    console.log(task);
    callback(null);//error
}
var parallelLimit = 4;

var queue = async.queue(taskHandler, parallelLimit);

var i = 0;

function taskCallback(error) {
    console.log("Finished task");
}

queue.saturated = function () {
    console.log("Queue saturated");
};

queue.empty = function () {
    console.log("Queue is empty");
};

queue.drain = function () {
    console.log('Queue is drained');
};

function addTaskToQueue() {
    queue.push({id: i}, taskCallback);
    if (i === 10) {
        clearInterval(intervalId);
    }
    i++;
}

var intervalId = setInterval(addTaskToQueue, 200);