var express =require('express');
var app = express();
app.get('/index.html', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('listening on port 3000!');
});
