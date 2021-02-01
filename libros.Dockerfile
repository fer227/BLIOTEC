# Continuamos con la imagen que venimos utilizando en mis Dockerfiles
FROM node:14-alpine3.10
LABEL maintainer ="Fernando Izquierdo Romera <fer227@correo.ugr.es>" \
        com.bliotec.version="4.0.0" \
        com.bliotec.release-date="2021-01-11" \
        com.bliotec.repository="https://github.com/fer227/BLIOTEC"

# Creamos algunos directorios que vamos a utilizar
# node_modules para las dependencias
# /src/libros para respetar la estructura de directorios que ya tenemos
# Luego les ponemos como propietario al usuario node, que es el que utilizaremos y que tiene los permisos justos
RUN mkdir /home/node/node_modules && mkdir -p /home/node/src/libros && chown -R node:node /home/node/node_modules

# Vamos a trabajar directamente en el directorio del usuario node. He visto que algunos sistemas de integración
# continua (como Circleci) cuando abren la imagen de Docker Hub se sitúan en ese directorio
WORKDIR /home/node

# Copio los archivos JUSTOS y necesarios para que funcione el microservicio
# El archivo de dependencias y el del gestor de tareas
COPY --chown=node  package*.json gulpfile.js ./

# El index con la aplicación de Koa además del .env que contiene el puerto
COPY --chown=node  ./libros_service/* ./

# El manejador de excepciones y las rutas del microservicio de libros. Cabe destacar que tenemos que respetar
# la estructura de directorios que ya teníamos para que los "includes" no fallen
COPY --chown=node  ./routes/exceptionHandler.js ./routes/libros.js ./routes/

# El código principal de los libros (clases y controlador) y mi módelo de excepción 
COPY --chown=node  ./src/libros ./src/libros
COPY --chown=node  ./src/exception ./src/exception

# Instalamos nuestro gestor de tareas, lo "linkamos" e instalamos un plugin de gulp que también necesitamos para
# lanzar las tareas
RUN npm install -g gulp-cli && npm link gulp && npm install gulp-run

USER node

# Instalamos las dependencias SOLO de producción
RUN gulp install-production

# Actualizamos la variable PATH
ENV PATH=/app/node_modules/.bin:$PATH

# El puerto que utilizaremos
EXPOSE 6001

# Lanzamos el servicio
CMD ["node", "index.js"]