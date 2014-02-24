var assert = require("assert");
var fs = require("fs");

describe("Class Test Suite", function () {
    describe("Method Test Suite", function () {

        before(function () {
            console.log("Setting up the test suite");
        });

        beforeEach(function () {
            console.log("Setting up an individual test");
        });

        afterEach(function () {
            console.log("Tearing down an individual test");
        });

        after(function (done) {
            console.log("Tearing down the test suite");
            done();
        });

        it("Method Test 1", function () {
        });

        it("Method Test 2", function () {
        });

        it("An example asynchronous test", function (done) {
            done();
        });
        it("Should return -1 if not found", function () {
            var str = "Hello Mocha!";

            assert.strictEqual(str.indexOf("World"), -1);
            assert.strictEqual(str.indexOf("Goodbye"), -1);
        });

        it("Should return true if file exists", function (done) {
            var filename = "foo.txt";

            fs.exists(filename, function (exists) {
                assert(exists);
                done();
            });
        });
        it.skip("Test 2", function () {
            console.log("Test 2");
        });

//        it.only("Test 3", function () {
//            console.log("Test 3");
//        });
    });

    describe.skip("Skiped suite", function () {
        it("Test 1", function () {
            console.log("Test 1");
        });
    });

//    describe.only("Skiped suite", function () {
//        it("Test 1", function () {
//            console.log("Test 1");
//        });
//    });
});
