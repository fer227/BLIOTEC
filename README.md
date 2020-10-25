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
- Es un lenguaje bastante emergente, con mucho soporte en la comunidad y dispone de multitud de librerías muy utiles.
- Las API REST se gestionan con mucha facilidad en este lenguaje.

Por otro lado, utilizaremos [Express](https://expressjs.com/es/), una librería de Node.js para el enrutamiento. Está bastante estándarizado por la comunidad para gestionar el servidor en Node.js.

Para las bases de datos de cada microservicio utilizaremos una base de datos NoSQL como es [MongoDB](https://www.mongodb.com/es), compatible con el lenguaje escogido y además se trabaja muy fácil con el formato JSON. En Node.js disponemos de una librería llamada [Mongoose](https://mongoosejs.com/) que nos puede facilitar la interacción con la base de datos, pudiendo establecer modelos o esquemas de las entidades con restricciones.

Finalmente, cada microservicio necesitará un sistema de Logs donde se quede registrada la actividad del sistema. Para ello, utilizaremos otra librería de Node.js llamada [log4js](https://www.npmjs.com/package/log4js).
