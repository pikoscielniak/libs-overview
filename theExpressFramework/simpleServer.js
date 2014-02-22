var express = require("express");
var http = require("http");
var app = express();
var validator = require('express-validator');

app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(validator());


app.get(/\/products\/([^\/]+)\/?$/, function (req, res, next) {
    res.send("Requested " + req.params[0]);
});

app.get("/product/:productId", function (req, res, next) {
    var errors;

    req.assert("productId", "Missing product ID").notEmpty();
    req.assert("productId", "Invalid product ID").isAlpha().len(2, 10);
    errors = req.validationErrors();

    if (errors) {
        return res.send(errors);
    }

    res.send("Requested " + req.params.productId);
});

app.get("/group/:groupId(\\d+)", function (req, res, next) {
    res.send("Requested " + req.params.groupId);
});

app.get("/car/:carId?", function (req, res, next) {
    res.send("Requested " + req.params.carId);
});