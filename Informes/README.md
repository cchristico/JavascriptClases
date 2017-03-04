### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Sailsjs - Assets / Views / Pipeline / Controllers` 
### Fecha : `2016-12-21`
### Estudiante : `Castillo Muñoz Christian Eduardo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#hist">Sails</a>
  * <a href="#defhtml">GRUNT</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a SailJS`

<a name="objetivos"></a>
## Objetivos

- Comprender la estructura básica de __SAILS__
- Establecer dierentes RUTAS y vistas con __SAILS__
- Utilizar la herramienta POSTMAN para implementar _POST_ y _GET_ en __SAILS__

<a name="marco-teorico"></a>
## Marco Teorico

<a name="hist"></a>
### SAILS
Sails.js es un framework para Node.js. Está realizado bajo el framework Express, incluyendo varias capas de abstracción para hacer un desarrollo más fácil.<br>Sails viene instalado con un potente ORM/ODM llamada waterline, una herramienta de almacén de datos agnóstico que simplifica drásticamente la interacción con una o más bases de datos.<br>Proporciona una capa de abstracción en la parte superior de la base de datos subyacente, lo que le permite consultar fácilmente y manipular sus datos sin necesidad de escribir código de integración específica del proveedor.(Fuente: <a href="https://openwebinars.net/blog/tutorial-sailsjs-instalacion/">OpenWebinars</a>)

<p align="center">
<img src="http://o.nicj.net/wp-content/uploads/2014/08/sails1-600x464.png" width="300" height="300">
</p>

## Estructura de SAILS
<p align="center">
<img src="https://i2.wp.com/blog.desdelinux.net/wp-content/uploads/2013/09/Captura-de-pantalla-080913-130757.png" width="300" height="200">
</p>

### Assets
La carpeta assets contiene subdirectorios para los archivos Javascript y CSS que deben ser cargados en tiempo de ejecución. Este es el mejor lugar para almacenar bibliotecas auxiliares utilizados por la aplicación.(Fuente: <a href="https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390">envatotuts</a>)  

### Public
Contiene los archivos que están disponibles públicamente, tales como imágenes que utiliza su sitio, el favicon,... .(Fuente: <a href="https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390">envatotuts</a>)  

### Config
Esta es una de las carpetas más importantes. Sails está diseñado para ser flexible. Asume algunas convenciones estándar, sino que también permite al desarrollador cambiar la forma de las configuraciones de sails de la aplicación creada para adaptarse a las necesidades del proyecto.(Fuente: <a href="https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390">envatotuts</a>)

### Views
Las views de la aplicación se guardan en esta carpeta. En cuanto a su contenido, nos damos cuenta de que las opiniones se generan por defecto como (JavaScript incrustado) EJS. Además, la carpeta views contiene views para el tratamiento de errores (404 y 500) y también el archivo de diseño ( layout.ejs) y las views para el controlador del home, generados por sailsS.(Fuente: <a href="https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390">envatotuts</a>)

### Api
Esta carpeta se compone de un Buch de subcarpetas:

- La carpeta adapters contiene los adaptadores utilizados por la aplicación para manejar las conexiones de base de datos.
- La carpeta controllers contiene los controladores de aplicaciones modelos de la aplicación se almacenan en la carpeta models.
- En la carpeta policies se almacenan las reglas para el acceso de usuarios de aplicaciones-
- Los servicios API implementadas por la aplicación se almacenan en la carpeta services.(Fuente: <a href="https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390">envatotuts</a>)

<a name="defhtml"></a>

### GRUNT
Grunt y los plugins de Grunt son instalados y administrados via npm. Cuando se ejecuta grunt, este busca por require() que se encuentre instalado localmente. Se encuentra conformado por un grupo de tareas que permite crear plugins propios y scripts que extiendan la funcionalidad básica.
 [envatotuts](https://www.uaeh.edu.mx/docencia/P_Presentaciones/prepa3/Presentaciones_Enero_Junio_2014/Definicion%20de%20Internet.pdf)

<a href="#cabecera">Indice</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Configuración SAILS
- Para la instalación de Sails serrealiza on el sigueitne comando:`npm install -g sails`

- Para crear un nuevo proyecto se digita lo sigueinte: `sails new NOMBRE_PROYECT`
  * Se debe crear una carpeta con la estructura básica de SAILS:
  <p align="center">
<img src="https://i2.wp.com/blog.desdelinux.net/wp-content/uploads/2013/09/Captura-de-pantalla-080913-130757.png" width="300" height="200">
</p>
- Para iniciar el servidor es necesrio ingresar el la carpeta creada y digitar el sigueitne comando: `sails lift`
  <p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/S29.jpg?raw=true" width="300" height="200">
</p>
- Para crear la priemra aplicacion se crea la carpeta APP en el directorio Assets
  <p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.3.jpg?raw=true" width="200" height="150">
</p>
  
  * app.js Contiene código JS que muestra un alert cada vez que se recarga o inica index.html
  * estilos.css posee los estilos utilizados por la aplicación
  * index.html es la pagina de inicio que se mostrara
- Para ingresar a la aplicacion se debe digitar _localhost:1337/App/index.html_

  <p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.4.jpg?raw=true" width="350" height="150">
  </p>
- Dentro de la estructura de SAILS se cuenta con la carpeta views, en la cual se puede establecer las vistasque tendra nuestra aplicacion.
<p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.6.jpg?raw=true" width="200" height="150">
  </p>
  * 403.ejs 404.ejs 500.ejs Vistas por defecto que nos muestran las fallas de nuestra aplicación.
  * homepage.ejs es la pagina inial de nuestra aplicación.
  * layout.ejs permite que todas las vistas creadas hereden las caracteristicas de esta página.
- Para entender como funciona la carpeta vies se modificara el archivo homepage.ejs y se mostrara lo sigueinte:
<p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.11.jpg?raw=true" width="400" height="200">
  </p>

- La configuración del servidor se encuentra en la carpeta task
<p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.7.jpg?raw=true" width="200" height="150">
  </p>
<br>
- Se pueden espesificar rutas para ingresar a nuestras paginas creadas, para lo cual se edita el archivo routes.js que se encuntra en la carpeta config
<p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.12.jpg?raw=true" width="120" height="210">
  </p>
<br>
* El código ingresado sera el sigueinte:
<p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/route.png?raw=true" width="270" height="260">
  </p>
<br>
- Para generar _controladores_ se debe escribr el sigueinte código:<br>
`sails generate controller NOMBRE_CONTROLADOR`
  * Se creara un archivo en la carpeta controllers que se encuntra en api:
  
  <p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/S01.png?raw=true" width="200" height="210">
  </p>
 - Se ingresa el sigueinte código:<br>
`
module.exports = {
	hola:function(req,res){
        if(req.method=='GET')
            {
                res.send('Hola get')
            }
        
          if(req.method=='POST')
            {
                res.send('Hola post')
            }
        else{
             res.send('Hola todos')
        }
        res.json({
            nombre:'jose',
            apellido:'par'
        });
    }
};`

 
 - Para comprobar se puede utilizar POSTMAN:
 <p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.14.jpg?raw=true" width="500" height="210">
  </p>
  <p align="center">
  <img src="https://github.com/cchristico/JavascriptClases/blob/10.Sails2/Informes/imagenes/screenshot.15.jpg?raw=true" width="500" height="210">
  </p>
    


## Conclusiones y Recomendaciones

- Sails js es un framework de trabajo que abstrae la arquitectura de MVC, este permite desarrollar aplicaciones de manera facil utilizando NodeJS.
- Se debe tener en cuenta la estructura de SAILS para crear nuestras aplicaciones.
- SAILS es utilizado como srevidor _backend_ ya que permite la integracion con la mayorida de bases de datos de manera facil y sin necesidad de configuración complicadas.
- Se pueden establecer las rutas en un controlador espesifico, el cual nos ayuda a la administracion de nuestra aplicación.
<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Christian Castillo](https://github.com/cchristico)