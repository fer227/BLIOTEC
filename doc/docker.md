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
