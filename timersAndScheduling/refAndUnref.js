var intervalId = setInterval(function () {
    console.log("In interval function");
}, 1000);

intervalId.unref(); //opposite ref(), stops execution