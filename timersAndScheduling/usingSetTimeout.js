setTimeout(function (foo, bar) {
    console.log(foo + " " + bar);
}, 1000, "foo", "bar");


var timeoutId = setTimeout(function () {
    console.log("It doesn't happen");
}, 1000);
clearTimeout(timeoutId);






