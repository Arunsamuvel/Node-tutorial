// globals- no windows

// _dirname - path to current directory
// _filename- file name
// require-function to use modules(CommonJS)
// module - info about current module
//  process - info  about env where the program is being executed
var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('hello world');
  })
  .listen(8080);
