var express = require('express');
var app = express();
var puerto=5050;
var usuario=[
    {
        id:1,
        nombre:'jose',
        nombre:'123124'
    },
    {
        id:2,
        nombre:'marco',
        nombre:'234324'
    },
    {
        id:3,
        nombre:'julio',
        nombre:'0978888'
    }
    
]

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!');
});

app.get('/Usuarios', function (req, res) {
    res.json(usuario)
})
app.get('/Usuario/:idUsuario', function (req, res) {
    var idActual=req.params.idUsuario;
    for(var i=0;i<usuario.length;i++)
        {
            if(idActual==usuario[i].id)
                {
                res.json(usuario[i]);    
                }
                
                
                
        }
    res.json('Ya nada');        
    
});

// This responds a POST request for the homepage
app.post('/TecnologiasWeb/Post', function (req, res) {
    
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
