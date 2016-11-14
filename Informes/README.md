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
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

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
<a name="defhtml"></a>
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
### Navegación
Hay que crear una Estructura de navegación que se use en todas las páginas del sitio web.
<br>
_No usar hyperlinks_ dentro de cada párrafo, para enviar a los visitantes a otras páginas de nuestro sitio web, esto destruye la consistencia de la navegabilidad.
<br>
_Si se usa links_ estos deben ir al inicio del párrafo, o en un menú.

<p align="center">
<img src="http://www.aulaclic.es/paginas-web/graficos/submenu_ejemplo.png" width="250" height="250">
</p>
    
### Velocidad de descarga
Muchos usuarios abandona páginas web que tardan más de 7 segundos en cargas, por esta razón es importante probar las páginas web a través de una conexión de baja velocidad, si la página tarda mucho en cargar se pude contemplar la posibilidad de reducir los gráficos o contenido multimedia.
<br>
### Deje que su audiencia hable
_El feedback es muy bueno_
Los visitantes son _“clientes”_, muchas veces pueden dar pistas sobre que se puede mejorar, se puede hacer encuestas cortas que aporten diferentes puntos de vista de diferentes usuarios.
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

### Accesibilidad
Se debe diseñar paginas web pensando en personas con algún tipo de discapacidad, por ejemplo de audición o visión, se puede hacer uso de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.0 (traducción al castellano de Web Content Accessibility Guidelines 2.0).

<p align="center">
<img src="http://www.michaelgaigg.com/blog/wp-content/uploads/2008/12/wcag20-overview-small.png" width="500" height="500">
</p>

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

<h1>Cabezera Principal ```<h1> ```</h1> 
Algun texto
<h2>Segundo nivel de cabecera```<h2> ```</h2>
Algun texto
<h3>Tercer nivel de cabecera```<h3> ```</h3>
Algun texto
Si no se está conforme con el tamaño de fuente se puede usar CSS para cambiarlo.

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

## WEB SEO

SEO(Search Engine Optimization)o en español optimización de motores de búsqueda, es el proceso de mejorar el ranking (visibilidad) de un sitio web en los motores de búsqueda. SEO considera cómo los motores de búsqueda de trabajo, lo que la gente busca, y qué términos de búsqueda (palabras) se escriben. Optimizar un sitio web puede implicar la edición del contenido para aumentar su relevancia para las palabras clave específicas.


<p align="center">
<img src="http://www.esdiario.com/images/carpeta_gestor/archivos/motor/SEO.jpg" width="400" height="300">
</p>




<a name="desarrollo"></a>
## Desarrollo del informe

### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la :

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