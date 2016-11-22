### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Sitio Web (Diseño, Calidad, WAI, Validación, SEO)` 
### Fecha : `2016-10-26`
### Estudiante : `Castillo Muñoz Christian Eduardo`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `3`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#DiseñoWEB">Diseño WEB</a>
  * <a href="#Navegacion">Navegación</a>
  * <a href="#Velocidad_de_descarga">Velocidad de descarga</a>
  * <a href="#Deje_que_su_audiencia_hable">Deje que su audiencia hable</a>
  * <a href="#Accesibilidad">Accesibilidad</a>
  * <a href="#Calidad_Web">Calidad Web</a>
  * <a href="#WEB_WAI">WEB WAI</a>
  * <a href="#WEB_SEO">WEB SEO</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#concluciones_recomendaciones">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sitio Web (Diseño, Calidad, WAI, Validación, SEO)`

<a name="objetivos"></a>
## Objetivos

- Determinar las mejores prácticas para desarrollar páginas web.
- Implementar pautas que ayudan a diseñar páginas web.
- Hacer uso de tablas y formularios que reflejen criterios de diseño.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="DiseñoWeb"></a>
### Diseño WEB
El _diseño_ es el proceso de recolección de ideas, y su organización y ejecución estética, guiada por ciertos principios para un propósito específico. El __diseño web__ es un proceso similar de la creación, con la intención de presentar el contenido de las páginas web, que los usuarios finales pueden acceder a través de Internet con la ayuda de un navegador web.
[treefrog](https://www.treefrog.ca/what-is-web-design)
<br>
 La _recolección de ideas_ se puede traducir a la frase hay que conocer la audiencia a la cual va dirigida nuestra página web, es decir los usuarios son escáneres que ayudan a cumplir con el proceso de diseño, se pueden tomar estas pautas al momento de desarrollar páginas web.
<br>
__Less is more__ (_menos es mas_)
<br>
__Mantener los párrafos lo más cortos posibles__, ya que la mayoría de los usuarios abandonan las páginas web que muestran texto de manera excesiva.<br>
__Mantener las páginas lo más cortas posible__, el contenido debe estar organizado de tal modo de que no se sobrecarga de contenido innecesario que a la final termina aburriendo a los visitantes de nuestros sitios web, puede darse que se tenga mucha Infromación que mostrar, para esto se recomienda usar múltiples paginas pequeñas que en su conjunto muestren todo lo que queremos transmitir.
<a name="Navegacion"></a>
### Navegación
Hay que crear una Estructura de navegación que se use en todas las páginas del sitio web.
<br>
_No usar hyperlinks_ dentro de cada párrafo, para enviar a los visitantes a otras páginas de nuestro sitio web, esto destruye la consistencia de la navegabilidad.
<br>
_Si se usa links_ estos deben ir al inicio del párrafo, o en un menú.

<p align="center">
<img src="http://www.aulaclic.es/paginas-web/graficos/submenu_ejemplo.png" width="250" height="250">
</p>

<a name="Velocidad_de_descarga"></a>  

### Velocidad de descarga
Muchos usuarios abandona páginas web que tardan más de 7 segundos en cargas, por esta razón es importante probar las páginas web a través de una conexión de baja velocidad, si la página tarda mucho en cargar se pude contemplar la posibilidad de reducir los gráficos o contenido multimedia.
<br>

<a name="Deje_que_su_audiencia_hable"></a>

### Deje que su audiencia hable
_El feedback es muy bueno_
Los visitantes son _“clientes”_, muchas veces pueden dar pistas sobre que se puede mejorar, se puede hacer encuestas cortas que aporten diferentes puntos de vista de diferentes usuarios.Accesibilidad
### Los monitores del usuario
Cuando se diseñe se debe tener en cuenta que no todos los usuarios tienen el mismo monitor en el cual se está desarrollando, es necesario que las páginas web sean probadas en múltiples monitores, se puede ver cómo han ido evolucionando las tendencias de monitores según el tiempo en el siguiente link:[Resoluciones de pantallas](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/browsers/browsers_display.asp.html)
<br>
### El tipo de navegador utilizado
Las páginas web deben ser probadas en múltiples navegadores, el desarrollar páginas web usando HTML de la manera correcta ayuda los navegadores a mostrar las páginas de manera correcta.
<p align="center">
<img src="http://blog.aulaformativa.com/wp-content/uploads/2014/09/ejemplos-paginas-web-uso-hamburger-menu-outdatedbrowser.jpg" width="500" height="200">
</p>

### Los plug.ins utilizados
Hay que asegurar que los usuarios tengan acceso a los programas necesarios para hacer uso de multimedia dentro de nuestro sitio web.

<a name="Accesibilidad"></a>

### Accesibilidad
Se debe diseñar paginas web pensando en personas con algún tipo de discapacidad, por ejemplo de audición o visión, se puede hacer uso de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.0 (traducción al castellano de Web Content Accessibility Guidelines 2.0).

<p align="center">
<img src="http://www.michaelgaigg.com/blog/wp-content/uploads/2008/12/wcag20-overview-small.png" width="500" height="500">
</p>

<a name="Calidad_Web"></a>

## Calidad Web
El uso de estándares web más resientes mejoran la calidad de un sitio web.

## Uso de HTML5
Escribir páginas web en el último estándar de HTML, ayuda a cumplir con muchos estándares y tendencias actuales, las versiones de las paginas HTML se definen con el uso de:

```
<!DOCTYPE html>
```

DOCTYPE también permite validad el software para comprobar la sintaxis de la pagina

## Uso separado de archivos CSS

El uso de hojas de estilo en cascada(Cascadind Style Sheets ___CSS___) es la mejor manera de separar el contenido del estilo, en páginas web de calidad. Los estilos (_tamaños, fuentes, colores y más_), deben ser colocados en archivos independientes, el uso de archivo CSS independiente también reducirá en gran medida los costos de desarrollo del sitio web, a más de esto el uso de CSS independientes, permite cambiar el estilo de los elementos HTML con solo reescribir una línea de código. SI se hace uso de CSS dentro de las páginas, se tiene que editar todas las páginas.

## Validación Web
Como se mencionó para tener páginas web de calidad se deben seguir estándares, para esto existe software que pueden comprobar e l cumplimiento o no de estos estándares dentro de nuestras páginas web. Este software analiza el código fuente de nuestras páginas y emite un informe con los errores encontrados, con esto permite mejorar hasta cubrir los estándares, es importante verificar las páginas web antes de publicarlas.

<p align="center">
<img src="https://norfipc.com/img/otros2/validar-codigo-html-pagina.jpeg" width="400" height="300">
</p>

## El elemento ````<title>````
Esta etiqueta es una de las más importantes ya que permite describir el contenido de la página web, si este no se muestra en la página web se debe tener en cuenta que ```<title>``` permite a los motores de búsqueda encontrar nuestro sitio web.<br>
El título de nuestra página debe ser lo más corto posible, tiene que coincidir con el contenido que se visualiza.A continuacion se muestra lo que se debe y no hacer al momento de escribir el titulo de neustra página web:

__Buen ejemplo__
```
<title>HTML Tutorial</title>

<title>XML Introduction</title>
```

__Mal ejemplo__
```
<title>Introduction</title>

<title>Chapter 1</title>
```

## Elementos de encabezado
Se debe considerar el uso de ```<h1>``` para títulos principales, ```<h2>``` y ```<h3>```, para títulos de niveles inferiores, al igual que la etiqueta title, el uso de ```<h1>``` permite a los motores de búsqueda encontrar a nuestra página web

<p aling="center">
    <img src="https://github.com/cchristico/JavascriptClases/blob/0.3Bootstrp/Informes/Infrome_3/imagenes/cabecera.png?raw=true" alt="imagen cabecera" width="500" height="300">
</p>

## Conjunto de caracteres
Todos los estándares W3C(desde 1996)  definen un juego de caracteres interno denominado _Unicode._ Los navegadores web modernos utilizan este conjunto de caracteres para poder interpretar nuestras páginas web, es importante hacer uso del conjunto de caracteres adecuado, ya que si no se lo hace el contenido de la página no se muestra de la mejor manera, para las páginas HTL se utiliza el siguiente elemento dentro de ```<head> ```.
<br>
```<meta charset="x"> ```
<br>
La siguiente imagen muestra la tendencia de __Character Sets__ en los últimos años:
<p align="center">
<img src="http://i.imgur.com/1741znk.png" width="500" height="300">
</p>

## Formatos de fecha
El formato de fechas definido por la ISO es el sigueinte ___“aaaa-mm-dd”___, donde _aaaa_ es el año, _mm_ es el mes y _dd_ es el día.

<a name="WEB_WAI"></a>

## WEB WAI

La Web Accessibility Initiative (WAI) o Iniciativa para la Accesibilidad Web es una rama del World Wide Web Consortium que vela por la accesibilidad de la Web.

El grado de accesibilidad se establece en niveles denominados A, AA, y AAA, correspondiendo respectivamente a criterios mínimos de accesibilidad, extendidos, y accesibilidad máxima. Técnicamente la accesibilidad se implementa mediante pautas de lógica estructural de documentos, contenido auto-explicativo y semántica adicional, con la intención de permitir, a una audiencia lo más extensa posible de usuarios con distintos niveles de dotación tecnológica y capacidad sensorial, acceder a la información que se intenta representar y transmitir.

Dentro de las pautas a seguir se pueden mencionar:
- __Uso de alt:__ Este atributo proporciona texto alternativo para imágenes frases cuadros estadísticos..., esta etiqueta puede ser interpretada por lectores de páginas web, lo cual ayuda a personas no videntes.

```
<img src="images/banana.jpg" alt="Banana"> 
```

- __Tamaño de las feuntas__: Se deben usar tamaños legibles, alguno usuario no pueden leer letras muy pequeñas lo que imposibilita el acceso a páginas que no dispongan de texto con letras legibles, a más de esto se debe considerar el espacio ente líneas y el tipo de letra que se esté utilizando
<a href="#cabecera">A la cabecera</a>

<a href="#WEB_SEO"></a>

## WEB SEO

SEO(Search Engine Optimization)o en español optimización de motores de búsqueda, es el proceso de mejorar el ranking (visibilidad) de un sitio web en los motores de búsqueda. SEO considera cómo los motores de búsqueda de trabajo, lo que la gente busca, y qué términos de búsqueda (palabras) se escriben. Optimizar un sitio web puede implicar la edición del contenido para aumentar su relevancia para las palabras clave específicas.


<p align="center">
<img src="http://www.esdiario.com/images/carpeta_gestor/archivos/motor/SEO.jpg" width="400" height="300">
</p>


<a name="desarrollo"></a>
## Desarrollo del informe

### Primeros pasos con **Bootstrap**

Para trabajar con Bootstrap se puede descargar toda la libreria, o se puede usar el CDN, para lo cual se ingresa en el [link](http://getbootstrap.com/getting-started/#download)  se copia lo sigueinte en el ```<head>``` de nuestra página web.
<p aling="center">
   
    <img src="https://github.com/cchristico/JavascriptClases/blob/0.3Bootstrp/Informes/Infrome_3/imagenes/agregarBootstrappng.png?raw=true" alt="imagen cabecera" width="600" height="400">
</p>

- __Small__ permite crear texto a un nivel inferior al encabezado, es decir lo hace mas claro.
<p aling="center">
   
    <img src="https://github.com/cchristico/JavascriptClases/blob/0.3Bootstrp/Informes/Infrome_3/imagenes/usoSmall.png?raw=true" alt="imagen cabecera" width="400" height="60">
</p>

- __Inline__ permite ingresar código dentro del texto.
```
 <p>El tag para describir imaenes es <code>&lt;img&gt</code></p>
```
<p aling="center">   
    <img src="https://github.com/cchristico/JavascriptClases/blob/0.3Bootstrp/Informes/Infrome_3/imagenes/inline.png?raw=true" alt="imagen cabecera" width="400" height="60">
</p>

- __Instrucciones de usuario__ Para indicar alguna entrada por teclado, se utiliza ```<kbd>```
  ```
  <p>No esta permitido</p>  <kbd><kbd>ctrl</kbd> c <kbd>,</kbd></kbd> ni el<br>
  <kbd><kbd>ctrl</kbd> v <kbd>,</kbd></kbd>
  ```
  <p aling="center">   
    <img src="https://github.com/cchristico/JavascriptClases/blob/0.3Bootstrp/Informes/Infrome_3/imagenes/instruccion.png?raw=true" alt="imagen cabecera" width="100" height="80">
</p>
  
- __Tablas__ existen modelos de tablas proporcionadas por Bootstrap, para lo cual se usa lo sigueinte:
```
 <table class="table table-hover">
           <tr>
               <th>Holas</th>
               <th>Holas</th>
               <th>Holas</th>
               <tr class="active">
                   <td>hi5</td>
                   <td>hi5</td>
                   <td>hi5</td>
               </tr>
               <tr class="danger">
                   <td>hi5</td>
                   <td>hi5</td>
                   <td>hi5</td>
               </tr>
               <tr class="info">
                   <td>hi5</td>
                   <td>hi5</td>
                   <td>hi5</td>
               </tr>
               <tr class="warmin">
                   <td>hi5</td>
                   <td>hi5</td>
                   <td>hi5</td>
               </tr>
               <tr class="info">
                   <td>hi5</td>
                   <td>hi5</td>
                   <td>hi5</td>
               </tr>
           </tr>
       </table>
```
  <p aling="center">   
    <img src="https://github.com/cchristico/JavascriptClases/blob/0.3Bootstrp/Informes/Infrome_3/imagenes/tablas.png?raw=true" alt="imagen cabecera" width="600" height="200">
</p>

- __Formulario__ Bootstrap  ayuda a la creacion de formularios con elementos como: cuadros de texto, radiobuttons, checks, lists...
El ejemplo mas básico es el siguite:
```
<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
```
  <p aling="center">   
    <img src="https://github.com/cchristico/JavascriptClases/blob/0.3Bootstrp/Informes/Infrome_3/imagenes/formulario.png?raw=true" alt="imagen cabecera" width="550" height="200">
</p>

  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

<a href="#concluciones_recomendaciones"></a>

## Conclusiones y Recomendaciones

- El uso de buenas practicas al momento de diseñar nuestras páginas web ayudan a que estas sean mas visitadas por usuarios finales, así como el diseño accesible permite que personas con alguna discapacidad puedan acceder a nuestras páginas.
- El uso de etiquetas de texto alternativo ```alt=””``` ayuda a que nuestra pagina puede ser encontrada por los motores de búsqueda.
- El diseño juega un papel crucial en nuestras páginas web, ya que estas deben responder a un entandar.
- EL uso de Bootstrap asegura el uso de buenas practicas en el uso de CSS y HTML

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Adrian Eguez](https://github.com/adrianeguez)