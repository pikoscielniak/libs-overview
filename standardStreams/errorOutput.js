(function foo() {
    (function bar() {
        (function baz() {
            console.trace("test-trace");
        })();
    })();
})();

process.stderr.write('Error message');