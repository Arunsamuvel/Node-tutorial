const { createReadStream } = require("fs");

const stream = createReadStream("../content/first.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
