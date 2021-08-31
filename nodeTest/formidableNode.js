var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/CISSOKO/Documents/Estel/html/nodeTest/estel' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('Fichier téléchargé et déplacé !');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1 style="text-align:center">FILE UPLOADING!</h1>');
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data" style="text-align:center;border:2px solid;margin:2px;padding:5px">');
    res.write('<input type="file" name="filetoupload" style="text-align:center;margin:2px"><br>');
    res.write('<input type="submit" style="text-align:center">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);