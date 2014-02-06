process.nextTick(function () {
    console.log("Execution tick n+1");
});
function getFunction(f, b) {
    return function myNextTick() {
        console.log(f + " " + b);
    };
}
//with arguments
process.nextTick(getFunction("foo", "bar"));


console.log("executing nth tick");
