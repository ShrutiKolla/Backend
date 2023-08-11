const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="words.css">
      <title>Document</title>
      <style>
        body {
    background-color: black;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    padding: 40px;
}
h1 {
    color: rgb(152, 0, 152);
    font-size: 50px;
}

button, input {
    padding: 10px 20px;
    background-color: lightsalmon;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    border: rgb(233, 220, 220) solid;
    color: white;
    font-weight: 600;
    font-size: 20px;
}
input::placeholder {
    color: white;
}

button:hover {
    box-shadow: -2px -2px rgb(233, 220, 220);
    transform: translate(2px,2px);
    background-color: lightsalmon;
}
li {
    line-height: 50px;
}
      </style>
  </head>
  <body>
      <h1>Wordigy</h1>
      <input type="text" placeholder="type your word here..">
      <button>Show definitions</button>
      <div id="display"></div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});