### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-28`
### Estudiante : `Castillo Muñoz Christian Eduardo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defhtml"></a>
### Internet
La "Internet" es una colección de miles de redes de computadoras interconectadas en todo el mundo mediante cables y señales de telecomunicaciones, que utilizan una tecnología común para la transferencia de datos.
### World Wide Web
La __WWW__ puede ser visto como un enorme sistema dstribuido constituido por millones de clienetes y servidores que acceden a documentos enlazados. Los servidores mantienen una colleccion de documentos, mientras que los clientes proporcionan a los usuarios una interfaz fácl de usar.

#### Descripción general de WWW
Ya que se menciono que la __WWW__ es una gran sistema de cleinte servidor con millones de servidores distribuidos. Cada servidor mantin una colección de documentos, cada documento es almacenado com un archivo(Algunos docuemntos pueden ser generado mediante solicitudes). 
Un servidor acepta solicitudes para ir a buscar un documento y lo transfiere al cliente. Además, también puede aceptar solicitudes para el almacenamiento de documentos nuevos.
La forma más sencilla de hacer referencia a un documento es por medio de una referencia llaman un Localizador Uniforme de Recursos (URL). En él se especifica donde se encuentra un documento, a menudo mediante la incorporación del nombre __DNS__ de su servidor asociado, junto con un nombre de archivo mediante el cual el servidor puede consultar el documento en su sistema de archivos local. Además, una URL especifica el protocolo de nivel de aplicación para transferir el documento a través de la red.
Ejemplo de esto es el protocolo http __Hypertext Transfer Protocol__, algunas peticiones utilizadas por este protoclo son las sigueintes:
<table>
    <tr>
    <td><h3>Método</h3></td>
    <td><h3>Función</h3></td>
    </tr>
    <tr>
    <td><h5>GET</h5></td>
        <td> Pide una representación del recurso especificado.</td>
    </tr>
    <tr>
        <td><h5>POST</h5></td>
        <td>Envía los datos para que sean procesados por el recurso identificado.</td>
    </tr>
    <tr>
        <td><h5>PUT</h5></td>
        <td>Sube, carga o realiza un upload de un recurso especificado (archivo), es el camino más eficiente para subir archivos a un servidor, esto es porque en POST utiliza un __mensaje multiparte__ y el mensaje es decodificado por el servidor. </td>
    </tr>
    <tr>
        <td><h5>DELETE</h5></td>
        <td>Borra el recurso especificado.</td>
    </tr>
</table>

Un cliente interactúa con los servidores web a través de una aplicación especial conocido como un __navegador__. Un navegador se encarga de mostrar adecuadamente un documento. También, un explorador acepta la entrada de un usuario sobre todo al permitir que el usuario seleccione una referencia a otro documento.
    Como se vio existen métodos http, que permiten al servidor atender a las peticiones del cliente, a mas de exto existen __códigos HTTP__ que permiten notificar al navegador sobre el estado de la comunicacion, en la sigueinte tabla se muestran algunos de estos _códigos de estado HTTP_.
    
| Código de estado | Descripción |
| :------- | :------: |
| __100__ _(Continue)_   | el navegador puede continuar realizando su petición (se utiliza para indicar que la primera parte de la petición del navegador se ha recibido correctamente).       |
| __200__ _(OK)_   | la petición del navegador se ha completado con éxito.       |
| __203__ _(Non-Authoritative Information)_   | la petición se ha completado con éxito, pero su contenido no se ha obtenido de la fuente originalmente solicitada sino de otro servidor.       |
| __400__ _(Bad Request)_   | el servidor no es capaz de entender la petición del navegador porque su sintaxis no es correcta.      |
 <br>
    Lo fundamental de la Web es que toda la infromacion se encuentra representada por docuemntos, la mayor parte de estos documentos estan expresados en un lenguaje especial llamado __HyperText Markuo Languaje__ o simplificado _HTML_. Se dice que es un lenguaje de marcado ya que _HTML_ provee palabras clave que permiten estructurar al documento en diferentes secciones.
    Desde la aparicion de este lenguaje a sido neesario crear estandares que permitan la interpretacion de archivos HTML por los navegadores, de esto seencuentra encargado ___World Wide Web Consortiun___. En la actualidad existen los sigueitnes estandares oficiales:
    


