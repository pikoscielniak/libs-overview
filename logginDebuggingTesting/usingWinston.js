var winston = require("winston");

winston.log("info", "Hello winston!");
winston.log("warn", "Something not so good happened");
winston.log("error", "Something really bad happened");

winston.info("Hello %s", "winston!");
winston.warn("Something not so good happened");
winston.error("Something really bad happened");

winston
    .remove(winston.transports.Console)
    .add(winston.transports.Console, {
        level: "error",
        colorize: true,
        timestamp: true
    });

winston.info("test info");
winston.error("test error");


var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            colorize: true
        }),
        new winston.transports.File({
            level: "error",
            filename: "output.log"
        })
    ]
});

logger.info("foo");
logger.error("bar");
