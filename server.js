const http = require("http");
const fs = require("fs");
const _ = require("lodash");
// Callback function runs every time there's a request to the server
const server = http.createServer((request, res) => {
  const num = _.random(0, 20);
  console.log(num);
  // set header content type
  const greet = _.once(() => {
    console.log('hello')
  })

  greet()
  greet()
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (request.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);

      res.end(data);
    }
  });
});

server.listen(3001, "localhost", () => {
  console.log("listening for requests on port 3001");
});
