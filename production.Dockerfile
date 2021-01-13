FROM node:14-alpine3.10
LABEL maintainer ="Fernando Izquierdo Romera <fer227@correo.ugr.es>" \
        com.bliotec.version="4.0.0" \
        com.bliotec.release-date="2021-01-11" \
        com.bliotec.repository="https://github.com/fer227/BLIOTEC"

RUN mkdir -p /app && chown -R node /app

WORKDIR /app

COPY --chown=node  package*.json gulpfile.js ./
COPY --chown=node  ./index.js ./
COPY --chown=node  src ./src
COPY --chown=node  routes ./routes

RUN npm install -g gulp-cli && npm link gulp && npm install gulp-run

USER node

RUN gulp install

ENV PATH=/app/node_modules/.bin:$PATH

# Exponemos el puerto 6000 donde responde el microservicio
EXPOSE 6000

# Llamamos a la tarea que lanza los test
CMD ["gulp", "run"]