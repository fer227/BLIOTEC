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

## Biblioteca de aserciones
Existen multitud de bibliotecas de aserciones para Javascript e incluso el propio lenguaje cuenta con una biblioteca de aserciones (assert). Contamos con dos enfoques diferentes: [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) y [TDD](https://en.wikipedia.org/wiki/Test-driven_development). Como estamos utilizando domain-driven design junto con historias de usuario donde el cliente es quien guía el desarrollo del proyecto, veo más adecuado seguir el enfoque BDD. Las bibliotecas de aserciones tipo BDD pretenden acercarse al lenguaje natural. De esta forma, son más fáciles de entender y se adaptan a las necesidades del usuario. La biblioteca que finalmente he elegido es [Chai.js](https://www.chaijs.com/), que cuenta con expresiones del tipo *expect().to.be.a()* o *expect().to.equal()*. [Aquí](https://www.chaijs.com/guide/styles/) podemos ver los diferentes estilos de las aserciones de Chai.

## Marco de pruebas
Puesto que nos hemos decantado por BDD, algunos marcos de pruebas orientados a esta filosofía son Mocha, Cucumber o Jest. Cualquiera de ellos nos puede funcionar para combinar con Chai, pero el combo Chai + Mocha parece ser bastante popular en la comunidad (en la propia [página de instalación](https://www.chaijs.com/guide/installation/) de Chai recomiendan Mocha pero recuerdan que es compatible con cualquiera), así que nos decantamos por esa combinación.

## Avance del proyecto.
Las historias de usuario en las que se han trabajado han sido las siguientes (dentro dejan el historial de commits):
- Del milestone [Prototipo mínimo funcional](https://github.com/fer227/BLIOTEC/milestone/3)
	- [Como usuario quiero poder registrarme](https://github.com/fer227/BLIOTEC/issues/9)
	- [Como administrador quiero poder introducir libros](https://github.com/fer227/BLIOTEC/issues/8)
	- [Como usuario quiero poder hacer préstamos](https://github.com/fer227/BLIOTEC/issues/10)

- Tareas que se han planteado.
	- [Clase controladora de usuarios](https://github.com/fer227/BLIOTEC/issues/20)
	- [Selección del gestor de tareas](https://github.com/fer227/BLIOTEC/issues/21)
	- [Automatizar el lanzamiento de test](https://github.com/fer227/BLIOTEC/issues/24)
	- [Clase controladora de libros](https://github.com/fer227/BLIOTEC/issues/25)
	- [Clase controladora de préstamos](https://github.com/fer227/BLIOTEC/issues/27)
	- [Actualizar cc.yaml](https://github.com/fer227/BLIOTEC/issues/28)
	- [Actualizar documentación](https://github.com/fer227/BLIOTEC/issues/29)

Como resultado general, tenemos tres clases controladoras con algunos métodos iniciales:
	- [libroController](./src/libros/libroController.js)
	- [usuarioController](./src/usuarios/usuarioController.js)
	- [prestamoController](./src/prestamos/prestamoController.js)

También unos test que prueban esa nueva funcionalidad:
	- [libros_test](./test/libros_test.js)
	- [usuarios_test](./test/usuarios_test.js)
	- [prestamos_test](./test/prestamos_test.js)

## Algunas correcciones
- [Planificación](./doc/planificacion.md) con un orden más coherente. Además, se han añadido nuevas historias de usuario.
- Se han eliminado ciertos *getters* y *setters* inoperantes así como algunos datos miembro.
- La autenticación de usuarios ya no está presente.