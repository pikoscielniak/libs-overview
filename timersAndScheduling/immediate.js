var immediateId = setImmediate(function () {
    console.log("in immediate function");
});

clearImmediate(immediateId);