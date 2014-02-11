var util = require('util');
var name = "Colin";
var age = 100;
var obj = {
    foo: {
        bar: {
            baz: {
                baff: false,
                beff: "string value",
                biff: null
            },
            boff: []
        }
    }
};


var format1 = util.format("Hi, my name is %s", name);
var format2 = util.format("Hi, my name is %d", name);
var format3 = util.format("Hi, my name is %j", name);
var format4 = util.format("Hi, my name is %j");
var format5 = util.format("Hi, my name is %j", name, name);
var format6 = util.format("I'm %s, and I'm %d years old", name, age);
var format7 = util.format(name, age);

console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
console.dir(obj);
console.log(util.inspect(obj));
console.log(util.inspect(obj, {
    depth: null,
    color: true,
    showHidden: true
}));
console.info(format5);
process.stdout.write(format6);
process.stdout.write(format7);
process.stdout.write("\n");

util.log("baz");

var util = require("util");
var obj2 = {
    foo: {
        bar: {
            baz: {
                baff: false,
                beff: "string value",
                biff: null
            },
            boff: []
        }
    },
    inspect: function () {
        return "{Where'd everything go?}";
    }
};

console.log(util.inspect(obj2));

