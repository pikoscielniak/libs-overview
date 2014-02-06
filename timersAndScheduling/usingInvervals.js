setInterval(function (foo, bar) {
    console.log(foo + " " + bar);
}, 1000, "foo", "bar");


var timeoutId = setInterval(function () {
    console.log("It doesn't happen");
}, 1000);
clearInterval(timeoutId);