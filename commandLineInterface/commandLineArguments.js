function parseArgs() {
    var argv = process.argv;
    var args = {
        baz: false
    };

    for (var i = 0, len = argv.length; i < len; i++) {
        var arg = argv[i];
        var match;

        if (arg === '-foo') {
            args.foo = parseInt(argv[++i]);
        } else if (arg === "-baz") {
            args.baz = true;
        } else if (math = arg.match(/--bar=(\d+)/)) {
            args.bar = parseInt(match[1]);
        }
    }
    return args;
}
function sanitize(args) {
    if (!isFinite(args.foo)) {
        args.foo = 0;
    }

    if (!isFinite(args.bar)) {
        args.bar = 0;
    }

    if (args.baz !== true) {
        args.baz = false;
    }

    return args;
}


process.argv.forEach(function (arg, index) {
    console.log("argv[" + index + "] = " + arg);
});

var args = parseArgs();
args = sanitize(args);

console.log(args);
