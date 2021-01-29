# BLIOTEC

[![Build Status](https://travis-ci.com/fer227/BLIOTEC.svg?branch=main)](https://travis-ci.com/fer227/BLIOTEC) [![CircleCI](https://circleci.com/gh/fer227/BLIOTEC.svg?style=svg)](https://circleci.com/gh/fer227/BLIOTEC) [![Build status](https://ci.appveyor.com/api/projects/status/pt44c0loki51d9tp?svg=true)](https://ci.appveyor.com/project/fer227/bliotec)

BLIOTEC consiste en un proyecto orientado a la computación en la nube que pretende organizar y gestionar el catálogo de libros de una biblioteca, además de los préstamos con los clientes de la misma.

Para probarlo, primero clona el repositorio e instala nuestro gestor de tareas (para a su vez instalar las dependencias y probar el proyecto).

```
git clone https://github.com/fer227/BLIOTEC
npm install -g gulp gulp-run
gulp install
gulp test
```

En el directorio [doc](./doc) se puede observar las diferentes fases del avance del proyecto.

## Microservicios

- [Elección del framework de desarrollo para la API REST](./doc/microservicios/framework.md). 
- [Diseño de la API REST](./doc/microservicios/api.md).
- [Buenas prácticas](./doc/microservicios/goodpractices.md).
- [Diseño de los test](./doc/microservicios/test.md).
- [Otros trabajos](./doc/microservicios/extra_work.md).

En cada subapartado se explica el trabajo realizado. De forma general y a modo de resumen, se han trabajado en los siguientes *issues* (las historias de usuario ya las hemos especificado anteriomente):
- [Sustituir la fase de install de Travis](https://github.com/fer227/BLIOTEC/issues/39)
- [Realización de la API REST de la aplicación](https://github.com/fer227/BLIOTEC/issues/40)
- [Testeo de la aplicación y de las rutas](https://github.com/fer227/BLIOTEC/issues/44)
- [Mejorar el lanzamiento de excepciones](https://github.com/fer227/BLIOTEC/issues/41)
- [Obtener el puerto de un fichero (env)](https://github.com/fer227/BLIOTEC/issues/42)
- [Registrar lo que sucede en el sistema mediante un logger](https://github.com/fer227/BLIOTEC/issues/43)
- [Configuración distribuida mediante etcd 3](https://github.com/fer227/BLIOTEC/issues/45)
- [Crear un Dockerfile de producción](https://github.com/fer227/BLIOTEC/issues/46)
- [Automatizar testeo mediante github action](https://github.com/fer227/BLIOTEC/issues/47)