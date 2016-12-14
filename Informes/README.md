### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `NPM-Express` 
### Fecha : `2016-12-08`
### Estudiante : `Castillo Muñoz Christian Eduardo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#nodeJS">NodeJS</a>
  * <a href="#npm">NPM</a>
  * <a href="#Express">Express</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `NPM-Express`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="nodeJS"></a>
### NodeJS
__Node.js__ es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo. [nodejs org](https://nodejs.org/es/)

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png" alt="icono NodeJS", width="290" height="190">
</p>

### npm
<a name="npm"></a>
__npm__ es el manejador de paquetes por defecto para Node.js, npm se ejecuta desde la linea de comandos y maneja las dependencias para una aplicación.1 2 Además, permite a los usuarios instalar aplicaciones Node.js que se encuentran en el repositorio. npm está escrito enteramente en JavaScrip.
 [npm](https://www.npmjs.com/)
 
<p align="center">
<img src="https://partners.npmjs.com/weekly/weekly32/weekly-header-grace-hopper.png" width="700" height="200">
</p>

### Express
<a name="Express"></a>
Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
<p align="center">
<img src="https://quickleft.com/wp-content/uploads/main_e18cb1f1-4642-4501-99a9-fe09268c20fb.png" width="700" height="200">
</p>


## Desarrollo del informe
<a name="desarrollo"></a>
### Instalación Express
-   Instalar Nodejs(manjaro Linux), para lo cual se ingresa en la consola y se digita:
```
$ yaourt -S node
```
-   Una vez instalado Node.js se debe crear un directorio el cual contendra la aplicación.
```
$ mkdir servidorHTTP
$ cd servidorHTTP
```
- Dentre de la carpeta _servidorHTTP_ crear un archivo package.json, esto se lo consigue con:
```
$ npm init
```
- Crear el archivo app.js
    * El directorio quedaria de la sigueite manera:
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/0.8Node-JS_2/Informes/Imagenes/estructura_servidorHTTP.png?raw=true" width="200" height="200">
</p>

#### Instalacion de Express
- Crear un directorio en el cual se va a ubicar la aplicación. Ubicarse en la carpeta.
```
$ mkdir Servidor
$ cd Servidor
```

- Crea el archivo package.json
```
$  npm init
```
### Ejemplo

- En el archivo del servidor se empieza con
```
var express = require('express');
var app = express();
var puerto=5050;
```
- Hola mundo
 - Esto se lo hace medinte el método get, para lo cual se diguita lo sigueinte

```
app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!');
});
```
 - Para comprobar se ingresa en la carpta que se encuentra app.js y se abre una consola y se digita:
 ```
 node app.js
 ```
 - Para comprobar el resultado se ingresa al navegador y se digita:
 <p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/0.8Node-JS_2/Informes/Imagenes/get_holamundo.png?raw=true" width="200" height="200">
</p>
 
- __Metodos HTTP__ 

 - __GET__
 
 Se crea un arreglo de usuarios, para ser devurltos en las peticiones GET
 
```
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
```
 Luego se implementa el método GET para lo cual se digita:
```
 app.get('/Usuarios', function (req, res) {
    res.json(usuario)
})
```
 <p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/0.8Node-JS_2/Informes/Imagenes/get_usuario.png?raw=true" width="200" height="200">
</p>

Para consultar un usuario en espesifico se denota:

```
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
```
 <p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/0.8Node-JS_2/Informes/Imagenes/get_usuario_esp.png?raw=true" width="200" height="200">
</p>


 - __POST__

 - Para el método post se utiliza lo sigueinte:
 ```
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
 ```
Para comprovar se utiliza PostMan
 <p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/0.8Node-JS_2/Informes/Imagenes/postMan.png?raw=true" width="200" height="200">
</p>

- Para ingresar un usuario se implemtna el sigueinte código y se utiliza postman
```
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
```
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/0.8Node-JS_2/Informes/Imagenes/postMan_usr.png?raw=true" width="200" height="200">
</p>
<a name="conrec"></a>
<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Node js es un servidor el cual permite instalar diferentes paquetes y librerías para utilizarlas en las aplicaciones.
- Se debe identificar la diferencia entre res y req ya que cada uno tiene un propsito diferente.
- Es necesario conocer el funcionamiento de cada uno de los parámetros usados en las funciones, como el req y res, para hacer el envío y tener la recepción que se requiera.
- EL uso de npm permite instalar paquetes para hacer uso dentro de node

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Christian Castillo](https://github.com/cchristico)