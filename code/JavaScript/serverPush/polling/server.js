const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  console.log(req.url)
  if (req.url === '/time') {
    res.end(new Date().toLocaleString());
  }

  if (req.url === '/') {
    fs.readFile("./index.html", "binary", function(err, file) {
      if (!err) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(file, "binary");
          res.end();
      }
    });
  }
})
.listen(8088,'localhost');

server.on('connection',function(socket) {
  console.log("客户端连接已经建立");
});

server.on('close',function() {
  console.log('服务器被关闭');
});
