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
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion HTML</a>
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
<a name="defhtml"></a>
### NodeJS
__Node.js__ es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo. [nodejs org](https://nodejs.org/es/)

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png" alt="icono NodeJS", width="290" height="190">
</p>

### npm
__npm__ es el manejador de paquetes por defecto para Node.js, npm se ejecuta desde la linea de comandos y maneja las dependencias para una aplicación.1 2 Además, permite a los usuarios instalar aplicaciones Node.js que se encuentran en el repositorio. npm está escrito enteramente en JavaScrip.
 [npm](https://www.npmjs.com/)
 
<p align="center">
<img src="https://partners.npmjs.com/weekly/weekly32/weekly-header-grace-hopper.png" width="700" height="200">
</p>

### Express
Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
<p align="center">
<img src="https://quickleft.com/wp-content/uploads/main_e18cb1f1-4642-4501-99a9-fe09268c20fb.png" width="700" height="200">
</p>


## Desarrollo del informe

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
<img src="https://github.com/cchristico/JavascriptClases/tree/0.8Node-JS_2/Informes/Infrome_1" width="200" height="200">
</p>

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