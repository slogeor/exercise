const http=require('http');
const fs = require('fs');

let  count= 0;

let server=http.createServer(function(req,res) {
  if(req.url=='/event'){
    res.writeHead(200, {'Content-Type': 'tex' +
        't/event-stream', 'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Connection':'keep-alive'});
    const timer = setInterval(function() {
      if(++count === 10){
        clearInterval(timer);
        res.end();
      }else{
        res.write('id:' + count + '\n');
        res.write('event: event1' + '\n');
        res.write('data:' + new Date().toLocaleString() + '\n\n');
      }
    },2000);

  };

  if(req.url=='/'){
    fs.readFile('./index.html', 'binary', function(err, file) {
      if (!err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(file, 'binary');
        res.end();
      }
    });
  }
}).listen(8080,'localhost');
