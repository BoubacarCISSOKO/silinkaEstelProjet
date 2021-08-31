var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
    if(req.url === 'hello.html') {
    fs.readFile('hello.html',function(err,data){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
    }
    else if(req.url === 'style.css') {
    fs.readFile('style.css',function(err,data){
    res.writeHead(200,{"Content-Type": "text/css"});
    res.write(data);
    res.end();
    });
    }

}).listen(8080, '127.0.0.1');