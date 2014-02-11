var commander = require('commander');

//commander.prompt("What is your name?", function (name) {
//    console.log('You said your name is ' + name);
//    process.stdin.pause();
//});


commander.confirm('Continue? ', function (proceed) {
    console.log("Your response was " + proceed);
    process.stdin.pause();
});

//commander.password("Password: ", function (password) {
//    console.log("I know your password! It's " + password);
//    process.stdin.pause();
//});

//commander.password("Password: ", "*", function (password) {
//    console.log("I know your password! It's " + password);
//    process.stdin.pause();
//});
//var list = ["foo", "bar", "baz"];
//
//commander.choose(list, function(index) {
//    console.log("You selected " + list[index]);
//    process.stdin.pause();
//});
