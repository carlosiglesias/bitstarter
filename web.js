var express = require('express');
var fs = require('fs');
buf = new Buffer(1024);

var app = express.createServer(express.logger());
buf = fs.readFileSync('index.html');
var text = buf.toString('utf-8');

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
