var foo = new ArrayBuffer(4);

foo[0] = 0;
foo[1] = 1;
foo[2] = 2;
foo[3] = 3;
// this assignment will fail silently
foo[4] = 4;
console.log(foo);


for (var i = 0, len = foo.byteLength; i < len; i++) {
    console.log(foo[i]);
}

console.log(foo.slice(2, 4));
console.log(foo.slice(2, foo.byteLength));
console.log(foo.slice(2));
console.log(foo.slice(-2));

var buf = new ArrayBuffer(4);
var view = new Uint32Array(buf);
view[0] = 0;
view[1] = 1;
console.log(view);


var buf1 = new ArrayBuffer(4);
var view1 = new Uint32Array(buf1);
var view2 = new Uint8Array(buf1);

// write to view1 and print the value
view1[0] = 100;
console.log("Uint32 = " + view1[0]);

// write to view2 and print view1's value
view2[1] = 1;
console.log("Uint32 = " + view1[0]);
