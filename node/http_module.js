// http is used to create own web server in our web page
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my home page");
  }
  if (req.url === "/about") {
    res.end("here is our about page");
  }
  res.end(
    `<h1>Oops!</h1>
    <p>this page about to working please go back to home</p>
    <a href="/">Back Home</a>`
  );
});
server.listen(5002);
