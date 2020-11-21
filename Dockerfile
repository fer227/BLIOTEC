# Utilizamos la última versión LTS del lenguaje
FROM node:14-alpine3.10
LABEL maintainer ="Fernando Izquierdo Romera <fer227@correo.ugr.es>" \
        com.bliotec.version="4.0.0" \
        com.bliotec.release-date="2020-11-21" \
        com.bliotec.repository="https://github.com/fer227/BLIOTEC"

# Creamos los directorios que vamos a necesitar y les ponemos como propietario al usuario node
RUN mkdir -p /app/test/node_modules && chown -R node /app

# Cambiamos a nuestro directorio de trabajo que acabamos de crear
WORKDIR /app/test

# Copiamos los archivos de dependencias y ponemos como propietario al usuario node
COPY --chown=node package*.json gulpfile.js ./

# Instalamos el cliente de gulp (en global) para poder lanzar tareas, entre ellas la de instalación y la de test
# Con npm link creamos un enlace simbólico para que lo detecte en node_modules y así podamos utilizarlo
# Finalmente instalamos el módulo de gulp run (en local) puesto que lo utilizamos en nuestro task manager
RUN npm install -g gulp-cli && npm link gulp && npm install gulp-run

# Cambiamos al usuario node para no tener privilegios
USER node

# Lanzamos la tarea que instala las dependencias
RUN gulp install

# Llamamos a la tarea que lanza los test
CMD ["gulp", "test"]
