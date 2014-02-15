var buf = new Buffer(4);
var buf1 = new Buffer([1, 2, 3, 4]);
var buf2 = new Buffer("foo");


buf[0] = 0;
buf[1] = 1;

console.log(buf);
console.log(buf2.toString());
console.log(buf1.toJSON());
console.log(JSON.stringify(buf1));

console.log(Buffer.isEncoding("utf8"));
console.log(Buffer.isEncoding("foo"));
console.log(Buffer.isBuffer(buf));

var byteLength = Buffer.byteLength("foo");
var length = (new Buffer("foo")).length;

buf.fill(0)


console.log(byteLength);
console.log(length);
var data = "foo";

buf.write(data);
buf.write(data, 3);
buf.write(data, 6, data.length);
console.log(buf.toString());