const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    if(req.url === "/") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('page/home.html');
        res.end();
    }

    if(req.url === "/about") {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
        data: 'Now this is about page'
      }));
    } else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write('Page not found');
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