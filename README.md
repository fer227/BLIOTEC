# BLIOTEC

- La correcta configuración del repositorio se puede ver [aquí](./doc/git_config.md).
- La descripción inicial del problema la puedes encontrar [aquí](./doc/descripcion.md).

## Descripción de la arquitectura

Para la arquitectura de este proyecto utilizaremos una arquitectura basada en microservicios, de tal forma que podamos tener servicios que trabajen de forma independiente pero que a su vez se comuniquen cuando sea necesario. Distinguimos tres microservicios que a su vez darán lugar a tres entidades diferentes:

1. **Microservicio de gestión de usuarios**. Este microservicio está orientado a la organización de los clientes con sus datos personales.

2. **Microservicio de gestión de libros**. Tenemos que gestionar los libros que contarán con diferentes atributos como el género, el autor o la fecha de publicación que más adelante nos servirán para crear filtros de búsqueda. Además también tendrá que gestionar temas de stock, pues puede haber varios ejemplares de un mismo libro.

3. **Microservicio de gestión de préstamos**. Este microservicio relaciona los dos anteriores y permite a los usuarios coger un libro prestado de nuestra biblioteca. Por tanto, tendrá que controlar las fechas de vencimiento de los diferentes préstamos. Gracias a estre microservicio también tendremos un historial de los préstamos que se han llevado a cabo en el tiempo lo que en un futuro nos puede servir, por ejemplo, para sacar estadísticas.

- Con respecto al almacenamiento de los datos, cada microservicio contará con una base de datos independiente.
- En lo relativo a la comunicación entre los diferentes microservicios, cada uno de ellos proporcionará una API REST. La API REST permite una separación de las tecnologías, aportando facilidad en el proceso de desarrollo y testeo.

## Tecnologías a utilizar

Como lenguaje principal vamos a utilizar [Node.js](https://nodejs.org/es/) por los siguientes motivos:
- Me gustaría aprender en nuevo lenguaje y este aún no he tenido la ocasión de probarlo.
- Es un lenguaje bastante emergente, con mucho soporte en la comunidad y dispone de multitud de librerías muy útiles.
- Las API REST se gestionan con mucha facilidad en este lenguaje.

Por otro lado, utilizaremos [Express](https://expressjs.com/es/), una librería de Node.js para el enrutamiento. Está bastante estándarizado por la comunidad para gestionar el servidor en Node.js.

Para las bases de datos de cada microservicio utilizaremos una base de datos NoSQL como es [MongoDB](https://www.mongodb.com/es), compatible con el lenguaje escogido y además se trabaja muy fácil con el formato JSON. En Node.js disponemos de una librería llamada [Mongoose](https://mongoosejs.com/) que nos puede facilitar la interacción con la base de datos, pudiendo establecer modelos o esquemas de las entidades con restricciones.

Finalmente, cada microservicio necesitará un sistema de Logs donde se quede registrada la actividad del sistema. Para ello, utilizaremos otra librería de Node.js llamada [log4js](https://www.npmjs.com/package/log4js).

## Planificación del proyecto: Historias de Usuario

Las historias de usuario nos ayudarán a dirigir y planificar el desarrollo del proyecto. Nos encontramos con dos roles que pueden crear historias de usuario: los propios clientes (llamados usuarios) que disfrutan de los servicios de la bibilioteca y los administradores, que serían los encargados o empleados de la misma biblioteca/establecimiento. Las historias de usuario (issues) se han dividido en tres bloques (milestones) para seguir un orden en el desarrollo. Primero intentaremos llegar a un prototipo mínimo funcional y luego iremos aumentando esa funcionalidad:

- [Primer bloque: Prototipo mínimo funcional](https://github.com/fer227/BLIOTEC/milestone/3)
	- [Como usuario, quiero poder consultar los libros para escoger el que más me parezca más interesante de los disponibles.](https://github.com/fer227/BLIOTEC/issues/7)
	- [Como administrador, quiero poder introducir nuevos libros para mantener el catálogo actualizado.](https://github.com/fer227/BLIOTEC/issues/8)
	- [Como usuario, quiero poder registrarme para poder disfrutar de los servicios de la biblioteca.](https://github.com/fer227/BLIOTEC/issues/9)
	- [Como usuario, quiero llevar a cabo el préstamo de un libro para poder llevármelo.](https://github.com/fer227/BLIOTEC/issues/10)

- [Segundo bloque: Aumentando la funcionalidad del sistema](https://github.com/fer227/BLIOTEC/milestone/4)
	- [Como usuario, quiero poder devolver un libro.](https://github.com/fer227/BLIOTEC/issues/11)
	- [Como administrador, quiero poder modificar aspectos de los libros como su stock para mantener el catálogo actualizado.](https://github.com/fer227/BLIOTEC/issues/12)
	- [Como usuario, quiero poder renovar mi préstamo para poder conservar un libro por un mayor tiempo.](https://github.com/fer227/BLIOTEC/issues/13)
	- [Como administrador, quiero poder ver los datos de los usuarios registrados para poder contactar con ellos en caso de incidencia.](https://github.com/fer227/BLIOTEC/issues/14)

- [Tercer bloque: Mejorando la experiencia de usuario](https://github.com/fer227/BLIOTEC/milestone/5)
	- [Como usuario, quiero poder buscar libros de acuerdo a unos criterios como autor o género.](https://github.com/fer227/BLIOTEC/issues/15)
	- [Como usuario, quiero poder ver mis préstamos para estar al tanto de si tengo que devolver/renovar algún libro.](https://github.com/fer227/BLIOTEC/issues/16)
	- [Como administrador, me gustaría conocer cuales son los libros que más demanda han tenido por los usuarios.](https://github.com/fer227/BLIOTEC/issues/17)
	- [Como administrador, me gustaría conocer qué préstamos activos están pasados de la fecha límite y a qué usuarios corresponden.](https://github.com/fer227/BLIOTEC/issues/18)

Este es el planteamiento inicial de las historias de usuario (puede cambiar). A partir de estas historias de usuario, irán apareciendo tareas para el desarrollo del proyecto. Las tareas son aspectos más técnicos del desarrollo, necesarias para llevar a cabo una historia de usuario.

## Creación de las clases entidad

De acuerdo a la arquitectura escogida y a las primeras historias de usuario, creamos estas tres clases:

- [libro.js](https://github.com/fer227/BLIOTEC/blob/main/src/libros/libro.js)
- [prestamo.js](https://github.com/fer227/BLIOTEC/blob/main/src/prestamos/prestamo.js)
- [usuario.js](https://github.com/fer227/BLIOTEC/blob/main/src/usuarios/usuario.js)
