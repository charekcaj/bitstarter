var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response){ 
  var fs = require('fs');
  var infile = "index.html"
  //var buffer = new Buffer(fs.readFile(index.html));
  var fileText = fs.readFileSync(infile, encoding);
  var buf = new Buffer(fileText);
  response.send(buf.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
