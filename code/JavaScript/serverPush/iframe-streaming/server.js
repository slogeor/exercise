const http = require('http');
const fs = require('fs');

let count = 0;

const server = http.createServer(function(req, res) {
  if (req.url === '/') {
    fs.readFile('./index.html','binary', function(err, file) {
      if (!err) {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(file, 'binary');
      }
    })
  }

  console.log(req.url)
  if (req.url === '/htmlfile') {
    res.setHeader('content-type', 'text/html');
    const timer = setInterval(function() {
      setData(timer, res);
    }, 2000);
  }
}).listen(8080, 'localhost');

function setData(timer, res) {
  const randomNum = Math.floor(1000 *Math.random());
  console.log(randomNum);

  if (count++ === 10) {
    clearInterval(timer);
    res.end("<script type=\"text/javascript\">parent.process('" + randomNum + "')</script>")
  } else {
    res.write("<script type=\"text/javascript\">parent.process('" + randomNum + "')</script>")
  }
}

server.on('connection', function() {
  console.log('connection');
})
