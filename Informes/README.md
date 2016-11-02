### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Uso de CSS` 
### Fecha : `2016-11-01`
### Estudiante : `Castillo Muñoz Christian Eduardo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#cssDef">CSS</a>
  * <a href="#cssCar">Características CSS</a>
  * <a href="#cssUse">USO CSS</a>
  * <a href="#cssCDN">CDN(Content Delivery Network)</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Uso de CSS`

<a name="objetivos"></a>
## Objetivos

- Implementar CSS a paginas HTML.
- Determianr las diferetnesmaneras de aplicar estilos a una Pagina Web.
- Utilizar Grid para determinar areas y secciones de una pagina HTML.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="cssDef"></a>
### CSS
CSS es un lenguaje utilizado en la presentación de documentos HTML. Un documento HTML viene siendo coloquialmente “una página web”. Entonces podemos decir que el lenguaje CSS sirve para organizar la presentación y aspecto de una página web. Este lenguaje es principalmente utilizado por parte de los navegadores web de internet y por los programadores web informáticos para elegir multitud de opciones de presentación como colores, tipos y tamaños de letra, etc.[aprenderaprogramar](http://www.aprenderaprogramar.com/index.php?option=com_content&id=546:que-es-y-para-que-sirve-el-lenguaje-css-cascading-style-sheets-hojas-de-estilo&Itemid=163)
<a name="cssCar"></a>
### Características de CCS
<ol>
    <li> Complementariedad con documentos estructurados.</li>
    <li> Mantenibilidad.</li>
    <li> Simplicidad.</li>
    <li> Rendimiento de la red.</li>
    <li> Flexibilidad.</li>
    <li> Riqueza..</li>
    <li> Combinación con lenguajes alternativos..</li>
    <li> Accesibilidad.</li>
</ol>
<a name="cssUse"></a>
## Uso de CSS
Una de las características más potentes de la programación con hojas de estilo consiste en definir los estilos de todo un sitio web. Esto se consigue creando un archivo donde tan sólo colocamos las declaraciones de estilos de la página y enlazando todas las páginas del sitio con ese archivo. De este modo, todas las páginas comparten una misma declaración de estilos y, por tanto, si la cambiamos, cambiarán todas las páginas. 
<p align="center">
<img src="http://wiki.salud.gob.sv/mediawiki/images/PluginSymfony130.png">
</p>

<a name="cssCDN"></a>
### CDN (Content Delivery Network)
CDN es una red de servidores diseñados para entregar en caché (de forma estática) el contenido de los sitios web a los visitantes. La entrega está determinada por la ubicación de cada visitante de la web.

La tecnología CDN implica una red de servidores repartidos por todo el mundo. El contenido estático de un sitio web se almacena en caché y se almacena en cada servidor. El contenido estático puede incluir html, imágenes, streaming de audio, streaming de vídeo, CSS, javascript y fuentes tipográficas.
<p align = "center">
    <img src="http://bootstrap3-guide.com/base/img/prepare_cdn.jpg">
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
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/pagina_prueba.png?raw=true">
</p>

- Se puede ingresar vinculos a nuevas páginas para lo cual se utiliza lo siguiente:
```
   <a href="https://www.youtube.com/watch?v=_RsvsJnmB5Q">
     <h2> Videos de Los caballeros del Zodiaco</h2>
 </a>
```
- Se puede hacer links sobre imagenes, para lo cual se utiliza:
```
     <a href="https://www.youtube.com/watch?v=_RsvsJnmB5Q">
<img src="http://im.ziffdavisinternational.com/ign_es/screenshot/default/caballeros-del-zodiaco610_hzbr.jpg">
</a>
```
- El resultado es le sigueinte:
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/link_img_texto.png?raw=true">
</p>

- Uso de listas, existe dos tipos de listas, las ordenadas y las no ordenadas.
    - Para una no ordenada se utiliza:
    ```
    <ul>
       <li><h4>Seiya </h4></li>
       <li><h4>Shiryu</h4></li>
       <li><h4>Hyoga</h4></li>
       <li><h4>Shun </h4></li>
   </ul>
    ```
    - Una lsita ordeanda se consigue con lo siguiente:
    ```
    <ol>
       <li><h4>Seiya </h4></li>
       <li><h4>Shiryu</h4></li>
       <li><h4>Hyoga</h4></li>
       <li><h4>Shun </h4></li>
   </ol>
    ```
- El resultado es le sigueinte:
<img src="https://github.com/cchristico/JavascriptClases/blob/informe/Informes/Infrome_1/Imagenes/lista_numerada_nonumerada.png?raw=true">
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