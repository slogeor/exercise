const http = require('http');
const fs = require('fs');

let count = 0;

const server = http.createServer(function(req, res) {
  console.log(req.url);
  if (req.url === '/') {
    fs.readFile('./index.html', 'binary', function(err, file) {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(file, 'binary');
        res.end();
      }
    })
  }

  if(req.url === '/time') {
    res.setHeader('content-type', 'multipart/octet-stream');
    const timer = setInterval(function() {
      sendData(timer, res)
    }, 2000);
  }
}).listen(8080, 'localhost');

function sendData(timer, res) {
  const randomNum = Math.floor(10000 * Math.random());
  console.log(randomNum);

  if (Number(count++) === 10) {
    clearInterval(timer);
    res.end(randomNum.toString());
  } else {
    res.write(randomNum.toString());
  }
}


server.on('connection', function() {
  console.log('connection')
})
