setInterval(function() {
    var random = Math.floor(Math.random() * 10);

    console.log(random);
}, 1000);
var sum = 0;

process.stdin.on("data", function(data) {
    var number = parseInt(data.toString(), 10);

    if (isFinite(number)) {
        sum += number;
    }

    console.log(sum);
});

process.stdin.resume();


process.stdin.pipe(process.stdout);
