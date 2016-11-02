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

## Uso de Style
####- Uso de Style con tags
Para agrear estilos como tags se ingresa el sigueinte código en el head del archivo HTML
```
<style> 
        /*TAGS 
            nombreTag{ 
             
        } 
            */ 
        html{ 
            background-color: #AAFF; 
        } 
        body{ 
            background-color: #AACC 
        } 
        h1{ 
            background-color: #AFCC 
        } 
    </style> 

```
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/02.CSS/Informes/Imagenes/estilos_html.png?raw=true">
</p>

####- Uso de Style con clases
Otra manera de utilizar Style es mediante clases, para esto se debe ingresar lo siguiente
```
        .nombreClaseRojo{ 
            background-color: red; 
        } 
        .nombreClaseAmarillo{ 
            background-color: yellow; 
        } 
        .nombreClaseAzul{ 
            background-color: blue; 
        } 
```
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/02.CSS/Informes/Imagenes/estilos_clases.png?raw=true">
</p>

####- Uso de Style con identificadores
Una etiqueta dentro de nuestro código html puede tener un identificador id, este id puede ayudar a colocar estilo, para lo cual se consigue con lo sigueinte:
```
       #parrafoVerde{ 
            background-color: green 
        } 
```
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/02.CSS/Informes/Imagenes/estilo_id.png?raw=true">
</p>

####- Uso de CSS en un archivo separado
Para lo cual se crea un archivo nuevo con la extencion css, luedo se copia el contenido de Style del HTML.
```
 html{
            background-color: #AAFF;
        }
        body{
            background-color: #AACC;
        }
        h1{
            background-color: #AFCC;
        }
        /*clases*/
        .nombreClaseRojo{
            background-color: red;
        }
        .nombreClaseAmarillo{
            background-color: yellow;
        }
        .nombreClaseAzul{
            background-color: blue;
        }
        /*
        POR ID
        */
        #parrafoVerde{
            background-color: green
        }
```
Dentro del archivo HTML se ingresa los sigueinte
```
<link rel="stylesheet" href="estilos.css">
```
Si se desea acceder a hojas de estilos en otros directorios se puede usar lo sigueinte:
```
<link rel="stylesheet" href="estilo1/dilan.css"> 
<link rel="stylesheet" href="estilo1/estilo2/pepito.css"> 
```
Para el uso de CDN se ingresa lo siguiente:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> 
```
(Nota: esto se obtiene de la página de Bootstrap)
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/02.CSS/Informes/Imagenes/cdn_estilo.png?raw=true">
</p>

####- Uso de columnas, en conjunto con bootstrap
Para esto se pueden crear divcontenido estático de un sitio webersas combinaciones, lo importantes esque las divisiones que se creen sumen 12, asi se tiene:
```
    <div class="row" style="background-color:green">
        <h1>fila1</h1>
    <div class="col-md-4 border">
        <h2>a</h2>
        </div>
    <div class="col-md-4 border">
        <h2>b</h2>
    </div>
    <div class="col-md-4 border">
        <h2>c</h2>
    </div>    
    </div>
```
Otra combinacion puede ser:
```
<div class="row" style="background-color:yellow">
        <h1>fila2</h1>
        <div class="col-sm-3 border">
            <h3>Csm-3 1</h3>
        </div>
        <div class="col-sm-3 border">
            <h3>Csm-3 2</h3>
        </div>
        <div class="col-sm-3 border">
            <h3>Csm-3 3</h3>
        </div>
        <div class="col-sm-3 border">
            <h3>Csm-3 4</h3>
        </div>
    </div>
```
Para poder delinear se debe ingresar lo sigueinte en la cabecera
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
Con esto se obtiene lo sigueinte:
<p align="center">
<img src="https://github.com/cchristico/JavascriptClases/blob/02.CSS/Informes/Imagenes/columnas_bootstrap.png?raw=true">
</p>
## Conclusiones y Recomendaciones

- La utilizacion de multiples archivos css, o multiples etilos sobre una etiqueta, hace que se utilice la ultima, es decir es secuencial en cascada.
- La utilizacion de las hpjas de estilo por separado ayuda a dar mantenimiento a las páginas web.
- El uso de CDN nos ayuda a almacenar el contenido estático de un sitio web, con esto nos permite ingresar a hojas de estilo cargadas en la web.
- Se puede tener multiples hojas de estilo.

<br>
<a href="#cabecera">A la cabecera</a>



Author: [Christian Castillo](https://github.com/cchristico)