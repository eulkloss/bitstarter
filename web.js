var express = require("express");
var app = express();

var fs = require('fs');

var app = express.createServer(express.logger());

//var Hello = new Buffer(fs.readFileSync('index.html'), "utf-8");
var Hello = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(Hello);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
