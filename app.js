const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {

    if(req.url === "/") {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile("page/home.html", "utf8", (err, data) => {
        // console.log(data);
          if(err) throw err;
          res.write(data);
          res.end();
        });
    } else if(req.url === "/about") {
      fs.readFile("page/about.html", "utf8", (err, data) => {
        // console.log(data);
          if(err) throw err;
          res.write(data);
          res.end();
        });
    } else if(req.url === "/create-file") {
      const textFile = "<h1>This is test file!</h1>";
      fs.appendFile("temp/test.html", textFile , (err) => {
        // console.log(data);
          if(err) throw err;
          res.write('files is created');
          res.end();
        }); 
    } else {
      fs.readFile("page/404.html", "utf8", (err, data) => {
        // console.log(data);
          if(err) throw err;
          res.write(data);
          res.end();
        });
    }
});

server.listen(PORT);

// const { area, circumference } = require('./circle');
// const Circle = require('./circle');

// const circle = new Circle();
// console.log(circle.area(5));
// console.log(area(5));
// console.log(circumference(5));

// console.log(__dirname);

// console.log(__filename);