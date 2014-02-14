var fs = require("fs");
var stream;

//stream = fs.createReadStream("foo.txt");
//
//stream.on('open', function (fd) {
//    fs.fstat(fd,function(error,stats){
//        if (error) {
//            console.error("fstat error: " + error.message);
//        } else {
//            console.log(stats);
//        }
//    });
//});
//
//stream.on("data", function (data) {
//    var chunk = data.toString();
//
//    process.stdout.write(chunk);
//});
//
//
//stream.on("end", function () {
//    console.log('end');
//});

fs.open('foo.txt', "r", function (error, fd) {
    if (error) {
        return console.error("open error: " + error.message);
    }

    fs.fstat(fd, function (error, stats) {
        var stream;
        var size;

        if (error) {
            return console.error("fstat error: " + error.message);
        } else if (!stats.isFile()) {
            return console.error("files only please");
        } else if ((size = stats.size) < 3) {
            return console.error("file must be at least three bytes long");
        }

        stream = fs.createReadStream(null, {
            fd: fd,
            start: 1,
            end: size - 2
        });

        stream.on("data", function (data) {
            var chunk = data.toString();
            process.stdout.write(chunk);
        });
        stream.on("end", function () {
            console.log();
        });
    });
});