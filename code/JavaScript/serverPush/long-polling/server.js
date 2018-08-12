const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  console.log(req.url)
  if (req.url === '/') {
    fs.readFile('./index.html', 'binary', function(err, file) {
      if (!err) {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        }),
        res.write(file, 'binary');
        res.end();
      }
    })
  }

  if (req.url === '/time') {
    setInterval(function() {
      setData(res);
    }, 2000)
  }
}).listen(8080, 'localhost');

function setData(res) {
  const randomNum=Math.floor(10*Math.random());
  console.log(randomNum);
  if(randomNum >= 0 && randomNum <= 5){
    res.end(new Date().toLocaleString());
  }
}

server.on('connection',function(socket) {
  console.log("客户端连接已经建立");
});
