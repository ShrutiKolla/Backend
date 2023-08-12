const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync("words.html", "utf-8");
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end(fileContent);
})

server.listen(80, '127.0.0.1', () => {
    console.log("serving on port 80");
})