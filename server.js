var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, function () {
    var port = process.env.PORT || 8080;
    console.log("App now running on port", port);
});