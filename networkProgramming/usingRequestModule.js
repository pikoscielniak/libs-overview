var request = require('request');
var jar = request.jar();
var cookie = request.cookie("count=1");
jar.add(cookie);


request({
    uri: 'http://localhost:8000/',
    jar: jar,
    method: "POST",
    headers: {
        Host: 'localhost:8000'
    },
    form:{
        foo: 'bar',
        baz: [1,2]
    }
},function(error,response,body){
    console.log(body);
});