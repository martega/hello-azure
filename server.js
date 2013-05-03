var express = require('express')
  , port = process.env.PORT || 80;

var server = express();

server.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World! I am now using express.js!');
  res.end();
});

server.listen(port);
