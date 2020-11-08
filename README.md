# BLIOTEC

- La correcta configuración del repositorio se puede ver [aquí](./doc/git_config.md).
- La descripción inicial del problema la puedes encontrar [aquí](./doc/descripcion.md).
- Descripción de la [arquitectura](./doc/arquitectura.md).
- [Tecnologías](./doc/tecnologias) a utilizar.

## Gestor de tareas
Para la gestión de tareas he barajado entre tres posibles opciones: [npm](https://www.npmjs.com/), [grunt](https://gruntjs.com/) o [gulp](https://gulpjs.com/). Las tres herramientas son bastante populares en la comunidad de Javascript y cualquiera de las tres podría servirnos para lo que pretendemos en este proyecto.
- **npm** es el gestor de dependencias que ya estamos utilizando en nuestro proyecto. Puesto que ya lo usamos para eso, me gustaría tener una herramienta independiente para la gestión de tareas (lo que nos deja entre grunt y gulp).
- **Grunt** y **Gulp** son herramientas que tienen el mismo propósito: la automatización de tareas. Aunque las comparativas de rendmiento que he estado observando sitúan a gulp por encima, no es un factor que vayamos a tener en cuenta. Donde encontramos una considerable diferencia es en la notación de estas herramientas: mientras que grunt tiende más a un archivo de configuración (tipo JSON), gulp está enfocado a código (Javascript), lo que a mi parecer, hace que este sea más fácil de comprender y usar.
- En este [commit](https://github.com/fer227/BLIOTEC/commit/0ba59060db5ebb8ccf90408feaf209c75e502346) se puede observar que probé primero con Grunt, pero finalmente me decanté por Gulp por lo que he comentado anteriormente.
- Principal referencia: [link](https://www.keycdn.com/blog/gulp-vs-grunt).

Puedes consultar el [gulp.js](https://github.com/fer227/BLIOTEC/blob/main/gulpfile.js), donde ahora mismo contamos con dos tareas:
- Una para consultar la correcta sintaxis de los archivos (la tarea *syntax*).
- Otra para lanzar los test (la tarea *test*).
- La tarea por defecto (*default*) lanza las dos tareas anteriores.

