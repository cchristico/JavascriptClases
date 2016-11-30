var express = require('express');
var app = express();

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!');
});
// This responds a POST request for the homepage
app.post('/Post', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
});

app.listen(5050, function () {
  console.log('Ejemplo de escucha por el puerto 5050!');
});
