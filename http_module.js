// http is used to create own web server in our web page
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to my home page");
  res.end();
});
server.listen(5000);
