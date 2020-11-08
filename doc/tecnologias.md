## Tecnologías a utilizar

Como lenguaje principal vamos a utilizar [Node.js](https://nodejs.org/es/) por los siguientes motivos:
- Me gustaría aprender en nuevo lenguaje y este aún no he tenido la ocasión de probarlo.
- Es un lenguaje bastante emergente, con mucho soporte en la comunidad y dispone de multitud de librerías muy útiles.
- Las API REST se gestionan con mucha facilidad en este lenguaje.

Por otro lado, utilizaremos [Express](https://expressjs.com/es/), una librería de Node.js para el enrutamiento. Está bastante estándarizado por la comunidad para gestionar el servidor en Node.js.

Para las bases de datos de cada microservicio utilizaremos una base de datos NoSQL como es [MongoDB](https://www.mongodb.com/es), compatible con el lenguaje escogido y además se trabaja muy fácil con el formato JSON. En Node.js disponemos de una librería llamada [Mongoose](https://mongoosejs.com/) que nos puede facilitar la interacción con la base de datos, pudiendo establecer modelos o esquemas de las entidades con restricciones.

Finalmente, cada microservicio necesitará un sistema de Logs donde se quede registrada la actividad del sistema. Para ello, utilizaremos otra librería de Node.js llamada [log4js](https://www.npmjs.com/package/log4js).
