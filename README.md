# BLIOTEC

- La correcta configuración del repositorio se puede ver [aquí](./doc/git_config.md).
- La descripción inicial del problema la puedes encontrar [aquí](./doc/descripcion.md).

## Descripción de la arquitectura

Para la arquitectura de este proyecto utilizaremos una arquitectura basada en microservicios, de tal forma que podamos tener servicios que trabajen de forma independiente pero que a su vez se comuniquen cuando sea necesario. Distinguimos tres microservicios que a su vez darán lugar a tres entidades diferentes:

1. **Microservicio de gestión de usuarios**. Este microservicio está orientado a la organización de los clientes con sus datos personales.

2. **Microservicio de gestión de libros**. Tenemos que gestionar los libros que contarán con diferentes atributos como el género, el autor o la fecha de publicación que más adelante nos servirán para crear filtros de búsqueda. Además también tendrá que gestionar temas de stock, pues puede haber varios ejemplares de un mismo libro.

3. **Microservicio de gestión de préstamos**. Este microservicio relaciona los dos anteriores y permite a los usuarios coger un libro prestado de nuestra biblioteca. Por tanto, tendrá que controlar las fechas de vencimiento de los diferentes préstamos. Gracias a estre microservicio también tendremos un historial de los préstamos que se han llevado a cabo en el tiempo lo que en un futuro nos puede servir, por ejemplo, para sacar estadísticas.

- Con respecto al almacenamiento de los datos, cada microservicio contará con una base de datos independiente.
- En lo relativo a la comunicación entre los diferentes microservicios, cada uno de ellos proporcionará una API REST con entradas que suministren la información requerida (GET) o también entradas que modifiquen información en la base de datos (POST, PUT).


