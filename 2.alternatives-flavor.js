var http = require("http");
const { type } = require("os");

http
  .createServer(function (req, res) {
    res.writable(200, { "content-type": "text/html" });
    res.end("hello world");
  })
  .listen(8080);
