var fs = require("fs");
var readStream = fs.createReadStream("foo.txt");
var writeStream = fs.createWriteStream("bar.txt");

writeStream.on("open", function(fd) {
    console.log("File descriptor: " + fd);
});


readStream.pipe(writeStream);


writeStream.on("finish", function() {
    console.log(writeStream.bytesWritten);
});
