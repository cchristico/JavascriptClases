var express = require('express');
var app = express();
var puerto=5050;

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!');
});
// This responds a POST request for the homepage
app.post('/TecnologiasWeb/Post', function (req, res) {
    /*objeto json*/
    var usuario={
        nombre:'José',
        cedula:'123'
    }   
    res.append('token','123');
    usuario.apellido='peres'
    usuario.mascotas=[]
   console.log('lo que tengo en la cabecera request'+req.headers);
    console.log('lo que tengo en la cabecera response'+res.headers);
//    res.send('Hello POST');
       res.json(usuario);
    
});

app.listen(puerto, function () {
  console.log('Ejemplo de escucha por el puerto: '+puerto+'!');
});
