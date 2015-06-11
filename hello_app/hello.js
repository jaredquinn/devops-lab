var os = require('os');
var http = require('http');
var port = 8902;
var bindip = "127.0.0.1";

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end( 'Hello World from ' + os.hostname() + '!\n' );
}).listen(port);

console.log('Server running at https://' + bindip + ':' + port + '/');