| Versión  |
| :------- |
| __HTML 2.O__   |
| __HTML 3.O Y 3.2__   |
| __HTML 4.O__   |
| __HTML 5__   |
[WebMaster](herramientasdelwebmaster.blogspot.com/2011/03/primera-pagina-web-mundo.html)

Aunque la mayoría de los documentos web se expresan en HTML, un lenguaje alternativo es XML, siglas de Extensible
Markup Language (Bray et al., 2000). A diferencia de HTML, XML se utiliza sólo para estructurar un documento; que no contiene palabras clave para dar formato a un documento, como centrar un párrafo o la presentación de texto en cursiva. Otra diferencia importante
con HTML es que XML se puede utilizar para definir estructuras arbitrarias. [DocuemntoWeb](http://www.cs.vu.nl/~ast/books/ds1/11.pdf)
La manera con la cual el navegador determina el tipo de documento que esta leyendo es mediante ___Doctype___.<br>
Un ejemplo de esto se tiene al inicio de los archivos con formato _HTML_
```
 <!DOCTYPE html>
<html>
<head>
...
</head>
<body>
...
</body>
</html> 

```
Las paginas actuales poseen variedades de estilos, estos estilos son implementados mediante ___CSS___, este es un lenguaje de hojas de estilos creado para controlar el aspecto o presentación de los documentos electrónicos definidos con HTML y XHTML. CSS es la mejor forma de separar los contenidos y su presentación y es imprescindible para crear páginas web complejas.
<p align="center">
<img src="http://tutorial.techaltum.com/images/html-css.jpg">
</p>



<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Instalación de Node en linux:
Se utiliza el sistema iperativo Manjaro, se utiliza el gestor de paquetes yaourt
```
$ yaourt -S node

```
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/instalacionNode.png?raw=true">
</p>

### Primer archivo HTML
Se usa el editor Brackets, el cual gracias a sus extenciones nos permite crear archivos html de manera rapida, solo basta con digitar
```
html:5+Tab
```
El resultado es el sigueinte:
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/docHTML.png?raw=true">
</p>

### Levantar el servidor http
Se debe ingresar a la ruta dode se encuentra nuestro archivo html y abrir una termianl y digitar lo sigueitne:
```
$ http-server
```
La terminal nos muestra que el servidor se encuntra corriendo:
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/servidor_http.png?raw=true">
</p>

Para acceder al servidor se debe ingresar la sigueinte direccion en el navegador:

```
http://localhost:8080/
```
### Métodos y Códigos de estado HTTP
Una vez levantado el servidor ya ccedido a nuestra página web, podemos inspeccionar nuestra pagina web, con esto se puede verificar la comunicacion con el servidor el tiempo de respuesta del servidor...
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/tiempo_codigo_http.png?raw=true">
</p>
Se puede verificar otro método http y la respuesta del servidor, para esto se utiliza la extención de chrome postman.
Se ingresa a la api de pokemon, esta permite realizar peticiones get.
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/api_pokemon_ok.png?raw=true">
</p>
Si se hace una peticion con otro método, nos muestra un error.
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/pokemon_bad.png?raw=true">
</p>

- Primera página, para modificar el color del fondo se ingresa lo siguiente
```
<body style="background-color:#1fc725">
```
- Esto puede ser utilizado en diferetnes etiquetas como por ejemplo en h1,h2...
```
   <h1 style="background-color:#1ac9ae" >Caballeros del Zodiaco</h1>
```
- El resultado es el sigueinte:
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/pokemon_bad.png?raw=true">
</p>

## Conclusiones y Recomendaciones

- Doctype permite determinar que tipo de estandar se va a utilizar, y como van a ser interpretados los archivos dentro del navegador.
- Tanto HTML como XML utilizan etiquetas para determinar la sintaxis de sus docuemntos.
- EL uso de un servidor http-local nos permite determianr el timpo de respuesta de nuestra página, ya que si se abre el archivo html con el navegador, el inspector no indica ningun timpo de respuesta.
- El anvegador permite inspeccionar las páginas web, esto ayuda a determianr como se comunica el cliente con el servidor, asi como previsualziar cambios que se pueden realizar al código.
- Es importante conocer los diferentes códigos de estado HTTP, asi como los diferentes métodos HTTP, para poder interpretar la infromacion del inspector del navegador.
- Los cambios echos mediante el inspector del navegador deben ser realizados en el archi HTLM sino estos se perderan.

<br>
<a href="#cabecera">A la cabecera</a>



Author: [Christian Castillo](https://github.com/cchristico)