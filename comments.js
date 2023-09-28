// Create a web server that can respond to requests for /comments.json
// with a random comment from the array comments. 

var http = require('http');
var comments = require('./comments.js');

var server = http.createServer(function(req, res) {
  var randomComment = comments[Math.floor(Math.random() * comments.length)];
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(randomComment);
});

server.listen(3000, function() {
  console.log('Server running on port 3000');
});