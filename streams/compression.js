var fs = require('fs');
var zlib = require("zlib");
var gzip = zlib.createGzip();
var gunzip = zlib.createGunzip();
var input = fs.createReadStream('input.txt');
var output = fs.createWriteStream('input.txt.gz');

input.pipe(gzip).pipe(output);

input = fs.createReadStream("input.txt.gz");
output = fs.createWriteStream("output.txt");

input.pipe(gunzip).pipe(output);


var data = "This is some data to compress!";

zlib.deflate(data, function(error, compressed) {
    if (error) {
        return console.error("Could not compress data!");
    }
    zlib.unzip(compressed, function(error, decompressed) {
        if (error) {
            return console.error("Could not decompress data!");
        }
        console.log(decompressed.toString());
    });
});
