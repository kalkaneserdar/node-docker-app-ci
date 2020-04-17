'use strict';

var express = require('express');
var app     = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App  
app.get("/", function(req, res){
    
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);