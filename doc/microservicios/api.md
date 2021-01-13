## Diseño de la API REST
A continuación indico para cada historia de usuario, qué rutas (método utilizado, la ruta entre paréntesis y/o parámetros, los cuales se especifican al final de la ruta precedido de ':') se han desarrollado y cuáles son las posibles respuestas.

### Libros

- [HU1 Consulta de libros](https://github.com/fer227/BLIOTEC/issues/7). 

    - get('/libros/'). La respuesta siempre es 200.
    - get('/libros/:id'). La respuesta es 200 si el *id* es correcto, 404 en caso de no existir.

- [HU2 Gestión del catálogo](https://github.com/fer227/BLIOTEC/issues/8). 
    - post('/libros/'). Los parámetros del libro van el body. La respuesta será 201 si se creó correctamente, 400 si los parámetros no son correctos o 409 si ya existe el identificador.
    - delete('/libros/:id'). La respuesta es 200 si se eliminó correctamente o 404 si el identificador no existe.

- [HU9 Obtener libros por filtros](https://github.com/fer227/BLIOTEC/issues/15).
    - get('/libros/genero/:id'). El *id* identifica al género. Se obtiene un 200 si todo fue correctamente o un 400 en caso de que el género no sea correcto.

- [HU13 Valoraciones de libros](https://github.com/fer227/BLIOTEC/issues/22).
    - get('/valoraciones/:isbn'). Obtenemos las valoraciones de un libro (según su ISBN). La respuesta siempre es 200.
    - post('/valoraciones/'). Los parámetros van en el body. Obtendremos un 201 si se añadió correctamente o un 400 si los parámetros no son correctos.

Las rutas de los libros se pueden ver en este [fichero](../../routes/libros.js).

### Préstamos

- [HU4 Poder hacer un préstamo](https://github.com/fer227/BLIOTEC/issues/10).
    - post('/prestamos/'). Los parámetros del préstamo van en el body. Obtendremos un 201 si se creó correctamente, 409 si ya existe el identificador o 400 si los parámetros no son correctos.
    - get('/prestamos/:id'). Obtenemos un 404 si el identificador del préstamo no existe o un 200 en caso contrario.

- [HU5 Devolver un libro](https://github.com/fer227/BLIOTEC/issues/11).
    - put('/prestamos/devolver/:id'). Se obtiene un 200 si la operación tuvo éxito o un 404 en caso de que el identificador no exista.

- [HU7 Renovar un préstamo](https://github.com/fer227/BLIOTEC/issues/13).
    - put('/prestamos/renovar/:id'). Devuelve un 200 si la operación tuvo éxito o un 404 en caso de que el identificador no exista.

- [HU12 Saber los préstamos caducados](https://github.com/fer227/BLIOTEC/issues/18).
    - get('/prestamos/status/vencidos'). Siempre se obtiene un 200.

Las rutas de los préstamos se pueden encontrar [aquí](../../routes/prestamos.js).

### Usuarios

- [HU3 Usuario quiere registrarse](https://github.com/fer227/BLIOTEC/issues/9).
    - post('/usuarios/'). Los parámetros del usuario van en el body. Obtenemos un 201 si se creó correctamente, un 400 si los parámetros no son correctos o un 409 si el *username* ya existe.

- [HU8 Administrador quiere consultar datos de usuarios](https://github.com/fer227/BLIOTEC/issues/14).
    - get('/usuarios/:username'). Si el *username* es correcto, obtendremos un 200. En caso contrario, un 404.

Las rutas de los usuarios las puedes encontrar [aquí](../../routes/usuarios.js).