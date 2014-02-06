function add(x, y, cb) {
    process.nextTick(function () {
        cb(x + y);
    });
}

add(2, 3, console.log);
console.log("Test sum is:");