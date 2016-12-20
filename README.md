# Javascript Clases
## Instalación de SailsJS
Sailsjs es un servidor web que se conecta a base de datos y puede funcionar con aplicaciones en tipo real

```
> npm install -g sails
```

Crear una nuevo proyecto
```
sails bew Mascota
```

Levantar el servidor
```
sails lift
```
Dentro de la carpeta contenedora del archivo
```
node app.js
```
sails pide opciones las cuales son:
- 1: __SAFE MODE__ no se va alerar la abse de datos.
- 2: __ALTER MODE__ Se altera la base de datos.
- 3: __DELETE MODE__ borra todos los datos de la bse de datos.

## El servidor web de sail se encuntra en la carpeta _assets_

### Investigar sobre el grunt !!!!

### Importante:
no se necesita reinicar el servidor cunado se cambia vistas
si es necesario reinicar cunado se hace modificaciones sobre el servidor
## Generar controladores:
Para genear controladores se utilzai el siguiente comando:
```
> sails generate controller Nombre del controlador
```

# DEBER:
Utilziar un paquete node, para enviar correos