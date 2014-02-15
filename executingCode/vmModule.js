var vm = require('vm');
//var code = "console.log(foo);";
//
//foo = "Hello vm";
//vm.runInThisContext(code);

//var code = "console.log(foo); foo = 'Goodbye';";
//vm.runInThisContext(code, "example.vm");
//
//console.log(foo);

//foo = "Hello vm";
//
//var sandbox = {
//    console: console,
//    foo: foo
//};

//var code = "console.log(foo);";
//
//vm.runInNewContext(code, sandbox);
//
//
// foo = "Hello vm";

//var code = "var bar = 1; console.log(foo); foo = 'Goodbye'";
//sandbox = {
//    console: console,
//    foo: foo
//};

//vm.runInNewContext(code, sandbox);
//console.log(foo);
//console.log(sandbox.foo);
//console.log(sandbox.bar);


//var code = "var bar = 1; console.log(foo); foo = 'Goodbye'";
//var context5;
//
//foo = "Hello vm";
//context5 = vm.createContext({
//    console: console,
//    foo: foo
//});
//vm.runInContext(code, context5);
//console.log(foo);
//console.log(context5.foo);
//console.log(context5.bar);

var script = vm.createScript("i++;", "example.vm");
var sandbox = {
    i: 0
};

for (var i = 0; i < 10; i++) {
    script.runInNewContext(sandbox);
}
console.log(sandbox);