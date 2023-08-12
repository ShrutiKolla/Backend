const http = require('http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 8000;

const home = fs.readFileSync('./index.html');

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(home);
})

server.listen(port, hostname, () => {
    console.log(`server running at ${hostname}.${port}`);
})