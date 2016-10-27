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
<p>La __WWW__ puede ser visto como un enorme sistema dstribuido constituido por millones de clienetes y servidores que acceden a documentos enlazados. Los servidores mantienen una colleccion de documentos, mientras que los clientes proporcionan a los usuarios una interfaz fácl de usar.</p>

#### Descripción general de WWW
Ya que se menciono que la __WWW__ es una gran sistema de cleinte servidor con millones de servidores distribuidos. Cada servidor mantin una colección de documentos, cada documento es almacenado com un archivo(Algunos docuemntos pueden ser generado mediante solicitudes). 
<p>Un servidor acepta solicitudes para ir a buscar un documento y lo transfiere al cliente. Además, también puede aceptar solicitudes para el almacenamiento de documentos nuevos.
La forma más sencilla de hacer referencia a un documento es por medio de una referencia llaman un Localizador Uniforme de Recursos (URL). En él se especifica donde se encuentra un documento, a menudo mediante la incorporación del nombre __DNS__ de su servidor asociado, junto con un nombre de archivo mediante el cual el servidor puede consultar el documento en su sistema de archivos local. Además, una URL especifica el protocolo de nivel de aplicación para transferir el documento a través de la red.</p>
Ejemplo de esto es el protocolo http __Hypertext Transfer Protocol__, algunas peticiones utilizadas por este protoclo son las sigueintes:
<table>
    <tr>
    <td><h3>Método</h3></td>
    <td><h3>Función</h3></td>
    </tr>
    <tr>
        <td>__GET__</td>
        <td> Pide una representación del recurso especificado.</td>
    </tr>
    <tr>
        <td>__POST__</td>
        <td>Envía los datos para que sean procesados por el recurso identificado.</td>
    </tr>
    <tr>
        <td>__PUT__</td>
        <td>Sube, carga o realiza un upload de un recurso especificado (archivo), es el camino más eficiente para subir archivos a un servidor, esto es porque en POST utiliza un __mensaje multiparte__ y el mensaje es decodificado por el servidor. </td>
    </tr>
    <tr>
        <td>__DELETE__</td>
        <td>Borra el recurso especificado.</td>
    </tr>
</table>

Un cliente interactúa con los servidores web a través de una aplicación especial conocido como un __navegador__. Un navegador se encarga de mostrar adecuadamente un documento. También, un explorador acepta la entrada de un usuario sobre todo al permitir que el usuario seleccione una referencia a otro documento.
    Como se vio existen métodos http, que permiten al servidor atender a las peticiones del cliente, a mas de exto existen __códigos HTTP__ que permiten notificar al navegador sobre el estado de la comunicacion, en la sigueinte tabla se muestran algunos de estos _códigos de estado HTTP_.
 
<table>
    <tr>
    <td><h3>Código de estado</h3></td>
    <td><h3>Descripción</h3></td>
    </tr>
    <tr>
        <td>__100__ _(Continue)_</td>
        <td> el navegador puede continuar realizando su petición (se utiliza para indicar que la primera parte de la petición del navegador se ha recibido correctamente).</td>
    </tr>
    <tr>
        <td>__200__ _(OK)_</td>
        <td>la petición del navegador se ha completado con éxito.</td>
    </tr>
    <tr>
        <td>__203__ _ (Non-Authoritative Information)_</td>
        <td>la petición se ha completado con éxito, pero su contenido no se ha obtenido de la fuente originalmente solicitada sino de otro servidor.</td>
    </tr>
    <tr>
        <td>__400__ _(Bad Request)_</td>
        <td>el servidor no es capaz de entender la petición del navegador porque su sintaxis no es correcta.</td>
    </tr>
</table>
 <p>  
    Lo fundamental de la Web es que toda la infromacion se encuentra representada por docuemntos, la mayor parte de estos documentos estan expresados en un lenguaje especial llamado __HyperText Markuo Languaje__ o simplificado _HTML_. Se dice que es un lenguaje de marcado ya que _HTML_ provee palabras clave que permiten estructurar al documento en diferentes secciones.
    Desde la aparicion de este lenguaje a sido neesario crear estandares que permitan la interpretacion de archivos HTML por los navegadores, de esto seencuentra encargado ___World Wide Web Consortiun___. En la actualidad existen los sigueitnes estandares oficiales:
    
</p>

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

### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la siguiente URL:

- Github
  * La url de github que es `https://github.com` 
- Usuario
  * La url de usuario de github que en este caso es: `/adrianeguez` 
- Repositorio
  * El repositorio de Github que estamos usando, en este caso es `/Tec_Web_Js_2016_B`
- Rama o  Branch
  * La rama de nuestro repositorio en este formato: `/blob/master`
- El PATH
  * La direccíon de nuesto archivo por ejemplo `/carpeta/subcarpeta/subsubcarpeta/archivo.png` en este ejemplo es `/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png` 
- RAW
  * Por ultimo mandamos un Query String Parameter de la con la variable `raw` y valor `true` de la siguiente manera: `?raw=true`
  
**Al final** nuestro url queda de la siguiente manera:

#### `https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true`

<p align="center">
<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">
</p>

Por ultimo podemos centrar las imagenes de la siguiente manera:


```
<p align="center">

<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">

</p>
```

### Links dentro de github

Para nosotros utilizar los Links dentro de Github debemos de hacer dos cosas:

1. Definir un anchor name donde nosotros queramos mover cuando demos clic de la siguiente manera y formate (**NOTESE QUE ESTAN JUNTAS**):

  ```
  <a name="nombre"></a>
  ## titulo2
  ```
2. Después de esto debemos de linkear mediante un texto por ejemplo en una lista de la siguiente manera (**NO ELVIDAR EL `#`**):
 
  ```
  - <a href="#nombre">Dale clic aqui para ir al titulo 2</a>
  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Adrian Eguez](https://github.com/adrianeguez)