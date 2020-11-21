# Justificación del Dockerfile
En este apartado intentaremos justificar la imagen finalmente escogida para llevar a cabo la Docker de nuestro proyecto. También veremos los diferentes Dockerfiles que se han probado y sus estructuras.

## Imágenes
Las posibilidades para escoger una imagen en nuestro Dockerfile son muy variadas. Todos las distribuciones tienen imágenes para Docker (Fedora, CentOS, Ubuntu..) e incluso cada una de ellas tienen diferentes versiones. Por otro lado, también nos encontramos con imágenes oficiales de los diferentes lenguajes de programación que ya los traen instalados y listos para utilizarse. Finalmente me he decantado por las siguientes opciones:

-  Puede ser interesante probar una distribución con una instalación "completa" como por ejemplo Ubuntu, uno de los SO más utilizados y con mayor soporte de los que existen actualmente. De entre las [opciones](https://hub.docker.com/_/ubuntu) que nos proporciona Ubuntu, hemos elegido la versión **Focal**.

- También tenemos la opción de probar una imagen "ligera" que traiga lo suficiente para funcionar y en ella nosotros instalamos lo que veamos necesario para nuestro proyecto. Esto nos proporcionará un docker con un peso muy reducido y optimizado. [Alpine](https://hub.docker.com/_/alpine) parece ser la más estandarizada en este sentido.

- Finalmente, creo que sería conveniente probar una imagen oficial del lenguaje que estamos utilizando ([Node.js](https://hub.docker.com/_/node)). Cuenta con múltiples imágenes para diferentes sistemas operativos y a su vez, para las diferentes versiones del lenguaje. Como estamos intentado optimizar el contenedor, utilizaremos la versión de **Alpine** para la versión **14.15** del lenguaje (que se corresponde con la última versión LTS).

A continuación probamos los diferentes Dockerfiles que he llevado a cabo para estas imágenes.

## Pruebas con las diferentes imágenes
En general, los pasos que he seguido en los diferentes Dockerfiles son muy similares. Esta podría ser la estructura:

1. Creación de un usuario con permisos básicos (si es necesario).
2. Creación de la estructura de directorios.
3. Instalación del lenguaje (si es necesario).
4. Instalación de las dependencias.
5. Lanzar los test.

Cada imagen, aunque sigue el esquema anterior, tiene sus peculiaridades que veremos a continuación.

### Ubuntu
En ubuntu necesitaremos crear un usuario básico e instalar el lenguaje. El Dockerfile resultante es el siguiente:

```
FROM ubuntu:focal
LABEL maintainer ="Fernando Izquierdo Romera"

# Creamos un usuario con permisos básicos y la estructura de directorios que necesitamos
# Indicamos que el propietario de esos directorios es el nuevo usuario que hemos creado
# Instalamos la versión que estamos utilizando de Node (la última LTS, que se corresponde con la 14) y para ello necesitamos curl
# Una vez lo hemos instalado, ya podemos eliminar curl pues no lo vamos a necesitar
RUN useradd -m usuario && mkdir -p /app/test/node_modules \
        && chown -R usuario /app \
        && apt-get update && apt-get install curl -y\
        && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
        && apt-get install -y nodejs \
        && apt-get remove --auto-remove curl -y

# Cambiamos al directorio que hemos creado
WORKDIR /app/test

# Copiamos los archivos de dependencias y ponemos como propietario al usuario que hemos creado
COPY --chown=usuario package*.json gulpfile.js ./

# Instalamos el cliente de gulp (en global) para poder lanzar tareas, entre ellas instalación y test
# Con npm link creamos un enlace simbólico para que lo detecte en node_modules y así podamos utilizarlo
# Finalmente instalamos el módulo de gulp run (en local) puesto que lo utilizamos en nuestro task manager para lanzar tareas
RUN npm install -g gulp-cli && npm link gulp && npm install gulp-run

# Cambiamos al usuario node para no tener privilegios
USER usuario

# Instalamos las dependencias
RUN gulp install

# Lanzamos los test
CMD ["gulp", "test"]
```

Una vez creado y probado, vemos el tamaño del contenedor:

![Size ubuntu](./docker_img/ubuntu.png)

Como era de esperar, el contendor tiene un tamaño considerable.