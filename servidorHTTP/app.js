var express = require('express');
var fs =require('fs');
/*Primer parametro es el path, el 2 es la codificación :)*/
var quePasa='';
quePasa='esta por leer el archivo';
console.log(quePasa);
fs.readFile('./paginas/pagina.html',
            'utf8', 
            function(error,archivoLeido){
   console.log(error);
    console.log(archivoLeido);
});
quePasa='termino de leer el archivo';

var app = express();
var puerto=5050;
var contador=3;
var usuario=[
    {
        id:1,
        nombre:'jose',
        ci:'123124'
    },
    {
        id:2,
        nombre:'marco',
        ci:'234324'
    },
    {
        id:3,
        nombre:'julio',
        ci :'0978888'
    }
    
]

app.get('/TecnologiasWeb', function (req, res) {
  console.log('1 antes de leer');
    fs.readFile('./paginas/pagina.html',
            'utf8', 
            function(error,archivoLeido){
   console.log(error);
    console.log(archivoLeido);
        res.send(archivoLeido);
        console.log('2 parece que termino de leer');
        
        
});
    
    
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
app.post('/Usuario', function (req, res) { 
if(!req.query.nombre)
    {
    res.send('No ingreso nombre');    
    }
    if(!req.query.ci)
    {
    res.send('No ingreso ci');    
    }
    
     var nuevoUSr= {
        id:contador+1,
        nombre:req.query.nombre,
        ci:req.query.ci
    }
     usuario.push(nuevoUSr);
    contador=contador++;
    res.json(nuevoUSr)
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
