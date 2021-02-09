# Welcome to

<img src="./doc/img/logo.png" width="80%"></img>

</br>
</br>

[![Build Status](https://travis-ci.com/fer227/BLIOTEC.svg?branch=main)](https://travis-ci.com/fer227/BLIOTEC) [![CircleCI](https://circleci.com/gh/fer227/BLIOTEC.svg?style=svg)](https://circleci.com/gh/fer227/BLIOTEC) [![Build status](https://ci.appveyor.com/api/projects/status/pt44c0loki51d9tp?svg=true)](https://ci.appveyor.com/project/fer227/bliotec)

BLIOTEC consiste en un proyecto orientado a la computación en la nube que pretende organizar y gestionar el catálogo de libros de una biblioteca, además de los préstamos con los clientes de la misma.

Para probarlo, primero clona el repositorio e instala nuestro gestor de tareas (para a su vez instalar las dependencias y probar el proyecto).

```
git clone https://github.com/fer227/BLIOTEC
npm install -g gulp gulp-run
gulp install
gulp test
```

## Desarrollo
Aquí explicamos algunas partes del desarrollo y toma de decisiones:
- [Gestor de tareas, biblioteca de aserciones y marco de prueba](./doc/gestorTareas_BDD.md).
- [Elección y creación del Dockerfile](./doc/docker.md).
- [Docker Hub y Github Container Registry](./doc/dockerhub.md).
- [Integración continua](./doc/ci.md).
- [Microservicios](./doc/microservicios.md).
- [Composición de servicios](./doc/composicion.md).

## Credits
- Developed by [fer227](https://github.com/fer227) and supervised by [jj](https://github.com/JJ).
- Logo designed by [diegogaraur](https://github.com/diegogaraur) and [fer227](https://github.com/fer227).
- Logo implemented by [diegogaraur](https://github.com/diegogaraur).